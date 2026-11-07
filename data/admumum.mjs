import { m, fromTable, pickDistractors } from './_helpers.mjs';

const manual = [
  // Naskah dinas & tata usaha
  m('Urutan klasifikasi keamanan naskah dinas dari tingkat tertinggi adalah ...', 'Sangat Rahasia – Rahasia – Terbatas – Biasa', ['Rahasia – Sangat Rahasia – Terbatas – Biasa', 'Sangat Rahasia – Terbatas – Rahasia – Biasa', 'Terbatas – Rahasia – Sangat Rahasia – Biasa'], 'SR, R, T, lalu Biasa/Terbuka.'),
  m('Naskah dinas dengan derajat kecepatan "Amat Segera/Kilat" pada umumnya harus diselesaikan dalam waktu ...', '24 jam', ['2 x 24 jam', '3 x 24 jam', '1 minggu'], 'Amat Segera/Kilat: 24 jam; Segera: 2 x 24 jam; Biasa: sesuai urutan. Cocokkan dengan aturan tata naskah dinas instansi.'),
  m('Singkatan "a.n." dalam penandatanganan naskah dinas digunakan apabila ...', 'Pejabat menandatangani atas nama pimpinan karena diberi kewenangan', ['Pejabat definitif berhalangan tetap', 'Surat ditujukan melalui pihak lain', 'Pejabat menandatangani untuk dirinya sendiri'], 'a.n. = atas nama.'),
  m('Singkatan "u.b." dalam penandatanganan naskah dinas digunakan apabila ...', 'Kewenangan dilimpahkan lebih lanjut kepada pejabat satu tingkat di bawah pejabat yang menerima pelimpahan a.n.', ['Pejabat berhalangan sementara', 'Surat bersifat rahasia', 'Surat ditandatangani pimpinan tertinggi'], 'u.b. = untuk beliau; dipakai setelah a.n.'),
  m('Menurut UU 30 Tahun 2014, pejabat yang ditunjuk karena pejabat definitif berhalangan SEMENTARA disebut ...', 'Pelaksana Harian (Plh.)', ['Pelaksana Tugas (Plt.)', 'Penjabat (Pj.)', 'Kuasa Pengguna'], 'Plh. untuk berhalangan sementara; Plt. untuk berhalangan tetap.'),
  m('Menurut UU 30 Tahun 2014, pejabat yang ditunjuk karena pejabat definitif berhalangan TETAP disebut ...', 'Pelaksana Tugas (Plt.)', ['Pelaksana Harian (Plh.)', 'Wakil Pejabat', 'Pejabat Pengganti Antarwaktu'], 'Plt. untuk berhalangan tetap.'),
  m('Pelaksana Harian (Plh.) dan Pelaksana Tugas (Plt.) tidak berwenang mengambil keputusan yang bersifat strategis yang berdampak pada ...', 'Perubahan status hukum pada aspek organisasi, kepegawaian, dan alokasi anggaran', ['Pelaksanaan tugas rutin', 'Penandatanganan surat biasa', 'Pemberian disposisi'], 'UU 30/2014 Pasal 14 ayat (7).'),
  m('Bentuk naskah dinas yang memuat kajian singkat tentang suatu masalah disertai saran pemecahan untuk pimpinan dalam pengambilan keputusan adalah ...', 'Telaahan staf', ['Nota dinas', 'Surat edaran', 'Berita acara'], 'Telaahan staf lazim di lingkungan TNI untuk membantu pimpinan mengambil keputusan.'),
  m('Susunan telaahan staf yang lazim digunakan di lingkungan TNI diawali dengan bagian ...', 'Persoalan', ['Kesimpulan', 'Saran tindak', 'Lampiran'], 'Telaahan staf: persoalan, praanggapan, fakta-fakta yang mempengaruhi, pembahasan/diskusi, kesimpulan, dan saran/tindakan yang disarankan.'),
  m('Paraf hierarki pada konsep naskah dinas menunjukkan ...', 'Tanggung jawab pejabat yang menyiapkan naskah atas substansi dan redaksinya', ['Bahwa naskah sudah dikirim', 'Persetujuan penerima surat', 'Jumlah tembusan'], 'Paraf diberikan sebelum naskah ditandatangani pejabat berwenang.'),
  m('Aplikasi kearsipan dan persuratan elektronik yang dikembangkan ANRI untuk instansi pemerintah adalah ...', 'SRIKANDI', ['SAKTI', 'SIRUP', 'SIASN'], 'SRIKANDI: Sistem Informasi Kearsipan Dinamis Terintegrasi.'),
  // Keuangan
  m('Tahun anggaran APBN berlaku mulai ...', '1 Januari sampai dengan 31 Desember', ['1 April sampai dengan 31 Maret', '1 Juli sampai dengan 30 Juni', 'Tanggal pengesahan DIPA sampai satu tahun kemudian'], 'UU 17/2003 Pasal 4.'),
  m('Undang-undang tentang Keuangan Negara adalah ...', 'UU Nomor 17 Tahun 2003', ['UU Nomor 1 Tahun 2004', 'UU Nomor 15 Tahun 2004', 'UU Nomor 33 Tahun 2004'], 'Paket UU keuangan negara: UU 17/2003, UU 1/2004, UU 15/2004.'),
  m('Undang-undang tentang Perbendaharaan Negara adalah ...', 'UU Nomor 1 Tahun 2004', ['UU Nomor 17 Tahun 2003', 'UU Nomor 15 Tahun 2004', 'UU Nomor 25 Tahun 2004'], 'UU 1/2004 tentang Perbendaharaan Negara.'),
  m('Undang-undang tentang Pemeriksaan Pengelolaan dan Tanggung Jawab Keuangan Negara adalah ...', 'UU Nomor 15 Tahun 2004', ['UU Nomor 17 Tahun 2003', 'UU Nomor 1 Tahun 2004', 'UU Nomor 15 Tahun 2006'], 'UU 15/2004.'),
  m('Bendahara Umum Negara (BUN) adalah ...', 'Menteri Keuangan', ['Gubernur Bank Indonesia', 'Ketua BPK', 'Presiden'], 'UU 1/2004: Menteri Keuangan adalah BUN.'),
  m('Laporan keuangan pemerintah pusat diperiksa oleh ...', 'Badan Pemeriksa Keuangan (BPK)', ['BPKP', 'Inspektorat Jenderal', 'KPK'], 'BPK adalah pemeriksa eksternal keuangan negara.'),
  m('Opini tertinggi yang diberikan BPK atas laporan keuangan adalah ...', 'Wajar Tanpa Pengecualian (WTP)', ['Wajar Dengan Pengecualian (WDP)', 'Tidak Wajar (TW)', 'Tidak Menyatakan Pendapat (TMP)'], 'Opini BPK: WTP, WDP, TW, TMP (disclaimer).'),
  m('Komponen laporan keuangan berbasis akrual tingkat satuan kerja antara lain ...', 'Laporan Realisasi Anggaran, Neraca, Laporan Operasional, Laporan Perubahan Ekuitas, dan Catatan atas Laporan Keuangan', ['Neraca dan buku kas umum saja', 'Laporan arus kas dan laporan laba rugi', 'DIPA dan POK'], 'Komponen laporan keuangan satker menurut SAP berbasis akrual.'),
  m('Aplikasi terintegrasi yang digunakan satuan kerja untuk mengelola keuangan dan aset mulai dari perencanaan hingga pertanggungjawaban adalah ...', 'SAKTI', ['SPSE', 'SIRUP', 'SRIKANDI'], 'SAKTI = Sistem Aplikasi Keuangan Tingkat Instansi.'),
  m('Pembayaran yang dilakukan langsung kepada penerima hak atau penyedia barang/jasa disebut mekanisme ...', 'Pembayaran LS (langsung)', ['Uang Persediaan (UP)', 'Tambahan Uang Persediaan (TUP)', 'Ganti Uang (GU)'], 'LS = langsung kepada penerima hak.'),
  // SPIP / akuntabilitas
  m('Sistem Pengendalian Intern Pemerintah (SPIP) diatur dalam ...', 'PP Nomor 60 Tahun 2008', ['PP Nomor 27 Tahun 2014', 'Perpres Nomor 29 Tahun 2014', 'PP Nomor 94 Tahun 2021'], 'PP 60/2008 tentang SPIP.'),
  m('Aparat Pengawasan Intern Pemerintah (APIP) di lingkungan kementerian adalah ...', 'Inspektorat Jenderal', ['BPK', 'Ombudsman', 'Komisi Yudisial'], 'APIP: BPKP, Itjen/Inspektorat Utama, dan Inspektorat daerah.'),
  m('Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP) diatur dalam ...', 'Perpres Nomor 29 Tahun 2014', ['PP Nomor 60 Tahun 2008', 'UU Nomor 25 Tahun 2009', 'PermenPANRB Nomor 6 Tahun 2022'], 'Perpres 29/2014 tentang SAKIP.'),
  m('Predikat yang diberikan kepada unit kerja yang berhasil membangun Zona Integritas menuju bebas korupsi adalah ...', 'Wilayah Bebas dari Korupsi (WBK)', ['Wajar Tanpa Pengecualian (WTP)', 'Satyalancana Karya Satya', 'Adipura'], 'Predikat ZI: WBK, lalu WBBM (Wilayah Birokrasi Bersih dan Melayani).'),
  m('Lembaga negara yang berwenang mengawasi penyelenggaraan pelayanan publik adalah ...', 'Ombudsman Republik Indonesia', ['Badan Pemeriksa Keuangan', 'Komisi Aparatur Sipil Negara', 'Mahkamah Agung'], 'UU 37/2008 dan UU 25/2009.'),
  m('Pejabat yang bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan, dan pelayanan informasi publik di badan publik disebut ...', 'PPID', ['PPK', 'PPSPM', 'APIP'], 'PPID = Pejabat Pengelola Informasi dan Dokumentasi (UU 14/2008).'),
  m('Pernyataan tertulis penyelenggara pelayanan untuk melaksanakan pelayanan sesuai standar pelayanan disebut ...', 'Maklumat pelayanan', ['Standar operasional prosedur', 'Pakta integritas', 'Surat edaran'], 'UU 25/2009 tentang Pelayanan Publik.'),
  m('Dokumen yang berisi tahapan dan langkah baku dalam menyelesaikan suatu pekerjaan di instansi pemerintah disebut ...', 'Standar Operasional Prosedur (SOP)', ['Rencana Strategis', 'Analisis Jabatan', 'Petunjuk Operasional Kegiatan'], 'SOP adalah serangkaian instruksi tertulis yang dibakukan.'),
  // PBJ
  m('Peraturan tentang Pengadaan Barang/Jasa Pemerintah adalah ...', 'Perpres Nomor 16 Tahun 2018 beserta perubahannya', ['Perpres Nomor 54 Tahun 2010', 'PP Nomor 27 Tahun 2014', 'UU Nomor 1 Tahun 2004'], 'Perpres 16/2018 diubah dengan Perpres 12/2021 dan perubahan berikutnya.'),
  m('Lembaga yang bertugas mengembangkan dan merumuskan kebijakan pengadaan barang/jasa pemerintah adalah ...', 'LKPP', ['BPKP', 'BPK', 'BKN'], 'LKPP = Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah.'),
  m('Jenis pengadaan barang/jasa pemerintah terdiri atas ...', 'Barang, pekerjaan konstruksi, jasa konsultansi, dan jasa lainnya', ['Barang, jasa, dan modal', 'Barang habis pakai dan barang modal', 'Konstruksi dan nonkonstruksi'], 'Perpres 16/2018 Pasal 3.'),
  m('Berikut ini yang BUKAN prinsip pengadaan barang/jasa pemerintah adalah ...', 'Rahasia', ['Efisien', 'Transparan', 'Akuntabel'], 'Prinsip PBJ: efisien, efektif, transparan, terbuka, bersaing, adil, akuntabel.'),
  m('Cara memperoleh barang/jasa yang dikerjakan sendiri oleh K/L/PD, K/L/PD lain, ormas, atau kelompok masyarakat disebut ...', 'Swakelola', ['Tender', 'E-purchasing', 'Penunjukan langsung'], 'Swakelola tipe I–IV.'),
  m('Swakelola yang direncanakan, dilaksanakan, dan diawasi oleh K/L/PD penanggung jawab anggaran disebut swakelola tipe ...', 'I', ['II', 'III', 'IV'], 'Tipe I: oleh K/L/PD sendiri; II: oleh K/L/PD lain; III: oleh ormas; IV: oleh kelompok masyarakat.'),
  m('Swakelola yang dilaksanakan oleh organisasi kemasyarakatan disebut swakelola tipe ...', 'III', ['I', 'II', 'IV'], 'Tipe III: ormas pelaksana swakelola.'),
  m('Sistem informasi untuk mengumumkan Rencana Umum Pengadaan (RUP) adalah ...', 'SiRUP', ['SPSE', 'SAKTI', 'SIKaP'], 'SiRUP = Sistem Informasi Rencana Umum Pengadaan.'),
  m('Aplikasi yang digunakan untuk pelaksanaan tender/seleksi secara elektronik adalah ...', 'SPSE', ['SiRUP', 'SAKTI', 'SRIKANDI'], 'SPSE = Sistem Pengadaan Secara Elektronik, dikelola melalui LPSE.'),
  m('Metode pemilihan penyedia untuk jasa konsultansi disebut ...', 'Seleksi', ['Tender', 'Tender cepat', 'E-purchasing'], 'Seleksi untuk jasa konsultansi; tender untuk barang/konstruksi/jasa lainnya.'),
  m('Metode pemilihan penyedia melalui sistem katalog elektronik disebut ...', 'E-purchasing', ['Pengadaan langsung', 'Tender', 'Seleksi'], 'E-purchasing dilakukan melalui katalog elektronik.'),
  // BMN
  m('Peraturan Pemerintah tentang Pengelolaan Barang Milik Negara/Daerah adalah ...', 'PP Nomor 27 Tahun 2014 sebagaimana diubah dengan PP Nomor 28 Tahun 2020', ['PP Nomor 6 Tahun 2006', 'PP Nomor 60 Tahun 2008', 'PP Nomor 71 Tahun 2010'], 'PP 27/2014 jo. PP 28/2020.'),
  m('Barang Milik Negara adalah semua barang yang ...', 'Dibeli atau diperoleh atas beban APBN atau berasal dari perolehan lainnya yang sah', ['Dimiliki pegawai negeri', 'Dibeli dengan APBD', 'Dimiliki BUMN'], 'Definisi BMN menurut PP 27/2014.'),
  m('Pejabat yang berwenang dan bertanggung jawab menetapkan kebijakan serta pedoman pengelolaan BMN (Pengelola Barang) adalah ...', 'Menteri Keuangan', ['Menteri Pertahanan', 'Kepala Satuan Kerja', 'Ketua BPK'], 'Menkeu adalah Pengelola Barang.'),
  m('Kepala satuan kerja yang diberi kuasa untuk menggunakan BMN yang berada dalam penguasaannya disebut ...', 'Kuasa Pengguna Barang', ['Pengelola Barang', 'Pengguna Barang', 'Pejabat Pembuat Komitmen'], 'KPB = kepala satker.'),
  m('Inventarisasi BMN berupa tanah dan/atau bangunan dilakukan paling sedikit ...', 'Sekali dalam 5 tahun', ['Sekali setahun', 'Sekali dalam 3 tahun', 'Sekali dalam 10 tahun'], 'Persediaan dan konstruksi dalam pengerjaan diinventarisasi setiap tahun.'),
  m('BMN berupa persediaan dan konstruksi dalam pengerjaan diinventarisasi ...', 'Setiap tahun', ['Sekali dalam 5 tahun', 'Sekali dalam 3 tahun', 'Hanya saat penghapusan'], 'PP 27/2014 Pasal 87.'),
  m('Daftar yang memuat barang inventaris yang berada dalam suatu ruangan disebut ...', 'Daftar Barang Ruangan (DBR)', ['Daftar Barang Lainnya (DBL)', 'Kartu Identitas Barang (KIB)', 'Laporan Barang Pengguna'], 'DBR ditempel di setiap ruangan.'),
  m('Kartu yang memuat data dan identitas BMN tertentu seperti tanah, bangunan, dan alat angkutan disebut ...', 'Kartu Identitas Barang (KIB)', ['Daftar Barang Ruangan', 'Kartu Kendali', 'Buku Inventaris Ruangan'], 'KIB mencatat identitas rinci BMN tertentu.'),
  m('Penyerahan penggunaan BMN antara pemerintah pusat dan pemerintah daerah tanpa menerima imbalan disebut ...', 'Pinjam pakai', ['Sewa', 'Hibah', 'Kerja sama pemanfaatan'], 'Pinjam pakai paling lama 5 tahun dan dapat diperpanjang.'),
  m('Pengalihan kepemilikan BMN dari pemerintah pusat kepada pihak lain dengan cara penjualan, tukar-menukar, hibah, atau penyertaan modal disebut ...', 'Pemindahtanganan', ['Pemanfaatan', 'Penghapusan', 'Penggunaan'], 'Bentuk pemindahtanganan: penjualan, tukar-menukar, hibah, penyertaan modal pemerintah pusat.'),
  m('Tindakan menghapus BMN dari daftar barang dengan menerbitkan keputusan dari pejabat berwenang disebut ...', 'Penghapusan', ['Pemindahtanganan', 'Pemusnahan', 'Penilaian'], 'Penghapusan membebaskan pengguna dari tanggung jawab administrasi dan fisik.'),
  m('Berikut ini yang termasuk bentuk pemanfaatan BMN adalah ...', 'Sewa', ['Hibah', 'Penjualan', 'Penyertaan modal pemerintah pusat'], 'Bentuk pemanfaatan: sewa, pinjam pakai, KSP, BGS/BSG, KSPI, dan KETUPI. Hibah, penjualan, dan PMPP adalah pemindahtanganan.'),
  m('Keputusan yang menetapkan BMN digunakan oleh Pengguna Barang untuk menyelenggarakan tugas dan fungsinya disebut ...', 'Penetapan Status Penggunaan (PSP)', ['Pemanfaatan', 'Pemindahtanganan', 'Penatausahaan'], 'PSP ditetapkan oleh Pengelola atau Pengguna Barang sesuai kewenangan.'),
  m('Rangkaian kegiatan pembukuan, inventarisasi, dan pelaporan BMN disebut ...', 'Penatausahaan', ['Pemanfaatan', 'Penilaian', 'Pengamanan'], 'Penatausahaan meliputi pembukuan, inventarisasi, dan pelaporan.'),
];

