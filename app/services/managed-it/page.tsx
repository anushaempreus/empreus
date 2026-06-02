import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Managed IT Services", description: "Our flagship engagement, and the foundation everything else builds on. Unlimited support for your team, layered cybersecurity across every device, and round-the-clock monitoring of the systems your business runs on." };

const INCLUDED = [
          "Unlimited helpdesk support from named engineers",
          "24/7 monitoring with after-hours response",
          "Managed EDR, email security, and Microsoft 365 backup",
          "Patch management and proactive maintenance",
          "Continuous documentation in Hudu",
          "Monthly reporting and quarterly business reviews",
];

const RELATED = [
          "/services/enterprise-government",
          "/services/it-as-a-service",
          "/services/cloud",
          "/services/communication",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Managed IT Services"
        eyebrow="N° 01 · Flagship"
        title="Managed IT Services"
        lede="Our flagship engagement, and the foundation everything else builds on. Unlimited support for your team, layered cybersecurity across every device, and round-the-clock monitoring of the systems your business runs on."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            We become your IT department — or work alongside the one you have. Day to day, that means your team calls a named engineer who already knows your environment, not a queue. In the background, it means patching, monitoring, and security that happen whether or not anyone files a ticket.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We become your IT department — or work alongside the one you have. Three tiers — Essential, Ascend, and Prestige — let us match the depth of care to your environment.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Canberra businesses and organisations that want a complete, hands-off IT function — without being passed around a call centre when something breaks." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
