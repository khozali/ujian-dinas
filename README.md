# Bank Soal Ujian Dinas Tingkat I

Aplikasi latihan Ujian Dinas Tingkat I (kenaikan pangkat II/d → III/a) untuk PNS Kemhan.
Dibangun dengan **Vue 3**, sedangkan generator paketnya ditulis dengan **Node.js**.

- 50 paket ujian, masing-masing berisi 50 soal pilihan ganda
- Sekitar 1.100 soal unik dari 9 materi (sesuai slide Biro Kepegawaian Setjen Kemhan)
- Mode ujian (timer 50/75/90 menit, tanda ragu-ragu, pembahasan setelah selesai)
- Mode latihan (jawaban dan pembahasan langsung tampil)
- Latihan per materi (20 soal acak)
- Riwayat nilai dan ketepatan per materi (tersimpan di browser)

## Cara memakai

**Paling mudah:** buka https://khozali.github.io/ujian-dinas/ di Safari iPhone, lalu Bagikan → Tambah ke Layar Utama. Aplikasi bisa dipakai tanpa internet setelah dibuka sekali.

**Membangun ulang** setelah mengubah soal (perlu Node.js 18+):

```bash
npm install
npm run build      # menghasilkan folder docs/ (dipakai GitHub Pages)
npm start          # build lalu jalankan server lokal
```

## Struktur

```
data/            bank soal per materi (soal manual + tabel fakta)
  _helpers.mjs   fungsi pembuat soal dan pengecoh
  pancasila.mjs, uud.mjs, kepegawaian.mjs, korpri.mjs, perkantoran.mjs,
  tupoksi.mjs, admumum.mjs, bahasa.mjs, sejarah.mjs
src/index.html   tampilan (template Vue + CSS)
src/sw.js        service worker (mode offline & pembaruan otomatis)
docs/            hasil build yang diterbitkan GitHub Pages
src/app.js       logika aplikasi Vue
build.mjs        validasi soal, penyusunan 50 paket, bundel ke docs/
```

## Menambah soal

Buka berkas materi di folder `data/`, lalu tambahkan baris di dalam array `manual`:

```js
m('Teks soal ...', 'Jawaban benar', ['Pengecoh 1', 'Pengecoh 2', 'Pengecoh 3'], 'Pembahasan singkat.'),
```

Setelah itu jalankan `npm run build`. Posisi jawaban diacak otomatis. Soal baru akan tersebar ke 50 paket secara merata.

## Komposisi tiap paket (50 soal)

| Materi | Soal/paket |
|---|---|
| Pancasila | 5 |
| UUD 1945 | 6 |
| Peraturan Perundang-undangan Kepegawaian | 7 |
| KORPRI | 4 |
| Pengetahuan Perkantoran | 5 |
| Tupoksi Organisasi (UO TNI AD) | 7 |
| Administrasi Umum | 6 |
| Bahasa Indonesia | 5 |
| Sejarah Indonesia | 5 |

Komposisi ini bisa diubah pada `TOPICS` di `build.mjs`, asalkan jumlahnya tetap 50.

## Catatan

Soal disusun berdasarkan peraturan yang berlaku per November 2026, antara lain UU 20/2023 (ASN), PP 94/2021, UU 34/2004 jo. UU 3/2025 (TNI), PP 27/2014 jo. PP 28/2020 (BMN), dan EYD Edisi V.
Selalu cocokkan dengan kisi-kisi resmi dari panitia. UU 3/2025 sedang diuji materi di Mahkamah Konstitusi, dan PP Manajemen ASN yang baru masih disiapkan.