// Istilah keuangan
const keu = [
  ['DIPA', 'Dokumen pelaksanaan anggaran yang dibuat Pengguna Anggaran/KPA dan disahkan oleh BUN'],
  ['RKA-K/L', 'Dokumen perencanaan anggaran yang memuat program dan kegiatan kementerian/lembaga'],
  ['POK', 'Uraian rinci DIPA yang menjadi pedoman operasional pelaksanaan kegiatan satker'],
  ['SPP', 'Dokumen yang diterbitkan PPK untuk mengajukan permintaan pembayaran'],
  ['SPM', 'Dokumen yang diterbitkan PPSPM untuk mencairkan dana yang bersumber dari DIPA'],
  ['SP2D', 'Surat perintah yang diterbitkan KPPN selaku Kuasa BUN untuk pelaksanaan pengeluaran atas beban APBN'],
  ['Uang Persediaan (UP)', 'Uang muka kerja dalam jumlah tertentu untuk membiayai kegiatan operasional sehari-hari satker'],
  ['Tambahan Uang Persediaan (TUP)', 'Uang muka yang diberikan apabila kebutuhan dana melebihi pagu uang persediaan'],
  ['KPPN', 'Instansi vertikal Ditjen Perbendaharaan yang menerbitkan SP2D'],
];
const keuQs = fromTable(keu, {
  qa: (a) => `Dalam pengelolaan keuangan negara, yang dimaksud dengan ${a} adalah ...`,
  qb: (b) => `${b} disebut ...`,
});

