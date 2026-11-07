import { m, fromTable } from './_helpers.mjs';

const manual = [
  m('Korps Pegawai Republik Indonesia (KORPRI) dibentuk pada tanggal ...', '29 November 1971', ['17 Agustus 1971', '28 Oktober 1970', '5 Oktober 1972'], 'KORPRI dibentuk 29 November 1971; tanggal ini diperingati sebagai HUT KORPRI.'),
  m('Dasar hukum pembentukan KORPRI adalah ...', 'Keputusan Presiden Nomor 82 Tahun 1971', ['Keputusan Presiden Nomor 24 Tahun 2016', 'Undang-Undang Nomor 8 Tahun 1974', 'Peraturan Pemerintah Nomor 42 Tahun 2004'], 'KORPRI dibentuk berdasarkan Keppres 82/1971.'),
  m('KORPRI dibentuk pada masa pemerintahan Presiden ...', 'Soeharto', ['Soekarno', 'B.J. Habibie', 'Abdurrahman Wahid'], 'Tahun 1971 berada pada masa Orde Baru di bawah Presiden Soeharto.'),
  m('Lambang KORPRI berupa pohon dengan jumlah ranting, dahan, dan daun yang melambangkan tanggal proklamasi, yaitu ...', '17 ranting, 8 dahan, dan 45 daun', ['17 dahan, 8 ranting, dan 45 daun', '45 ranting, 17 dahan, dan 8 daun', '8 ranting, 17 dahan, dan 45 daun'], 'Pohon pada lambang KORPRI: 17 ranting, 8 dahan, 45 daun.'),
  m('Jumlah ranting pada pohon lambang KORPRI adalah ...', '17', ['8', '45', '19'], 'Ranting berjumlah 17 (tanggal proklamasi).'),
  m('Jumlah dahan pada pohon lambang KORPRI adalah ...', '8', ['17', '45', '5'], 'Dahan berjumlah 8 (bulan Agustus).'),
  m('Jumlah daun pada pohon lambang KORPRI adalah ...', '45', ['17', '8', '50'], 'Daun berjumlah 45 (tahun 1945).'),
  m('Ikrar atau janji anggota KORPRI dikenal dengan nama ...', 'Panca Prasetya KORPRI', ['Sapta Marga', 'Sumpah Prajurit', 'Tri Brata'], 'Panca Prasetya KORPRI berisi lima janji anggota KORPRI. Sapta Marga dan Sumpah Prajurit untuk TNI; Tri Brata untuk Polri.'),
  m('Panca Prasetya KORPRI terdiri atas ... butir.', '5', ['3', '7', '8'], '"Panca" berarti lima.'),
  m('KORPRI merupakan wadah untuk menghimpun dan membina seluruh pegawai Republik Indonesia ...', 'Di luar kedinasan', ['Di dalam kedinasan', 'Dalam kegiatan politik praktis', 'Khusus pegawai pemerintah daerah'], 'KORPRI adalah wadah pembinaan pegawai di luar kedinasan.'),
  m('Hari ulang tahun KORPRI diperingati setiap tanggal ...', '29 November', ['17 Agustus', '28 Oktober', '10 November'], 'HUT KORPRI = 29 November.'),
  m('Tujuan dibentuknya KORPRI adalah ...', 'Meningkatkan perjuangan, pengabdian, dan kesetiaan pegawai kepada cita-cita perjuangan bangsa dan negara', ['Menjadi partai politik bagi pegawai negeri', 'Menggantikan peran BKN dalam administrasi kepegawaian', 'Mengelola keuangan negara'], 'Tujuan pembentukan KORPRI menurut Keppres 82/1971.'),
  m('Setelah reformasi, KORPRI menegaskan posisinya sebagai organisasi yang ...', 'Netral dan tidak berpihak pada partai politik', ['Berafiliasi dengan partai pemerintah', 'Menjadi peserta pemilu', 'Bebas mendukung calon kepala daerah'], 'Pegawai ASN wajib netral; KORPRI tidak lagi menjadi bagian dari kekuatan politik tertentu.'),
  m('Forum tertinggi organisasi KORPRI adalah ...', 'Musyawarah Nasional (Munas)', ['Rapat Kerja Nasional', 'Rapat Pimpinan', 'Kongres Pegawai'], 'Munas adalah pemegang kekuasaan tertinggi organisasi KORPRI.'),
  m('Musyawarah Nasional KORPRI diselenggarakan sekali dalam ...', '5 tahun', ['1 tahun', '3 tahun', '10 tahun'], 'Munas KORPRI diselenggarakan setiap lima tahun.'),
  m('Pakaian dinas KORPRI biasanya dikenakan pada ...', 'Upacara HUT KORPRI dan upacara tanggal 17 setiap bulan', ['Setiap hari Senin', 'Hari Jumat saja', 'Kegiatan olahraga'], 'Pakaian KORPRI dipakai pada upacara bendera tanggal 17 dan HUT KORPRI (aturan rinci mengikuti instansi).'),
  m('Peraturan yang mengatur pembinaan jiwa korps dan kode etik PNS adalah ...', 'PP Nomor 42 Tahun 2004', ['PP Nomor 94 Tahun 2021', 'Keppres Nomor 82 Tahun 1971', 'PP Nomor 53 Tahun 2010'], 'PP 42/2004 tentang Pembinaan Jiwa Korps dan Kode Etik PNS.'),
  m('Pembinaan jiwa korps PNS dimaksudkan untuk ...', 'Meningkatkan semangat juang, pengabdian, kesetiaan, dan ketaatan PNS', ['Menambah penghasilan PNS', 'Memperpanjang usia pensiun PNS', 'Meningkatkan jumlah PNS'], 'Tujuan pembinaan jiwa korps menurut PP 42/2004.'),
  m('Lembaga yang dibentuk di instansi untuk menegakkan kode etik PNS adalah ...', 'Majelis Kode Etik', ['Tim Pemeriksa Disiplin', 'Badan Pertimbangan Kepegawaian', 'Dewan Pengurus KORPRI'], 'PP 42/2004 mengatur pembentukan Majelis Kode Etik pada setiap instansi.'),
  m('Sanksi bagi PNS yang melanggar kode etik menurut PP 42/2004 berupa ...', 'Sanksi moral yang dibuat secara tertulis', ['Pemotongan gaji', 'Penurunan pangkat', 'Pemberhentian langsung'], 'Pelanggar kode etik dikenakan sanksi moral berupa pernyataan secara tertutup atau terbuka.'),
  m('Sanksi moral bagi pelanggar kode etik PNS dapat berupa ...', 'Pernyataan secara tertutup atau secara terbuka', ['Teguran lisan dan teguran tertulis', 'Pemotongan tunjangan kinerja', 'Penundaan kenaikan pangkat'], 'PP 42/2004 Pasal 15.'),
  m('Selain sanksi moral, PNS yang melanggar kode etik dapat dikenakan tindakan administratif atas rekomendasi ...', 'Majelis Kode Etik', ['Ketua KORPRI Nasional', 'Kepala BKN', 'Ombudsman'], 'Majelis Kode Etik dapat merekomendasikan tindakan administratif sesuai peraturan.'),
  m('Nilai dasar yang harus dijunjung tinggi PNS menurut PP 42/2004 antara lain adalah ...', 'Ketakwaan kepada Tuhan Yang Maha Esa dan kesetiaan kepada Pancasila dan UUD 1945', ['Loyalitas kepada partai politik', 'Kepentingan pribadi di atas kepentingan umum', 'Kesetiaan kepada daerah asal'], 'PP 42/2004 Pasal 6 menyebutkan nilai-nilai dasar PNS.'),
];

