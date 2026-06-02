import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Software & App Development", description: "Bespoke software that feels effortless — quietly powerful, precisely aligned, and built around the way your organisation actually works." };

const INCLUDED = [
          "Custom web applications and internal tools",
          "Workflow automation and integrations",
          "API development and systems integration",
          "Modern, maintainable technology stack",
          "Clean documentation and handover",
          "Ongoing support and iteration",
];

const RELATED = [
          "/services/backup-recovery",
          "/services/it-security",
          "/services/it-audit",
          "/services/datacentre",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Software & App Development"
        eyebrow="N° 06 · Bespoke"
        title="Software & App Development"
        lede="Bespoke software that feels effortless — quietly powerful, precisely aligned, and built around the way your organisation actually works."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            Off-the-shelf software asks you to bend your process to fit the product. Sometimes that is the right trade. Often it is not.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We build web applications, internal tools, integrations, and small purposeful products that fit your operation exactly. Modern stack, clean handover, properly documented.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Organisations whose processes have outgrown spreadsheets and off-the-shelf tools, and who need software shaped around how they actually work." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