// Pejabat perbendaharaan
const pejabat = [
  ['Pengguna Anggaran (PA)', 'Pejabat pemegang kewenangan penggunaan anggaran kementerian/lembaga'],
  ['Kuasa Pengguna Anggaran (KPA)', 'Pejabat yang memperoleh kuasa dari PA untuk melaksanakan sebagian kewenangan PA'],
  ['Pejabat Pembuat Komitmen (PPK)', 'Pejabat yang berwenang mengambil keputusan/tindakan yang dapat mengakibatkan pengeluaran atas beban APBN'],
  ['Pejabat Penanda Tangan SPM (PPSPM)', 'Pejabat yang berwenang menguji tagihan dan menerbitkan SPM'],
  ['Bendahara Pengeluaran', 'Orang yang ditunjuk untuk menerima, menyimpan, membayarkan, menatausahakan, dan mempertanggungjawabkan uang untuk belanja negara'],
  ['Bendahara Penerimaan', 'Orang yang ditunjuk untuk menerima, menyimpan, menyetorkan, menatausahakan, dan mempertanggungjawabkan uang pendapatan negara'],
];
const pejabatQs = fromTable(pejabat, {
  qb: (b) => `${b} disebut ...`,
  qa: (a) => `Yang dimaksud dengan ${a} adalah ...`,
});

