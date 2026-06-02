import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Communication", description: "Internet, VoIP, video conferencing, SD-WAN, and call centre solutions. We design and operate the connective tissue of your business." };

const INCLUDED = [
          "Business internet and connectivity",
          "Hosted VoIP and cloud telephony",
          "SD-WAN for multi-site reliability",
          "Video conferencing and meeting rooms",
          "Call centre and contact solutions",
          "Number porting and migrations handled cleanly",
];

const RELATED = [
          "/services/software-development",
          "/services/backup-recovery",
          "/services/it-security",
          "/services/it-audit",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Communication"
        eyebrow="N° 05 · Connectivity"
        title="Communication"
        lede="Internet, VoIP, video conferencing, SD-WAN, and call centre solutions. We design and operate the connective tissue of your business."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            Communication infrastructure is invisible until it fails — and then it is the only thing anyone can talk about. We treat it with the seriousness it deserves.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            Whether you are connecting a single office, linking multiple sites, or supporting a fully remote team, we design for reliability first and manage the result end to end.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Multi-site businesses, contact centres, and hybrid teams that depend on voice and connectivity working flawlessly, every time." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
