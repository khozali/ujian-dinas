import { m, fromTable, pickDistractors } from './_helpers.mjs';

const manual = [
  m('Undang-undang yang menjadi dasar pengaturan tugas dan fungsi TNI adalah ...', 'UU Nomor 34 Tahun 2004 tentang TNI sebagaimana diubah dengan UU Nomor 3 Tahun 2025', ['UU Nomor 3 Tahun 2002 tentang Pertahanan Negara', 'UU Nomor 2 Tahun 2002 tentang Kepolisian', 'UU Nomor 23 Tahun 2019 tentang PSDN'], 'UU 34/2004 diubah dengan UU 3/2025 (disahkan DPR 20 Maret 2025).'),
  m('Undang-undang tentang Pertahanan Negara adalah ...', 'UU Nomor 3 Tahun 2002', ['UU Nomor 34 Tahun 2004', 'UU Nomor 23 Tahun 2019', 'UU Nomor 20 Tahun 1982'], 'UU 3/2002 tentang Pertahanan Negara.'),
  m('Undang-undang tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara (PSDN) adalah ...', 'UU Nomor 23 Tahun 2019', ['UU Nomor 3 Tahun 2002', 'UU Nomor 34 Tahun 2004', 'UU Nomor 16 Tahun 2012'], 'UU 23/2019 mengatur komponen cadangan, komponen pendukung, dan bela negara.'),
  m('Menurut UU TNI, TNI berperan sebagai ...', 'Alat negara di bidang pertahanan yang menjalankan tugasnya berdasarkan kebijakan dan keputusan politik negara', ['Alat negara di bidang keamanan dan ketertiban masyarakat', 'Alat pemerintah daerah di bidang pembangunan', 'Lembaga negara yang setingkat kementerian'], 'Peran TNI menurut UU TNI.'),
  m('Sebagai alat pertahanan negara, TNI berfungsi sebagai ...', 'Penangkal, penindak, dan pemulih', ['Pengawas, penyidik, dan penuntut', 'Pelindung, pengayom, dan pelayan', 'Perencana, pelaksana, dan pengendali'], 'Fungsi TNI: penangkal, penindak, pemulih. "Pelindung, pengayom, pelayan" adalah fungsi Polri.'),
  m('Fungsi TNI sebagai "pemulih" berarti ...', 'Memulihkan kondisi keamanan negara yang terganggu akibat kekacauan keamanan', ['Mencegah ancaman sebelum terjadi', 'Menindak setiap ancaman militer', 'Melakukan penyidikan tindak pidana'], 'Pemulih bersama instansi lain membantu memulihkan kondisi keamanan.'),
  m('Jati diri TNI menurut UU TNI adalah ...', 'Tentara Rakyat, Tentara Pejuang, Tentara Nasional, dan Tentara Profesional', ['Tentara Rakyat, Tentara Revolusi, Tentara Nasional, dan Tentara Modern', 'Tentara Pejuang, Tentara Politik, dan Tentara Profesional', 'Tentara Nasional, Tentara Pelajar, dan Tentara Rakyat'], 'Empat jati diri TNI.'),
  m('Jati diri TNI sebagai "Tentara Nasional" berarti ...', 'Tentara kebangsaan Indonesia yang bertugas demi kepentingan negara di atas kepentingan daerah, suku, ras, dan golongan agama', ['Tentara yang anggotanya berasal dari warga negara Indonesia', 'Tentara yang berjuang menegakkan NKRI dan tidak mengenal menyerah', 'Tentara yang terlatih, terdidik, dan diperlengkapi dengan baik'], 'Pilihan lain adalah pengertian Tentara Rakyat, Tentara Pejuang, dan Tentara Profesional.'),
  m('Jati diri TNI sebagai "Tentara Profesional" berarti ...', 'Tentara yang terlatih, terdidik, diperlengkapi secara baik, tidak berpolitik praktis, tidak berbisnis, dan dijamin kesejahteraannya', ['Tentara yang anggotanya berasal dari warga negara Indonesia', 'Tentara yang berjuang tanpa mengenal menyerah', 'Tentara yang mengutamakan kepentingan daerah'], 'Definisi Tentara Profesional dalam UU TNI.'),
  m('Tugas pokok TNI dilaksanakan dengan ...', 'Operasi Militer untuk Perang (OMP) dan Operasi Militer Selain Perang (OMSP)', ['Operasi intelijen dan operasi teritorial', 'Operasi darat, laut, dan udara', 'Operasi gabungan dan operasi mandiri'], 'Pasal 7 ayat (2) UU TNI.'),
  m('Melalui UU Nomor 3 Tahun 2025, jumlah tugas Operasi Militer Selain Perang (OMSP) menjadi ...', '16 tugas', ['14 tugas', '12 tugas', '18 tugas'], 'OMSP bertambah dari 14 menjadi 16 tugas.'),
  m('Dua tugas OMSP yang ditambahkan melalui UU Nomor 3 Tahun 2025 adalah ...', 'Membantu menanggulangi ancaman pertahanan siber dan membantu melindungi serta menyelamatkan WNI dan kepentingan nasional di luar negeri', ['Mengatasi aksi terorisme dan mengamankan wilayah perbatasan', 'Mengamankan pemilu dan membantu ketahanan pangan', 'Membantu Polri dan membantu tugas pemerintahan di daerah'], 'Dua tugas baru: pertahanan siber dan perlindungan WNI di luar negeri.'),
  m('Pelaksanaan Operasi Militer untuk Perang dilakukan berdasarkan ...', 'Kebijakan dan keputusan politik negara', ['Perintah Panglima TNI', 'Keputusan Menteri Pertahanan', 'Permintaan pemerintah daerah'], 'Pasal 7 ayat (3) UU TNI.'),
  m('Dalam pengerahan dan penggunaan kekuatan militer, TNI berkedudukan di bawah ...', 'Presiden', ['Menteri Pertahanan', 'DPR', 'Menko Polhukam'], 'Pasal 3 ayat (1) UU TNI.'),
  m('Dalam kebijakan dan strategi pertahanan serta dukungan administrasi, TNI berada dalam koordinasi ...', 'Kementerian Pertahanan', ['Kementerian Koordinator Polhukam', 'Sekretariat Negara', 'Kementerian Dalam Negeri'], 'Pasal 3 ayat (2) UU TNI.'),
  m('Panglima TNI diangkat dan diberhentikan oleh Presiden setelah mendapat persetujuan ...', 'DPR', ['MPR', 'Menteri Pertahanan', 'Dewan Pertahanan Nasional'], 'Pengangkatan Panglima TNI memerlukan persetujuan DPR.'),
  m('Jabatan Panglima TNI dapat dijabat secara bergantian oleh ...', 'Perwira tinggi aktif dari tiap angkatan yang sedang atau pernah menjabat sebagai Kepala Staf Angkatan', ['Purnawirawan yang ditunjuk Presiden', 'Pejabat sipil yang ditetapkan DPR', 'Perwira tinggi bintang dua dari angkatan mana pun'], 'Pasal 13 ayat (4) UU TNI.'),
  m('Kepala Staf Angkatan Darat berkedudukan di bawah dan bertanggung jawab kepada ...', 'Panglima TNI', ['Presiden secara langsung', 'Menteri Pertahanan', 'DPR'], 'Kepala Staf Angkatan bertanggung jawab kepada Panglima TNI.'),
  m('Berikut ini yang BUKAN tugas TNI Angkatan Darat adalah ...', 'Menegakkan hukum dan menjaga keamanan di wilayah laut yurisdiksi nasional', ['Melaksanakan tugas TNI matra darat di bidang pertahanan', 'Menjaga keamanan wilayah perbatasan darat dengan negara lain', 'Melaksanakan pemberdayaan wilayah pertahanan di darat'], 'Penegakan hukum di laut yurisdiksi nasional adalah tugas TNI AL.'),
  m('Salah satu tugas TNI Angkatan Darat adalah ...', 'Melaksanakan pembangunan dan pengembangan kekuatan matra darat', ['Menegakkan hukum dan menjaga keamanan wilayah udara yurisdiksi nasional', 'Melaksanakan diplomasi angkatan laut', 'Melaksanakan pembangunan kekuatan matra udara'], 'Tugas AD menurut UU TNI.'),
  m('Salah satu tugas TNI Angkatan Laut adalah ...', 'Melaksanakan diplomasi Angkatan Laut dalam mendukung kebijakan politik luar negeri', ['Menjaga keamanan perbatasan darat', 'Melaksanakan pemberdayaan wilayah pertahanan di darat', 'Menegakkan hukum di wilayah udara'], 'Diplomasi angkatan laut adalah tugas TNI AL.'),
  m('Salah satu tugas TNI Angkatan Udara adalah ...', 'Menegakkan hukum dan menjaga keamanan di wilayah udara yurisdiksi nasional', ['Menjaga keamanan perbatasan darat', 'Melaksanakan diplomasi angkatan laut', 'Melaksanakan pembinaan teritorial di desa'], 'Penegakan hukum di wilayah udara adalah tugas TNI AU.'),
  m('Dalam struktur anggaran Kemhan, satuan kerja dikelompokkan ke dalam Unit Organisasi (UO), yaitu ...', 'UO Kemhan, UO Mabes TNI, UO TNI AD, UO TNI AL, dan UO TNI AU', ['UO Pusat dan UO Daerah', 'UO Kemhan dan UO TNI', 'UO Mabes TNI, UO Kodam, dan UO Kostrad'], 'Bagian anggaran Kemhan terdiri atas lima UO.'),
  m('Pengguna Anggaran/Pengguna Barang untuk bagian anggaran Kementerian Pertahanan (termasuk TNI) adalah ...', 'Menteri Pertahanan', ['Panglima TNI', 'Kepala Staf Angkatan', 'Menteri Keuangan'], 'Menteri/pimpinan lembaga adalah PA/PB; Menkeu adalah Pengelola Barang dan BUN.'),
  m('Unsur pengawasan internal di lingkungan Kementerian Pertahanan adalah ...', 'Inspektorat Jenderal', ['Sekretariat Jenderal', 'Direktorat Jenderal Strategi Pertahanan', 'Badan Sarana Pertahanan'], 'Itjen Kemhan melaksanakan pengawasan internal.'),
  m('Komando kewilayahan TNI AD yang wilayahnya umumnya meliputi satu atau beberapa provinsi adalah ...', 'Kodam', ['Korem', 'Kodim', 'Koramil'], 'Urutan: Kodam – Korem – Kodim – Koramil.'),
  m('Urutan komando kewilayahan TNI AD dari yang tertinggi adalah ...', 'Kodam – Korem – Kodim – Koramil', ['Kodam – Kodim – Korem – Koramil', 'Korem – Kodam – Kodim – Koramil', 'Kodam – Koramil – Kodim – Korem'], 'Kodim setingkat kabupaten/kota, Koramil setingkat kecamatan.'),
  m('Satuan komando kewilayahan TNI AD di tingkat kabupaten/kota adalah ...', 'Kodim', ['Koramil', 'Korem', 'Kodam'], 'Kodim (Komando Distrik Militer).'),
  m('Satuan komando kewilayahan TNI AD di tingkat kecamatan adalah ...', 'Koramil', ['Kodim', 'Korem', 'Kodam'], 'Koramil (Komando Rayon Militer).'),
  m('Prajurit TNI AD yang bertugas melaksanakan pembinaan teritorial di tingkat desa/kelurahan disebut ...', 'Babinsa', ['Bhabinkamtibmas', 'Danramil', 'Dandim'], 'Babinsa = Bintara Pembina Desa. Bhabinkamtibmas adalah dari Polri.'),
  m('Pembinaan Teritorial (Binter) TNI AD bertujuan mewujudkan ...', 'Ruang, Alat, dan Kondisi Juang (RAK Juang) yang tangguh', ['Kekuatan Pokok Minimum (MEF)', 'Pemerintahan daerah yang efektif', 'Pemilu yang aman'], 'Binter menyiapkan RAK Juang.'),
  m('Doktrin induk TNI dikenal dengan nama ...', 'Tri Dharma Eka Karma (Tridek)', ['Kartika Eka Paksi', 'Eka Sasana Jaya', 'Swa Bhuwana Paksa'], 'Doktrin TNI: Tridek. Doktrin TNI AD: Kartika Eka Paksi.'),
  m('Doktrin TNI Angkatan Darat dikenal dengan nama ...', 'Kartika Eka Paksi', ['Tri Dharma Eka Karma', 'Eka Sasana Jaya', 'Swa Bhuwana Paksa'], 'Doktrin TNI AD: Kartika Eka Paksi.'),
  m('Badan Keamanan Rakyat (BKR) dibentuk pada tanggal ...', '22 Agustus 1945', ['17 Agustus 1945', '5 Oktober 1945', '3 Juni 1947'], 'BKR dibentuk PPKI pada 22 Agustus 1945.'),
  m('Hari Ulang Tahun TNI diperingati setiap tanggal 5 Oktober untuk memperingati pembentukan ...', 'Tentara Keamanan Rakyat (TKR)', ['Badan Keamanan Rakyat (BKR)', 'Tentara Republik Indonesia (TRI)', 'Pembela Tanah Air (PETA)'], 'TKR dibentuk 5 Oktober 1945.'),
  m('Nama Tentara Nasional Indonesia (TNI) mulai digunakan pada tanggal ...', '3 Juni 1947', ['5 Oktober 1945', '22 Agustus 1945', '27 Desember 1949'], 'Presiden menetapkan nama TNI pada 3 Juni 1947.'),
  m('Panglima Besar TKR pertama yang terpilih pada November 1945 adalah ...', 'Soedirman', ['Oerip Soemohardjo', 'A.H. Nasution', 'T.B. Simatupang'], 'Kolonel Soedirman terpilih sebagai Panglima Besar pada 12 November 1945; Oerip Soemohardjo menjabat Kepala Staf.'),
  m('Hari Juang TNI AD (Hari Juang Kartika) diperingati setiap tanggal ...', '15 Desember', ['5 Oktober', '10 November', '19 Desember'], 'Mengenang kemenangan Palagan Ambarawa, 15 Desember 1945.'),
  m('Hari Juang TNI AD mengenang peristiwa ...', 'Palagan Ambarawa', ['Pertempuran Surabaya', 'Serangan Umum 1 Maret', 'Bandung Lautan Api'], 'Palagan Ambarawa berakhir 15 Desember 1945.'),
  m('Hari Bela Negara diperingati setiap tanggal ...', '19 Desember', ['15 Desember', '10 November', '5 Oktober'], 'Keppres 28/2006; mengenang Pemerintahan Darurat Republik Indonesia (PDRI) 1948.'),
  m('Dalam sistem pertahanan semesta, menghadapi ancaman militer menempatkan TNI sebagai ...', 'Komponen utama', ['Komponen cadangan', 'Komponen pendukung', 'Unsur lain kekuatan bangsa'], 'UU 3/2002 Pasal 7 ayat (2).'),
  m('Dalam menghadapi ancaman nonmiliter, yang menjadi unsur utama adalah ...', 'Lembaga pemerintah di luar bidang pertahanan sesuai bentuk dan sifat ancaman', ['TNI', 'Komponen cadangan', 'Polri saja'], 'UU 3/2002 Pasal 7 ayat (3).'),
  m('Menurut UU 23/2019, komponen cadangan terdiri atas ...', 'Warga negara, sumber daya alam, sumber daya buatan, serta sarana dan prasarana nasional', ['Purnawirawan TNI saja', 'Anggota Polri dan PNS', 'Mahasiswa dan pelajar'], 'Komponen cadangan disiapkan untuk memperbesar dan memperkuat komponen utama.'),
  m('Keikutsertaan warga negara sebagai komponen cadangan bersifat ...', 'Sukarela', ['Wajib bagi seluruh PNS', 'Wajib bagi setiap warga berusia 18 tahun', 'Penunjukan oleh kepala daerah'], 'UU 23/2019: pendaftaran komponen cadangan bersifat sukarela.'),
  m('Berikut ini yang BUKAN nilai dasar bela negara menurut UU 23/2019 adalah ...', 'Loyal kepada partai politik', ['Cinta tanah air', 'Rela berkorban untuk bangsa dan negara', 'Setia pada Pancasila sebagai ideologi negara'], 'Nilai dasar bela negara: cinta tanah air; sadar berbangsa dan bernegara; setia pada Pancasila; rela berkorban; kemampuan awal bela negara.'),
  m('Kode kehormatan prajurit TNI yang terdiri atas tujuh butir disebut ...', 'Sapta Marga', ['Sumpah Prajurit', '8 Wajib TNI', 'Panca Prasetya'], 'Sapta = tujuh.'),
  m('Sumpah Prajurit terdiri atas ... butir.', '5', ['7', '8', '3'], 'Sumpah Prajurit terdiri atas lima butir.'),
  m('Pedoman sikap prajurit TNI terhadap rakyat dirumuskan dalam ...', '8 Wajib TNI', ['Sapta Marga', 'Sumpah Prajurit', 'Tridek'], '8 Wajib TNI mengatur sikap prajurit terhadap rakyat.'),
  m('Kebijakan pembangunan kekuatan pertahanan untuk mencapai kekuatan pokok minimum disebut ...', 'Minimum Essential Force (MEF)', ['Rencana Strategis Pertahanan', 'Postur Pertahanan Rakyat', 'Komponen Cadangan'], 'MEF adalah standar kekuatan pokok minimum TNI.'),
];

