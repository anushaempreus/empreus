import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Enterprise & Government", description: "For organisations where trust is non-negotiable. Security governance, compliance, and infrastructure management at a standard suitable for federal departments and security-sensitive operations." };

const INCLUDED = [
          "Security governance and policy development",
          "Essential Eight, ISM, and DISP-aligned practices",
          "Infrastructure management and continuity planning",
          "DTA Hardware Marketplace Panel procurement",
          "Cleared personnel for sensitive engagements",
          "Australian-owned, Canberra-based, no offshoring",
];

const RELATED = [
          "/services/it-as-a-service",
          "/services/cloud",
          "/services/communication",
          "/services/software-development",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Enterprise & Government"
        eyebrow="N° 02 · Compliance"
        title="Enterprise & Government"
        lede="For organisations where trust is non-negotiable. Security governance, compliance, and infrastructure management at a standard suitable for federal departments and security-sensitive operations."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            Government and enterprise IT carries obligations that ordinary managed services are not built for — frameworks to satisfy, evidence to maintain, and personnel who can be cleared. We work to those obligations as a matter of course, not as an add-on.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            As a DTA Hardware Marketplace Panel member, we are a known quantity to Commonwealth buyers. Australian-owned, locally accountable, and our entire team is based in Canberra.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Federal and ACT government departments, defence-adjacent organisations, and enterprises with formal compliance and governance requirements." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
