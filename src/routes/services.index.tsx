import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { pageHead, SITE_URL } from "../lib/seo";
import { PageHero } from "../components/site-shell";
import { useLanguage } from "../lib/i18n";
import { assets } from "../lib/site-data";
import { services } from "../lib/services-data";

export const Route = createFileRoute("/services/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/services",
      title: "Jasa Web Desain, Website & Aplikasi CRM HRM — SenusaCorp",
      description: "Layanan web desain, pembuatan website, toko online, branding, serta aplikasi bisnis CRM dan HRM khusus untuk UMKM dan perusahaan di seluruh Indonesia.",
      breadcrumbs: [{ name: "Layanan", path: "/services" }],
      jsonLd: [{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Layanan SenusaCorp",
        itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title.id, url: `${SITE_URL}/services/${s.slug}` })),
      }],
    }),
  component: Services,
});

function Services() {
  const { language } = useLanguage();
  const id = language === "id";
  return (
    <>
      <PageHero index="02" eyebrow={id ? "Layanan" : "Services"} title={id ? "Pikir. Rancang. Bangun." : "Think. Design. Build."} intro={id ? "Satu partner untuk membentuk brand hingga membangun sistem yang menopang bisnisnya. Pilih layanan untuk melihat detail, contoh karya, dan harganya." : "One partner to shape the brand and build the systems supporting its business. Pick a service to see details, examples, and pricing."} />
      <section className="section services-editorial">
        <div className="services-list">
          {services.map((s) => (
            <Link to="/services/$slug" params={{ slug: s.slug }} className="service-row" key={s.slug} aria-label={`${s.title[language]} — ${id ? "lihat detail" : "view details"}`}>
              <span>{s.number}</span>
              <div><h2 className="service-row-title">{s.title[language]}</h2><small>{s.forWho[language]}</small></div>
              <p>{s.summary[language]}<em className="service-row-price">{id ? "Mulai " : "From "}{s.tiers[0]!.price}</em></p>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
      <section className="section section-dark systems-panel">
        <div className="image-split">
          <div>
            <p className="eyebrow">Digital systems</p>
            <h2 className="section-lead">{id ? "Teknologi yang mengikuti cara kerja manusia, bukan sebaliknya." : "Technology that follows how people work—not the other way around."}</h2>
            <p>{id ? "Kami memetakan proses, mengurangi pekerjaan berulang, lalu merancang sistem yang mudah dipelajari oleh tim Anda." : "We map processes, reduce repetitive work, then design systems your team can learn with ease."}</p>
            <Link to="/services/$slug" params={{ slug: "sistem-bisnis" }} className="button button-lime">{id ? "Lihat detail sistem bisnis" : "See business systems"}<ArrowUpRight size={16} /></Link>
          </div>
          <div className="project-image"><img src={assets.digitalImage} loading="lazy" width="1408" height="1008" alt={id ? "Konsep dasbor aplikasi CRM dan HRM" : "CRM and HRM dashboard concept"} /></div>
        </div>
      </section>
    </>
  );
}