// OMSP
const omsp = [
  'Mengatasi gerakan separatis bersenjata',
  'Mengatasi pemberontakan bersenjata',
  'Mengatasi aksi terorisme',
  'Mengamankan wilayah perbatasan',
  'Mengamankan objek vital nasional yang bersifat strategis',
  'Melaksanakan tugas perdamaian dunia sesuai kebijakan politik luar negeri',
  'Mengamankan Presiden dan Wakil Presiden beserta keluarganya',
  'Memberdayakan wilayah pertahanan dan kekuatan pendukungnya secara dini sesuai dengan sistem pertahanan semesta',
  'Membantu tugas pemerintahan di daerah',
  'Membantu Kepolisian Negara RI dalam rangka tugas keamanan dan ketertiban masyarakat',
  'Membantu mengamankan tamu negara setingkat kepala negara dan perwakilan pemerintah asing',
  'Membantu menanggulangi akibat bencana alam, pengungsian, dan pemberian bantuan kemanusiaan',
  'Membantu pencarian dan pertolongan dalam kecelakaan (search and rescue)',
  'Membantu pemerintah dalam pengamanan pelayaran dan penerbangan terhadap pembajakan, perompakan, dan penyelundupan',
  'Membantu dalam upaya menanggulangi ancaman pertahanan siber',
  'Membantu dalam melindungi dan menyelamatkan WNI serta kepentingan nasional di luar negeri',
];
const notOmsp = [
  'Menghadapi agresi militer negara lain secara langsung',
  'Melakukan penyidikan tindak pidana umum',
  'Menerbitkan surat izin mengemudi',
  'Memungut pajak dan retribusi daerah',
  'Mengadili perkara tata usaha negara',
  'Menetapkan undang-undang APBN',
  'Memeriksa pengelolaan keuangan negara',
];
const omspQs = omsp.map((t) =>
  m('Berikut ini yang termasuk tugas Operasi Militer Selain Perang (OMSP) TNI adalah ...', t, pickDistractors(notOmsp, t, t, 4), `"${t}" termasuk 16 tugas OMSP dalam Pasal 7 ayat (2) huruf b UU TNI (sebagaimana diubah UU 3/2025).`)
);

