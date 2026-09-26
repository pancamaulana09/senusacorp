import brandingImage from "../assets/services/jasa-branding-identitas-visual-senusacorp.jpg";
import websiteImage from "../assets/services/jasa-pembuatan-website-company-profile-senusacorp.jpg";
import commerceImage from "../assets/services/jasa-pembuatan-toko-online-ecommerce-senusacorp.jpg";
import systemImage from "../assets/services/jasa-pembuatan-aplikasi-bisnis-crm-hrm-senusacorp.jpg";
import { projects, type LocalizedText } from "./site-data";

export type Bi = LocalizedText;
export type Tier = { name: Bi; price: string; priceValue: number; forWho: Bi; includes: Bi[] };
export type Service = {
  slug: string;
  number: string;
  accent: "lime" | "blue" | "red" | "dark";
  title: Bi;
  tagline: Bi;
  forWho: Bi;
  summary: Bi;
  cover: string;
  coverAlt: Bi;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  problems: Bi[];
  deliverables: Bi[];
  steps: { title: Bi; text: Bi }[];
  timeline: Bi;
  tiers: Tier[];
  projectSlugs: string[];
  faq: { q: Bi; a: Bi }[];
};

const c = (id: string, en: string): Bi => ({ id, en });

export const services: Service[] = [
  {
    slug: "brand-identitas",
    number: "01",
    accent: "lime",
    title: c("Brand & Identitas", "Brand & Identity"),
    tagline: c("Identitas yang membuat bisnis Anda mudah diingat", "An identity that makes your business memorable"),
    forWho: c("Brand baru atau brand yang perlu bertumbuh", "New brands or brands ready to grow"),
    summary: c(
      "Kami menyusun positioning, nama, logo, warna, tipografi, dan panduan pemakaiannya supaya seluruh materi bisnis Anda terlihat konsisten di mana pun orang menemukannya.",
      "We shape positioning, naming, logo, color, typography, and usage guidelines so every business material looks consistent wherever people find it.",
    ),
    cover: brandingImage,
    coverAlt: c(
      "Foto meja studio desain dengan sketsa logo, kartu nama, dan kipas warna untuk proses branding",
      "Photo of a design studio desk with logo sketches, business cards, and color swatches for branding",
    ),
    seoTitle: "Jasa Branding & Pembuatan Logo Identitas Visual — SenusaCorp",
    seoDescription:
      "Jasa branding profesional: positioning, naming, logo, warna, tipografi, dan brand guideline untuk UMKM maupun perusahaan. Mulai Rp200 ribu, selesai 3–14 hari.",
    keywords: ["jasa branding", "jasa pembuatan logo", "identitas visual", "brand guideline"],
    problems: [
      c("Logo dan warna berbeda-beda di setiap materi promosi.", "Logo and color differ across every promotional material."),
      c("Bisnis terlihat kurang meyakinkan dibanding pesaing.", "The business looks less convincing than competitors."),
      c("Belum ada panduan tetap ketika desainer atau tim berganti.", "No fixed guideline when designers or team members change."),
    ],
    deliverables: [
      c("Logo utama, versi alternatif, dan ikon dalam format siap cetak & digital", "Primary logo, alternates, and icon in print and digital formats"),
      c("Palet warna, tipografi, dan aturan pemakaian", "Color palette, typography, and usage rules"),
      c("Brand guideline PDF yang mudah dipakai tim internal", "A brand guideline PDF your internal team can actually use"),
      c("Template konten media sosial dan kartu nama", "Social media and business card templates"),
      c("File sumber desain sepenuhnya milik Anda", "Source design files fully owned by you"),
    ],
    steps: [
      { title: c("Brief & riset", "Brief & research"), text: c("Kami memahami bisnis, target pasar, dan pesaing Anda.", "We learn your business, target market, and competitors.") },
      { title: c("Arah visual", "Visual direction"), text: c("Menyusun beberapa arah rasa dan suasana brand untuk dipilih.", "We present a few brand moods and directions to choose from.") },
      { title: c("Perancangan", "Design"), text: c("Logo, warna, dan tipografi dikembangkan lengkap dengan penerapannya.", "Logo, color, and typography are developed with real applications.") },
      { title: c("Serah terima", "Handover"), text: c("Semua file dan panduan diserahkan beserta penjelasan singkat.", "All files and guidelines are handed over with a short walkthrough.") },
    ],
    timeline: c("3–10 hari kerja", "3–10 working days"),
    tiers: [
      { name: c("Logo Starter", "Logo Starter"), price: "Rp200.000", priceValue: 200000, forWho: c("Usaha baru & UMKM", "New ventures & small businesses"), includes: [c("1 konsep logo + 2 revisi", "1 logo concept + 2 revisions"), c("Warna & font dasar", "Core color & font"), c("File PNG, JPG, PDF", "PNG, JPG, PDF files")] },
      { name: c("Brand Kit", "Brand Kit"), price: "Rp1.500.000", priceValue: 1500000, forWho: c("Brand yang mulai berkembang", "Brands starting to scale"), includes: [c("3 konsep logo + revisi leluasa", "3 logo concepts + generous revisions"), c("Palet warna & tipografi lengkap", "Full palette & typography"), c("Guideline ringkas + template sosial media", "Concise guideline + social templates")] },
      { name: c("Brand System", "Brand System"), price: "Rp4.500.000", priceValue: 4500000, forWho: c("Perusahaan & brand retail", "Companies & retail brands"), includes: [c("Positioning & naming", "Positioning & naming"), c("Guideline lengkap + penerapan kemasan", "Full guideline + packaging application"), c("Set template pemasaran", "Marketing template set")] },
    ],
    projectSlugs: ["aroma-27", "morphe", "senja-parfum"],
    faq: [
      { q: c("Apakah saya mendapat file aslinya?", "Do I get the source files?"), a: c("Ya. Seluruh file desain dan hak pakainya menjadi milik Anda tanpa biaya tambahan.", "Yes. All design files and usage rights are yours at no extra cost.") },
      { q: c("Berapa kali revisi?", "How many revisions?"), a: c("Tergantung paket, mulai dari 2 revisi hingga revisi leluasa sampai arah desain disetujui.", "It depends on the package, from 2 revisions up to generous rounds until the direction is approved.") },
    ],
  },
  {
    slug: "website-portofolio",
    number: "02",
    accent: "blue",
    title: c("Website & Portofolio", "Websites & Portfolios"),
    tagline: c("Website cepat yang meyakinkan calon pelanggan", "A fast website that convinces new customers"),
    forWho: c("Kreator, UMKM, perusahaan, komunitas", "Creators, SMEs, companies, communities"),
    summary: c(
      "Landing page, company profile, portofolio, hingga situs acara. Dibangun dengan teknologi modern supaya cepat dibuka, rapi di ponsel, dan mudah ditemukan di Google.",
      "Landing pages, company profiles, portfolios, and event sites. Built on modern technology so they load fast, look right on phones, and are easy to find on Google.",
    ),
    cover: websiteImage,
    coverAlt: c(
      "Foto meja kerja dengan monitor besar menampilkan tampilan website modern dan laptop di sampingnya",
      "Photo of a workspace with a large monitor showing a modern website layout next to a laptop",
    ),
    seoTitle: "Jasa Pembuatan Website Company Profile & Portofolio — SenusaCorp",
    seoDescription:
      "Jasa pembuatan website company profile, landing page, dan portofolio profesional. Cepat, ramah ponsel, siap SEO. Mulai Rp200 ribu, selesai 3–14 hari kerja.",
    keywords: ["jasa pembuatan website", "website company profile", "jasa web desain", "website portofolio"],
    problems: [
      c("Calon klien hanya menemukan akun media sosial, bukan alamat resmi.", "Prospects only find a social account, not an official address."),
      c("Website lama lambat dan berantakan saat dibuka di ponsel.", "The old site is slow and breaks on phones."),
      c("Belum muncul di Google saat orang mencari layanan Anda.", "You do not show up on Google when people search your service."),
    ],
    deliverables: [
      c("Desain khusus, bukan template pasaran", "Custom design, not a stock template"),
      c("Tampil rapi di ponsel, tablet, dan komputer", "Neat on phone, tablet, and desktop"),
      c("Pengaturan judul, deskripsi, dan peta situs untuk Google", "Titles, descriptions, and sitemap configured for Google"),
      c("Formulir kontak terhubung WhatsApp atau email", "Contact form connected to WhatsApp or email"),
      c("Pemasangan domain, SSL, dan panduan pemakaian", "Domain, SSL setup, and a usage walkthrough"),
      c("Garansi perbaikan bug 30 hari setelah peluncuran", "30-day bug-fix guarantee after launch"),
    ],
    steps: [
      { title: c("Brief & struktur", "Brief & structure"), text: c("Menentukan halaman, isi, dan tujuan utama website.", "We define pages, content, and the site's main goal.") },
      { title: c("Rancangan tampilan", "Layout design"), text: c("Menyusun tata letak dan gaya visual sesuai brand Anda.", "We build the layout and visual style around your brand.") },
      { title: c("Pembangunan", "Build"), text: c("Kode ditulis manual agar ringan, aman, dan cepat dibuka.", "Code is written by hand so the site stays light, safe, and fast.") },
      { title: c("Uji & peluncuran", "Test & launch"), text: c("Diuji di berbagai perangkat, lalu dipasang di domain Anda.", "Tested across devices, then deployed to your domain.") },
    ],
    timeline: c("3–14 hari kerja", "3–14 working days"),
    tiers: [
      { name: c("Quick Start", "Quick Start"), price: "Rp200.000", priceValue: 200000, forWho: c("Satu halaman perkenalan", "A single introduction page"), includes: [c("1 halaman landing page", "1 landing page"), c("Tombol WhatsApp langsung", "Direct WhatsApp button"), c("Siap tampil di ponsel", "Mobile ready")] },
      { name: c("Launch", "Launch"), price: "Rp1.500.000", priceValue: 1500000, forWho: c("UMKM & profesional", "Small businesses & professionals"), includes: [c("5–7 halaman company profile", "5–7 company profile pages"), c("Formulir kontak & galeri", "Contact form & gallery"), c("Dasar SEO + peta situs", "SEO basics + sitemap")] },
      { name: c("Business", "Business"), price: "Rp4.500.000", priceValue: 4500000, forWho: c("Perusahaan & brand mapan", "Companies & established brands"), includes: [c("Halaman tanpa batas + blog", "Unlimited pages + blog"), c("Dua bahasa & CMS mandiri", "Bilingual & self-service CMS"), c("Optimasi kecepatan menyeluruh", "Full performance optimisation")] },
    ],
    projectSlugs: ["penulis", "niskala-aruna", "villa-anggrek", "ruang-rupa"],
    faq: [
      { q: c("Apakah domain dan hosting sudah termasuk?", "Are domain and hosting included?"), a: c("Pemasangannya kami bantu. Biaya domain dan hosting dibayar langsung ke penyedia, umumnya Rp150 ribu–Rp500 ribu per tahun (perkiraan pasar).", "We handle setup. Domain and hosting are paid directly to the provider, typically Rp150k–Rp500k per year (market estimate).") },
      { q: c("Bisa saya ubah sendiri isinya nanti?", "Can I edit the content myself later?"), a: c("Bisa, pada paket Business kami sertakan panel pengelolaan isi beserta panduannya.", "Yes. The Business package includes a content panel with a walkthrough.") },
    ],
  },
  {
    slug: "toko-online",
    number: "03",
    accent: "red",
    title: c("Toko Online & Commerce", "Online Store & Commerce"),
    tagline: c("Jualan langsung dari website sendiri, tanpa potongan marketplace", "Sell from your own store, without marketplace fees"),
    forWho: c("Fashion, F&B, furnitur, kecantikan, lifestyle", "Fashion, F&B, furniture, beauty, lifestyle"),
    summary: c(
      "Katalog produk, keranjang belanja, pembayaran, dan ongkos kirim dalam satu alur belanja yang ringkas. Data pelanggan sepenuhnya milik Anda.",
      "Product catalogue, cart, payment, and shipping in one concise buying flow. The customer data stays entirely yours.",
    ),
    cover: commerceImage,
    coverAlt: c(
      "Foto area pengemasan brand lokal dengan paket siap kirim dan laptop menampilkan daftar pesanan toko online",
      "Photo of a local brand packing area with parcels ready to ship and a laptop showing online store orders",
    ),
    seoTitle: "Jasa Pembuatan Toko Online & Website E-Commerce — SenusaCorp",
    seoDescription:
      "Jasa pembuatan toko online: katalog produk, pembayaran otomatis, ongkos kirim, dan notifikasi pesanan WhatsApp. Mulai Rp1,5 juta, selesai 7–14 hari kerja.",
    keywords: ["jasa pembuatan toko online", "website e-commerce", "jasa website jualan", "toko online sendiri"],
    problems: [
      c("Margin tergerus biaya dan perang harga di marketplace.", "Margins eaten by fees and marketplace price wars."),
      c("Data pembeli tidak bisa dipakai untuk promosi ulang.", "Buyer data cannot be reused for repeat marketing."),
      c("Pesanan lewat chat harus dicatat manual satu per satu.", "Chat orders have to be recorded manually one by one."),
    ],
    deliverables: [
      c("Katalog produk dengan varian, stok, dan kategori", "Product catalogue with variants, stock, and categories"),
      c("Pembayaran otomatis (transfer, kartu, QRIS, e-wallet)", "Automatic payment (transfer, card, QRIS, e-wallet)"),
      c("Perhitungan ongkos kirim dan pelacakan pengiriman", "Shipping cost calculation and delivery tracking"),
      c("Notifikasi pesanan ke WhatsApp dan email", "Order notifications to WhatsApp and email"),
      c("Panel admin untuk mengelola produk dan pesanan", "Admin panel to manage products and orders"),
      c("Laporan penjualan yang bisa diunduh", "Downloadable sales reports"),
    ],
    steps: [
      { title: c("Pemetaan produk", "Product mapping"), text: c("Menyusun kategori, varian, dan aturan stok.", "We map categories, variants, and stock rules.") },
      { title: c("Alur belanja", "Buying flow"), text: c("Merancang jalur dari halaman produk sampai pembayaran.", "We design the path from product page to payment.") },
      { title: c("Integrasi", "Integration"), text: c("Menyambungkan pembayaran, ongkir, dan notifikasi.", "We connect payment, shipping, and notifications.") },
      { title: c("Uji transaksi", "Transaction test"), text: c("Simulasi pemesanan menyeluruh sebelum toko dibuka.", "A full order simulation before the store opens.") },
    ],
    timeline: c("7–14 hari kerja", "7–14 working days"),
    tiers: [
      { name: c("Katalog", "Catalogue"), price: "Rp1.500.000", priceValue: 1500000, forWho: c("Baru mulai berjualan online", "Just starting to sell online"), includes: [c("Katalog produk + pemesanan WhatsApp", "Product catalogue + WhatsApp ordering"), c("Hingga 30 produk", "Up to 30 products"), c("Halaman produk siap SEO", "SEO-ready product pages")] },
      { name: c("Toko Lengkap", "Full Store"), price: "Rp4.500.000", priceValue: 4500000, forWho: c("Brand dengan pesanan rutin", "Brands with steady orders"), includes: [c("Keranjang & pembayaran otomatis", "Cart & automatic payment"), c("Ongkos kirim otomatis", "Automatic shipping rates"), c("Panel admin & laporan", "Admin panel & reports")] },
      { name: c("Commerce Custom", "Custom Commerce"), price: c("Mulai Rp9.000.000", "From Rp9,000,000").id, priceValue: 9000000, forWho: c("Multi-gudang & skala besar", "Multi-warehouse & larger scale"), includes: [c("Integrasi stok & akuntansi", "Stock & accounting integration"), c("Program loyalitas pelanggan", "Customer loyalty program"), c("Dukungan prioritas", "Priority support")] },
    ],
    projectSlugs: ["sela", "aspal", "nusa-living", "north-coffee"],
    faq: [
      { q: c("Metode pembayaran apa saja yang didukung?", "Which payment methods are supported?"), a: c("Transfer bank, kartu, QRIS, dan e-wallet melalui penyedia pembayaran resmi yang Anda pilih.", "Bank transfer, cards, QRIS, and e-wallets through the licensed payment provider you choose.") },
      { q: c("Apakah tetap bisa berjualan di marketplace?", "Can I still sell on marketplaces?"), a: c("Bisa. Banyak klien memakai toko sendiri untuk margin penuh dan marketplace untuk jangkauan.", "Yes. Many clients use their own store for full margin and marketplaces for reach.") },
    ],
  },
  {
    slug: "sistem-bisnis",
    number: "04",
    accent: "dark",
    title: c("Sistem Bisnis (CRM & HRM)", "Business Systems (CRM & HRM)"),
    tagline: c("Aplikasi khusus yang mengikuti cara kerja tim Anda", "Custom software that follows how your team works"),
    forWho: c("Tim yang ingin bekerja lebih efisien", "Teams seeking operational efficiency"),
    summary: c(
      "CRM, HRM, dasbor operasional, dan portal internal. Kami memetakan proses Anda lebih dulu, lalu membangun sistem yang mudah dipelajari tanpa pelatihan panjang.",
      "CRM, HRM, operational dashboards, and internal portals. We map your process first, then build a system your team can learn without long training.",
    ),
    cover: systemImage,
    coverAlt: c(
      "Foto ruang rapat modern dengan dua laptop menampilkan dasbor data bisnis dan laporan cetak di meja",
      "Photo of a modern meeting room with two laptops showing business dashboards and printed reports",
    ),
    seoTitle: "Jasa Pembuatan Aplikasi Bisnis CRM & HRM Kustom — SenusaCorp",
    seoDescription:
      "Jasa pembuatan aplikasi bisnis kustom: CRM, HRM, dasbor operasional, dan portal internal dengan hak akses bertingkat. Konsultasi gratis, mulai Rp9 juta.",
    keywords: ["jasa pembuatan aplikasi", "aplikasi CRM", "aplikasi HRM", "sistem informasi perusahaan"],
    problems: [
      c("Data tersebar di banyak file spreadsheet dan grup chat.", "Data scattered across spreadsheets and chat groups."),
      c("Laporan bulanan disusun manual dan rawan salah.", "Monthly reports assembled by hand and prone to error."),
      c("Tidak ada catatan siapa mengubah data dan kapan.", "No record of who changed data and when."),
    ],
    deliverables: [
      c("Hak akses bertingkat sesuai peran tim", "Role-based access matching your team structure"),
      c("Dasbor ringkasan dan laporan yang bisa diekspor Excel/PDF", "Summary dashboards and reports exportable to Excel/PDF"),
      c("Catatan aktivitas untuk setiap perubahan data", "Activity log for every data change"),
      c("Pencadangan data harian dan sambungan terenkripsi", "Daily backups and encrypted connections"),
      c("Pelatihan singkat dan video panduan untuk tim", "Short training and a guide video for your team"),
      c("Kepemilikan kode sumber 100% di tangan Anda", "100% source code ownership stays with you"),
    ],
    steps: [
      { title: c("Pemetaan proses", "Process mapping"), text: c("Kami mempelajari alur kerja dan titik yang paling memakan waktu.", "We study the workflow and the most time-consuming steps.") },
      { title: c("Prototipe", "Prototype"), text: c("Rancangan layar disetujui sebelum satu baris kode ditulis.", "Screens are approved before a single line of code is written.") },
      { title: c("Pembangunan bertahap", "Staged build"), text: c("Modul dikirim bertahap supaya bisa dicoba lebih awal.", "Modules ship in stages so you can try them early.") },
      { title: c("Pendampingan", "Onboarding"), text: c("Pelatihan tim dan pendampingan setelah sistem dipakai.", "Team training and support after the system goes live.") },
    ],
    timeline: c("3–8 minggu, tergantung jumlah modul", "3–8 weeks, depending on module count"),
    tiers: [
      { name: c("Dasbor Ringkas", "Lean Dashboard"), price: "Rp4.500.000", priceValue: 4500000, forWho: c("Satu proses utama", "One core process"), includes: [c("1 modul + login pengguna", "1 module + user login"), c("Laporan dasar", "Basic reporting"), c("Data tersimpan aman di cloud", "Data stored safely in the cloud")] },
      { name: c("CRM / HRM", "CRM / HRM"), price: c("Mulai Rp9.000.000", "From Rp9,000,000").id, priceValue: 9000000, forWho: c("Tim penjualan atau SDM", "Sales or HR teams"), includes: [c("Manajemen data pelanggan atau karyawan", "Customer or employee data management"), c("Hak akses bertingkat", "Role-based access"), c("Ekspor Excel/PDF & catatan aktivitas", "Excel/PDF export & activity log")] },
      { name: c("Sistem Kustom", "Custom System"), price: c("Penawaran khusus", "Custom quote").id, priceValue: 0, forWho: c("Multi-divisi & integrasi", "Multi-division & integrations"), includes: [c("Beberapa modul terhubung", "Multiple connected modules"), c("Integrasi sistem yang sudah ada", "Integration with existing systems"), c("Perjanjian kerahasiaan (NDA)", "Non-disclosure agreement (NDA)")] },
    ],
    projectSlugs: ["arqive", "fenomena-bike", "verdure-house"],
    faq: [
      { q: c("Apakah data perusahaan kami aman?", "Is our company data safe?"), a: c("Data disimpan dengan sambungan terenkripsi, hak akses bertingkat, dan pencadangan harian. Kami juga siap menandatangani NDA.", "Data is stored with encrypted connections, role-based access, and daily backups. We are also ready to sign an NDA.") },
      { q: c("Bisa dikembangkan bertahap?", "Can it be built in stages?"), a: c("Bisa. Kami mulai dari modul yang paling mendesak, lalu menambah modul lain setelah tim terbiasa.", "Yes. We start with the most urgent module, then add others once the team settles in.") },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceProjects = (svc: Service) => svc.projectSlugs.map((s) => projects.find((p) => p.slug === s)).filter((p): p is (typeof projects)[number] => Boolean(p));
