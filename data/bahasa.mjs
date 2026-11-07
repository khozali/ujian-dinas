import { m, pickDistractors } from './_helpers.mjs';

const manual = [
  m('Pedoman ejaan bahasa Indonesia yang berlaku saat ini adalah ...', 'Ejaan yang Disempurnakan (EYD) Edisi V', ['Pedoman Umum Ejaan Bahasa Indonesia (PUEBI)', 'Ejaan Soewandi', 'Ejaan Van Ophuijsen'], 'EYD Edisi V diluncurkan tahun 2022 menggantikan PUEBI.'),
  m('Lembaga pemerintah yang menangani pembinaan dan pengembangan bahasa Indonesia adalah ...', 'Badan Pengembangan dan Pembinaan Bahasa', ['Perpustakaan Nasional', 'Lembaga Administrasi Negara', 'Arsip Nasional RI'], 'Badan Bahasa berada di bawah kementerian yang membidangi pendidikan.'),
  m('Bahasa Indonesia ditetapkan sebagai bahasa negara dalam ...', 'Pasal 36 UUD 1945', ['Pasal 35 UUD 1945', 'Pasal 36A UUD 1945', 'Sumpah Pemuda butir pertama'], 'Pasal 36: Bahasa negara ialah Bahasa Indonesia.'),
  m('Bahasa Indonesia diikrarkan sebagai bahasa persatuan pada peristiwa ...', 'Sumpah Pemuda 28 Oktober 1928', ['Proklamasi 17 Agustus 1945', 'Kongres Bahasa Indonesia I 1938', 'Pengesahan UUD 1945'], 'Butir ketiga Sumpah Pemuda: menjunjung bahasa persatuan, bahasa Indonesia.'),
  m('Penulisan "di" yang benar terdapat pada kalimat ...', 'Berkas itu disimpan di lemari arsip.', ['Berkas itu disimpan dilemari arsip.', 'Berkas itu di simpan di lemari arsip.', 'Berkas itu di simpan dilemari arsip.'], 'Awalan di- ditulis serangkai; kata depan di (tempat) ditulis terpisah.'),
  m('Penulisan gabungan kata yang benar adalah ...', 'Pertanggungjawaban', ['Pertanggung jawaban', 'Pertanggung-jawaban', 'Per tanggung jawaban'], 'Gabungan kata yang mendapat awalan dan akhiran sekaligus ditulis serangkai.'),
  m('Penulisan gabungan kata yang benar adalah ...', 'bertanggung jawab', ['bertanggungjawab', 'ber-tanggung jawab', 'bertanggung-jawab'], 'Gabungan kata yang hanya mendapat awalan ditulis terpisah.'),
  m('Penulisan yang benar adalah ...', 'menandatangani', ['menanda tangani', 'menandatangan', 'menanda-tangani'], 'Gabungan kata yang mendapat awalan dan akhiran (meN-…-i) ditulis serangkai.'),
  m('Penulisan yang benar adalah ...', 'kerja sama', ['kerjasama', 'kerja-sama', 'kerjsama'], 'Gabungan kata "kerja sama" ditulis terpisah; "bekerja sama" juga terpisah.'),
  m('Penulisan yang benar adalah ...', 'memberi tahu', ['memberitahu', 'memberi-tahu', 'member itahu'], '"memberi tahu" terpisah; "memberitahukan" dan "pemberitahuan" serangkai.'),
  m('Penulisan yang benar adalah ...', 'pemberitahuan', ['pemberi tahuan', 'pemberi-tahuan', 'pem-beritahuan'], 'Gabungan kata dengan awalan dan akhiran ditulis serangkai.'),
  m('Penulisan yang benar adalah ...', 'menyebarluaskan', ['menyebar luaskan', 'menyebar-luaskan', 'meyebarluaskan'], 'Mendapat meN- dan -kan sekaligus: serangkai.'),
  m('Penulisan yang benar adalah ...', 'olahraga', ['olah raga', 'olah-raga', 'ola raga'], 'Gabungan kata yang sudah padu ditulis serangkai: olahraga, kacamata, matahari, saputangan.'),
  m('Penulisan yang benar adalah ...', 'antarlembaga', ['antar lembaga', 'antar-lembaga', 'antara lembaga'], 'Unsur terikat (antar-, pasca-, non-, sub-, pra-) ditulis serangkai.'),
  m('Penulisan yang benar adalah ...', 'pascasarjana', ['pasca sarjana', 'pasca-sarjana', 'paska sarjana'], 'Unsur terikat ditulis serangkai.'),
  m('Penulisan yang benar adalah ...', 'nonaktif', ['non aktif', 'non-aktif', 'nonaktip'], 'Unsur terikat non- ditulis serangkai.'),
  m('Penulisan yang benar adalah ...', 'subbagian', ['sub bagian', 'sub-bagian', 'subagian'], 'Unsur terikat sub- ditulis serangkai.'),
  m('Penulisan yang benar adalah ...', 'non-Indonesia', ['nonIndonesia', 'non Indonesia', 'Non indonesia'], 'Unsur terikat diikuti kata berhuruf awal kapital diberi tanda hubung.'),
  m('Kalimat berikut yang paling efektif adalah ...', 'Peserta ujian dimohon hadir tepat waktu.', ['Para peserta-peserta ujian dimohon untuk hadir tepat waktu.', 'Bagi peserta ujian dimohon hadir tepat waktu.', 'Kepada peserta ujian agar supaya hadir tepat waktu.'], 'Hindari jamak ganda, kata depan di awal subjek, dan kata mubazir.'),
  m('Kalimat berikut yang efektif adalah ...', 'Rapat itu membahas anggaran tahun 2027.', ['Di dalam rapat itu membahas anggaran tahun 2027.', 'Dalam rapat itu membahas tentang anggaran tahun 2027.', 'Rapat itu membahas tentang mengenai anggaran tahun 2027.'], 'Subjek tidak boleh didahului kata depan; "membahas" tidak memerlukan "tentang".'),
  m('Kalimat yang mengandung pemborosan kata adalah ...', 'Mereka saling bantu-membantu dalam menyelesaikan tugas.', ['Mereka saling membantu dalam menyelesaikan tugas.', 'Mereka bantu-membantu dalam menyelesaikan tugas.', 'Mereka bekerja sama menyelesaikan tugas.'], '"Saling" dan bentuk ulang "bantu-membantu" sama-sama bermakna resiprokal.'),
  m('Kalimat yang menggunakan kata "daripada" secara tepat adalah ...', 'Hasil kerja tahun ini lebih baik daripada tahun lalu.', ['Tugas daripada pegawai adalah melayani masyarakat.', 'Kesejahteraan daripada rakyat harus ditingkatkan.', 'Laporan daripada kegiatan sudah selesai.'], '"Daripada" dipakai untuk perbandingan.'),
  m('Penggunaan huruf kapital yang benar adalah ...', 'Kepala Badan Kepegawaian Negara menghadiri rapat.', ['kepala badan kepegawaian negara menghadiri rapat.', 'Kepala badan Kepegawaian negara menghadiri rapat.', 'Kepala Badan kepegawaian Negara Menghadiri rapat.'], 'Nama lembaga resmi ditulis dengan huruf awal kapital setiap unsurnya.'),
  m('Penulisan nama jabatan yang benar adalah ...', 'Ia diangkat menjadi kepala seksi.', ['Ia diangkat menjadi Kepala Seksi.', 'Ia diangkat menjadi Kepala seksi.', 'Ia diangkat menjadi kepala Seksi.'], 'Nama jabatan yang tidak diikuti nama orang/instansi/tempat ditulis dengan huruf kecil.'),
  m('Penulisan yang benar menurut EYD adalah ...', 'Presiden Soekarno meresmikan gedung itu.', ['presiden Soekarno meresmikan gedung itu.', 'Presiden soekarno meresmikan gedung itu.', 'PRESIDEN Soekarno meresmikan gedung itu.'], 'Jabatan yang diikuti nama orang ditulis dengan huruf awal kapital.'),
  m('Penulisan angka yang benar dalam kalimat adalah ...', 'Sebanyak 25 pegawai mengikuti pelatihan.', ['25 pegawai mengikuti pelatihan.', 'Duapuluh lima pegawai mengikuti pelatihan.', 'Sebanyak dua puluh lima (25) orang pegawai-pegawai mengikuti pelatihan.'], 'Angka di awal kalimat harus ditulis dengan huruf; jika tidak, susun ulang kalimatnya.'),
  m('Penulisan singkatan gelar yang benar adalah ...', 'Ahmad Fauzi, S.Kom.', ['Ahmad Fauzi, S.Kom', 'Ahmad Fauzi S.Kom.', 'Ahmad Fauzi, SKom'], 'Gelar akademik ditulis setelah tanda koma, dengan titik pada setiap unsur singkatan.'),
  m('Penulisan tanggal yang benar dalam surat dinas adalah ...', '7 November 2026', ['07-11-2026', 'Nopember 7, 2026', '7 Nop. 2026'], 'Nama bulan ditulis lengkap; "November" bukan "Nopember".'),
  m('Penggunaan tanda koma yang benar adalah ...', 'Kami membeli kertas, tinta, dan map.', ['Kami membeli kertas tinta, dan map.', 'Kami membeli, kertas, tinta dan map.', 'Kami, membeli kertas, tinta, dan map.'], 'Koma dipakai di antara unsur dalam perincian, termasuk sebelum "dan".'),
  m('Penggunaan tanda koma yang benar adalah ...', 'Karena hujan, rapat ditunda.', ['Rapat ditunda, karena hujan.', 'Karena hujan rapat, ditunda.', 'Karena, hujan rapat ditunda.'], 'Koma dipakai setelah anak kalimat yang mendahului induk kalimat; tidak dipakai bila anak kalimat mengikuti induk.'),
  m('Kata ulang yang penulisannya benar adalah ...', 'surat-menyurat', ['surat menyurat', 'suratmenyurat', 'surat-surat menyurat'], 'Kata ulang ditulis dengan tanda hubung.'),
  m('Akronim yang penulisannya benar adalah ...', 'Bappenas', ['BAPPENAS', 'BapPenas', 'bappenas'], 'Akronim nama diri gabungan suku kata ditulis dengan huruf awal kapital.'),
  m('Singkatan nama lembaga yang terdiri atas huruf awal kata ditulis dengan ...', 'Huruf kapital tanpa titik, misalnya BKN', ['Huruf kecil dengan titik, misalnya b.k.n.', 'Huruf kapital dengan titik, misalnya B.K.N.', 'Huruf awal kapital saja, misalnya Bkn'], 'Contoh: BKN, DPR, KPK.'),
  m('Kalimat yang tergolong kalimat pasif adalah ...', 'Laporan itu diserahkan kepada pimpinan.', ['Pegawai itu menyerahkan laporan kepada pimpinan.', 'Pimpinan menerima laporan dari pegawai.', 'Pegawai itu bekerja dengan tekun.'], 'Predikat berawalan di- dengan subjek sebagai penderita.'),
  m('Dalam kalimat "Kepala satuan menandatangani surat itu kemarin", fungsi kata "surat itu" adalah ...', 'Objek', ['Subjek', 'Predikat', 'Keterangan'], 'S: kepala satuan; P: menandatangani; O: surat itu; K: kemarin.'),
  m('Dalam kalimat "Pegawai baru itu sangat rajin", fungsi kata "sangat rajin" adalah ...', 'Predikat', ['Subjek', 'Objek', 'Pelengkap'], 'Predikat berupa frasa adjektiva.'),
  m('Kata "kami" dan "kita" berbeda karena ...', '"Kami" tidak melibatkan lawan bicara, sedangkan "kita" melibatkan lawan bicara', ['"Kami" lebih sopan daripada "kita"', '"Kita" hanya dipakai dalam surat resmi', 'Keduanya sama dan dapat saling menggantikan'], 'Kami = eksklusif; kita = inklusif.'),
  m('Salam penutup yang tepat dalam surat dinas adalah ...', 'Hormat kami,', ['Wassalam, sampai jumpa', 'Salam hangat,', 'Terima kasih banyak ya,'], 'Surat dinas menggunakan salam penutup resmi.'),
  m('Penulisan "Hal" pada surat dinas yang benar adalah ...', 'Hal: Undangan Rapat Koordinasi', ['Hal: undangan rapat koordinasi.', 'Hal: UNDANGAN RAPAT KOORDINASI!', 'Hal: undangan Rapat koordinasi'], 'Isi hal ditulis dengan huruf awal kapital pada setiap kata (kecuali kata tugas) tanpa titik.'),
  m('Paragraf yang kalimat utamanya terletak di awal paragraf disebut paragraf ...', 'Deduktif', ['Induktif', 'Campuran', 'Naratif'], 'Deduktif: umum ke khusus; induktif: khusus ke umum.'),
  m('Paragraf yang kalimat utamanya terletak di akhir paragraf disebut paragraf ...', 'Induktif', ['Deduktif', 'Deskriptif', 'Argumentatif'], 'Induktif: dimulai dari hal khusus lalu disimpulkan.'),
  m('Kata serapan yang penulisannya benar adalah ...', 'sistem', ['sistim', 'sistum', 'sisteem'], 'Bentuk baku: sistem.'),
  m('Imbuhan yang benar untuk kata dasar "ubah" dengan awalan meN- adalah ...', 'mengubah', ['merubah', 'merobah', 'mengrubah'], 'Kata dasarnya "ubah", sehingga menjadi "mengubah" dan "perubahan".'),
  m('Bentuk kata yang benar dari meN- + "kaji" adalah ...', 'mengkaji', ['mengaji', 'mekaji', 'menkaji'], '"Mengkaji" (meneliti) dibedakan dari "mengaji" (membaca Al-Qur\'an) — keduanya baku dengan makna berbeda.'),
  m('Bentuk kata yang benar dari meN- + "sukses" + -kan adalah ...', 'menyukseskan', ['mensukseskan', 'menyuksekan', 'mensuksekan'], 'Fonem /s/ luluh menjadi /ny/: menyukseskan.'),
  m('Bentuk kata yang benar dari meN- + "kontrol" adalah ...', 'mengontrol', ['mengkontrol', 'menkontrol', 'mekontrol'], 'Fonem /k/ luluh: mengontrol.'),
  m('Bentuk kata yang benar dari meN- + "telepon" adalah ...', 'menelepon', ['mentelepon', 'menelpon', 'mentelpon'], 'Fonem /t/ luluh: menelepon.'),
  m('Bentuk kata yang benar dari meN- + "produksi" adalah ...', 'memproduksi', ['meproduksi', 'memroduksi', 'mengproduksi'], 'Kata dasar berawal gugus konsonan tidak luluh: memproduksi.'),
];