// Pangkat TNI
const pangkat = [
  ['Letnan Dua', 'Perwira Pertama'], ['Letnan Satu', 'Perwira Pertama'], ['Kapten', 'Perwira Pertama'],
  ['Mayor', 'Perwira Menengah'], ['Letnan Kolonel', 'Perwira Menengah'], ['Kolonel', 'Perwira Menengah'],
  ['Brigadir Jenderal', 'Perwira Tinggi'], ['Mayor Jenderal', 'Perwira Tinggi'], ['Letnan Jenderal', 'Perwira Tinggi'],
  ['Sersan Dua', 'Bintara'], ['Sersan Mayor', 'Bintara'], ['Pembantu Letnan Satu', 'Bintara'],
  ['Prajurit Dua', 'Tamtama'], ['Kopral Kepala', 'Tamtama'],
];
const GOL = ['Perwira Pertama', 'Perwira Menengah', 'Perwira Tinggi', 'Bintara', 'Tamtama'];
const pangkatQs = pangkat.map(([p, g]) =>
  m(`Pangkat ${p} di lingkungan TNI AD termasuk golongan ...`, g, pickDistractors(GOL, g, p, 4), `${p} termasuk golongan ${g}.`)
);

const setara = [
  ['Brigadir Jenderal', 'Laksamana Pertama', 'Marsekal Pertama'],
  ['Mayor Jenderal', 'Laksamana Muda', 'Marsekal Muda'],
  ['Letnan Jenderal', 'Laksamana Madya', 'Marsekal Madya'],
  ['Jenderal', 'Laksamana', 'Marsekal'],
];
const setaraQs = [];
setara.forEach(([ad, al, au]) => {
  setaraQs.push(m(`Pangkat ${ad} di TNI AD setara dengan pangkat ... di TNI AL.`, al, pickDistractors(setara.map((s) => s[1]), al, ad + 'al'), `${ad} (AD) = ${al} (AL) = ${au} (AU).`));
  setaraQs.push(m(`Pangkat ${ad} di TNI AD setara dengan pangkat ... di TNI AU.`, au, pickDistractors(setara.map((s) => s[2]), au, ad + 'au'), `${ad} (AD) = ${al} (AL) = ${au} (AU).`));
});

