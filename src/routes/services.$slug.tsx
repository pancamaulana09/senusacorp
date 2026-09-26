import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { absoluteUrl, pageHead, SITE_URL } from "../lib/seo";
import { getService, serviceProjects, services } from "../lib/services-data";
import { waLink } from "../lib/contact";

export const Route = createFileRoute("/services/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const svc = getService(params.slug);
    if (!svc) throw notFound();
    return { slug: svc.slug };
  },
  head: ({ loaderData }) => {
    const svc = loaderData ? getService(loaderData.slug) : undefined;
    if (!svc) return { meta: [{ title: "Layanan tidak ditemukan — SenusaCorp" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE_URL}/services/${svc.slug}`;
    const priced = svc.tiers.filter((t) => t.priceValue > 0);
    return pageHead({
      path: `/services/${svc.slug}`,
      title: svc.seoTitle,
      description: svc.seoDescription,
      image: svc.cover,
      imageAlt: svc.coverAlt.id,
      breadcrumbs: [{ name: "Layanan", path: "/services" }, { name: svc.title.id, path: `/services/${svc.slug}` }],
      jsonLd: [{
        "@context": "https://schema.org",
        "@type": "Service",
        name: svc.title.id,
        serviceType: svc.title.id,
        description: svc.seoDescription,
        url,
        image: { "@type": "ImageObject", url: absoluteUrl(svc.cover), width: 1200, height: 688, caption: svc.coverAlt.id },
        keywords: svc.keywords.join(", "),
        areaServed: [{ "@type": "City", name: "Surabaya" }, { "@type": "Country", name: "Indonesia" }],
        provider: { "@type": "ProfessionalService", name: "SenusaCorp", url: SITE_URL, telephone: "+6285730253097" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "IDR",
          lowPrice: Math.min(...priced.map((t) => t.priceValue)),
          highPrice: Math.max(...priced.map((t) => t.priceValue)),
          offerCount: priced.length,
          offers: priced.map((t) => ({ "@type": "Offer", name: t.name.id, price: t.priceValue, priceCurrency: "IDR", url })),
        },
      }],
    });
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <section className="section">
      <h1>404</h1>
      <Link to="/services" className="button button-dark">Layanan</Link>
    </section>
  );
}

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const svc = getService(slug);
  const { language } = useLanguage();
  if (!svc) return <ServiceNotFound />;
  const id = language === "id";
  const examples = serviceProjects(svc);
  const others = services.filter((s) => s.slug !== svc.slug);
  const wa = waLink(id ? `Halo SenusaCorp, saya tertarik dengan layanan ${svc.title.id}.` : `Hi SenusaCorp, I'm interested in ${svc.title.en}.`);

  return (
    <>
      <header className={`detail-hero svc-hero svc-${svc.accent}`}>
        <Link to="/services" className="post-back"><ArrowLeft size={15} /> {id ? "Semua layanan" : "All services"}</Link>
        <p className="post-meta"><span>{svc.number}</span><span>{svc.forWho[language]}</span><span>{svc.timeline[language]}</span></p>
        <h1>{svc.title[language]}</h1>
        <p className="post-lede">{svc.tagline[language]}</p>
        <div className="svc-hero-actions">
          <a className="button button-dark" href="#harga">{id ? "Lihat harga" : "See pricing"}</a>
          <a className="button" href={wa} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={16} /></a>
        </div>
      </header>

      <section className="section svc-intro">
        <figure className="post-cover">
          <img src={svc.cover} alt={svc.coverAlt[language]} width={1200} height={688} fetchPriority="high" decoding="async" />
          <figcaption>{svc.coverAlt[language]}</figcaption>
        </figure>
        <div className="svc-intro-text">
          <p className="eyebrow">{id ? "Tentang layanan" : "About this service"}</p>
          <p className="section-lead">{svc.summary[language]}</p>
          <h2>{id ? "Masalah yang kami selesaikan" : "Problems we solve"}</h2>
          <ul className="svc-problems">{svc.problems.map((p, i) => <li key={i}>{p[language]}</li>)}</ul>
        </div>
      </section>

      <section className="section section-dark svc-deliver">
        <p className="eyebrow">{id ? "Yang Anda dapatkan" : "What you get"}</p>
        <h2 className="section-lead">{id ? "Hasil kerja yang jelas, tanpa biaya tersembunyi." : "Clear deliverables, no hidden fees."}</h2>
        <ul className="svc-checks">{svc.deliverables.map((d, i) => <li key={i}><Check size={18} />{d[language]}</li>)}</ul>
      </section>

      <section className="section svc-steps-wrap">
        <p className="eyebrow">{id ? "Cara kerja" : "How it works"} · {svc.timeline[language]}</p>
        <h2 className="section-lead">{id ? "Empat tahap sederhana" : "Four simple stages"}</h2>
        <ol className="svc-steps">{svc.steps.map((s, i) => <li key={i}><span>0{i + 1}</span><h3>{s.title[language]}</h3><p>{s.text[language]}</p></li>)}</ol>
      </section>

      <section className="section svc-examples">
        <p className="eyebrow">{id ? "Contoh karya" : "Examples"}</p>
        <h2 className="section-lead">{id ? "Brand yang sudah kami bangun" : "Brands we have built"}</h2>
        <div className="svc-example-grid">
          {examples.map((p) => (
            <article key={p.slug} className="svc-example">
              <Link to="/work/$slug" params={{ slug: p.slug }}>
                <img src={p.image} alt={id ? `Tampilan website ${p.name} buatan SenusaCorp` : `${p.name} website built by SenusaCorp`} loading="lazy" decoding="async" width={1200} height={750} />
              </Link>
              <div>
                <small>{p.sector[language]}</small>
                <h3><Link to="/work/$slug" params={{ slug: p.slug }}>{p.name}</Link></h3>
                <p>{p.descriptor[language]}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="svc-live">{id ? "Kunjungi website" : "Visit website"} <ArrowUpRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="harga" className="section section-dark svc-pricing">
        <p className="eyebrow">{id ? "Kisaran harga" : "Pricing range"}</p>
        <h2 className="section-lead">{id ? `Harga ${svc.title.id}` : `${svc.title.en} pricing`}</h2>
        <div className="svc-tiers">
          {svc.tiers.map((t, i) => (
            <article key={i} className={`svc-tier${i === 1 ? " is-featured" : ""}`}>
              <small>{t.forWho[language]}</small>
              <h3>{t.name[language]}</h3>
              <p className="svc-price">{id ? t.price : t.price.replace("Mulai", "From").replace("Penawaran khusus", "Custom quote")}</p>
              <ul>{t.includes.map((x, j) => <li key={j}><Check size={15} />{x[language]}</li>)}</ul>
              <a className={`button ${i === 1 ? "button-lime" : ""}`} href={waLink(id ? `Halo SenusaCorp, saya tertarik paket ${t.name.id} untuk ${svc.title.id}.` : `Hi SenusaCorp, I'm interested in the ${t.name.en} package for ${svc.title.en}.`)} target="_blank" rel="noopener noreferrer">{id ? "Pilih paket" : "Choose package"}</a>
            </article>
          ))}
        </div>
        <p className="svc-note">{id ? "Harga dapat menyesuaikan jumlah halaman, fitur, dan integrasi. Rincian final diberikan setelah brief." : "Prices adjust to pages, features, and integrations. A final quote follows your brief."} <Link to="/pricing">{id ? "Bandingkan semua paket" : "Compare all packages"}</Link></p>
      </section>

      <section className="section svc-faq">
        <h2 className="section-lead">{id ? "Pertanyaan umum" : "Common questions"}</h2>
        {svc.faq.map((f, i) => <details key={i}><summary>{f.q[language]}</summary><p>{f.a[language]}</p></details>)}
        <div className="post-cta">
          <h2>{id ? "Siap memulai?" : "Ready to start?"}</h2>
          <p>{id ? "Ceritakan kebutuhan Anda. Kami balas dengan rekomendasi dan estimasi biaya maksimal 1×24 jam kerja." : "Tell us what you need. We reply with a recommendation and estimate within one working day."}</p>
          <div>
            <Link to="/contact" className="button button-dark">{id ? "Kirim brief" : "Send a brief"} <ArrowUpRight size={16} /></Link>
            <a className="button" href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section section-dark post-related">
        <h2>{id ? "Layanan lainnya" : "Other services"}</h2>
        <div className="blog-grid">
          {others.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="blog-card">
              <img className="blog-card-media" src={s.cover} alt={s.coverAlt[language]} width={1200} height={688} loading="lazy" decoding="async" />
              <p className="post-meta"><span>{s.number}</span><span>{id ? "Mulai" : "From"} {s.tiers[0]!.price}</span></p>
              <h3>{s.title[language]}</h3>
              <span className="blog-read">{id ? "Lihat detail" : "View details"} <ArrowUpRight size={15} /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