// Panca Prasetya KORPRI
const prasetya = [
  ['Pertama', 'Setia dan taat kepada Negara Kesatuan dan Pemerintah Republik Indonesia yang berdasarkan Pancasila dan UUD 1945'],
  ['Kedua', 'Menjunjung tinggi kehormatan bangsa dan negara serta memegang teguh rahasia jabatan dan rahasia negara'],
  ['Ketiga', 'Mengutamakan kepentingan negara dan masyarakat di atas kepentingan pribadi dan golongan'],
  ['Keempat', 'Memelihara persatuan dan kesatuan bangsa serta kesetiakawanan Korps Pegawai Republik Indonesia'],
  ['Kelima', 'Menegakkan kejujuran, keadilan, dan disiplin serta meningkatkan kinerja dan profesionalisme'],
];
const prasetyaQs = fromTable(prasetya, {
  qa: (a) => `Butir ${a.toLowerCase()} Panca Prasetya KORPRI adalah ...`,
  qb: (b) => `"${b}" merupakan bunyi Panca Prasetya KORPRI butir ...`,
  expl: (r) => `Panca Prasetya KORPRI butir ${r[0].toLowerCase()}: ${r[1]}.`,
});

// Etika PNS (PP 42/2004)
const etika = [
  ['Etika dalam bernegara', 'Menjadi perekat dan pemersatu bangsa dalam NKRI'],
  ['Etika dalam berorganisasi', 'Melaksanakan tugas dan wewenang sesuai ketentuan yang berlaku'],
  ['Etika dalam bermasyarakat', 'Mewujudkan pola hidup sederhana'],
  ['Etika terhadap diri sendiri', 'Jujur dan terbuka serta tidak memberikan informasi yang tidak benar'],
  ['Etika terhadap sesama PNS', 'Saling menghormati sesama warga negara yang memeluk agama/kepercayaan berbeda'],
];
const etikaQs = fromTable(etika, {
  qa: (a) => `Menurut PP 42/2004, salah satu contoh "${a.toLowerCase()}" bagi PNS adalah ...`,
  qb: (b) => `Menurut PP 42/2004, sikap "${b.toLowerCase()}" termasuk ...`,
  expl: (r) => `PP 42/2004 Pasal 8–12: "${r[1]}" termasuk ${r[0].toLowerCase()}.`,
});

export default [...manual, ...prasetyaQs, ...etikaQs];
