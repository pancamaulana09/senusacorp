import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { sitemapPathForLocation, sitemapStaticPaths, sitemapXML, isSitemapRouteIncluded, type SitemapEntry } from "@/lib/sitemap";
import { projects } from "@/lib/site-data";

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
