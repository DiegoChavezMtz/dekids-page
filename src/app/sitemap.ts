import type { MetadataRoute } from "next";
import { getAllAvailableSlugs } from "@/features/blog";

const BASE_URL = "https://dekids.com.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/programas`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/master`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/futureenterprise`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/proposito`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/politica-de-cookies`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const postRoutes: MetadataRoute.Sitemap = getAllAvailableSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes];
}
