// Build bank soal Ujian Dinas -> dist/index.html (satu berkas, Vue 3 tertanam)
// Jalankan: node build.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { hash, rng, shuffle } from './data/_helpers.mjs';
import pancasila from './data/pancasila.mjs';
import uud from './data/uud.mjs';
import kepegawaian from './data/kepegawaian.mjs';
import korpri from './data/korpri.mjs';
import perkantoran from './data/perkantoran.mjs';
import tupoksi from './data/tupoksi.mjs';
import admumum from './data/admumum.mjs';
import bahasa from './data/bahasa.mjs';
import sejarah from './data/sejarah.mjs';

const JUMLAH_UJIAN = 50;
// Folder hasil build. 'docs' dipakai GitHub Pages.
const OUT = process.env.OUT || 'docs';

// Materi sesuai slide Biro Kepegawaian Setjen Kemhan + jumlah soal per paket (total 50)
const TOPICS = [
  { key: 'pancasila', name: 'Pancasila', per: 5, items: pancasila },
  { key: 'uud', name: 'UUD 1945', per: 6, items: uud },
  { key: 'kepegawaian', name: 'Peraturan Perundang-undangan Kepegawaian', per: 7, items: kepegawaian },
  { key: 'korpri', name: 'KORPRI', per: 4, items: korpri },
  { key: 'perkantoran', name: 'Pengetahuan Perkantoran', per: 5, items: perkantoran },
  { key: 'tupoksi', name: 'Tupoksi Organisasi (UO TNI AD)', per: 7, items: tupoksi },
  { key: 'admumum', name: 'Administrasi Umum', per: 6, items: admumum },
  { key: 'bahasa', name: 'Bahasa Indonesia', per: 5, items: bahasa },
  { key: 'sejarah', name: 'Sejarah Indonesia', per: 5, items: sejarah },
];
const PER_UJIAN = TOPICS.reduce((s, t) => s + t.per, 0);
if (PER_UJIAN !== 50) throw new Error('Jumlah soal per paket harus 50, sekarang ' + PER_UJIAN);

// 1) Validasi & normalisasi
const questions = [];
const seen = new Set();
const errors = [];
TOPICS.forEach((t, ti) => {
  t.ids = [];
  for (const it of t.items) {
    const key = it.q + '||' + it.correct;
    if (seen.has(key)) continue; // duplikat persis
    seen.add(key);
    const wr = [...new Set(it.wrongs)].filter((w) => w !== it.correct);
    if (wr.length < 3) { errors.push(`[${t.key}] pengecoh kurang: ${it.q} -> ${it.correct}`); continue; }
    const opts = [it.correct, ...wr.slice(0, 3)];
    const id = questions.length;
    const order = shuffle([0, 1, 2, 3], rng(hash('opt' + key)));
    questions.push({ t: ti, q: it.q, o: order.map((i) => opts[i]), a: order.indexOf(0), e: it.expl || '' });
    t.ids.push(id);
  }
});
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }

// 2) Susun 50 paket: per materi, soal diacak lalu diambil bergiliran sehingga
//    seluruh soal terpakai sebelum ada yang muncul lagi.
const exams = Array.from({ length: JUMLAH_UJIAN }, () => []);
TOPICS.forEach((t) => {
  let pool = shuffle(t.ids, rng(hash('pool' + t.key)));
  let cursor = 0, round = 0;
  for (let e = 0; e < JUMLAH_UJIAN; e++) {
    const picked = new Set();
    while (picked.size < t.per) {
      if (cursor >= pool.length) { round++; pool = shuffle(t.ids, rng(hash('pool' + t.key + round))); cursor = 0; }
      const id = pool[cursor++];
      if (!picked.has(id)) picked.add(id);
    }
    exams[e].push(...picked);
  }
});
// urutan soal dalam paket diacak (tetap dikelompokkan? tidak — diacak penuh)
exams.forEach((ex, i) => { exams[i] = shuffle(ex, rng(hash('exam' + i))); });

// 3) Statistik
const stats = TOPICS.map((t) => ({ materi: t.name, bank: t.ids.length, perPaket: t.per, totalTampil: t.per * JUMLAH_UJIAN }));
console.table(stats);
console.log('Total soal unik:', questions.length, '| Paket:', exams.length, 'x', PER_UJIAN);

// 4) Tulis output
const appSrc = readFileSync('src/app.js', 'utf8');
const htmlSrc = readFileSync('src/index.html', 'utf8');
const swSrc = readFileSync('src/sw.js', 'utf8');
// Versi = sidik jari isi soal + kode aplikasi. Berubah -> iPhone mengunduh versi baru.
const version = createHash('sha256').update(JSON.stringify(questions) + JSON.stringify(exams) + appSrc + htmlSrc + swSrc).digest('hex').slice(0, 8);
const data = { topics: TOPICS.map((t) => ({ key: t.key, name: t.name, per: t.per, bank: t.ids.length })), questions, exams, version, built: new Date().toISOString().slice(0, 10) };
mkdirSync(OUT + '/icons', { recursive: true });
writeFileSync(OUT + '/bank-soal.json', JSON.stringify(data));
const vue = readFileSync('node_modules/vue/dist/vue.global.prod.js', 'utf8');
const html = htmlSrc
  .replace('/*__VUE__*/', () => vue.replace(/<\/script/gi, '<\\/script'))
  .replace('/*__DATA__*/', () => 'window.BANK = ' + JSON.stringify(data).replace(/</g, '\\u003c') + ';')
  .replace('/*__APP__*/', () => appSrc);
writeFileSync(OUT + '/index.html', html);

// PWA: ikon, manifest, service worker
const icons = readdirSync('src/icons');
icons.forEach((f) => copyFileSync('src/icons/' + f, OUT + '/icons/' + f));
writeFileSync(OUT + '/manifest.webmanifest', JSON.stringify({
  name: 'Bank Soal Ujian Dinas Tingkat I',
  short_name: 'Ujian Dinas',
  description: 'Latihan Ujian Dinas Tingkat I PNS Kemhan — bisa dipakai offline',
  lang: 'id', start_url: './', scope: './', display: 'standalone', orientation: 'any',
  background_color: '#f5f6f2', theme_color: '#2f5d3a',
  icons: [
    { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}, null, 2));
const assets = ['./', './index.html', './manifest.webmanifest', ...icons.map((f) => './icons/' + f)];
writeFileSync(OUT + '/sw.js', swSrc.replace('__VERSION__', version).replace('__ASSETS__', JSON.stringify(assets)));
console.log('OK -> dist/ versi', version, '|', (html.length / 1024).toFixed(0) + ' KB');
