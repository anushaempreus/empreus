import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Backup & Recovery", description: "Automated backups. Tested recovery. The quiet assurance that what matters most is always within reach." };

const INCLUDED = [
          "Daily Microsoft 365 backup with Cove",
          "Server and infrastructure backups",
          "Defined retention and recovery objectives",
          "Regular, documented restore testing",
          "Ransomware-resilient backup design",
          "Clear recovery runbooks",
];

const RELATED = [
          "/services/it-security",
          "/services/it-audit",
          "/services/datacentre",
          "/services/managed-print",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Backup & Recovery"
        eyebrow="N° 07 · Continuity"
        title="Backup & Recovery"
        lede="Automated backups. Tested recovery. The quiet assurance that what matters most is always within reach."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            A backup you have never restored is a hope, not a plan. Plenty of organisations discover this at the worst possible moment.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We back up your Microsoft 365 tenancy, your servers, and your critical data on a schedule that matches your tolerance for loss — and then we test the restores.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Every organisation that would struggle to operate if it lost its email, files, or servers — which is to say, all of them." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
