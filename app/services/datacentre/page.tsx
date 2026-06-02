import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Datacentre Services", description: "Your critical infrastructure, monitored and managed with the rigour it demands. Server hosting, virtualisation, redundancy, and continuity planning." };

const INCLUDED = [
          "Server hosting and colocation management",
          "Virtualisation and capacity planning",
          "Redundancy and high-availability design",
          "24/7 infrastructure monitoring",
          "Business continuity and DR planning",
          "On-premises, hosted, or hybrid",
];

const RELATED = [
          "/services/managed-print",
          "/services/websites",
          "/services/recycling",
          "/services/managed-it",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Datacentre Services"
        eyebrow="N° 10 · Critical"
        title="Datacentre Services"
        lede="Your critical infrastructure, monitored and managed with the rigour it demands. Server hosting, virtualisation, redundancy, and continuity planning."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            Some workloads cannot tolerate downtime, and some data cannot tolerate risk. For those, we provide datacentre-grade hosting and management.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We design for redundancy, monitor for the first sign of trouble, and plan for the scenarios most organisations would rather not think about. The goal: the systems stay up, and if they do not, you recover fast.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Organisations running critical workloads that demand high availability, redundancy, and a serious approach to continuity." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
