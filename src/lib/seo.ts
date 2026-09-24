export const SITE_URL = "https://senusacorp.my.id";
export const SITE_NAME = "SenusaCorp";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/senusacorp-og.jpg`;

export const absoluteUrl = (path: string) => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`);

type Crumb = { name: string; path: string };

export function pageHead(opts: {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  breadcrumbs?: Crumb[];
  jsonLd?: object[];
}) {
  const url = absoluteUrl(opts.path);
  const image = opts.image ? absoluteUrl(opts.image) : DEFAULT_OG_IMAGE;
  const alt = opts.imageAlt ?? opts.title;
  const scripts: { type: string; children: string }[] = [...(opts.jsonLd ?? [])].map((d) => ({ type: "application/ld+json", children: JSON.stringify(d) }));
  if (opts.breadcrumbs?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Beranda", path: "/" }, ...opts.breadcrumbs].map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
      }),
    });
  }
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: alt },
      { property: "og:locale", content: "id_ID" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
