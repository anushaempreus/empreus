import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Earth-friendly Recycling", description: "Devices, cartridges, and batteries — collected and returned to the world responsibly." };

const INCLUDED = [
          "Secure data destruction and wiping",
          "Certified e-waste recycling partners",
          "Device, cartridge, and battery collection",
          "Documented chain of custody",
          "Compliance-ready disposal records",
          "Responsible, low-landfill outcomes",
];

const RELATED = [
          "/services/managed-it",
          "/services/enterprise-government",
          "/services/it-as-a-service",
          "/services/cloud",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Earth-friendly Recycling"
        eyebrow="N° 13 · Responsibility"
        title="Earth-friendly Recycling"
        lede="Devices, cartridges, and batteries — collected and returned to the world responsibly."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            Retired IT equipment carries two risks: the environmental cost of e-waste, and the data still sitting on devices that leave your control.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We handle both — secure data destruction first, then responsible recycling through certified partners. We document the chain of custody so you have records for compliance and peace of mind.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Any organisation retiring old equipment that wants it disposed of securely, responsibly, and with a paper trail." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
