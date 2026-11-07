import { m, fromTable } from './_helpers.mjs';

const manual = [
  m('Undang-undang yang saat ini menjadi dasar pengaturan Aparatur Sipil Negara adalah ...', 'UU Nomor 20 Tahun 2023', ['UU Nomor 5 Tahun 2014', 'UU Nomor 43 Tahun 1999', 'UU Nomor 8 Tahun 1974'], 'UU 20/2023 tentang ASN menggantikan UU 5/2014.'),
  m('UU Nomor 20 Tahun 2023 tentang ASN disahkan pada tanggal ...', '31 Oktober 2023', ['17 Agustus 2023', '3 Oktober 2023', '1 Januari 2024'], 'UU ASN disahkan Presiden pada 31 Oktober 2023 (disetujui DPR 3 Oktober 2023).'),
  m('Pegawai ASN terdiri atas ...', 'PNS dan PPPK', ['PNS dan tenaga honorer', 'PNS, TNI, dan Polri', 'PNS pusat dan PNS daerah'], 'Pegawai ASN = Pegawai Negeri Sipil dan Pegawai Pemerintah dengan Perjanjian Kerja.'),
  m('Nilai dasar ASN dikenal dengan akronim ...', 'BerAKHLAK', ['BERSATU', 'PANCAKARSA', 'SIGAP'], 'BerAKHLAK: Berorientasi pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.'),
  m('Huruf "A" pertama dalam BerAKHLAK adalah ...', 'Akuntabel', ['Adaptif', 'Aktif', 'Amanah'], 'Urutan BerAKHLAK: Berorientasi pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.'),
  m('Huruf "K" terakhir dalam BerAKHLAK adalah ...', 'Kolaboratif', ['Kompeten', 'Kreatif', 'Konsisten'], 'Huruf K pertama = Kompeten, K terakhir = Kolaboratif.'),
  m('Huruf "L" dalam BerAKHLAK adalah ...', 'Loyal', ['Lugas', 'Luhur', 'Lincah'], 'L = Loyal: berdedikasi dan mengutamakan kepentingan bangsa dan negara.'),
  m('Perilaku "terus berinovasi dan antusias dalam menggerakkan serta menghadapi perubahan" mencerminkan nilai BerAKHLAK ...', 'Adaptif', ['Kompeten', 'Harmonis', 'Akuntabel'], 'Adaptif: cepat menyesuaikan diri, berinovasi, dan bertindak proaktif.'),
  m('Perilaku "melaksanakan tugas dengan jujur, bertanggung jawab, cermat, disiplin, dan berintegritas tinggi" mencerminkan nilai BerAKHLAK ...', 'Akuntabel', ['Loyal', 'Kompeten', 'Berorientasi pelayanan'], 'Akuntabel: jujur, bertanggung jawab, cermat, disiplin, berintegritas.'),
  m('Perilaku "menghargai setiap orang apa pun latar belakangnya dan membangun lingkungan kerja yang kondusif" mencerminkan nilai BerAKHLAK ...', 'Harmonis', ['Kolaboratif', 'Loyal', 'Adaptif'], 'Harmonis: saling peduli dan menghargai perbedaan.'),
  m('Perilaku "memberi kesempatan kepada berbagai pihak untuk berkontribusi dan bekerja sama untuk menghasilkan nilai tambah" mencerminkan nilai BerAKHLAK ...', 'Kolaboratif', ['Harmonis', 'Kompeten', 'Adaptif'], 'Kolaboratif: membangun kerja sama yang sinergis.'),
  m('Perilaku "meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah" mencerminkan nilai BerAKHLAK ...', 'Kompeten', ['Adaptif', 'Akuntabel', 'Loyal'], 'Kompeten: terus belajar dan mengembangkan kapabilitas.'),
  m('Perilaku "memahami dan memenuhi kebutuhan masyarakat dengan ramah, cekatan, dan solutif" mencerminkan nilai BerAKHLAK ...', 'Berorientasi pelayanan', ['Harmonis', 'Kolaboratif', 'Akuntabel'], 'Berorientasi pelayanan: komitmen memberi pelayanan prima demi kepuasan masyarakat.'),
  m('Employer branding ASN yang diluncurkan bersama nilai BerAKHLAK adalah ...', 'Bangga Melayani Bangsa', ['Melayani dengan Hati', 'ASN Hebat Indonesia Maju', 'Kerja Nyata untuk Negeri'], 'Core values BerAKHLAK diluncurkan bersama employer branding "Bangga Melayani Bangsa".'),
  m('Fungsi pegawai ASN adalah sebagai ...', 'Pelaksana kebijakan publik, pelayan publik, serta perekat dan pemersatu bangsa', ['Pembuat undang-undang, pengawas, dan pelaksana', 'Penegak hukum, pelayan publik, dan pengawas', 'Pengelola keuangan, pelayan publik, dan perencana'], 'Tiga fungsi ASN: pelaksana kebijakan publik, pelayan publik, perekat dan pemersatu bangsa.'),
  m('Menurut UU ASN, jabatan ASN dikelompokkan menjadi ...', 'Jabatan manajerial dan jabatan nonmanajerial', ['Jabatan struktural dan jabatan fungsional umum', 'Jabatan pimpinan dan jabatan staf', 'Jabatan karier dan jabatan politik'], 'UU 20/2023 mengelompokkan jabatan ASN menjadi manajerial dan nonmanajerial.'),
  m('Jabatan pimpinan tinggi terdiri atas ...', 'Utama, madya, dan pratama', ['Utama, muda, dan pertama', 'Tinggi, menengah, dan dasar', 'Ahli, terampil, dan pelaksana'], 'JPT utama, JPT madya, dan JPT pratama.'),
  m('Peraturan Pemerintah yang mengatur Disiplin PNS saat ini adalah ...', 'PP Nomor 94 Tahun 2021', ['PP Nomor 53 Tahun 2010', 'PP Nomor 30 Tahun 1980', 'PP Nomor 11 Tahun 2017'], 'PP 94/2021 menggantikan PP 53/2010.'),
  m('Menurut PP 94 Tahun 2021, jenis hukuman disiplin terdiri atas ...', 'Ringan, sedang, dan berat', ['Lisan, tertulis, dan pemberhentian', 'Administratif dan pidana', 'Ringan dan berat'], 'Tingkat hukuman disiplin: ringan, sedang, berat.'),
  m('Yang dimaksud dengan disiplin PNS menurut PP 94/2021 adalah ...', 'Kesanggupan PNS untuk menaati kewajiban dan menghindari larangan sesuai peraturan perundang-undangan', ['Kehadiran PNS tepat waktu setiap hari', 'Kepatuhan PNS terhadap perintah atasan langsung', 'Kemampuan PNS menyelesaikan target kinerja'], 'Definisi disiplin PNS dalam PP 94/2021.'),
  m('PNS dilarang menjadi anggota dan/atau pengurus ...', 'Partai politik', ['KORPRI', 'Koperasi pegawai', 'Organisasi profesi'], 'PNS wajib netral dan dilarang menjadi anggota/pengurus partai politik.'),
  m('Memberikan dukungan kepada calon presiden dengan ikut kampanye menggunakan atribut PNS termasuk pelanggaran terhadap ...', 'Kewajiban menjaga netralitas', ['Kewajiban masuk kerja', 'Larangan menerima hadiah', 'Kewajiban melaporkan harta kekayaan'], 'Netralitas PNS diatur dalam UU ASN dan PP 94/2021.'),
  m('PNS yang menerima hadiah yang berhubungan dengan jabatannya wajib melaporkannya kepada ...', 'KPK sebagai gratifikasi', ['Atasan langsung saja', 'BKN', 'Inspektorat Jenderal saja'], 'Gratifikasi wajib dilaporkan ke KPK paling lambat 30 hari kerja sejak diterima (UU Tipikor).'),
  m('Batas waktu pelaporan gratifikasi kepada KPK adalah paling lambat ... sejak diterima.', '30 hari kerja', ['7 hari kerja', '14 hari kerja', '60 hari kerja'], 'Pasal 12C UU Tipikor: 30 hari kerja sejak tanggal gratifikasi diterima.'),
  m('Instansi yang berwenang menyelenggarakan manajemen ASN secara nasional di bidang administrasi kepegawaian adalah ...', 'Badan Kepegawaian Negara (BKN)', ['Lembaga Administrasi Negara (LAN)', 'Kementerian Dalam Negeri', 'Badan Pusat Statistik'], 'BKN menyelenggarakan manajemen ASN, termasuk administrasi kepegawaian.'),
  m('Lembaga yang bertugas di bidang pengembangan kompetensi dan pelatihan ASN adalah ...', 'Lembaga Administrasi Negara (LAN)', ['Badan Kepegawaian Negara (BKN)', 'Ombudsman RI', 'Arsip Nasional RI'], 'LAN berperan dalam pengkajian kebijakan dan pengembangan kompetensi ASN.'),
  m('Pejabat yang mempunyai kewenangan menetapkan pengangkatan, pemindahan, dan pemberhentian pegawai ASN di instansi pemerintah disebut ...', 'Pejabat Pembina Kepegawaian (PPK)', ['Pejabat yang Berwenang (PyB)', 'Pejabat Pembuat Komitmen', 'Kuasa Pengguna Anggaran'], 'Di kementerian, PPK adalah menteri; di provinsi adalah gubernur, dst.'),
  m('Pejabat Pembina Kepegawaian di lingkungan Kementerian Pertahanan adalah ...', 'Menteri Pertahanan', ['Panglima TNI', 'Sekretaris Jenderal Kemhan', 'Kepala BKN'], 'Untuk kementerian, PPK adalah menteri.'),
  m('Peserta Ujian Dinas Tingkat I adalah PNS berpangkat ...', 'Pengatur Tingkat I (II/d) yang akan naik ke Penata Muda (III/a)', ['Penata Tingkat I (III/d) yang akan naik ke Pembina (IV/a)', 'Pengatur (II/c) yang akan naik ke Pengatur Tingkat I (II/d)', 'Juru Tingkat I (I/d) yang akan naik ke Pengatur Muda (II/a)'], 'Ujian Dinas Tk I untuk II/d → III/a; Ujian Dinas Tk II untuk III/d → IV/a.'),
  m('Ujian Dinas Tingkat II diperuntukkan bagi PNS yang akan naik pangkat dari ...', 'Penata Tingkat I (III/d) ke Pembina (IV/a)', ['Pengatur Tingkat I (II/d) ke Penata Muda (III/a)', 'Penata (III/c) ke Penata Tingkat I (III/d)', 'Pembina (IV/a) ke Pembina Tingkat I (IV/b)'], 'Ujian Dinas Tk II: III/d → IV/a.'),
  m('Ujian bagi PNS yang memperoleh ijazah lebih tinggi untuk penyesuaian pangkat disebut ...', 'Ujian Penyesuaian Kenaikan Pangkat (UPKP)', ['Ujian Dinas Tingkat I', 'Uji Kompetensi Jabatan', 'Seleksi Kompetensi Bidang'], 'UPKP untuk kenaikan pangkat penyesuaian ijazah.'),
  m('PNS yang memperoleh ijazah Sarjana (S-1)/Diploma IV dan masih berpangkat II/d ke bawah dapat dinaikkan pangkatnya melalui penyesuaian ijazah menjadi ...', 'Penata Muda (III/a)', ['Penata Muda Tingkat I (III/b)', 'Pengatur Tingkat I (II/d)', 'Penata (III/c)'], 'Ijazah S-1/D-IV → maksimal Penata Muda (III/a).'),
  m('PNS yang memperoleh ijazah Magister (S-2) dapat dinaikkan pangkatnya melalui penyesuaian ijazah paling tinggi menjadi ...', 'Penata Muda Tingkat I (III/b)', ['Penata Muda (III/a)', 'Penata (III/c)', 'Penata Tingkat I (III/d)'], 'Ijazah S-2 → Penata Muda Tingkat I (III/b).'),
  m('Penilaian kinerja PNS dilakukan berdasarkan perencanaan kinerja yang dituangkan dalam ...', 'Sasaran Kinerja Pegawai (SKP)', ['Daftar Penilaian Pelaksanaan Pekerjaan (DP3)', 'Laporan Harta Kekayaan', 'Rencana Kerja Anggaran'], 'SKP menggantikan DP3 sebagai instrumen penilaian kinerja.'),
  m('Peraturan Pemerintah tentang Penilaian Kinerja PNS adalah ...', 'PP Nomor 30 Tahun 2019', ['PP Nomor 46 Tahun 2011', 'PP Nomor 10 Tahun 1979', 'PP Nomor 94 Tahun 2021'], 'PP 30/2019 tentang Penilaian Kinerja PNS.'),
  m('Menurut PermenPANRB Nomor 6 Tahun 2022, predikat kinerja tertinggi pegawai adalah ...', 'Sangat Baik', ['Istimewa', 'Amat Baik', 'Baik Sekali'], 'Predikat: Sangat Baik, Baik, Butuh Perbaikan, Kurang, Sangat Kurang.'),
  m('Menurut PermenPANRB Nomor 6 Tahun 2022, berikut ini yang BUKAN predikat kinerja pegawai adalah ...', 'Cukup', ['Baik', 'Butuh Perbaikan', 'Sangat Kurang'], 'Predikat "Cukup" tidak dikenal dalam PermenPANRB 6/2022.'),
    m('Hak cuti tahunan PNS adalah ...', '12 hari kerja', ['6 hari kerja', '14 hari kalender', '1 bulan'], 'Cuti tahunan 12 hari kerja bagi PNS yang telah bekerja paling singkat 1 tahun secara terus-menerus.'),
  m('Cuti besar diberikan kepada PNS yang telah bekerja paling singkat ... secara terus-menerus.', '5 tahun', ['3 tahun', '4 tahun', '10 tahun'], 'Cuti besar paling lama 3 bulan bagi PNS dengan masa kerja paling singkat 5 tahun terus-menerus.'),
  m('Lamanya cuti besar paling lama adalah ...', '3 bulan', ['1 bulan', '2 bulan', '6 bulan'], 'Cuti besar paling lama 3 bulan.'),
  m('Cuti karena alasan penting diberikan paling lama ...', '1 bulan', ['2 minggu', '3 bulan', '6 hari kerja'], 'Cuti karena alasan penting paling lama 1 bulan.'),
  m('Cuti di luar tanggungan negara (CLTN) dapat diberikan kepada PNS yang telah bekerja paling singkat ...', '5 tahun secara terus-menerus', ['1 tahun', '3 tahun', '10 tahun'], 'CLTN paling lama 3 tahun bagi PNS dengan masa kerja paling singkat 5 tahun terus-menerus.'),
  m('Lamanya cuti di luar tanggungan negara paling lama ...', '3 tahun, dan dapat diperpanjang paling lama 1 tahun', ['1 tahun tanpa perpanjangan', '2 tahun, dan dapat diperpanjang 2 tahun', '5 tahun'], 'CLTN paling lama 3 tahun dan dapat diperpanjang paling lama 1 tahun.'),
  m('Selama menjalani cuti di luar tanggungan negara, PNS ...', 'Tidak menerima penghasilan PNS', ['Tetap menerima gaji pokok', 'Menerima 50% gaji', 'Menerima tunjangan kinerja penuh'], 'Selama CLTN, PNS diberhentikan dari jabatannya dan tidak menerima penghasilan.'),
  m('Kode etik dan pembinaan jiwa korps PNS diatur dalam ...', 'PP Nomor 42 Tahun 2004', ['PP Nomor 94 Tahun 2021', 'PP Nomor 37 Tahun 2004', 'PP Nomor 10 Tahun 1983'], 'PP 42/2004 tentang Pembinaan Jiwa Korps dan Kode Etik PNS.'),
  m('Izin perkawinan dan perceraian bagi PNS diatur dalam ...', 'PP Nomor 10 Tahun 1983 jo. PP Nomor 45 Tahun 1990', ['PP Nomor 42 Tahun 2004', 'PP Nomor 11 Tahun 2017', 'UU Nomor 1 Tahun 1974 saja'], 'PP 10/1983 sebagaimana diubah PP 45/1990.'),
  m('PNS yang melakukan perceraian wajib memperoleh ... terlebih dahulu.', 'Izin atau surat keterangan dari pejabat', ['Persetujuan rekan kerja', 'Rekomendasi KORPRI saja', 'Persetujuan BKN'], 'PNS wajib memperoleh izin/surat keterangan pejabat sebelum bercerai (PP 10/1983 jo. PP 45/1990).'),
  m('Manajemen PNS diatur dalam ...', 'PP Nomor 11 Tahun 2017 sebagaimana diubah dengan PP Nomor 17 Tahun 2020', ['PP Nomor 94 Tahun 2021', 'PP Nomor 49 Tahun 2018', 'PP Nomor 30 Tahun 2019'], 'PP 11/2017 jo. PP 17/2020 tentang Manajemen PNS (sedang disiapkan PP Manajemen ASN baru sebagai turunan UU 20/2023).'),
  m('Manajemen Pegawai Pemerintah dengan Perjanjian Kerja (PPPK) diatur dalam ...', 'PP Nomor 49 Tahun 2018', ['PP Nomor 11 Tahun 2017', 'PP Nomor 98 Tahun 2000', 'PP Nomor 94 Tahun 2021'], 'PP 49/2018 tentang Manajemen PPPK.'),
    m('Pengambilan sumpah/janji PNS dilakukan ...', 'Setelah CPNS diangkat menjadi PNS', ['Sebelum mengikuti seleksi', 'Saat menerima SK CPNS', 'Saat naik pangkat pertama'], 'Setiap CPNS yang diangkat menjadi PNS wajib mengucapkan sumpah/janji PNS.'),
  m('Pemberhentian PNS karena melakukan tindak pidana kejahatan jabatan yang berhubungan dengan jabatan dengan putusan pengadilan berkekuatan hukum tetap adalah ...', 'Diberhentikan tidak dengan hormat', ['Diberhentikan dengan hormat atas permintaan sendiri', 'Diberhentikan sementara saja', 'Dipindahkan ke jabatan pelaksana'], 'Tindak pidana kejahatan jabatan yang berkaitan dengan jabatan berujung pemberhentian tidak dengan hormat.'),
  m('PNS yang ditahan karena menjadi tersangka tindak pidana ...', 'Diberhentikan sementara sebagai PNS', ['Langsung diberhentikan tidak dengan hormat', 'Tetap bekerja seperti biasa', 'Dipindahkan ke instansi lain'], 'PNS yang ditahan karena menjadi tersangka diberhentikan sementara.'),
  m('Tanda kehormatan Satyalancana Karya Satya diberikan kepada PNS atas dasar ...', 'Kesetiaan, pengabdian, kecakapan, kejujuran, dan kedisiplinan dalam masa kerja tertentu', ['Prestasi olahraga', 'Lulus ujian dinas', 'Kenaikan pangkat pilihan'], 'Satyalancana Karya Satya diberikan untuk masa kerja 10, 20, dan 30 tahun.'),
  m('Satyalancana Karya Satya diberikan kepada PNS dengan masa kerja ...', '10, 20, dan 30 tahun', ['5, 10, dan 15 tahun', '8, 16, dan 24 tahun', '15, 25, dan 35 tahun'], 'Karya Satya X, XX, dan XXX tahun.'),
  m('Sistem merit dalam manajemen ASN adalah kebijakan dan manajemen ASN yang berdasarkan ...', 'Kualifikasi, kompetensi, dan kinerja secara adil dan wajar tanpa diskriminasi', ['Senioritas dan masa kerja', 'Kedekatan dengan pimpinan', 'Asal daerah dan golongan'], 'Definisi sistem merit dalam UU ASN.'),
  m('Aplikasi BKN yang digunakan PNS untuk mengelola data kepegawaian secara mandiri adalah ...', 'MyASN / SIASN', ['SAKTI', 'SIMAK-BMN', 'SPSE'], 'SIASN/MyASN untuk data kepegawaian; SAKTI keuangan; SPSE pengadaan.'),
  m('Kenaikan pangkat PNS yang diberikan karena menduduki jabatan tertentu atau prestasi luar biasa disebut kenaikan pangkat ...', 'Pilihan', ['Reguler', 'Anumerta', 'Pengabdian'], 'Kenaikan pangkat pilihan diberikan kepada PNS yang menduduki jabatan struktural/fungsional tertentu atau berprestasi luar biasa.'),
  m('Kenaikan pangkat yang diberikan kepada PNS yang tewas dalam menjalankan tugas disebut kenaikan pangkat ...', 'Anumerta', ['Pengabdian', 'Pilihan', 'Istimewa'], 'Kenaikan pangkat anumerta untuk PNS yang tewas.'),
  m('Kenaikan pangkat yang diberikan kepada PNS yang akan diberhentikan dengan hormat dengan hak pensiun karena mencapai batas usia pensiun disebut kenaikan pangkat ...', 'Pengabdian', ['Anumerta', 'Reguler', 'Pilihan'], 'Kenaikan pangkat pengabdian menjelang pensiun.'),
];

