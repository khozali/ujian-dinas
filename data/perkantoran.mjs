import { m, fromTable } from './_helpers.mjs';

const manual = [
  m('Menurut UU Nomor 43 Tahun 2009 tentang Kearsipan, arsip yang frekuensi penggunaannya tinggi dan/atau terus-menerus disebut ...', 'Arsip aktif', ['Arsip inaktif', 'Arsip statis', 'Arsip vital'], 'Arsip aktif digunakan secara langsung dan terus-menerus.'),
  m('Arsip yang frekuensi penggunaannya telah menurun disebut ...', 'Arsip inaktif', ['Arsip aktif', 'Arsip statis', 'Arsip terjaga'], 'Arsip inaktif disimpan di unit kearsipan/records center.'),
  m('Arsip yang memiliki nilai guna kesejarahan, telah habis retensinya, dan berketerangan dipermanenkan disebut ...', 'Arsip statis', ['Arsip vital', 'Arsip inaktif', 'Arsip dinamis'], 'Arsip statis diserahkan ke lembaga kearsipan (ANRI/daerah).'),
  m('Arsip yang keberadaannya merupakan persyaratan dasar bagi kelangsungan operasional organisasi dan tidak dapat diperbarui jika rusak atau hilang disebut ...', 'Arsip vital', ['Arsip statis', 'Arsip terjaga', 'Arsip aktif'], 'Definisi arsip vital menurut UU 43/2009.'),
  m('Arsip yang berkaitan dengan keberadaan dan kelangsungan hidup bangsa dan negara yang harus dijaga keutuhan dan keamanannya disebut ...', 'Arsip terjaga', ['Arsip vital', 'Arsip statis', 'Arsip inaktif'], 'Arsip terjaga misalnya arsip kependudukan, kewilayahan, dan perjanjian internasional.'),
  m('Arsip dinamis terdiri atas ...', 'Arsip vital, arsip aktif, dan arsip inaktif', ['Arsip statis dan arsip terjaga', 'Arsip aktif dan arsip statis', 'Arsip konvensional dan elektronik'], 'UU 43/2009: arsip dinamis meliputi arsip vital, aktif, dan inaktif.'),
  m('Lembaga kearsipan nasional di Indonesia adalah ...', 'Arsip Nasional Republik Indonesia (ANRI)', ['Perpustakaan Nasional', 'Badan Kepegawaian Negara', 'Badan Pusat Statistik'], 'ANRI adalah lembaga kearsipan berbentuk LPNK.'),
  m('Daftar yang berisi jangka waktu penyimpanan arsip, jenis arsip, dan keterangan rekomendasi musnah/permanen/dinilai kembali disebut ...', 'Jadwal Retensi Arsip (JRA)', ['Daftar Isi Berkas', 'Buku Agenda', 'Klasifikasi Arsip'], 'JRA menjadi pedoman penyusutan arsip.'),
  m('Kegiatan pengurangan jumlah arsip dengan cara pemindahan, pemusnahan, dan penyerahan arsip statis disebut ...', 'Penyusutan arsip', ['Penataan arsip', 'Alih media arsip', 'Akuisisi arsip'], 'Penyusutan arsip menurut UU 43/2009.'),
  m('Pemindahan arsip inaktif dari unit pengolah ke unit kearsipan termasuk kegiatan ...', 'Penyusutan arsip', ['Pemusnahan arsip', 'Akuisisi arsip statis', 'Peminjaman arsip'], 'Pemindahan adalah salah satu bentuk penyusutan.'),
  m('Pemusnahan arsip dilakukan terhadap arsip yang ...', 'Tidak memiliki nilai guna, telah habis retensinya, dan berketerangan dimusnahkan berdasarkan JRA', ['Masih sering digunakan', 'Memiliki nilai guna kesejarahan', 'Berklasifikasi rahasia'], 'Syarat pemusnahan arsip menurut UU 43/2009.'),
  m('Kegiatan mengubah media arsip, misalnya dari kertas ke format digital, disebut ...', 'Alih media arsip', ['Penyusutan arsip', 'Autentikasi arsip', 'Pemberkasan arsip'], 'Alih media dilakukan untuk efisiensi penyimpanan dan pengamanan informasi.'),
  m('Petunjuk tertulis pimpinan pada surat masuk mengenai tindak lanjut yang harus dilakukan disebut ...', 'Disposisi', ['Nota dinas', 'Memo', 'Surat edaran'], 'Disposisi ditulis pada lembar disposisi.'),
  m('Buku yang digunakan untuk mencatat surat masuk dan surat keluar disebut ...', 'Buku agenda', ['Buku ekspedisi', 'Buku tamu', 'Buku inventaris'], 'Buku agenda mencatat nomor, tanggal, perihal, dan asal/tujuan surat.'),
  m('Buku yang digunakan sebagai bukti pengiriman/serah terima surat disebut ...', 'Buku ekspedisi', ['Buku agenda', 'Buku arsip', 'Buku kas'], 'Penerima surat menandatangani buku ekspedisi.'),
  m('Sistem pengurusan surat yang menggunakan kartu berwarna untuk mencatat dan mengendalikan surat disebut sistem ...', 'Kartu kendali', ['Buku agenda', 'Arsip numerik', 'Takah'], 'Kartu kendali biasanya dibuat rangkap tiga dengan warna berbeda.'),
  m('Tata naskah dinas yang menyimpan surat-surat mengenai satu masalah dalam satu map secara kronologis disebut sistem ...', 'Takah (tata naskah)', ['Kartu kendali', 'Buku agenda', 'Ekspedisi'], 'Sistem takah menghimpun naskah satu masalah dalam satu berkas.'),
  m('Bagian surat yang berisi pokok isi surat secara singkat disebut ...', 'Hal/perihal', ['Lampiran', 'Tembusan', 'Salam pembuka'], 'Hal/perihal menyatakan pokok isi surat.'),
  m('Bagian surat yang menunjukkan pihak lain yang perlu mengetahui isi surat disebut ...', 'Tembusan', ['Lampiran', 'Alamat tujuan', 'Inisial'], 'Tembusan ditulis di kiri bawah surat.'),
  m('Kop surat dinas memuat ...', 'Nama, alamat, dan identitas instansi', ['Nama penerima surat', 'Isi pokok surat', 'Daftar lampiran'], 'Kop (kepala) surat menunjukkan identitas instansi pengirim.'),
  m('Penulisan tanggal surat dinas yang benar adalah ...', '7 November 2026', ['07-11-2026', 'Nopember 7, 2026', '7 Nop. 2026'], 'Tanggal surat ditulis lengkap dengan nama bulan tanpa disingkat.'),
  m('Fungsi manajemen menurut George R. Terry dikenal dengan singkatan ...', 'POAC', ['SWOT', 'PDCA', 'SMART'], 'POAC: Planning, Organizing, Actuating, Controlling.'),
  m('Fungsi manajemen yang berupa kegiatan menetapkan tujuan dan cara mencapainya disebut ...', 'Perencanaan (planning)', ['Pengorganisasian (organizing)', 'Pelaksanaan (actuating)', 'Pengawasan (controlling)'], 'Planning adalah fungsi pertama manajemen.'),
  m('Fungsi manajemen yang berupa kegiatan membandingkan hasil kerja dengan rencana serta melakukan koreksi disebut ...', 'Pengawasan (controlling)', ['Perencanaan (planning)', 'Pengorganisasian (organizing)', 'Pengarahan (directing)'], 'Controlling memastikan pelaksanaan sesuai rencana.'),
  m('Tata ruang kantor yang tidak menggunakan sekat permanen dan menempatkan pegawai dalam satu ruangan besar disebut tata ruang ...', 'Terbuka', ['Tertutup', 'Berhias', 'Terpisah'], 'Tata ruang terbuka memudahkan pengawasan dan komunikasi.'),
  m('Tata ruang kantor yang menggunakan tanaman dan dekorasi untuk menciptakan suasana nyaman disebut tata ruang ...', 'Berhias (landscape)', ['Terbuka', 'Tertutup', 'Gabungan'], 'Tata ruang berhias/landscape office.'),
  m('Kelebihan tata ruang kantor tertutup adalah ...', 'Menjamin konsentrasi kerja dan kerahasiaan', ['Pengawasan lebih mudah', 'Biaya lebih murah', 'Komunikasi antarpegawai lebih cepat'], 'Ruang tertutup menjaga privasi dan kerahasiaan.'),
  m('Catatan resmi tentang jalannya rapat yang memuat pembicaraan dan keputusan rapat disebut ...', 'Notula', ['Agenda rapat', 'Undangan rapat', 'Daftar hadir'], 'Notula dibuat oleh notulis rapat.'),
  m('Susunan acara yang akan dibahas dalam rapat disebut ...', 'Agenda rapat', ['Notula', 'Risalah', 'Memo'], 'Agenda rapat biasanya dicantumkan dalam undangan.'),
  m('Saat menerima telepon di kantor, sikap yang paling tepat adalah ...', 'Mengucapkan salam, menyebut nama instansi/unit, dan menanyakan keperluan penelepon', ['Langsung menanyakan nama penelepon tanpa salam', 'Membiarkan telepon berdering beberapa kali', 'Menyerahkan telepon ke rekan tanpa bicara'], 'Etika bertelepon kantor: salam, identitas, dan sopan.'),
  m('Prinsip kerja kantor yang mengutamakan hasil maksimal dengan sumber daya minimal disebut ...', 'Efisiensi', ['Efektivitas', 'Produktivitas', 'Akuntabilitas'], 'Efisiensi = perbandingan terbaik antara masukan dan keluaran.'),
  m('Prinsip kerja yang menekankan tercapainya tujuan/sasaran yang telah ditetapkan disebut ...', 'Efektivitas', ['Efisiensi', 'Ekonomis', 'Transparansi'], 'Efektif berarti tepat sasaran.'),
  m('Penerapan sistem pemerintahan berbasis elektronik di instansi pemerintah diatur dalam ...', 'Perpres Nomor 95 Tahun 2018', ['UU Nomor 43 Tahun 2009', 'PP Nomor 94 Tahun 2021', 'UU Nomor 14 Tahun 2008'], 'Perpres 95/2018 tentang SPBE.'),
  m('Aplikasi umum bidang kearsipan dinamis yang dikembangkan ANRI untuk instansi pemerintah adalah ...', 'SRIKANDI', ['SAKTI', 'SIASN', 'SPSE'], 'SRIKANDI: Sistem Informasi Kearsipan Dinamis Terintegrasi.'),
];