// Kecabangan TNI AD
const korps = [
  ['Inf', 'Infanteri'], ['Kav', 'Kavaleri'], ['Arm', 'Artileri Medan'], ['Arh', 'Artileri Pertahanan Udara'],
  ['Czi', 'Zeni'], ['Cpn', 'Penerbang Angkatan Darat'], ['Chb', 'Perhubungan'], ['Cpl', 'Peralatan'],
  ['Cba', 'Pembekalan Angkutan'], ['Cpm', 'Polisi Militer'], ['Caj', 'Ajudan Jenderal'], ['Cku', 'Keuangan'],
  ['Ckm', 'Kesehatan'], ['Chk', 'Hukum'], ['Ctp', 'Topografi'],
];
const korpsQs = fromTable(korps, {
  qa: (a) => `Singkatan kecabangan/korps "${a}" di lingkungan TNI AD adalah ...`,
  qb: (b) => `Singkatan kecabangan/korps ${b} di lingkungan TNI AD adalah ...`,
  expl: (r) => `${r[0]} = Korps ${r[1]}.`,
});

// Kotama
const kotama = [
  ['Kostrad', 'TNI Angkatan Darat'], ['Kopassus', 'TNI Angkatan Darat'], ['Kodam', 'TNI Angkatan Darat'], ['Kodiklatad', 'TNI Angkatan Darat'],
  ['Koarmada', 'TNI Angkatan Laut'], ['Kodiklatal', 'TNI Angkatan Laut'], ['Kolinlamil', 'TNI Angkatan Laut'], ['Korps Marinir', 'TNI Angkatan Laut'],
  ['Kodiklatau', 'TNI Angkatan Udara'], ['Kopasgat', 'TNI Angkatan Udara'], ['Koopsud', 'TNI Angkatan Udara'],
];
const MATRA = ['TNI Angkatan Darat', 'TNI Angkatan Laut', 'TNI Angkatan Udara', 'Kepolisian Negara RI'];
const kotamaQs = kotama.map(([k, a]) =>
  m(`${k} merupakan komando utama (kotama) di lingkungan ...`, a, MATRA.filter((x) => x !== a), `${k} adalah kotama ${a}.`)
);

