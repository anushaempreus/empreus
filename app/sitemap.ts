import { MetadataRoute } from "next";

const BASE = "https://empreusitsupport.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/","about","director","onboarding","journal","contact","portals","service-request","legal","services","heritage-tiers",
    "services/managed-it","services/enterprise-government","services/it-as-a-service","services/cloud",
    "services/communication","services/software-development","services/backup-recovery","services/it-security",
    "services/it-audit","services/datacentre","services/managed-print","services/websites","services/recycling",
  ];
  return routes.map(r => ({ url:`${BASE}/${r === "/" ? "" : r}`, lastModified: new Date("2026-05-29"), changeFrequency:"monthly" as const, priority: r === "/" ? 1 : r.startsWith("services/") ? 0.8 : 0.7 }));
}