// Pangkat golongan
const pangkat = [
  ['I/a', 'Juru Muda'], ['I/b', 'Juru Muda Tingkat I'], ['I/c', 'Juru'], ['I/d', 'Juru Tingkat I'],
  ['II/a', 'Pengatur Muda'], ['II/b', 'Pengatur Muda Tingkat I'], ['II/c', 'Pengatur'], ['II/d', 'Pengatur Tingkat I'],
  ['III/a', 'Penata Muda'], ['III/b', 'Penata Muda Tingkat I'], ['III/c', 'Penata'], ['III/d', 'Penata Tingkat I'],
  ['IV/a', 'Pembina'], ['IV/b', 'Pembina Tingkat I'], ['IV/c', 'Pembina Utama Muda'], ['IV/d', 'Pembina Utama Madya'], ['IV/e', 'Pembina Utama'],
];
const pangkatQs = fromTable(pangkat, {
  qa: (a) => `Nama pangkat PNS untuk golongan ruang ${a} adalah ...`,
  qb: (b) => `Pangkat ${b} setara dengan golongan ruang ...`,
  expl: (r) => `Golongan ruang ${r[0]} = ${r[1]}.`,
});

// Hukuman disiplin
const hukdis = [
  ['Teguran lisan', 'Hukuman disiplin ringan'],
  ['Teguran tertulis', 'Hukuman disiplin ringan'],
  ['Pernyataan tidak puas secara tertulis', 'Hukuman disiplin ringan'],
  ['Pemotongan tunjangan kinerja 25% selama 6 bulan', 'Hukuman disiplin sedang'],
  ['Pemotongan tunjangan kinerja 25% selama 9 bulan', 'Hukuman disiplin sedang'],
  ['Pemotongan tunjangan kinerja 25% selama 12 bulan', 'Hukuman disiplin sedang'],
  ['Penurunan jabatan setingkat lebih rendah selama 12 bulan', 'Hukuman disiplin berat'],
  ['Pembebasan dari jabatannya menjadi jabatan pelaksana selama 12 bulan', 'Hukuman disiplin berat'],
  ['Pemberhentian dengan hormat tidak atas permintaan sendiri sebagai PNS', 'Hukuman disiplin berat'],
];
const TINGKAT = ['Hukuman disiplin ringan', 'Hukuman disiplin sedang', 'Hukuman disiplin berat', 'Bukan hukuman disiplin'];
const hukdisQs = hukdis.map(([h, t]) =>
  m(`Menurut PP 94 Tahun 2021, "${h.toLowerCase()}" termasuk jenis ...`, t, TINGKAT.filter((x) => x !== t), `PP 94/2021: ${h} termasuk ${t.toLowerCase()}.`)
);

