import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Websites", description: "Domains, development, hosting, and backups. Your online presence, quietly safeguarded — built well, hosted securely, and looked after so it stays that way." };

const INCLUDED = [
          "Domain registration and management",
          "Website design and development",
          "Secure, monitored hosting",
          "Automated backups and updates",
          "SSL, security, and uptime monitoring",
          "Ongoing maintenance and support",
];

const RELATED = [
          "/services/recycling",
          "/services/managed-it",
          "/services/enterprise-government",
          "/services/it-as-a-service",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Websites"
        eyebrow="N° 12 · Online"
        title="Websites"
        lede="Domains, development, hosting, and backups. Your online presence, quietly safeguarded — built well, hosted securely, and looked after so it stays that way."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            Your website is often the first thing a prospective client sees, and the last thing anyone remembers to maintain.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We build sites that represent you properly, host them on infrastructure we monitor, and keep them backed up and updated so they do not quietly become a liability.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Businesses that need a professional website built and then properly looked after — not left to rot after launch." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
