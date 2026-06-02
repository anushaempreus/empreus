import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Cloud Service", description: "From cloud migration to ongoing management. Azure, Microsoft 365, AWS, and private hosted environments — selected for fit, configured for security, and refined over time." };

const INCLUDED = [
          "Cloud migration planning and execution",
          "Microsoft 365, Azure, and AWS management",
          "Private and hybrid hosted environments",
          "Cost optimisation and right-sizing",
          "Security configuration and monitoring",
          "Ongoing day-to-day administration",
];

const RELATED = [
          "/services/communication",
          "/services/software-development",
          "/services/backup-recovery",
          "/services/it-security",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Cloud Service"
        eyebrow="N° 04 · Infrastructure"
        title="Cloud Service"
        lede="From cloud migration to ongoing management. Azure, Microsoft 365, AWS, and private hosted environments — selected for fit, configured for security, and refined over time."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            The cloud is only an advantage when it is set up properly. Done badly, it is just someone else's computer with a bigger bill.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We design cloud environments around how your organisation actually works, migrate you carefully, and then manage the result so spend stays purposeful.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Organisations moving off ageing on-premises infrastructure, or those whose cloud spend has grown faster than the value they get from it." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
