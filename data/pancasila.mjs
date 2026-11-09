import { m, fromTable } from './_helpers.mjs';

const manual = [
  m('Tanggal 1 Juni ditetapkan sebagai Hari Lahir Pancasila melalui ...', 'Keputusan Presiden Nomor 24 Tahun 2016', ['Ketetapan MPR Nomor II/MPR/1978', 'Undang-Undang Nomor 12 Tahun 2011', 'Instruksi Presiden Nomor 12 Tahun 1968'], 'Keppres 24/2016 menetapkan 1 Juni sebagai Hari Lahir Pancasila dan hari libur nasional.'),
  m('Rumusan Pancasila yang sah dan resmi tercantum dalam ...', 'Pembukaan UUD 1945 alinea keempat', ['Piagam Jakarta', 'Pidato Ir. Soekarno 1 Juni 1945', 'Pasal 1 UUD 1945'], 'Rumusan resmi Pancasila terdapat dalam alinea keempat Pembukaan UUD 1945 yang disahkan PPKI pada 18 Agustus 1945.'),
  m('Pancasila sebagai dasar negara disahkan oleh PPKI pada tanggal ...', '18 Agustus 1945', ['17 Agustus 1945', '1 Juni 1945', '22 Juni 1945'], 'PPKI mengesahkan UUD 1945 (termasuk Pembukaan yang memuat Pancasila) pada 18 Agustus 1945.'),
  m('Istilah "Pancasila" sebagai nama dasar negara pertama kali dikemukakan oleh ...', 'Ir. Soekarno', ['Mr. Muhammad Yamin', 'Mr. Soepomo', 'Drs. Mohammad Hatta'], 'Ir. Soekarno mengusulkan nama Pancasila dalam pidatonya di sidang BPUPKI tanggal 1 Juni 1945.'),
  m('Tokoh yang menyampaikan usulan dasar negara pada sidang BPUPKI tanggal 29 Mei 1945 adalah ...', 'Mr. Muhammad Yamin', ['Mr. Soepomo', 'Ir. Soekarno', 'Ki Bagus Hadikusumo'], 'Urutan pidato usulan dasar negara: Muh. Yamin (29 Mei), Soepomo (31 Mei), dan Soekarno (1 Juni 1945).'),
  m('Tokoh yang menyampaikan usulan dasar negara pada sidang BPUPKI tanggal 31 Mei 1945 adalah ...', 'Mr. Soepomo', ['Mr. Muhammad Yamin', 'Ir. Soekarno', 'Mr. A.A. Maramis'], 'Soepomo berpidato pada 31 Mei 1945 dengan gagasan negara integralistik.'),
  m('Piagam Jakarta dirumuskan oleh Panitia Sembilan pada tanggal ...', '22 Juni 1945', ['1 Juni 1945', '18 Agustus 1945', '29 Mei 1945'], 'Panitia Sembilan menghasilkan Piagam Jakarta pada 22 Juni 1945.'),
  m('Panitia Sembilan diketuai oleh ...', 'Ir. Soekarno', ['Drs. Mohammad Hatta', 'dr. Radjiman Wedyodiningrat', 'Mr. Muhammad Yamin'], 'Panitia Sembilan diketuai Ir. Soekarno dan menghasilkan Piagam Jakarta.'),
  m('Perubahan sila pertama Piagam Jakarta menjadi "Ketuhanan Yang Maha Esa" dilakukan untuk menjaga ...', 'Persatuan dan kesatuan bangsa', ['Kepentingan golongan mayoritas', 'Hubungan dengan negara asing', 'Kekuasaan presiden'], 'Tujuh kata dalam Piagam Jakarta dihapus demi persatuan, setelah ada keberatan dari wakil Indonesia bagian timur.'),
  m('Kedudukan Pancasila sebagai sumber dari segala sumber hukum negara ditegaskan dalam ...', 'UU Nomor 12 Tahun 2011 tentang Pembentukan Peraturan Perundang-undangan', ['UU Nomor 20 Tahun 2023 tentang ASN', 'UU Nomor 24 Tahun 2009 tentang Bendera, Bahasa, dan Lambang Negara', 'UU Nomor 3 Tahun 2002 tentang Pertahanan Negara'], 'Pasal 2 UU 12/2011 menyatakan Pancasila merupakan sumber segala sumber hukum negara.'),
  m('Pancasila sebagai pandangan hidup bangsa berarti Pancasila berfungsi sebagai ...', 'Pedoman dan petunjuk dalam kehidupan sehari-hari', ['Dasar penyelenggaraan pemerintahan saja', 'Alat pemersatu partai politik', 'Dokumen sejarah perjuangan'], 'Sebagai pandangan hidup (way of life), Pancasila menjadi pedoman sikap dan perilaku sehari-hari.'),
  m('Hari Kesaktian Pancasila diperingati setiap tanggal ...', '1 Oktober', ['1 Juni', '30 September', '18 Agustus'], 'Hari Kesaktian Pancasila (1 Oktober) mengenang kegagalan G30S dan tetap tegaknya Pancasila.'),
  m('Semboyan "Bhinneka Tunggal Ika" berasal dari kitab ...', 'Sutasoma karya Mpu Tantular', ['Negarakertagama karya Mpu Prapanca', 'Arjunawiwaha karya Mpu Kanwa', 'Pararaton'], 'Bhinneka Tunggal Ika berasal dari Kakawin Sutasoma karya Mpu Tantular.'),
  m('Lembaga yang bertugas membantu Presiden merumuskan arah kebijakan pembinaan ideologi Pancasila adalah ...', 'Badan Pembinaan Ideologi Pancasila (BPIP)', ['Badan Pemeriksa Keuangan (BPK)', 'Lembaga Ketahanan Nasional (Lemhannas)', 'Badan Kepegawaian Negara (BKN)'], 'BPIP bertugas membantu Presiden dalam pembinaan ideologi Pancasila.'),
  m('Jumlah bulu pada sayap Garuda Pancasila masing-masing sisi adalah ...', '17', ['8', '19', '45'], 'Jumlah bulu: sayap 17, ekor 8, pangkal ekor 19, leher 45 — melambangkan 17-8-1945.'),
  m('Jumlah bulu pada leher Garuda Pancasila adalah ...', '45', ['17', '8', '19'], 'Bulu leher berjumlah 45, melambangkan tahun 1945.'),
  m('Jumlah bulu pada ekor Garuda Pancasila adalah ...', '8', ['17', '19', '45'], 'Bulu ekor berjumlah 8, melambangkan bulan Agustus.'),
  m('Garis hitam tebal di tengah perisai Garuda Pancasila melambangkan ...', 'Garis khatulistiwa', ['Persatuan bangsa', 'Batas wilayah negara', 'Perjuangan rakyat'], 'Garis hitam pada perisai melambangkan garis khatulistiwa yang melintasi Indonesia.'),
  m('Lambang negara, bendera, bahasa, dan lagu kebangsaan diatur secara rinci dalam ...', 'UU Nomor 24 Tahun 2009', ['UU Nomor 12 Tahun 2011', 'UU Nomor 43 Tahun 2009', 'UU Nomor 39 Tahun 1999'], 'UU 24/2009 tentang Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan.'),
  m('Nilai-nilai Pancasila yang bersifat tetap dan tidak berubah disebut nilai ...', 'Dasar', ['Instrumental', 'Praksis', 'Material'], 'Nilai dasar bersifat tetap; nilai instrumental berupa penjabaran (peraturan); nilai praksis berupa pelaksanaan nyata.'),
  m('Penjabaran nilai Pancasila dalam bentuk peraturan perundang-undangan disebut nilai ...', 'Instrumental', ['Dasar', 'Praksis', 'Ideal'], 'Nilai instrumental adalah penjabaran nilai dasar, misalnya dalam UUD dan undang-undang.'),
  m('Pancasila sebagai ideologi terbuka berarti ...', 'Nilai dasarnya tetap, tetapi penjabarannya dapat menyesuaikan perkembangan zaman', ['Dapat diganti dengan ideologi lain', 'Isinya dapat diubah melalui referendum', 'Hanya berlaku pada masa tertentu'], 'Ideologi terbuka: nilai dasar tidak berubah, nilai instrumental dan praksis dapat berkembang.'),
  m('Pancasila sebagai dasar negara (philosofische grondslag) berarti Pancasila digunakan sebagai ...', 'Dasar untuk mengatur penyelenggaraan negara', ['Pedoman beribadah', 'Lambang persatuan olahraga', 'Simbol kebudayaan daerah'], 'Sebagai dasar negara, Pancasila menjadi landasan mengatur pemerintahan dan penyelenggaraan negara.'),
  m('Rumusan "Kemanusiaan yang adil dan beradab" merupakan bunyi sila ke ...', 'Dua', ['Satu', 'Tiga', 'Empat'], 'Sila kedua: Kemanusiaan yang adil dan beradab.'),
  m('Rumusan "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan" merupakan bunyi sila ke ...', 'Empat', ['Tiga', 'Lima', 'Dua'], 'Sila keempat menekankan musyawarah dan perwakilan.'),
  m('Bersikap netral, tidak memihak partai politik, dan melayani semua golongan masyarakat sebagai PNS terutama mencerminkan pengamalan sila ...', 'Ketiga dan kelima', ['Pertama saja', 'Kedua saja', 'Keempat saja'], 'Netralitas menjaga persatuan (sila 3) dan keadilan pelayanan bagi seluruh rakyat (sila 5).'),
];

