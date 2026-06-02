import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Print & Managed Print", description: "Setup, servicing, repairs, supplies, and fully managed print. The overlooked details, attended to." };

const INCLUDED = [
          "Printer and MFD supply and setup",
          "Managed print with predictable per-page costs",
          "Automatic consumables replenishment",
          "Servicing, maintenance, and repairs",
          "Secure print and access controls",
          "Right-sized fleet, less waste",
];

const RELATED = [
          "/services/websites",
          "/services/recycling",
          "/services/managed-it",
          "/services/enterprise-government",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Print & Managed Print"
        eyebrow="N° 11 · Office"
        title="Print & Managed Print"
        lede="Setup, servicing, repairs, supplies, and fully managed print. The overlooked details, attended to."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            Printing is nobody's favourite topic, which is exactly why it gets neglected until it becomes a daily irritation.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We take it off your plate entirely: the devices, the consumables, the servicing, and the inevitable paper jams. Managed print also means predictable costs and less waste.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Offices tired of managing printers, consumables, and service calls themselves — and the surprise costs that come with them." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
