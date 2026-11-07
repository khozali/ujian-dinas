(() => {
  const { createApp } = Vue;
  const B = window.BANK;
  const KEY = 'udinas-v1';

  // Penyimpanan lokal (aman bila tidak tersedia)
  const store = {
    load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } },
    save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* abaikan */ } },
  };

  function sampleIds(ids, n) {
    const a = ids.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a.slice(0, n);
  }
  const topicIds = B.topics.map((_, ti) => B.questions.map((q, i) => (q.t === ti ? i : -1)).filter((i) => i >= 0));
  const today = () => new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

  createApp({
    data() {
      const s = store.load();
      return {
        B, view: 'home', tab: 'paket', mode: 'ujian', duration: 50,
        results: s.results || {}, history: s.history || [], topicStats: s.topicStats || {},
        saved: s.saved || null,
        session: null, cur: 0, remaining: 0, timer: null, startedAt: 0,
        result: null, rvFilter: 'salah',
        askFinish: false, askResume: false, askReset: false, pending: null,
        upd: { supported: false, offlineReady: false, ready: false, checking: false, msg: '' },
      };
    },
    computed: {
      q() { return this.session ? B.questions[this.session.ids[this.cur]] : null; },
      answeredCount() { return this.session ? this.session.ans.filter((a) => a !== null).length : 0; },
      flagCount() { return this.session ? this.session.flag.filter(Boolean).length : 0; },
      liveRight() { return this.session ? this.session.ans.filter((a, i) => a !== null && a === B.questions[this.session.ids[i]].a).length : 0; },
      doneCount() { return Object.keys(this.results).length; },
      avgScore() {
        const v = Object.values(this.results); if (!v.length) return null;
        return Math.round(v.reduce((s, r) => s + r.last, 0) / v.length);
      },
      weakTopics() {
        return B.topics.map((t) => { const s = this.topicStats[t.key]; return s && s.total ? { name: t.name, pct: Math.round(s.right / s.total * 100) } : null; })
          .filter(Boolean).sort((a, b) => a.pct - b.pct);
      },
      reviewList() {
        if (!this.result) return [];
        return this.result.items.filter((it) => this.rvFilter === 'semua' || !it.ok);
      },
    },
    methods: {
      persist() { store.save({ results: this.results, history: this.history, topicStats: this.topicStats, saved: this.saved }); },
      fmt(s) { s = Math.max(0, Math.round(s)); const m = Math.floor(s / 60), d = s % 60; return `${m}:${String(d).padStart(2, '0')}`; },
      grade(v) { return v >= 80 ? 'ok' : v >= 60 ? 'mid' : 'low'; },

      startPaket(i, fresh) {
        if (!fresh && this.saved && this.saved.kind === 'paket' && this.saved.idx === i) { this.askResume = true; return; }
        this.begin({ kind: 'paket', idx: i, label: `Paket ${i + 1}`, ids: B.exams[i].slice(), mode: this.mode, secs: this.duration * 60 });
      },
      startMateri(ti) {
        this.begin({ kind: 'materi', idx: ti, label: `Latihan ${B.topics[ti].name}`, ids: sampleIds(topicIds[ti], 20), mode: 'latihan', secs: 0 });
      },
      begin(cfg) {
        this.session = { ...cfg, ans: cfg.ids.map(() => null), flag: cfg.ids.map(() => false), elapsed: 0 };
        this.cur = 0; this.remaining = cfg.secs; this.view = 'exam'; this.startClock(); this.autosave();
        window.scrollTo(0, 0);
      },
      resume() {
        this.askResume = false; const s = this.saved;
        this.session = JSON.parse(JSON.stringify(s)); this.cur = s.cur || 0;
        this.remaining = s.mode === 'ujian' ? s.secs - s.elapsed : 0;
        this.view = 'exam'; this.startClock();
      },
      discardSaved() { const s = this.saved; this.askResume = false; this.saved = null; this.persist(); if (s && s.kind === 'paket') this.startPaket(s.idx, true); },
      startClock() {
        clearInterval(this.timer); this.startedAt = Date.now() - this.session.elapsed * 1000;
        this.timer = setInterval(() => {
          if (!this.session) return;
          this.session.elapsed = Math.floor((Date.now() - this.startedAt) / 1000);
          if (this.session.mode === 'ujian') {
            this.remaining = this.session.secs - this.session.elapsed;
            if (this.remaining <= 0) this.finish();
          }
          if (this.session.elapsed % 10 === 0) this.autosave();
        }, 1000);
      },
      autosave() { if (this.session) { this.saved = { ...JSON.parse(JSON.stringify(this.session)), cur: this.cur }; this.persist(); } },
      leave() { this.autosave(); clearInterval(this.timer); this.view = 'home'; this.session = null; },

      choose(oi) {
        if (this.session.mode === 'latihan' && this.session.ans[this.cur] !== null) return; // latihan: kunci jawaban pertama
        this.session.ans[this.cur] = this.session.ans[this.cur] === oi && this.session.mode === 'ujian' ? null : oi;
        this.autosave();
      },
      toggleFlag() { this.session.flag[this.cur] = !this.session.flag[this.cur]; this.autosave(); },
      go(i) { if (i >= 0 && i < this.session.ids.length) { this.cur = i; this.autosave(); } },
      showAnswer(i) { return this.session.mode === 'latihan' && this.session.ans[i] !== null; },
      optClass(oi) {
        const a = this.session.ans[this.cur];
        if (this.showAnswer(this.cur)) { if (oi === this.q.a) return 'right'; if (oi === a) return 'wrong'; return ''; }
        return a === oi ? 'sel' : '';
      },
      navClass(i) {
        const c = []; const a = this.session.ans[i];
        if (i === this.cur) c.push('cur');
        if (this.session.mode === 'latihan') { if (a !== null) c.push(a === B.questions[this.session.ids[i]].a ? 'r' : 'w'); }
        else if (this.session.flag[i]) c.push('flag'); else if (a !== null) c.push('ans');
        return c;
      },

      finish() {
        this.askFinish = false; clearInterval(this.timer);
        const s = this.session; if (!s) return;
        const byTopic = B.topics.map((t) => ({ name: t.name, key: t.key, right: 0, total: 0 }));
        const items = s.ids.map((id, i) => {
          const q = B.questions[id]; const my = s.ans[i]; const ok = my === q.a;
          byTopic[q.t].total++; if (ok) byTopic[q.t].right++;
          return { i, q, my, ok };
        });
        const right = items.filter((x) => x.ok).length;
        const empty = items.filter((x) => x.my === null).length;
        const score = Math.round(right / s.ids.length * 100);
        this.result = { kind: s.kind, idx: s.idx, label: s.label, date: today(), right, empty, total: s.ids.length, score, secs: Math.min(s.elapsed, s.secs || s.elapsed), byTopic: byTopic.filter((r) => r.total), items };
        // simpan
        if (s.kind === 'paket') {
          const prev = this.results[s.idx];
          this.results[s.idx] = { last: score, best: Math.max(score, prev ? prev.best : 0), date: this.result.date };
        }
        byTopic.forEach((r) => { if (!r.total) return; const o = this.topicStats[r.key] || { right: 0, total: 0 }; o.right += r.right; o.total += r.total; this.topicStats[r.key] = o; });
        this.history.push({ date: this.result.date, label: s.label + (s.mode === 'latihan' && s.kind === 'paket' ? ' (latihan)' : ''), right, total: s.ids.length, score, secs: this.result.secs });
        if (this.history.length > 300) this.history = this.history.slice(-300);
        this.saved = null; this.session = null; this.persist();
        this.rvFilter = 'salah'; this.view = 'result'; window.scrollTo(0, 0);
      },
      resetAll() { this.results = {}; this.history = []; this.topicStats = {}; this.saved = null; this.persist(); this.askReset = false; },
      onKey(e) {
        if (this.view !== 'exam' || this.askFinish) return;
        const k = e.key.toLowerCase();
        const map = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 };
        if (k in map) this.choose(map[k]);
        else if (k === 'arrowright') this.go(this.cur + 1);
        else if (k === 'arrowleft') this.go(this.cur - 1);
      },
      // ---- Mode offline (service worker) ----
      initSW() {
        const sw = navigator.serviceWorker;
        const okProto = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
        if (!sw || !okProto) return;
        let reloading = false;
        sw.register('sw.js').then((reg) => {
          this.reg = reg; this.upd.supported = true;
          if (sw.controller) this.upd.offlineReady = true;
          sw.ready.then(() => { this.upd.offlineReady = true; });
          if (reg.waiting && sw.controller) this.upd.ready = true;
          reg.addEventListener('updatefound', () => {
            const w = reg.installing; if (!w) return;
            w.addEventListener('statechange', () => {
              if (w.state === 'installed') { if (sw.controller) this.upd.ready = true; else this.upd.offlineReady = true; }
            });
          });
          document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && navigator.onLine) reg.update().catch(() => {}); });
        }).catch(() => {});
        sw.addEventListener('controllerchange', () => { if (this.applying && !reloading) { reloading = true; location.reload(); } });
      },
      checkUpdate() {
        if (!this.reg) return;
        if (!navigator.onLine) { this.upd.msg = 'Sedang offline'; return; }
        this.upd.checking = true; this.upd.msg = '';
        this.reg.update().then(() => {
          this.upd.msg = (this.reg.installing || this.reg.waiting) ? 'Mengunduh versi baru…' : 'Sudah versi terbaru';
        }).catch(() => { this.upd.msg = 'Gagal memeriksa'; }).finally(() => { this.upd.checking = false; });
      },
      applyUpdate() {
        if (this.session) this.autosave();
        this.applying = true;
        if (this.reg && this.reg.waiting) this.reg.waiting.postMessage('skipWaiting'); else location.reload();
      },
    },
    mounted() { window.addEventListener('keydown', this.onKey); this.initSW(); },
  }).mount('#app');
})();