// Ketidakhadiran kumulatif (PP 94/2021)
const absen = [
  ['3 hari kerja', 'Teguran lisan'],
  ['4 sampai dengan 6 hari kerja', 'Teguran tertulis'],
  ['7 sampai dengan 10 hari kerja', 'Pernyataan tidak puas secara tertulis'],
  ['11 sampai dengan 13 hari kerja', 'Pemotongan tunjangan kinerja 25% selama 6 bulan'],
  ['14 sampai dengan 16 hari kerja', 'Pemotongan tunjangan kinerja 25% selama 9 bulan'],
  ['17 sampai dengan 20 hari kerja', 'Pemotongan tunjangan kinerja 25% selama 12 bulan'],
  ['21 sampai dengan 24 hari kerja', 'Penurunan jabatan setingkat lebih rendah selama 12 bulan'],
  ['25 sampai dengan 27 hari kerja', 'Pembebasan dari jabatan menjadi jabatan pelaksana selama 12 bulan'],
  ['28 hari kerja atau lebih', 'Pemberhentian dengan hormat tidak atas permintaan sendiri sebagai PNS'],
];
const absenQs = fromTable(absen, {
  qa: (a) => `Menurut PP 94/2021, PNS yang tidak masuk kerja tanpa alasan yang sah secara kumulatif selama ${a} dalam satu tahun dijatuhi hukuman ...`,
  expl: (r) => `Tidak masuk kerja tanpa alasan sah ${r[0]} (kumulatif setahun) → ${r[1].toLowerCase()}.`,
});

