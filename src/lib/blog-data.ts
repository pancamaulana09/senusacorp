import coverBiaya from "../assets/blog/biaya-pembuatan-website-bisnis-indonesia-senusacorp.jpg";
import coverWordpress from "../assets/blog/perbandingan-wordpress-vs-website-modern-senusacorp.jpg";
import coverUmkm from "../assets/blog/manfaat-website-untuk-bisnis-dan-umkm-senusacorp.jpg";
import coverSistem from "../assets/blog/sistem-aplikasi-bisnis-kustom-crm-hrm-senusacorp.jpg";
import coverSeo from "../assets/blog/strategi-seo-website-bisnis-google-indonesia-senusacorp.jpg";
import coverMemilih from "../assets/blog/tips-memilih-jasa-pembuatan-website-terpercaya-senusacorp.jpg";
import coverToko from "../assets/blog/toko-online-sendiri-vs-marketplace-senusacorp.jpg";
import coverProfile from "../assets/blog/fitur-wajib-website-company-profile-senusacorp.jpg";
import coverSpeed from "../assets/blog/kecepatan-loading-website-dan-penjualan-senusacorp.jpg";

export type Bi = { id: string; en: string };
export type Block =
  | { type: "p"; text: Bi }
  | { type: "h2"; text: Bi }
  | { type: "list"; items: Bi[] }
  | { type: "quote"; text: Bi };

export type Post = {
  slug: string;
  category: Bi;
  categoryKey: "Panduan Bisnis" | "Sistem & Teknologi" | "SEO & Pertumbuhan";
  date: string;
  readMinutes: number;
  title: Bi;
  excerpt: Bi;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  cover: string;
  coverAlt: Bi;
  body: Block[];
};

const p = (id: string, en: string): Block => ({ type: "p", text: { id, en } });
const h2 = (id: string, en: string): Block => ({ type: "h2", text: { id, en } });
const quote = (id: string, en: string): Block => ({ type: "quote", text: { id, en } });
const list = (items: [string, string][]): Block => ({ type: "list", items: items.map(([id, en]) => ({ id, en })) });

