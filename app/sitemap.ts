import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/baseUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