// Kata baku
const baku = [
  ['aktif', 'aktip'], ['analisis', 'analisa'], ['apotek', 'apotik'], ['atlet', 'atlit'], ['cendekiawan', 'cendikiawan'],
  ['detail', 'detil'], ['efektif', 'efektip'], ['ekstrem', 'ekstrim'], ['frekuensi', 'frekwensi'], ['hakikat', 'hakekat'],
  ['hierarki', 'hirarki'], ['ijazah', 'ijasah'], ['imbau', 'himbau'], ['izin', 'ijin'], ['jadwal', 'jadual'],
  ['jenazah', 'jenasah'], ['kaidah', 'kaedah'], ['karier', 'karir'], ['kategori', 'katagori'], ['komoditas', 'komoditi'],
  ['konkret', 'kongkrit'], ['kualitas', 'kwalitas'], ['kuitansi', 'kwitansi'], ['lembap', 'lembab'], ['manajemen', 'managemen'],
  ['metode', 'metoda'], ['napas', 'nafas'], ['nasihat', 'nasehat'], ['objek', 'obyek'], ['subjek', 'subyek'],
  ['paham', 'faham'], ['praktik', 'praktek'], ['provinsi', 'propinsi'], ['risiko', 'resiko'], ['sistem', 'sistim'],
  ['teknik', 'tehnik'], ['telepon', 'telpon'], ['terampil', 'trampil'], ['utang', 'hutang'], ['zaman', 'jaman'],
  ['sekadar', 'sekedar'], ['saksama', 'seksama'], ['silakan', 'silahkan'], ['November', 'Nopember'], ['Februari', 'Pebruari'],
  ['frasa', 'frase'], ['merek', 'merk'], ['nomor', 'nomer'], ['persen', 'prosen'], ['rezeki', 'rejeki'],
  ['survei', 'survey'], ['teladan', 'tauladan'], ['andal', 'handal'], ['azan', 'adzan'], ['diagnosis', 'diagnosa'],
  ['hipotesis', 'hipotesa'], ['miliar', 'milyar'], ['Ramadan', 'Ramadhan'], ['kreatif', 'kreatip'], ['standardisasi', 'standarisasi'],
  ['kompleks', 'komplek'], ['ekspor', 'eksport'], ['impor', 'import'], ['investasi', 'infestasi'], ['aktivitas', 'aktifitas'],
  ['produktivitas', 'produktifitas'], ['efektivitas', 'efektifitas'], ['sahih', 'syahih'], ['narasumber', 'nara sumber'], ['antre', 'antri'],
  ['wali kota', 'walikota'], ['sopir', 'supir'], ['ubah', 'rubah'], ['indra', 'indera'],
];
const pairs = baku;
const tidakBaku = pairs.map((p) => p[1]);
const bakuList = pairs.map((p) => p[0]);
const bakuQs = [];
pairs.forEach(([b, t]) => {
  // Soal tipe 1: pilih kata baku (3 pengecoh = bentuk tidak baku kata lain)
  bakuQs.push(m(`Di antara kata berikut, yang merupakan kata baku adalah ...`, b, pickDistractors(tidakBaku, t, 'b1' + b), `Bentuk baku: "${b}"; bentuk tidak baku: "${t}".`));
  // Soal tipe 2: pilih kata tidak baku
  bakuQs.push(m(`Di antara kata berikut, yang merupakan kata TIDAK baku adalah ...`, t, pickDistractors(bakuList, b, 'b2' + t), `"${t}" tidak baku; bentuk bakunya "${b}".`));
});

export default [...manual, ...bakuQs];
