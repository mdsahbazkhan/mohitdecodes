import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mohitdecodes.com";

  const routes = [
    "",
    "/about",
    "/courses",
    "/youtube",
    "/blogs",
    "/roadmaps",
    "/resources",
    "/projects",
    "/contact",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly" as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: route === "" ? 1 : 0.8,
  }));

  return sitemapEntries;
}
