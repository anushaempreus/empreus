import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "IT Audit", description: "A meticulous examination of your technology landscape — risks illuminated, opportunities revealed, and a clear, prioritised path forward." };

const INCLUDED = [
          "On-site and remote environment review",
          "Security and compliance gap assessment",
          "Infrastructure and licensing audit",
          "Written report with prioritised findings",
          "Risk register and remediation roadmap",
          "Quick wins identified separately",
];

const RELATED = [
          "/services/datacentre",
          "/services/managed-print",
          "/services/websites",
          "/services/recycling",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · IT Audit"
        eyebrow="N° 09 · Assessment"
        title="IT Audit"
        lede="A meticulous examination of your technology landscape — risks illuminated, opportunities revealed, and a clear, prioritised path forward."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            You cannot improve what you cannot see. An Empreus IT Audit gives you an honest, independent picture of your environment.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We walk your sites, review your systems, interview your team, and deliver a written report: findings, a risk register, and a prioritised list of recommendations with the quick wins called out separately.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Boards, business owners, and incoming managers who need an independent, plain-language assessment of where their IT really stands." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
