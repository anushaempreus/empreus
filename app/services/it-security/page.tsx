import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "IT Security", description: "Endpoint protection, managed detection and response, email security, and governance. The invisible architecture that keeps your organisation secure." };

const INCLUDED = [
          "Managed EDR and threat hunting (Huntress)",
          "Email security and anti-phishing (Proofpoint)",
          "Endpoint and identity protection",
          "Security awareness and policy governance",
          "Incident detection and response",
          "Essential Eight-aligned hardening",
];

const RELATED = [
          "/services/it-audit",
          "/services/datacentre",
          "/services/managed-print",
          "/services/websites",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · IT Security"
        eyebrow="N° 08 · Protection"
        title="IT Security"
        lede="Endpoint protection, managed detection and response, email security, and governance. The invisible architecture that keeps your organisation secure."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            Security is not a product you buy once; it is a posture you maintain. We layer protection across every point an attacker might try.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            Huntress provides managed EDR and threat hunting across every device. Proofpoint secures email against phishing and impersonation. On top of the tooling sits governance: the policies, the reviews, and the discipline.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Organisations that understand a single breach can undo years of work — and want security maintained as a discipline, not a checkbox." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
