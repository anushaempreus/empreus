import type { Metadata } from "next";
import { PageHead, ServiceSidebar, ServiceRail, ContactCTA } from "@/components/UI";

export const metadata: Metadata = { title: "Managed AI Services", description: "AI is arriving in your business whether you plan for it or not — through Microsoft Copilot, assistants like Claude, and open models you can run in-house. We help you adopt the right one deliberately: deployed, governed, and secured." };

const INCLUDED = [
          "AI readiness and data-governance assessment",
          "Microsoft 365 Copilot deployment and configuration",
          "Claude (Anthropic) rollout for teams — apps and API",
          "Local and self-hosted AI for data-sovereign workloads",
          "Permissions and oversharing remediation, before rollout",
          "AI usage policy, guardrails, and acceptable use",
          "Staff training and change management",
          "Ongoing monitoring, review, and tuning",
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
        crumb="Empreus · Services · Managed AI Services"
        eyebrow="N° 02 · Intelligence"
        title="Managed AI Services"
        lede="AI is arriving in your business whether you plan for it or not — through Microsoft Copilot, assistants like Claude, and a new generation of models you can run entirely in-house. We help you adopt the right one deliberately: deployed, governed, and secured, with the data controls, policy, and guardrails to match."
      />
      <div
        style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"start" }}
        className="svc-layout"
      >
        <div>
          <p style={{ fontFamily:"var(--font-slab,'Roboto Slab',Georgia,serif)", fontWeight:400, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:20 }}>
            There isn&apos;t one &quot;AI&quot; to adopt — there are three routes, each with a place. Microsoft Copilot is the AI most teams meet first, switched on inside the Microsoft 365 tools they already use. Cloud assistants like Claude are powerful for drafting, analysis, research, and coding — a genuine step up for knowledge work. And a new generation of open models can now run entirely on hardware you control, so sensitive data never leaves the building at all. The right choice depends on your data, your obligations, and the job you&apos;re trying to do.
          </p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14 }}>
            We&apos;re deliberately platform-agnostic, and governance comes first whichever route you take. That means fixing the data and permissions underneath before anything is enabled, choosing the right tool for the task rather than the loudest one, rolling out to a controlled pilot, writing the usage policy, and training your people — then monitoring and tuning as it beds in. For government and regulated clients, local AI keeps data sovereign by design, and we build in the extra controls: where data goes, what is safe to put into a prompt, and how to evidence that your AI use is governed.
          </p>
        </div>
        <ServiceSidebar included={INCLUDED} who="Organisations that want the productivity gains of AI — through Microsoft Copilot, Claude, or models run entirely in-house — without the data-exposure, compliance, and accuracy risks of switching it on blind. Particularly government-adjacent and regulated clients, where keeping data sovereign matters." />
        <style>{`.svc-layout { grid-template-columns: 1fr 1fr; } @media(max-width:860px){.svc-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <ServiceRail show={RELATED} />
      <ContactCTA />
    </>
  );
}