// Sistem penyimpanan arsip
const sistem = [
  ['Sistem abjad', 'Berdasarkan urutan huruf awal nama orang, organisasi, atau instansi'],
  ['Sistem nomor (numerik)', 'Berdasarkan kode angka yang ditetapkan untuk setiap masalah atau berkas'],
  ['Sistem wilayah (geografis)', 'Berdasarkan pembagian wilayah atau daerah asal/tujuan surat'],
  ['Sistem subjek (masalah)', 'Berdasarkan pokok masalah atau isi surat'],
  ['Sistem kronologis (tanggal)', 'Berdasarkan urutan tanggal, bulan, dan tahun surat'],
];
const sistemQs = fromTable(sistem, {
  qa: (a) => `Dalam penyimpanan arsip, ${a.toLowerCase()} adalah penyimpanan ...`,
  qb: (b) => `Sistem penyimpanan arsip yang dilakukan ${b.toLowerCase()} disebut ...`,
});

// Peralatan kantor
const alat = [
  ['Mesin penghancur kertas (paper shredder)', 'Menghancurkan dokumen yang sudah tidak digunakan agar isinya tidak terbaca'],
  ['Perforator', 'Melubangi kertas agar dapat disimpan dalam ordner'],
  ['Ordner (odner)', 'Menyimpan arsip yang sudah dilubangi dengan penjepit besi'],
  ['Filing cabinet', 'Lemari laci untuk menyimpan arsip dalam map gantung'],
  ['Guide (sekat petunjuk)', 'Penunjuk dan pemisah kelompok arsip dalam laci'],
  ['Tickler file', 'Alat pengingat arsip yang perlu ditindaklanjuti pada tanggal tertentu'],
  ['Stapler', 'Menyatukan beberapa lembar kertas dengan isi staples'],
  ['Laminator', 'Melapisi dokumen dengan plastik agar awet'],
  ['Pemindai (scanner)', 'Mengubah dokumen cetak menjadi berkas digital'],
  ['Mesin fotokopi', 'Menggandakan dokumen dalam jumlah banyak dengan cepat'],
  ['Kartu indeks', 'Mencatat kode penyimpanan untuk memudahkan penemuan kembali arsip'],
];
const alatQs = fromTable(alat, {
  qa: (a) => `Fungsi ${a.toLowerCase()} dalam kegiatan perkantoran adalah ...`,
  qb: (b) => `Peralatan kantor yang berfungsi untuk ${b.toLowerCase()} adalah ...`,
});

// Bagian surat
const bagian = [
  ['Lampiran', 'Menunjukkan jumlah berkas atau dokumen yang disertakan bersama surat'],
  ['Tembusan', 'Menunjukkan pihak lain yang perlu mengetahui isi surat'],
  ['Hal/perihal', 'Menyatakan pokok isi surat secara singkat'],
  ['Nomor surat', 'Menunjukkan kode dan urutan surat untuk keperluan pengarsipan'],
  ['Kop surat', 'Menunjukkan identitas instansi pengirim'],
  ['Inisial', 'Menunjukkan kode pengonsep dan pengetik surat'],
];
const bagianQs = fromTable(bagian, {
  qb: (b) => `Bagian surat dinas yang berfungsi ${b.toLowerCase()} adalah ...`,
});

export default [...manual, ...sistemQs, ...alatQs, ...bagianQs];
