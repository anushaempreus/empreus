import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Your IT as a Service", description: "Hardware, software, and support — delivered as a single, predictable monthly subscription. No capital outlay, no surprise replacement bills, no compromise." };

const INCLUDED = [
          "Business-grade hardware, refreshed on schedule",
          "Microsoft 365 and software licensing, managed",
          "Full managed support included",
          "Onboarding and offboarding handled for you",
          "One predictable per-user monthly cost",
          "No upfront capital investment",
];

const RELATED = [
          "/services/cloud",
          "/services/communication",
          "/services/software-development",
          "/services/backup-recovery",
];

export default function Page() {
  return (
    <>
      <PageHead
        crumb="Empreus · Services · Your IT as a Service"
        eyebrow="N° 03 · Subscription"
        title="Your IT as a Service"
        lede="Hardware, software, and support — delivered as a single, predictable monthly subscription. No capital outlay, no surprise replacement bills, no compromise."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            Buying IT the traditional way means lumpy capital spending, ageing equipment nobody budgeted to replace, and licences that drift out of compliance.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            IT as a Service replaces all of that with one per-user fee that covers the device, the software, the support, and the refresh. We own the lifecycle so you do not have to think about it.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Growing businesses that would rather convert unpredictable IT capital costs into a single, scalable monthly operating expense." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
