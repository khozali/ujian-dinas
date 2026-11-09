// Helper untuk menyusun soal.
// Setiap soal: { topic, q, correct, wrongs: [3 string], expl }

export function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle(arr, r) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Soal manual: m(pertanyaan, jawabanBenar, [3 pengecoh], pembahasan) */
export const m = (q, correct, wrongs, expl = '') => ({ q, correct, wrongs, expl });

/** Ambil 3 pengecoh unik dari kumpulan nilai, selain jawaban benar. */
export function pickDistractors(pool, correct, key, n = 3) {
  const cand = [...new Set(pool.filter((v) => v !== correct))];
  return shuffle(cand, rng(hash(key))).slice(0, n);
}

/**
 * Buat soal dua arah dari tabel [a, b, (pembahasan)].
 * qa(a) => teks soal yang jawabannya b; qb(b) => teks soal yang jawabannya a.
 * Salah satu boleh null.
 */
export function fromTable(rows, { qa, qb, expl } = {}) {
  const out = [];
  const As = rows.map((r) => r[0]);
  const Bs = rows.map((r) => r[1]);
  rows.forEach((r, i) => {
    const e = r[2] || (expl ? expl(r) : '');
    if (qa) {
      const q = qa(r[0], r);
      out.push(m(q, r[1], pickDistractors(Bs, r[1], q, 4), e));
    }
    if (qb) {
      const q = qb(r[1], r);
      out.push(m(q, r[0], pickDistractors(As, r[0], q, 4), e));
    }
  });
  return out;
}

/** Soal "manakah yang benar": correct dari satu baris, pengecoh dari kolom lain baris lain. */
export function oddOneIn(rows, qText, { goodIdx = 0, badIdx = 1, expl } = {}) {
  const bads = rows.map((r) => r[badIdx]);
  return rows.map((r) => {
    const key = qText + r[goodIdx];
    const wr = pickDistractors(bads.filter((b) => b !== r[badIdx]), r[goodIdx], key, 4);
    return m(qText, r[goodIdx], wr, expl ? expl(r) : '');
  });
}