export const posts: Post[] = [
  {
    slug: "biaya-pembuatan-website-bisnis-indonesia",
    categoryKey: "Panduan Bisnis",
    category: { id: "Panduan Bisnis", en: "Business Guide" },
    date: "2026-09-02",
    readMinutes: 8,
    title: {
      id: "Biaya Pembuatan Website Bisnis di Indonesia 2026: Panduan Lengkap",
      en: "Website Costs for Indonesian Businesses in 2026: A Complete Guide",
    },
    excerpt: {
      id: "Rincian jujur harga jasa pembuatan website di Indonesia, apa saja yang Anda bayar, dan cara memilih paket tanpa biaya tersembunyi.",
      en: "An honest breakdown of website pricing in Indonesia, what you actually pay for, and how to choose a package with no hidden fees.",
    },
    seoTitle: "Biaya Pembuatan Website Bisnis di Indonesia 2026 — SenusaCorp",
    seoDescription:
      "Panduan biaya jasa pembuatan website bisnis di Indonesia 2026: kisaran harga, rincian komponen, biaya domain dan hosting, serta cara memilih paket tanpa biaya tersembunyi.",
    keywords: ["biaya pembuatan website", "jasa pembuatan website", "harga website bisnis"],
    cover: coverBiaya,
    coverAlt: { id: "Meja kerja dengan laptop dan rincian anggaran biaya pembuatan website bisnis di Indonesia", en: "Desk with laptop and printed budget documents for business website cost planning in Indonesia" },
    body: [
      p(
        "Pertanyaan pertama hampir setiap pemilik usaha sama: berapa sebenarnya biaya membuat website bisnis? Jawabannya sangat bervariasi karena yang dijual bukan sekadar halaman, melainkan waktu perancangan, kualitas rekayasa, dan dukungan setelah tayang.",
        "The first question almost every business owner asks is the same: how much does a business website really cost? The answer varies widely, because what you buy is not a page but design time, engineering quality, and support after launch.",
      ),
      h2("Kisaran harga di pasar Indonesia", "Price ranges in the Indonesian market"),
      p(
        "Berdasarkan penawaran yang umum beredar, pasar terbagi menjadi tiga kelompok besar. Angka berikut adalah perkiraan pasar umum, bukan penawaran resmi pihak lain.",
        "Based on offers commonly circulating in the market, pricing falls into three broad groups. The figures below are common market estimates, not official quotes from any other party.",
      ),
      list([
        [
          "Template siap pakai: Rp500.000–Rp1.000.000. Cepat, tetapi tampilan seragam, sulit dikembangkan, dan sering menyisakan biaya lisensi tahunan.",
          "Ready-made templates: Rp500,000–Rp1,000,000. Fast, but generic, hard to extend, and often leaves annual licence fees.",
        ],
        [
          "Agensi konvensional: Rp5.000.000–Rp15.000.000 ke atas. Kualitas bisa baik, namun waktu pengerjaan panjang dan biaya perawatan bulanan menumpuk.",
          "Conventional agencies: Rp5,000,000–Rp15,000,000 and up. Quality can be good, but timelines are long and monthly maintenance adds up.",
        ],
        [
          "SenusaCorp: mulai Rp200.000 untuk satu halaman profil, Rp1.500.000 untuk website bisnis lengkap, dan Rp4.500.000 ke atas untuk sistem aplikasi.",
          "SenusaCorp: from Rp200,000 for a single profile page, Rp1,500,000 for a full business website, and Rp4,500,000 upwards for application systems.",
        ],
      ]),
      h2("Komponen yang sebenarnya Anda bayar", "What you are actually paying for"),
      list([
        ["Perancangan tampilan dan penulisan struktur isi yang mengarahkan pengunjung ke satu tindakan jelas.", "Interface design and content structure that guides visitors to one clear action."],
        ["Pengembangan halaman yang cepat dibuka, aman, dan rapi di ponsel maupun komputer.", "Development that loads quickly, stays secure, and looks right on phones and desktops."],
        ["Persiapan agar mudah ditemukan di Google: judul, deskripsi, peta situs, dan data terstruktur.", "Search readiness: titles, descriptions, a sitemap, and structured data."],
        ["Domain dan hosting tahunan, biasanya Rp150.000–Rp500.000 per tahun di luar biaya pembuatan.", "Domain and hosting each year, usually Rp150,000–Rp500,000 annually on top of build cost."],
        ["Dukungan dan perbaikan setelah tayang, sering menjadi pembeda terbesar antara vendor.", "Post-launch support and fixes, often the biggest difference between vendors."],
      ]),
      h2("Biaya tersembunyi yang perlu ditanyakan", "Hidden costs worth asking about"),
      p(
        "Sebelum menandatangani, tanyakan lima hal: siapa pemilik kode sumber, berapa biaya perubahan kecil, apakah ada biaya bulanan wajib, berapa lama garansi perbaikan, dan apakah Anda menerima akses penuh ke domain serta hosting. Jika satu saja jawabannya kabur, biayanya akan muncul belakangan.",
        "Before signing, ask five things: who owns the source code, what small changes cost, whether there is a mandatory monthly fee, how long the bug-fix warranty runs, and whether you receive full access to the domain and hosting. If even one answer is vague, the cost will surface later.",
      ),
      quote(
        "Website murah yang harus dibangun ulang setahun kemudian selalu lebih mahal daripada website yang dibangun benar sejak awal.",
        "A cheap website that must be rebuilt a year later always costs more than one built properly the first time.",
      ),
      h2("Cara memilih paket yang tepat", "How to choose the right package"),
      p(
        "Jika Anda baru memulai dan hanya perlu kehadiran resmi di internet, satu halaman profil sudah cukup. Jika website menjadi saluran penjualan utama, pilih paket lengkap dengan katalog, formulir, dan pengukuran kunjungan. Jika Anda mengelola data pelanggan atau karyawan, yang Anda butuhkan adalah sistem aplikasi, bukan sekadar website.",
        "If you are just starting and only need an official presence online, a single profile page is enough. If the website is your main sales channel, choose a full package with a catalogue, forms, and visitor measurement. If you manage customer or employee data, what you need is an application system, not just a website.",
      ),
    ],
  },
  {
    slug: "wordpress-vs-website-modern",
    categoryKey: "Sistem & Teknologi",
    category: { id: "Sistem & Teknologi", en: "Systems & Technology" },
    date: "2026-09-06",
    readMinutes: 7,
    title: {
      id: "WordPress vs Website Modern: Mana yang Tepat untuk Bisnis Anda?",
      en: "WordPress vs a Modern Website: Which Fits Your Business?",
    },
    excerpt: {
      id: "Perbandingan jujur soal kecepatan, keamanan, biaya perawatan, dan kemudahan pengelolaan antara WordPress dan website yang dibangun modern.",
      en: "An honest comparison of speed, security, maintenance cost, and manageability between WordPress and a modern custom build.",
    },
    seoTitle: "WordPress vs Website Modern: Perbandingan untuk Bisnis — SenusaCorp",
    seoDescription:
      "Perbandingan WordPress dan website modern tanpa plugin: kecepatan loading, keamanan, biaya perawatan, skalabilitas, dan kapan sebaiknya memilih masing-masing untuk bisnis.",
    keywords: ["wordpress vs custom", "website cepat", "keamanan website bisnis"],
    cover: coverWordpress,
    coverAlt: { id: "Meja developer dengan dua layar menampilkan kode dan website modern yang cepat dibuka", en: "Developer desk with dual monitors showing clean code and a fast modern website" },
    body: [
      p(
        "WordPress menguasai sebagian besar internet dan tetap masuk akal untuk banyak kebutuhan. Namun sejak kecepatan halaman menjadi faktor peringkat Google dan serangan otomatis semakin sering, pertanyaannya bukan lagi mana yang populer, melainkan mana yang lebih murah dirawat selama tiga tahun.",
        "WordPress powers much of the internet and still makes sense for many needs. But since page speed became a Google ranking factor and automated attacks grew common, the question is no longer which is popular, but which is cheaper to keep running for three years.",
      ),
      h2("Kecepatan membuka halaman", "Page loading speed"),
      p(
        "Website WordPress umumnya memuat tema, beberapa plugin, dan skrip tambahan sebelum isi tampil. Website modern menyiapkan halaman lebih awal dan mengirimkannya dari lokasi terdekat dengan pengunjung, sehingga halaman terasa langsung terbuka. Selisih satu hingga dua detik terbukti berdampak besar pada jumlah pengunjung yang bertahan.",
        "A WordPress site typically loads a theme, several plugins, and extra scripts before the content appears. A modern site prepares pages ahead of time and serves them from a location near the visitor, so pages feel instant. A one to two second difference measurably changes how many visitors stay.",
      ),
      h2("Keamanan", "Security"),
      p(
        "Sebagian besar peretasan WordPress bukan menyerang WordPress-nya, melainkan plugin lama yang lupa diperbarui. Website tanpa plugin pihak ketiga memotong seluruh kategori risiko itu. Tidak ada ruang admin publik yang bisa ditebak, tidak ada berkas tema yang bisa disisipi.",
        "Most WordPress hacks do not attack WordPress itself but an outdated plugin nobody updated. A site without third-party plugins removes that entire category of risk: no guessable public admin page, no theme files to inject.",
      ),
      h2("Biaya perawatan tiga tahun", "Three-year maintenance cost"),
      list([
        ["WordPress: pembaruan rutin, lisensi plugin premium, hosting yang lebih berat, dan biaya perbaikan jika ada plugin bentrok.", "WordPress: routine updates, premium plugin licences, heavier hosting, and repair costs when plugins conflict."],
        ["Website modern: hampir tanpa pembaruan wajib, hosting ringan, dan perubahan isi dilakukan lewat panel yang disiapkan khusus.", "Modern site: almost no mandatory updates, light hosting, and content changes through a purpose-built panel."],
      ]),
      h2("Kapan WordPress tetap pilihan baik", "When WordPress is still a good choice"),
      p(
        "Jika Anda menerbitkan puluhan artikel setiap bulan dengan banyak penulis, atau membutuhkan ekosistem plugin yang sangat spesifik, WordPress masih efisien. Untuk website profil perusahaan, toko yang rapi, atau sistem internal, pendekatan modern hampir selalu lebih ringan dan lebih murah dalam jangka panjang.",
        "If you publish dozens of articles a month with several authors, or need a very specific plugin ecosystem, WordPress remains efficient. For company profiles, tidy shops, or internal systems, the modern approach is almost always lighter and cheaper over time.",
      ),
      quote(
        "Pilih teknologi berdasarkan biaya merawatnya, bukan biaya membuatnya.",
        "Choose technology by what it costs to maintain, not what it costs to build.",
      ),
    ],
  },
  {
    slug: "kenapa-bisnis-butuh-website",
    categoryKey: "Panduan Bisnis",
    category: { id: "Panduan Bisnis", en: "Business Guide" },
    date: "2026-09-10",
    readMinutes: 6,
    title: {
      id: "Kenapa Setiap Bisnis dan UMKM Membutuhkan Website Sendiri",
      en: "Why Every Business and Small Enterprise Needs Its Own Website",
    },
    excerpt: {
      id: "Media sosial meminjamkan perhatian, website memiliki kepercayaan. Ini alasan praktis mengapa usaha kecil pun perlu alamat sendiri di internet.",
      en: "Social media lends you attention; a website owns trust. Practical reasons even small businesses need their own address online.",
    },
    seoTitle: "Kenapa Bisnis dan UMKM Perlu Website Sendiri — SenusaCorp",
    seoDescription:
      "Alasan praktis mengapa UMKM dan bisnis Indonesia membutuhkan website sendiri: kredibilitas, ditemukan di Google, penjualan 24 jam, dan kepemilikan data pelanggan.",
    keywords: ["pentingnya website untuk bisnis", "website umkm", "digitalisasi usaha kecil"],
    cover: coverUmkm,
    coverAlt: { id: "Pemilik UMKM mengelola pesanan online dari tablet di toko miliknya", en: "Small business owner managing online orders from a tablet in their own shop" },
    body: [
      p(
        "Banyak usaha di Indonesia berjalan baik hanya dengan Instagram dan WhatsApp. Masalahnya muncul ketika calon pembeli besar, mitra, atau instansi mencari informasi resmi dan tidak menemukan apa pun selain akun media sosial.",
        "Many Indonesian businesses run well on Instagram and WhatsApp alone. The problem appears when a larger buyer, partner, or institution looks for official information and finds nothing but a social account.",
      ),
      h2("Lima alasan paling nyata", "The five most concrete reasons"),
      list([
        ["Kredibilitas. Alamat sendiri membuat usaha terlihat resmi dan siap menerima pesanan besar.", "Credibility. Your own address makes the business look official and ready for larger orders."],
        ["Ditemukan di Google. Orang mencari layanan Anda setiap hari; tanpa website, pencarian itu jatuh ke pesaing.", "Found on Google. People search for your service daily; without a site, those searches go to competitors."],
        ["Bekerja 24 jam. Katalog, harga, dan formulir pemesanan tetap melayani ketika Anda tidur.", "Open all day. Catalogue, prices, and order forms keep serving while you sleep."],
        ["Data milik Anda. Daftar pelanggan dan riwayat pesanan tidak ikut hilang jika akun media sosial bermasalah.", "Your data. Customer lists and order history do not vanish if a social account is lost."],
        ["Biaya iklan lebih efisien. Halaman yang fokus mengubah lebih banyak klik menjadi pesanan.", "Cheaper advertising. A focused page turns more clicks into orders."],
      ]),
      h2("Mulai dari yang kecil", "Start small"),
      p(
        "Anda tidak perlu langsung membangun toko besar. Satu halaman berisi penjelasan singkat, foto produk, harga, dan tombol WhatsApp sudah cukup untuk mulai mendatangkan pertanyaan serius. Halaman itu bisa dikembangkan bertahap seiring usaha bertumbuh.",
        "You do not need a big shop straight away. A single page with a short explanation, product photos, prices, and a WhatsApp button is enough to start attracting serious enquiries. It can grow in stages as the business grows.",
      ),
      quote(
        "Media sosial adalah tempat Anda menyewa perhatian. Website adalah tempat Anda memilikinya.",
        "Social media is where you rent attention. A website is where you own it.",
      ),
    ],
  },
  {
    slug: "sistem-aplikasi-bisnis-crm-hrm",
    categoryKey: "Sistem & Teknologi",
    category: { id: "Sistem & Teknologi", en: "Systems & Technology" },
    date: "2026-09-15",
    readMinutes: 9,
    title: {
      id: "Membangun Sistem Bisnis Sendiri: CRM, HRM, dan Operasional Tanpa Langganan Mahal",
      en: "Building Your Own Business System: CRM, HRM, and Operations Without Costly Subscriptions",
    },
    excerpt: {
      id: "Kapan sebaiknya berhenti menyewa aplikasi bulanan dan membangun sistem sendiri yang sesuai alur kerja tim Anda.",
      en: "When to stop renting monthly software and build a system that matches how your team actually works.",
    },
    seoTitle: "Bikin Sistem Aplikasi Bisnis: CRM & HRM Kustom — SenusaCorp",
    seoDescription:
      "Panduan membangun sistem aplikasi bisnis kustom: CRM, HRM, dan operasional internal. Fitur wajib, hak akses pengguna, keamanan data, biaya, dan waktu pengerjaan.",
    keywords: ["pembuatan aplikasi bisnis", "sistem crm indonesia", "aplikasi hrm kustom"],
    cover: coverSistem,
    coverAlt: { id: "Tim bisnis meninjau dasbor data sistem CRM dan HRM di ruang rapat modern", en: "Business team reviewing a CRM and HRM data dashboard in a modern meeting room" },
    body: [
      p(
        "Ketika tim Anda mengelola pelanggan di spreadsheet, absensi di grup pesan, dan laporan di berkas terpisah, biaya sesungguhnya bukan pada perangkat lunak, melainkan pada jam kerja yang hilang dan kesalahan pencatatan.",
        "When your team tracks customers in spreadsheets, attendance in chat groups, and reports in scattered files, the real cost is not software but lost hours and recording errors.",
      ),
      h2("Tanda Anda sudah butuh sistem sendiri", "Signs you need your own system"),
      list([
        ["Data yang sama diketik ulang di lebih dari dua tempat.", "The same data is retyped in more than two places."],
        ["Tidak ada yang bisa memastikan angka mana yang paling baru.", "Nobody can say which number is the most current."],
        ["Biaya langganan aplikasi bulanan sudah melebihi Rp1 juta dan terus naik per pengguna.", "Monthly software fees exceed Rp1 million and keep rising per user."],
        ["Anda membayar fitur yang tidak pernah dipakai, tetapi fitur yang Anda butuhkan justru tidak tersedia.", "You pay for features nobody uses while the feature you need is missing."],
      ]),
      h2("Fitur inti yang seharusnya ada", "Core features a system should have"),
      list([
        ["Hak akses bertingkat: pemilik, manajer, dan staf melihat data yang berbeda.", "Layered access: owner, manager, and staff each see different data."],
        ["Riwayat aktivitas sehingga setiap perubahan data dapat ditelusuri.", "Activity history so every data change can be traced."],
        ["Ekspor Excel dan PDF untuk laporan bulanan dan audit.", "Excel and PDF export for monthly reports and audits."],
        ["Pencarian dan penyaringan cepat pada ribuan baris data.", "Fast search and filtering across thousands of rows."],
        ["Notifikasi otomatis lewat WhatsApp atau surel untuk hal yang mendesak.", "Automatic WhatsApp or email alerts for urgent items."],
        ["Cadangan data harian dan enkripsi pada data sensitif.", "Daily backups and encryption for sensitive data."],
      ]),
      h2("Sewa atau bangun sendiri", "Rent or build"),
      p(
        "Menyewa aplikasi siap pakai tepat untuk kebutuhan umum dan tim yang masih kecil. Membangun sendiri menjadi lebih murah ketika jumlah pengguna bertambah, alur kerja Anda khas, atau data pelanggan tidak boleh berada di layanan pihak ketiga. Sistem milik sendiri juga dapat tumbuh modul demi modul tanpa kenaikan biaya per pengguna.",
        "Renting off-the-shelf software fits common needs and small teams. Building your own becomes cheaper as users grow, when your workflow is distinctive, or when customer data must not sit with a third party. An owned system can also grow module by module with no per-user increase.",
      ),
      h2("Waktu dan biaya yang realistis", "Realistic time and cost"),
      p(
        "Modul pertama yang berguna, misalnya pencatatan pelanggan dengan hak akses dan laporan, umumnya selesai dalam dua hingga empat minggu. Di SenusaCorp, sistem aplikasi dimulai dari Rp4.500.000 dengan kepemilikan kode sumber penuh di tangan Anda.",
        "A first useful module, such as customer records with access control and reports, usually takes two to four weeks. At SenusaCorp, application systems start at Rp4,500,000 with full source-code ownership staying with you.",
      ),
    ],
  },
  {
    slug: "seo-website-bisnis-indonesia",
    categoryKey: "SEO & Pertumbuhan",
    category: { id: "SEO & Pertumbuhan", en: "SEO & Growth" },
    date: "2026-09-20",
    readMinutes: 8,
    title: {
      id: "SEO Website Bisnis Indonesia: Cara Muncul di Google Tanpa Iklan Mahal",
      en: "SEO for Indonesian Businesses: Getting Found on Google Without Big Ad Budgets",
    },
    excerpt: {
      id: "Langkah praktis agar website Anda ditemukan calon pelanggan: kata kunci, struktur halaman, kecepatan, dan pencarian lokal.",
      en: "Practical steps to get found by customers: keywords, page structure, speed, and local search.",
    },
    seoTitle: "Cara SEO Website Bisnis agar Muncul di Google — SenusaCorp",
    seoDescription:
      "Panduan SEO website bisnis di Indonesia: riset kata kunci, struktur halaman, kecepatan loading, Google Search Console, SEO lokal, dan cara muncul di pencarian AI.",
    keywords: ["seo website bisnis", "cara muncul di google", "seo lokal indonesia"],
    cover: coverSeo,
    coverAlt: { id: "Laptop menampilkan grafik kunjungan organik yang naik hasil strategi SEO website bisnis", en: "Laptop showing rising organic traffic charts from a business website SEO strategy" },
    body: [
      p(
        "Website yang bagus tanpa pengunjung sama saja dengan toko indah di gang buntu. SEO adalah pekerjaan memindahkan toko itu ke jalan yang ramai, dan sebagian besar langkahnya bisa dikerjakan sendiri.",
        "A beautiful website with no visitors is a lovely shop on a dead-end alley. SEO is the work of moving that shop onto a busy street, and most of the steps you can do yourself.",
      ),
      h2("1. Tulis satu halaman untuk satu kata kunci", "1. One page, one keyword"),
      p(
        "Tentukan kalimat yang benar-benar diketik calon pelanggan, misalnya jasa pembuatan website Surabaya. Gunakan satu halaman untuk satu maksud pencarian. Dua halaman yang membidik kata kunci sama akan saling melemahkan peringkat.",
        "Decide the phrase customers actually type, for example website design in Surabaya. Use one page per search intent. Two pages targeting the same phrase weaken each other.",
      ),
      h2("2. Rapikan judul dan deskripsi", "2. Tidy up titles and descriptions"),
      p(
        "Judul halaman sebaiknya memuat kata kunci utama dan nama usaha, di bawah enam puluh karakter. Deskripsi menjelaskan manfaat dalam satu kalimat dan mengundang klik. Keduanya adalah iklan gratis Anda di halaman hasil pencarian.",
        "A page title should carry the main keyword and your business name, under sixty characters. The description explains the benefit in one sentence and invites a click. Both are your free advertisement on the results page.",
      ),
      h2("3. Buat halaman cepat dibuka", "3. Make pages load fast"),
      p(
        "Google mengukur pengalaman membuka halaman. Kompres gambar, hindari skrip yang tidak perlu, dan pastikan tampilan tidak bergeser saat dimuat. Di ponsel, setiap detik tambahan membuat sebagian pengunjung pergi.",
        "Google measures loading experience. Compress images, drop unnecessary scripts, and make sure the layout does not jump while loading. On phones, every extra second sends some visitors away.",
      ),
      h2("4. Kuatkan pencarian lokal", "4. Strengthen local search"),
      list([
        ["Daftarkan usaha di Google Bisnisku dengan alamat dan jam operasional yang konsisten.", "Register on Google Business Profile with consistent address and opening hours."],
        ["Sebutkan kota layanan pada judul, isi halaman, dan halaman kontak.", "Mention your service city in titles, page content, and the contact page."],
        ["Kumpulkan ulasan pelanggan; ulasan adalah sinyal kepercayaan terkuat untuk pencarian lokal.", "Collect customer reviews; reviews are the strongest trust signal for local search."],
      ]),
      h2("5. Siapkan diri untuk pencarian AI", "5. Prepare for AI search"),
      p(
        "Semakin banyak orang bertanya kepada asisten AI, bukan mengetik di kotak pencarian. Agar dikutip, tulis jawaban yang jelas dan spesifik, cantumkan harga serta cakupan layanan secara terbuka, dan gunakan data terstruktur agar mesin memahami isi halaman Anda.",
        "More people now ask AI assistants instead of typing into a search box. To be quoted, write clear specific answers, state prices and service scope openly, and use structured data so machines understand your page.",
      ),
      h2("6. Ukur dan perbaiki", "6. Measure and improve"),
      p(
        "Hubungkan website ke Google Search Console, kirim peta situs, dan periksa setiap bulan kata kunci apa yang sudah mendatangkan tayangan. Perbaiki halaman yang sudah muncul di peringkat sebelas sampai dua puluh terlebih dahulu; itu jalur tercepat menuju halaman pertama.",
        "Connect the site to Google Search Console, submit the sitemap, and review monthly which keywords already bring impressions. Improve pages ranking eleventh to twentieth first; that is the fastest route to page one.",
      ),
      quote(
        "SEO bukan trik sesaat. Ia adalah kebiasaan menjawab pertanyaan pelanggan lebih baik daripada siapa pun.",
        "SEO is not a trick. It is the habit of answering customer questions better than anyone else.",
      ),
    ],
  },
  {
    slug: "tips-memilih-jasa-pembuatan-website-terpercaya",
    categoryKey: "Panduan Bisnis",
    category: { id: "Panduan Bisnis", en: "Business Guide" },
    date: "2026-09-23",
    readMinutes: 7,
    title: {
      id: "Cara Memilih Jasa Pembuatan Website Terpercaya di Indonesia",
      en: "How to Choose a Trustworthy Website Agency in Indonesia",
    },
    excerpt: {
      id: "Daftar periksa sebelum membayar: portofolio asli, kepemilikan kode, skema pembayaran, garansi, dan tanda bahaya vendor bermasalah.",
      en: "A checklist before you pay: real portfolios, code ownership, payment terms, warranty, and the red flags of a risky vendor.",
    },
    seoTitle: "Cara Memilih Jasa Pembuatan Website Terpercaya — SenusaCorp",
    seoDescription:
      "Panduan memilih jasa pembuatan website terpercaya di Indonesia: cek portofolio asli, kepemilikan kode sumber, skema pembayaran, garansi perbaikan, dan tanda bahaya vendor.",
    keywords: ["jasa pembuatan website terpercaya", "memilih vendor website", "jasa website profesional"],
    cover: coverMemilih,
    coverAlt: {
      id: "Pemilik bisnis memeriksa portofolio dan penawaran jasa pembuatan website di meja rapat",
      en: "Business owner reviewing website agency portfolios and proposals at a meeting table",
    },
    body: [
      p(
        "Memilih vendor website mirip memilih kontraktor bangunan. Hasilnya baru terasa setelah beberapa bulan, dan biaya memperbaiki pilihan yang salah selalu lebih besar daripada selisih harga di awal.",
        "Choosing a website vendor is like choosing a builder. You only feel the result months later, and fixing a wrong choice always costs more than the price difference at the start.",
      ),
      h2("1. Periksa portofolio yang bisa dibuka", "1. Check portfolios you can actually open"),
      p(
        "Minta tautan website yang sedang tayang, bukan sekadar gambar tampilan. Buka di ponsel, perhatikan kecepatan membuka halaman, dan lihat apakah menu serta formulir benar-benar berfungsi. Gambar bisa dibuat siapa saja; website yang hidup tidak bisa dipalsukan.",
        "Ask for links to live websites, not just mockup images. Open them on a phone, watch how fast they load, and check whether menus and forms really work. Anyone can produce a picture; a live site cannot be faked.",
      ),
      h2("2. Pastikan kepemilikan kode dan akses", "2. Confirm code ownership and access"),
      list([
        ["Siapa pemilik kode sumber setelah proyek selesai.", "Who owns the source code once the project ends."],
        ["Apakah domain dan hosting terdaftar atas nama usaha Anda.", "Whether the domain and hosting are registered in your business name."],
        ["Apakah Anda menerima akses penuh ke panel pengelolaan isi.", "Whether you receive full access to the content management panel."],
        ["Apakah Anda bisa pindah vendor tanpa membangun ulang dari nol.", "Whether you can switch vendors without rebuilding from scratch."],
      ]),
      h2("3. Pahami skema pembayaran dan lingkup", "3. Understand payment terms and scope"),
      p(
        "Skema yang sehat biasanya terbagi dua atau tiga tahap dan tertulis jelas: berapa halaman, berapa kali revisi, apa saja yang termasuk, dan apa yang dihitung tambahan. Penawaran tanpa rincian lingkup hampir selalu berakhir dengan tagihan susulan.",
        "Healthy terms split into two or three stages and state clearly: how many pages, how many revisions, what is included, and what counts as extra. A quote without scope detail almost always ends in follow-up invoices.",
      ),
      h2("4. Tanyakan garansi dan dukungan", "4. Ask about warranty and support"),
      p(
        "Perbaikan kesalahan setelah tayang sebaiknya ditanggung selama minimal satu bulan. Tanyakan juga jalur komunikasi setelah proyek selesai dan berapa lama biasanya permintaan perubahan kecil dikerjakan.",
        "Bug fixes after launch should be covered for at least a month. Also ask what the support channel is after handover, and how long small change requests usually take.",
      ),
      h2("Tanda bahaya yang sebaiknya Anda hindari", "Red flags worth avoiding"),
      list([
        ["Menolak memperlihatkan website yang sedang tayang.", "Refusing to show any live website."],
        ["Meminta pelunasan penuh sebelum pekerjaan dimulai.", "Asking for full payment before work begins."],
        ["Menjanjikan peringkat satu Google dalam hitungan hari.", "Promising a number one Google ranking within days."],
        ["Tidak bersedia menulis lingkup pekerjaan secara tertulis.", "Unwilling to put the scope of work in writing."],
      ]),
      quote(
        "Vendor yang baik menjelaskan batas pekerjaannya sejak awal, bukan hanya kelebihannya.",
        "A good vendor explains the limits of the work upfront, not only its strengths.",
      ),
    ],
  },
  {
    slug: "toko-online-sendiri-vs-marketplace",
    categoryKey: "Panduan Bisnis",
    category: { id: "Panduan Bisnis", en: "Business Guide" },
    date: "2026-09-24",
    readMinutes: 8,
    title: {
      id: "Toko Online Sendiri vs Marketplace: Mana yang Lebih Menguntungkan?",
      en: "Your Own Online Store vs a Marketplace: Which Is More Profitable?",
    },
    excerpt: {
      id: "Perbandingan margin, biaya komisi, kepemilikan data pelanggan, dan strategi menggabungkan keduanya agar brand Anda tumbuh.",
      en: "Comparing margins, commission fees, customer data ownership, and how to combine both channels so your brand grows.",
    },
    seoTitle: "Toko Online Sendiri vs Marketplace untuk Brand — SenusaCorp",
    seoDescription:
      "Perbandingan toko online sendiri dan marketplace: biaya komisi, margin keuntungan, kepemilikan data pelanggan, biaya iklan, dan strategi menggabungkan keduanya untuk brand.",
    keywords: ["toko online sendiri", "jasa pembuatan toko online", "marketplace vs website"],
    cover: coverToko,
    coverAlt: {
      id: "Meja pengemasan brand dengan paket siap kirim dan laptop menampilkan daftar pesanan toko online",
      en: "Brand packing table with parcels ready to ship and a laptop showing online store orders",
    },
    body: [
      p(
        "Marketplace memberi Anda pengunjung sejak hari pertama. Toko online sendiri memberi Anda margin dan data pelanggan. Keduanya bukan lawan, tetapi peran keduanya sangat berbeda dan sebaiknya tidak tertukar.",
        "A marketplace gives you visitors from day one. Your own store gives you margin and customer data. They are not rivals, but their roles differ sharply and should not be confused.",
      ),
      h2("Hitung ulang margin Anda", "Recalculate your margin"),
      p(
        "Komisi marketplace, biaya program gratis ongkir, dan potongan kampanye diskon bisa memangkas margin cukup dalam. Pada produk dengan margin tipis, selisih tersebut sering menentukan untung atau rugi. Di toko sendiri, biaya utama Anda adalah pembuatan awal dan biaya transaksi pembayaran.",
        "Marketplace commissions, free-shipping programmes, and campaign discounts can cut deeply into margin. On thin-margin products, that difference often decides profit or loss. On your own store, the main costs are the initial build and payment processing fees.",
      ),
      h2("Data pelanggan adalah aset jangka panjang", "Customer data is the long-term asset"),
      p(
        "Di marketplace, pembeli adalah pelanggan platform. Di toko sendiri, Anda memiliki nomor kontak, riwayat pembelian, dan izin mengirim penawaran ulang. Pembeli kedua dan ketiga jauh lebih murah didapat daripada pembeli pertama, dan itu hanya mungkin bila datanya milik Anda.",
        "On a marketplace, the buyer belongs to the platform. On your own store, you hold the contact details, purchase history, and permission to send repeat offers. Second and third purchases are far cheaper to win than the first, and only possible when the data is yours.",
      ),
      h2("Kapan sebaiknya memakai masing-masing", "When to use each"),
      list([
        ["Marketplace: menguji produk baru, menjangkau pembeli yang belum mengenal brand, dan memanfaatkan kampanye tanggal kembar.", "Marketplace: testing new products, reaching buyers who do not know your brand, and riding campaign dates."],
        ["Toko sendiri: penjualan berulang, produk eksklusif, paket bundling, dan pelanggan yang datang dari iklan atau media sosial Anda.", "Own store: repeat sales, exclusive products, bundles, and customers arriving from your own ads or social media."],
      ]),
      h2("Strategi menggabungkan keduanya", "A strategy that combines both"),
      p(
        "Gunakan marketplace sebagai etalase penemuan, dan arahkan pembeli ke toko sendiri untuk pembelian berikutnya lewat kartu ucapan di dalam paket, program keanggotaan, atau penawaran khusus. Toko sendiri juga menjadi rujukan kredibilitas saat calon mitra atau reseller memeriksa brand Anda.",
        "Use the marketplace as a discovery shelf, then guide buyers to your own store for the next purchase through a thank-you card in the parcel, a membership scheme, or a special offer. Your own store also becomes the credibility reference when partners or resellers check your brand.",
      ),
      h2("Fitur yang wajib ada di toko sendiri", "Features your own store must have"),
      list([
        ["Katalog produk dengan varian, stok, dan foto yang cepat dimuat.", "A product catalogue with variants, stock, and fast-loading photos."],
        ["Pembayaran otomatis melalui transfer, kartu, atau kode QR.", "Automatic payments via transfer, card, or QR code."],
        ["Perhitungan ongkos kirim otomatis sesuai alamat pembeli.", "Automatic shipping cost calculation based on the buyer's address."],
        ["Notifikasi pesanan lewat WhatsApp untuk Anda dan pembeli.", "Order notifications on WhatsApp for both you and the buyer."],
        ["Laporan penjualan sederhana yang bisa diekspor.", "Simple, exportable sales reports."],
      ]),
      quote(
        "Marketplace menyewakan pelanggan kepada Anda. Toko sendiri membuat pelanggan menjadi milik Anda.",
        "A marketplace rents customers to you. Your own store makes them yours.",
      ),
    ],
  },
  {
    slug: "fitur-wajib-website-company-profile",
    categoryKey: "Sistem & Teknologi",
    category: { id: "Sistem & Teknologi", en: "Systems & Technology" },
    date: "2026-09-25",
    readMinutes: 7,
    title: {
      id: "Fitur Wajib Website Company Profile Perusahaan Modern",
      en: "Must-Have Features of a Modern Company Profile Website",
    },
    excerpt: {
      id: "Struktur halaman yang meyakinkan klien korporat: profil, layanan terstruktur, bukti kredibilitas, dan jalur kontak yang cepat dibalas.",
      en: "The page structure that convinces corporate clients: profile, structured services, credibility proof, and fast contact paths.",
    },
    seoTitle: "Fitur Wajib Website Company Profile Perusahaan — SenusaCorp",
    seoDescription:
      "Daftar fitur wajib website company profile perusahaan modern: struktur halaman, profil legalitas, katalog layanan, studi kasus, formulir kontak, dan kesiapan multi-bahasa.",
    keywords: ["website company profile", "jasa company profile perusahaan", "struktur website perusahaan"],
    cover: coverProfile,
    coverAlt: {
      id: "Dua profesional meninjau tampilan website company profile perusahaan di layar besar ruang rapat",
      en: "Two professionals reviewing a company profile website on a large meeting room screen",
    },
    body: [
      p(
        "Website company profile bukan brosur digital. Ia adalah dokumen penilaian: calon klien, mitra, dan bahkan calon karyawan memutuskan seberapa serius perusahaan Anda dalam waktu kurang dari satu menit membaca.",
        "A company profile website is not a digital brochure. It is an assessment document: prospective clients, partners, and even job candidates decide how serious your company is in under a minute of reading.",
      ),
      h2("Struktur halaman yang terbukti bekerja", "A page structure that works"),
      list([
        ["Beranda dengan satu kalimat jelas tentang apa yang Anda kerjakan dan untuk siapa.", "A home page with one clear sentence about what you do and for whom."],
        ["Halaman layanan terpisah per lini bisnis, bukan satu halaman berisi semuanya.", "Separate service pages per business line, not one page listing everything."],
        ["Halaman tentang berisi sejarah singkat, nilai kerja, dan legalitas usaha.", "An about page with a short history, working values, and legal standing."],
        ["Studi kasus atau portofolio dengan hasil yang dapat diperiksa.", "Case studies or a portfolio with verifiable results."],
        ["Halaman kontak dengan formulir, WhatsApp, dan domisili yang jelas.", "A contact page with a form, WhatsApp, and a clear location."],
      ]),
      h2("Bukti kredibilitas yang dicari klien korporat", "Credibility proof corporate clients look for"),
      p(
        "Departemen pengadaan biasanya memeriksa tiga hal: legalitas usaha, pengalaman proyek sejenis, dan kejelasan alur kerja. Cantumkan ketiganya secara terbuka. Satu halaman proses kerja yang menjelaskan tahapan dan waktu pengerjaan sering lebih meyakinkan daripada sepuluh testimoni tanpa konteks.",
        "Procurement teams usually check three things: legal standing, experience on similar projects, and clarity of process. State them openly. A single process page explaining stages and timelines is often more convincing than ten testimonials without context.",
      ),
      h2("Hal teknis yang tidak boleh diabaikan", "Technical points you cannot skip"),
      list([
        ["Tampilan rapi di ponsel, karena sebagian besar kunjungan pertama datang dari ponsel.", "A tidy phone layout, because most first visits come from phones."],
        ["Halaman utama cepat terbuka, dengan gambar dan skrip yang tidak menghambat isi.", "A fast-loading home page, with images and scripts that do not delay the main content."],
        ["Dua bahasa bila Anda melayani klien luar negeri.", "Two languages if you serve overseas clients."],
        ["Panel pengelolaan isi agar tim Anda bisa memperbarui sendiri.", "A content panel so your own team can publish updates."],
        ["Formulir yang masuk langsung ke surel atau WhatsApp penanggung jawab.", "Forms that land directly in the responsible person's email or WhatsApp."],
      ]),
      h2("Kesalahan yang paling sering terjadi", "The most common mistakes"),
      p(
        "Menulis profil panjang tentang perusahaan tetapi tidak menjelaskan masalah apa yang Anda selesaikan. Menyembunyikan kontak di halaman paling bawah. Memakai foto stok yang sama dengan pesaing. Semua itu membuat perusahaan terlihat sama dengan yang lain, padahal pembeda Anda sebenarnya ada.",
        "Writing a long profile about the company without explaining what problem you solve. Hiding contact details at the very bottom. Using the same stock photos as competitors. All of it makes a company look interchangeable when its differentiator actually exists.",
      ),
      quote(
        "Klien korporat tidak membeli kalimat yang indah. Mereka membeli kejelasan.",
        "Corporate clients do not buy beautiful sentences. They buy clarity.",
      ),
    ],
  },
  {
    slug: "kecepatan-loading-website-dan-penjualan",
    categoryKey: "SEO & Pertumbuhan",
    category: { id: "SEO & Pertumbuhan", en: "SEO & Growth" },
    date: "2026-09-26",
    readMinutes: 6,
    title: {
      id: "Pengaruh Kecepatan Loading Website terhadap Penjualan Anda",
      en: "How Website Loading Speed Affects Your Sales",
    },
    excerpt: {
      id: "Setiap detik tambahan membuat sebagian pengunjung pergi. Ini cara mengukur kecepatan website dan memperbaikinya tanpa membangun ulang.",
      en: "Every extra second sends visitors away. Here is how to measure your site speed and fix it without a rebuild.",
    },
    seoTitle: "Kecepatan Loading Website dan Pengaruhnya ke Penjualan — SenusaCorp",
    seoDescription:
      "Pengaruh kecepatan loading website terhadap penjualan dan peringkat Google: cara mengukur Core Web Vitals, penyebab website lambat, dan langkah perbaikan yang efektif.",
    keywords: ["kecepatan loading website", "website lambat", "core web vitals"],
    cover: coverSpeed,
    coverAlt: {
      id: "Laptop dan ponsel menampilkan pengukuran kecepatan membuka halaman website di meja kerja",
      en: "Laptop and phone showing website page speed measurements on a work desk",
    },
    body: [
      p(
        "Kecepatan bukan urusan teknis semata. Ia adalah biaya yang tidak terlihat: pengunjung yang menutup halaman sebelum melihat produk Anda tidak pernah muncul sebagai keluhan, hanya sebagai penjualan yang tidak terjadi.",
        "Speed is not merely a technical matter. It is an invisible cost: visitors who close the page before seeing your product never appear as complaints, only as sales that never happened.",
      ),
      h2("Apa yang sebenarnya diukur Google", "What Google actually measures"),
      list([
        ["Waktu sampai isi utama tampil, idealnya di bawah 2,5 detik.", "Time until the main content appears, ideally under 2.5 seconds."],
        ["Kestabilan tampilan, agar tombol tidak bergeser saat halaman dimuat.", "Layout stability, so buttons do not shift while the page loads."],
        ["Kecepatan halaman merespons sentuhan atau klik pertama.", "How quickly the page responds to the first tap or click."],
      ]),
      h2("Penyebab paling umum website lambat", "The most common causes of a slow site"),
      list([
        ["Gambar berukuran jutaan piksel yang diunggah apa adanya.", "Huge images uploaded straight from the camera."],
        ["Terlalu banyak plugin dan skrip pelacak yang berjalan bersamaan.", "Too many plugins and tracking scripts running at once."],
        ["Hosting murah dengan server jauh dari lokasi pengunjung.", "Cheap hosting with servers far from your visitors."],
        ["Font dan animasi berat yang dimuat sebelum isi utama.", "Heavy fonts and animations loaded before the main content."],
      ]),
      h2("Langkah perbaikan tanpa membangun ulang", "Fixes that do not require a rebuild"),
      p(
        "Mulailah dari gambar: kompres dan sesuaikan ukurannya dengan ruang tampil. Lalu matikan skrip yang tidak lagi Anda pakai. Setelah itu, pindahkan hosting ke layanan yang menyajikan halaman dari lokasi terdekat pengunjung. Tiga langkah ini biasanya memangkas waktu buka halaman secara terasa.",
        "Start with images: compress them and match their size to the space they occupy. Then switch off scripts you no longer use. After that, move hosting to a service that serves pages from a location near your visitors. These three steps usually cut load time noticeably.",
      ),
      h2("Kapan membangun ulang lebih masuk akal", "When rebuilding makes more sense"),
      p(
        "Jika website sudah dipenuhi plugin yang saling bergantung, setiap perbaikan kecil berisiko merusak bagian lain. Pada titik itu, membangun ulang dengan pendekatan modern sering lebih murah daripada merawat sesuatu yang memang berat sejak awal.",
        "If the site is packed with interdependent plugins, every small fix risks breaking something else. At that point, rebuilding with a modern approach is often cheaper than maintaining something that was heavy from the start.",
      ),
      quote(
        "Halaman yang lambat tidak membuat pelanggan mengeluh. Ia membuat mereka pergi diam-diam.",
        "A slow page does not make customers complain. It makes them leave quietly.",
      ),
    ],
  },
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);

export const formatDate = (iso: string, language: "id" | "en") =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(language === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
