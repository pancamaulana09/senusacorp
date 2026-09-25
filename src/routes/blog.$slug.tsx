import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { pageHead, SITE_URL } from "../lib/seo";
import { formatDate, getPost, posts } from "../lib/blog-data";
import { waLink } from "../lib/contact";

export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { slug: post.slug };
  },
  head: ({ loaderData }) => {
    const post = loaderData ? getPost(loaderData.slug) : undefined;
    if (!post) return { meta: [{ title: "Artikel tidak ditemukan — SenusaCorp" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE_URL}/blog/${post.slug}`;
    return pageHead({
      path: `/blog/${post.slug}`,
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      breadcrumbs: [
        { name: "Blog", path: "/blog" },
        { name: post.title.id, path: `/blog/${post.slug}` },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title.id,
        description: post.seoDescription,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "id-ID",
        keywords: post.keywords.join(", "),
        mainEntityOfPage: url,
        url,
        author: { "@type": "Organization", name: "SenusaCorp", url: SITE_URL },
        publisher: { "@type": "Organization", name: "SenusaCorp", logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` } },
      },
    });
  },
  notFoundComponent: PostNotFound,
  component: BlogPost,
});

function PostNotFound() {
  return (
    <section className="section">
      <h1>404</h1>
      <Link to="/blog" className="button button-dark">Blog</Link>
    </section>
  );
}

function BlogPost() {
  const { slug } = Route.useLoaderData();
  const post = getPost(slug)!;
  const { language } = useLanguage();
  const id = language === "id";
  const headings = post.body.filter((b) => b.type === "h2");
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  let h = 0;

  return (
    <>
      <header className="detail-hero post-hero">
        <Link to="/blog" className="post-back"><ArrowLeft size={15} /> Blog</Link>
        <p className="post-meta">
          <span>{post.category[language]}</span>
          <span>{formatDate(post.date, language)}</span>
          <span>{post.readMinutes} {id ? "menit baca" : "min read"}</span>
        </p>
        <h1>{post.title[language]}</h1>
        <p className="post-lede">{post.excerpt[language]}</p>
      </header>
      <section className="section post-layout">
        <aside className="post-toc" aria-label={id ? "Daftar isi" : "Contents"}>
          <small>{id ? "Daftar isi" : "Contents"}</small>
          <ol>
            {headings.map((b, i) => (
              <li key={i}><a href={`#s${i}`}>{b.type === "h2" && b.text[language]}</a></li>
            ))}
          </ol>
        </aside>
        <article className="post-body">
          {post.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i} id={`s${h++}`}>{b.text[language]}</h2>;
            if (b.type === "quote") return <blockquote key={i}>{b.text[language]}</blockquote>;
            if (b.type === "list") return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it[language]}</li>)}</ul>;
            return <p key={i}>{b.text[language]}</p>;
          })}
          <div className="post-cta">
            <h2>{id ? "Butuh website atau sistem seperti ini?" : "Need a website or system like this?"}</h2>
            <p>{id ? "Ceritakan kebutuhan Anda. Kami balas dengan rekomendasi dan estimasi biaya yang jelas." : "Tell us what you need. We reply with a clear recommendation and cost estimate."}</p>
            <div>
              <Link to="/contact" className="button button-dark">{id ? "Kirim brief" : "Send a brief"} <ArrowUpRight size={16} /></Link>
              <a className="button" href={waLink(id ? `Halo SenusaCorp, saya membaca artikel "${post.title.id}" dan ingin konsultasi.` : `Hi SenusaCorp, I read "${post.title.en}" and would like a consultation.`)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </article>
      </section>
      <section className="section section-dark post-related">
        <h2>{id ? "Artikel lainnya" : "More articles"}</h2>
        <div className="blog-grid">
          {related.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="blog-card">
              <p className="post-meta"><span>{p.category[language]}</span><span>{p.readMinutes} {id ? "menit" : "min"}</span></p>
              <h3>{p.title[language]}</h3>
              <span className="blog-read">{id ? "Baca" : "Read"} <ArrowUpRight size={15} /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
