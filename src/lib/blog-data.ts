import coverBiaya from "../assets/blog/biaya-pembuatan-website-bisnis-indonesia-senusacorp.jpg";
import coverWordpress from "../assets/blog/perbandingan-wordpress-vs-website-modern-senusacorp.jpg";
import coverUmkm from "../assets/blog/manfaat-website-untuk-bisnis-dan-umkm-senusacorp.jpg";
import coverSistem from "../assets/blog/sistem-aplikasi-bisnis-kustom-crm-hrm-senusacorp.jpg";
import coverSeo from "../assets/blog/strategi-seo-website-bisnis-google-indonesia-senusacorp.jpg";

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
    coverAlt: { id: "Ilustrasi rincian biaya pembuatan website bisnis di Indonesia oleh SenusaCorp", en: "Illustration of business website cost breakdown in Indonesia by SenusaCorp" },
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
    coverAlt: { id: "Perbandingan performa WordPress dan website modern buatan SenusaCorp", en: "Performance comparison between WordPress and a modern SenusaCorp website" },
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
    coverAlt: { id: "Ilustrasi manfaat website sendiri untuk bisnis dan UMKM di Indonesia", en: "Illustration of the benefits of owning a website for Indonesian small businesses" },
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
    coverAlt: { id: "Ilustrasi sistem aplikasi bisnis kustom CRM dan HRM dengan hak akses bertingkat", en: "Illustration of a custom CRM and HRM business system with layered access control" },
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
    coverAlt: { id: "Ilustrasi strategi SEO agar website bisnis muncul di halaman pertama Google", en: "Illustration of SEO strategy to rank a business website on Google's first page" },
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
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);

export const formatDate = (iso: string, language: "id" | "en") =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(language === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
