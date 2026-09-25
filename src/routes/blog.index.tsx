import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PageHero } from "../components/site-shell";
import { useLanguage } from "../lib/i18n";
import { pageHead, SITE_URL } from "../lib/seo";
import { formatDate, posts, type Post } from "../lib/blog-data";

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/blog",
      title: "Blog Website & Sistem Bisnis: Panduan Praktis — SenusaCorp",
      description:
        "Artikel praktis seputar biaya pembuatan website, sistem aplikasi bisnis CRM & HRM, perbandingan teknologi, dan strategi SEO untuk UMKM dan perusahaan di Indonesia.",
      breadcrumbs: [{ name: "Blog", path: "/blog" }],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Blog SenusaCorp",
        url: `${SITE_URL}/blog`,
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title.id,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.date,
        })),
      },
    }),
  component: BlogIndex,
});

const categories = ["Semua", "Panduan Bisnis", "Sistem & Teknologi", "SEO & Pertumbuhan"] as const;
const categoryEn: Record<(typeof categories)[number], string> = {
  Semua: "All",
  "Panduan Bisnis": "Business Guide",
  "Sistem & Teknologi": "Systems & Technology",
  "SEO & Pertumbuhan": "SEO & Growth",
};

function PostMeta({ post }: { post: Post }) {
  const { language } = useLanguage();
  return (
    <p className="post-meta">
      <span>{post.category[language]}</span>
      <span>{formatDate(post.date, language)}</span>
      <span>{post.readMinutes} {language === "id" ? "menit baca" : "min read"}</span>
    </p>
  );
}

function BlogIndex() {
  const { language } = useLanguage();
  const id = language === "id";
  const [filter, setFilter] = useState<(typeof categories)[number]>("Semua");
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;
  const list = filter === "Semua" ? rest : sorted.filter((p) => p.categoryKey === filter);

  return (
    <>
      <PageHero
        index="07"
        eyebrow="Blog"
        title={id ? "Wawasan untuk bisnis." : "Insight for business."}
        intro={
          id
            ? "Panduan jujur tentang website, sistem aplikasi, dan cara ditemukan pelanggan—ditulis dengan bahasa yang mudah dipahami."
            : "Honest guides on websites, business systems, and getting found by customers—written in plain language."
        }
      />
      <section className="section blog-section">
        {filter === "Semua" && (
          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="blog-featured">
            <small>{id ? "Artikel terbaru" : "Latest article"}</small>
            <h2>{featured.title[language]}</h2>
            <p>{featured.excerpt[language]}</p>
            <PostMeta post={featured} />
            <span className="blog-read">
              {id ? "Baca artikel" : "Read article"} <ArrowUpRight size={16} />
            </span>
          </Link>
        )}
        <div className="filter-bar" role="group" aria-label={id ? "Kategori artikel" : "Article categories"}>
          {categories.map((c) => (
            <button key={c} type="button" className={filter === c ? "active" : ""} aria-pressed={filter === c} onClick={() => setFilter(c)}>
              {id ? c : categoryEn[c]}
            </button>
          ))}
        </div>
        <div className="blog-grid">
          {list.map((post) => (
            <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="blog-card">
              <PostMeta post={post} />
              <h3>{post.title[language]}</h3>
              <p>{post.excerpt[language]}</p>
              <span className="blog-read">
                {id ? "Baca" : "Read"} <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