// Lambang sila
const lambang = [
  ['Pertama', 'Bintang', 'Sila pertama dilambangkan bintang.'],
  ['Kedua', 'Rantai', 'Sila kedua dilambangkan rantai (mata rantai bulat dan persegi).'],
  ['Ketiga', 'Pohon beringin', 'Sila ketiga dilambangkan pohon beringin.'],
  ['Keempat', 'Kepala banteng', 'Sila keempat dilambangkan kepala banteng.'],
  ['Kelima', 'Padi dan kapas', 'Sila kelima dilambangkan padi dan kapas.'],
];
const lambangQs = fromTable(lambang, {
  qa: (a) => `Lambang sila ${a.toLowerCase()} Pancasila adalah ...`,
  qb: (b) => `Lambang "${b.toLowerCase()}" pada perisai Garuda Pancasila melambangkan sila ...`,
});

// Butir sikap -> sila (pengamalan nilai)
const butir = [
  ['Menghormati kebebasan orang lain untuk menjalankan ibadah sesuai agamanya', 'Sila pertama'],
  ['Tidak memaksakan suatu agama dan kepercayaan kepada orang lain', 'Sila pertama'],
  ['Membina kerja sama antarpemeluk agama yang berbeda', 'Sila pertama'],
  ['Percaya dan takwa kepada Tuhan Yang Maha Esa', 'Sila pertama'],
  ['Mengakui persamaan derajat, hak, dan kewajiban setiap manusia', 'Sila kedua'],
  ['Mengembangkan sikap tenggang rasa dan tepa selira', 'Sila kedua'],
  ['Tidak semena-mena terhadap orang lain', 'Sila kedua'],
  ['Gemar melakukan kegiatan kemanusiaan', 'Sila kedua'],
  ['Berani membela kebenaran dan keadilan', 'Sila kedua'],
  ['Menempatkan persatuan, kesatuan, kepentingan, dan keselamatan bangsa di atas kepentingan pribadi', 'Sila ketiga'],
  ['Mengembangkan rasa cinta kepada tanah air dan bangsa', 'Sila ketiga'],
  ['Rela berkorban untuk kepentingan bangsa dan negara', 'Sila ketiga'],
  ['Memajukan pergaulan demi persatuan dan kesatuan bangsa yang ber-Bhinneka Tunggal Ika', 'Sila ketiga'],
  ['Bangga sebagai bangsa Indonesia dan bertanah air Indonesia', 'Sila ketiga'],
  ['Mengutamakan musyawarah untuk mencapai mufakat dalam mengambil keputusan', 'Sila keempat'],
  ['Tidak memaksakan kehendak kepada orang lain dalam musyawarah', 'Sila keempat'],
  ['Menerima dan melaksanakan hasil keputusan musyawarah dengan itikad baik', 'Sila keempat'],
  ['Memberikan kepercayaan kepada wakil-wakil rakyat yang dipercayai', 'Sila keempat'],
  ['Bersikap adil terhadap sesama', 'Sila kelima'],
  ['Menjaga keseimbangan antara hak dan kewajiban', 'Sila kelima'],
  ['Tidak menggunakan hak milik untuk hal-hal yang merugikan kepentingan umum', 'Sila kelima'],
  ['Tidak bersifat boros dan bergaya hidup mewah', 'Sila kelima'],
  ['Suka bekerja keras dan menghargai hasil karya orang lain', 'Sila kelima'],
  ['Mengembangkan sikap gotong royong dan kekeluargaan dalam kegiatan ekonomi', 'Sila kelima'],
];
const SILA = ['Sila pertama', 'Sila kedua', 'Sila ketiga', 'Sila keempat', 'Sila kelima'];
const butirQs = butir.map(([b, s]) =>
  m(`Sikap "${b}" merupakan pengamalan Pancasila ...`, s, SILA.filter((x) => x !== s), `Sikap tersebut merupakan salah satu butir pengamalan ${s.toLowerCase()} Pancasila.`)
);

export default [...manual, ...lambangQs, ...butirQs];