// Jenis naskah dinas
const naskah = [
  ['Peraturan', 'Naskah dinas yang bersifat mengatur dan berlaku umum'],
  ['Keputusan', 'Naskah dinas yang berisi penetapan yang bersifat konkret, individual, dan final'],
  ['Instruksi', 'Naskah dinas berisi perintah atasan kepada bawahan untuk melaksanakan kebijakan'],
  ['Surat Edaran', 'Naskah dinas berisi pemberitahuan, penjelasan, atau petunjuk cara melaksanakan hal tertentu yang dianggap penting dan mendesak'],
  ['Surat Perintah', 'Naskah dinas dari atasan kepada bawahan berisi perintah untuk melaksanakan tugas tertentu'],
  ['Nota Dinas', 'Naskah dinas untuk komunikasi kedinasan intern antarpejabat dalam satu instansi'],
  ['Surat Kuasa', 'Naskah dinas berisi pemberian wewenang kepada pihak lain untuk bertindak atas nama pemberi wewenang'],
  ['Berita Acara', 'Naskah dinas berisi uraian proses pelaksanaan suatu kegiatan yang ditandatangani para pihak dan saksi'],
  ['Surat Keterangan', 'Naskah dinas berisi informasi mengenai kebenaran suatu hal tentang seseorang atau sesuatu'],
  ['Pengumuman', 'Naskah dinas untuk memberitahukan hal tertentu kepada khalayak luas'],
  ['Laporan', 'Naskah dinas berisi pemberitahuan tentang pelaksanaan suatu kegiatan atau kejadian'],
  ['Surat Perjanjian', 'Naskah dinas berisi kesepakatan bersama antara dua pihak atau lebih'],
];
const naskahQs = fromTable(naskah, {
  qb: (b) => `${b} disebut ...`,
});

