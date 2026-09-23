# Integrasi Layout Referensi ke Seluruh Website SenusaCorp

## Tujuan
Menyusun ulang seluruh website SenusaCorp dengan anatomi layout dari referensi Creativeans—ritme editorial panjang, ruang gelap yang luas, komposisi asimetris, kartu karya berlapis, statistik, panel layanan berwarna, testimonial, dan penutup visual—tanpa menyalin identitas, teks, gambar, atau elemen merek referensi. Palet SenusaCorp saat ini tetap dipertahankan: near-black, off-white, lime, merah, dan biru.

## Arah visual
- Pertahankan logo, warna, tipografi utama, isi bilingual, gambar karya, harga, serta seluruh tautan SenusaCorp.
- Gunakan screenshot yang diberikan hanya sebagai referensi layout, bukan sebagai aset yang ditampilkan.
- Kurangi bentuk kapsul besar yang saat ini mendominasi; kombinasikan sudut tegas dan lengkung terkontrol agar lebih dekat dengan ritme editorial referensi.
- Terapkan grid asimetris, banyak ruang napas, judul besar, label kecil, garis pembatas tipis, dan pergantian bidang gelap/off-white/lime.
- Pastikan hasil akhirnya tetap terasa sebagai SenusaCorp dan bukan salinan Creativeans.

## Struktur global
- Tata ulang header menjadi lebih ringan dan presisi, dengan navigasi desktop, tombol bahasa, CTA brief, serta menu ponsel yang tetap lengkap.
- Buat pola pembuka bersama untuk halaman internal: judul editorial besar, nomor halaman, intro ringkas, dan elemen visual pendukung.
- Bangun footer yang lebih kaya seperti penutup editorial: CTA besar, navigasi terstruktur, informasi merek, privasi, dan bidang gambar karya.
- Gunakan komponen bersama untuk panel statistik, baris layanan, kartu karya, testimonial, dan CTA agar seluruh halaman konsisten.

## Beranda
- Susun pembuka baru dengan headline asimetris, media utama, potongan microcopy, dan kartu proyek mengambang.
- Ubah karya pilihan menjadi komposisi editorial/masonry dengan ukuran kartu bervariasi, bukan grid seragam.
- Tambahkan blok statistik kredibilitas menggunakan fakta yang sudah tersedia atau label netral tanpa mengarang klien maupun angka bisnis.
- Susun capabilities sebagai panel/baris warna penuh yang dapat dibuka atau diberi respons saat diarahkan.
- Gabungkan tentang studio, proses, harga mulai, dan testimonial dalam urutan visual seperti referensi, tetapi memakai isi SenusaCorp.
- Tutup dengan CTA brief dan cuplikan karya yang kuat.

## Karya dan detail karya
- Katalog `/work` memakai susunan karya asimetris dengan cover screenshot yang sudah terhubung, filter tetap berfungsi, dan aksi preview langsung tetap jelas.
- Detail `/work/$slug` memakai pembuka proyek yang lebih sinematik, statistik/fakta proyek, narasi challenge–direction–outcome, dan galeri multi-image dengan ritme lebar/portrait/offset.
- Pertahankan seluruh 17 proyek, URL live, caption bilingual, dan navigasi karya sebelumnya/berikutnya.

## Halaman lainnya
- **Layanan:** ubah daftar menjadi baris editorial berwarna dan panel detail yang mudah dipindai; pertahankan cakupan brand, web, commerce, CRM/HRM, serta aplikasi khusus.
- **Proses:** tampilkan enam tahap sebagai perjalanan vertikal besar dengan nomor, garis, dan pergantian posisi visual.
- **Harga:** susun paket dalam komposisi editorial yang lebih kontras, tetap menampilkan Rp200K sebagai harga mulai dan seluruh catatan lingkup.
- **Tentang:** gabungkan manifesto, visual studio, prinsip, dan kapabilitas dalam bidang besar serta statistik netral yang tidak mengarang klaim.
- **Kontak:** pertahankan alur brief lima langkah dan penyimpanan yang sudah bekerja, tetapi masukkan formulir ke layout editorial yang lebih fokus dan jelas.
- **Privasi:** pertahankan seluruh isi legal, dengan struktur tipografi dan navigasi bagian yang selaras dengan desain baru.

## Transisi dan animasi
- Tambahkan reveal bertahap saat bagian memasuki layar, termasuk judul, statistik, kartu karya, dan baris layanan.
- Tambahkan parallax ringan dan pergeseran terkontrol pada media/kartu mengambang tanpa mengganggu keterbacaan.
- Tambahkan ticker/marquee halus, hover image zoom, underline/arrow motion, transisi filter karya, dan pergantian menu ponsel.
- Gunakan CSS dan browser observer yang ringan; hindari animasi berat serta perubahan layout saat halaman dimuat.
- Hormati `prefers-reduced-motion` dengan menonaktifkan gerak non-esensial.

## Responsif dan aksesibilitas
- Rancang ulang setiap komposisi untuk desktop, tablet, dan ponsel; elemen berlapis akan berubah menjadi alur vertikal aman di layar sempit.
- Pastikan teks panjang Bahasa Indonesia dan Inggris tidak terpotong atau bertumpuk.
- Pertahankan keyboard navigation, fokus yang terlihat, alt text, struktur heading, dan kontras warna.
- Pertahankan ukuran media stabil, lazy loading di bawah layar pertama, serta optimasi gambar yang sudah ada.

## Detail teknis
- Refactor struktur tampilan bersama bila diperlukan, tanpa mengubah arsitektur route TanStack atau fungsi backend.
- Pindahkan nilai visual baru ke token global dan gunakan class semantik agar palet konsisten.
- Hindari library animasi besar; gunakan Intersection Observer dan transform/opacity yang ramah performa.
- Tidak mengubah database, pengiriman brief, data proyek, harga, bahasa, atau tautan live kecuali penyesuaian markup yang dibutuhkan desain.

## Verifikasi
- Periksa seluruh route: `/`, `/work`, 17 detail karya, `/services`, `/process`, `/pricing`, `/about`, `/contact`, dan `/privacy`.
- Uji navigasi desktop/ponsel, ID/EN, filter karya, link preview, FAQ, serta semua langkah formulir brief.
- Bandingkan desktop dan ponsel terhadap struktur referensi: ritme, hierarki, ruang, dan komposisi—bukan penyalinan merek.
- Periksa overlap, clipping, layout shift, performa scroll, console error, dan perilaku reduced-motion.

## Batasan
- Screenshot referensi tidak akan dimasukkan ke website.
- Informasi WhatsApp, email bisnis, badan hukum, dan lokasi tetap berstatus menunggu sampai data asli diberikan.