// Peraturan
const aturan = [
  ['UU Nomor 20 Tahun 2023', 'Aparatur Sipil Negara'],
  ['PP Nomor 94 Tahun 2021', 'Disiplin Pegawai Negeri Sipil'],
  ['PP Nomor 11 Tahun 2017', 'Manajemen Pegawai Negeri Sipil'],
  ['PP Nomor 49 Tahun 2018', 'Manajemen Pegawai Pemerintah dengan Perjanjian Kerja'],
  ['PP Nomor 42 Tahun 2004', 'Pembinaan Jiwa Korps dan Kode Etik PNS'],
  ['PP Nomor 30 Tahun 2019', 'Penilaian Kinerja Pegawai Negeri Sipil'],
  ['PermenPANRB Nomor 6 Tahun 2022', 'Pengelolaan Kinerja Pegawai Aparatur Sipil Negara'],
  ['PP Nomor 37 Tahun 2004', 'Larangan PNS menjadi anggota partai politik'],
  ['UU Nomor 30 Tahun 2014', 'Administrasi Pemerintahan'],
  ['UU Nomor 25 Tahun 2009', 'Pelayanan Publik'],
  ['UU Nomor 14 Tahun 2008', 'Keterbukaan Informasi Publik'],
  ['UU Nomor 28 Tahun 1999', 'Penyelenggaraan Negara yang Bersih dan Bebas dari Korupsi, Kolusi, dan Nepotisme'],
  ['UU Nomor 31 Tahun 1999 jo. UU Nomor 20 Tahun 2001', 'Pemberantasan Tindak Pidana Korupsi'],
  ['UU Nomor 12 Tahun 2011', 'Pembentukan Peraturan Perundang-undangan'],
  ['UU Nomor 27 Tahun 2022', 'Pelindungan Data Pribadi'],
  ['Perpres Nomor 95 Tahun 2018', 'Sistem Pemerintahan Berbasis Elektronik (SPBE)'],
];
const aturanQs = fromTable(aturan, {
  qa: (a) => `${a} mengatur tentang ...`,
  qb: (b) => `Peraturan yang mengatur tentang ${b} adalah ...`,
});

export default [...manual, ...pangkatQs, ...hukdisQs, ...absenQs, ...aturanQs];