// Swakelola, metode, pelaku PBJ
const metode = [
  ['Tender', 'Metode pemilihan untuk mendapatkan penyedia barang, pekerjaan konstruksi, atau jasa lainnya'],
  ['Seleksi', 'Metode pemilihan untuk mendapatkan penyedia jasa konsultansi'],
  ['E-purchasing', 'Tata cara pembelian barang/jasa melalui katalog elektronik'],
  ['Penunjukan Langsung', 'Metode pemilihan penyedia yang dilakukan dalam keadaan tertentu'],
  ['Pengadaan Langsung', 'Metode pemilihan penyedia untuk paket bernilai kecil sesuai batas yang ditetapkan'],
  ['Tender Cepat', 'Metode pemilihan bila spesifikasi dan volume pekerjaan sudah dapat ditentukan secara rinci dan pelaku usaha telah terkualifikasi dalam sistem informasi kinerja penyedia'],
];
const metodeQs = fromTable(metode, { qb: (b) => `Dalam pengadaan barang/jasa pemerintah, ${b.charAt(0).toLowerCase() + b.slice(1)} disebut ...` });

// SPIP
const spip = [
  'Lingkungan pengendalian', 'Penilaian risiko', 'Kegiatan pengendalian', 'Informasi dan komunikasi', 'Pemantauan pengendalian intern',
];
const bukanSpip = ['Pemeriksaan eksternal', 'Penegakan hukum', 'Pengadaan barang/jasa', 'Penyusunan anggaran', 'Audit investigatif'];
const spipQs = spip.map((s) =>
  m('Berikut ini yang termasuk unsur Sistem Pengendalian Intern Pemerintah (SPIP) menurut PP 60/2008 adalah ...', s, pickDistractors(bukanSpip, s, s), 'Lima unsur SPIP: lingkungan pengendalian, penilaian risiko, kegiatan pengendalian, informasi dan komunikasi, serta pemantauan pengendalian intern.')
);

