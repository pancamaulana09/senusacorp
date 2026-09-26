import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { sitemapPathForLocation, sitemapStaticPaths, sitemapXML, isSitemapRouteIncluded, type SitemapEntry } from "@/lib/sitemap";
import { projects } from "@/lib/site-data";
import { posts } from "@/lib/blog-data";
import { services } from "@/lib/services-data";

import { SITE_URL as BASE_URL } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const projectRouteId = "/work/$slug";
        if (isSitemapRouteIncluded(router.routesById[projectRouteId])) {
          for (const project of projects) {
            const location = router.buildLocation({
              to: "/work/$slug",
              params: { slug: project.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, projectRouteId);
            if (path) entries.push({ path });
          }
        }

        const postRouteId = "/blog/$slug";
        if (isSitemapRouteIncluded(router.routesById[postRouteId])) {
          for (const post of posts) {
            const location = router.buildLocation({ to: "/blog/$slug", params: { slug: post.slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, postRouteId);
            if (path) entries.push({ path, lastmod: post.date, images: [{ loc: post.cover, title: post.title.id, caption: post.coverAlt.id }] });
          }
        }

        const serviceRouteId = "/services/$slug";
        if (isSitemapRouteIncluded(router.routesById[serviceRouteId])) {
          for (const svc of services) {
            const location = router.buildLocation({ to: "/services/$slug", params: { slug: svc.slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, serviceRouteId);
            if (path) entries.push({ path, images: [{ loc: svc.cover, title: svc.seoTitle, caption: svc.coverAlt.id }] });
          }
        }

        if (entries.length === 0) {
          return new Response("No pages are included in this sitemap.", {
            status: 404,
            headers: { "Cache-Control": "no-store" },
          });
        }

        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