// Semboyan
const semboyan = [
  ['TNI Angkatan Darat', 'Kartika Eka Paksi'], ['TNI Angkatan Laut', 'Jalesveva Jayamahe'],
  ['TNI Angkatan Udara', 'Swa Bhuwana Paksa'], ['Kepolisian Negara RI', 'Rastra Sewakottama'],
  ['Kostrad', 'Dharma Putra'], ['Kopassus', 'Berani, Benar, Berhasil'], ['Korps Marinir', 'Jalesu Bhumyamca Jayamahe'],
];
const semboyanQs = fromTable(semboyan, {
  qa: (a) => `Semboyan ${a} adalah ...`,
  qb: (b) => `"${b}" adalah semboyan ...`,
});

// Sapta Marga, Sumpah Prajurit, 8 Wajib TNI
const sapta = [
  'Kami Warga Negara Kesatuan Republik Indonesia yang bersendikan Pancasila',
  'Kami Patriot Indonesia, pendukung serta pembela ideologi negara yang bertanggung jawab dan tidak mengenal menyerah',
  'Kami Ksatria Indonesia, yang bertakwa kepada Tuhan Yang Maha Esa, serta membela kejujuran, kebenaran, dan keadilan',
  'Kami Prajurit Tentara Nasional Indonesia, adalah Bhayangkari Negara dan Bangsa Indonesia',
  'Kami Prajurit Tentara Nasional Indonesia, memegang teguh disiplin, patuh dan taat kepada pimpinan serta menjunjung tinggi sikap dan kehormatan prajurit',
  'Kami Prajurit Tentara Nasional Indonesia, mengutamakan keperwiraan di dalam melaksanakan tugas, serta senantiasa siap sedia berbakti kepada negara dan bangsa',
  'Kami Prajurit Tentara Nasional Indonesia, setia dan menepati janji serta Sumpah Prajurit',
];
const sumpah = [
  'Setia kepada Negara Kesatuan Republik Indonesia yang berdasarkan Pancasila dan UUD 1945',
  'Tunduk kepada hukum dan memegang teguh disiplin keprajuritan',
  'Taat kepada atasan dengan tidak membantah perintah atau putusan',
  'Menjalankan segala kewajiban dengan penuh rasa tanggung jawab kepada tentara dan Negara Republik Indonesia',
  'Memegang segala rahasia tentara sekeras-kerasnya',
];
const wajib = [
  'Bersikap ramah tamah terhadap rakyat',
  'Bersikap sopan santun terhadap rakyat',
  'Menjunjung tinggi kehormatan wanita',
  'Menjaga kehormatan diri di muka umum',
  'Senantiasa menjadi contoh dalam sikap dan kesederhanaannya',
  'Tidak sekali-kali merugikan rakyat',
  'Tidak sekali-kali menakuti dan menyakiti hati rakyat',
  'Menjadi contoh dan memelopori usaha-usaha untuk mengatasi kesulitan rakyat sekelilingnya',
];
const URUT = ['pertama', 'kedua', 'ketiga', 'keempat', 'kelima', 'keenam', 'ketujuh', 'kedelapan'];
const DOK = ['Sapta Marga', 'Sumpah Prajurit', '8 Wajib TNI', 'Panca Prasetya KORPRI'];
const doktrinQs = [];
const addSet = (list, name) => {
  list.forEach((t, i) => {
    doktrinQs.push(m(`"${t}" merupakan bunyi salah satu butir ...`, name, DOK.filter((d) => d !== name), `Kalimat tersebut adalah butir ${URUT[i]} ${name}.`));
    if (name !== '8 Wajib TNI') {
      doktrinQs.push(m(`Butir ${URUT[i]} ${name} berbunyi ...`, t, pickDistractors(list, t, name + i, 4), `${name} butir ${URUT[i]}: ${t}.`));
    }
  });
};
addSet(sapta, 'Sapta Marga');
addSet(sumpah, 'Sumpah Prajurit');
addSet(wajib, '8 Wajib TNI');

export default [...manual, ...omspQs, ...pangkatQs, ...setaraQs, ...korpsQs, ...kotamaQs, ...semboyanQs, ...doktrinQs];