// Bentuk pemanfaatan vs pemindahtanganan BMN
const pemanfaatan = ['Sewa', 'Pinjam pakai', 'Kerja sama pemanfaatan (KSP)', 'Bangun guna serah/bangun serah guna (BGS/BSG)', 'Kerja sama penyediaan infrastruktur (KSPI)', 'Kerja sama terbatas untuk pembiayaan infrastruktur (KETUPI)'];
const pemindah = ['Penjualan', 'Tukar-menukar', 'Hibah', 'Penyertaan modal pemerintah pusat'];
const bmnQs = [
  ...pemindah.map((p) => m(`Dalam pengelolaan BMN, "${p.toLowerCase()}" termasuk bentuk ...`, 'Pemindahtanganan', ['Pemanfaatan', 'Penggunaan', 'Pemeliharaan'], `${p} adalah bentuk pemindahtanganan BMN.`)),
  ...pemanfaatan.map((p) => m(`Dalam pengelolaan BMN, "${p}" termasuk bentuk ...`, 'Pemanfaatan', ['Pemindahtanganan', 'Penghapusan', 'Penatausahaan'], `${p} adalah bentuk pemanfaatan BMN (PP 27/2014 jo. PP 28/2020).`)),
];

export default [...manual, ...keuQs, ...pejabatQs, ...naskahQs, ...metodeQs, ...spipQs, ...bmnQs];
