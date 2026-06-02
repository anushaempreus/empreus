"use client";
import { PageHead, DiscoverLink } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

const PHASES = [
  { n:"01", when:"Week 0 · 1 hour",        phase:"The Conversation", body:"An honest first chat. No pitch. We meet — in person at Fyshwick or by video — to understand what you have, what's working, and what isn't. We'll ask about your team, your environment, your past providers, and what made you start looking. We'll tell you honestly whether we think we're the right partner. If we are, we'll send a draft engagement proposal within five business days. If we're not, we'll tell you who we think might be.", checks:["Discovery call (60 minutes, no obligation)","Indicative scope and pricing within 5 business days","An honest recommendation, either way"] },
  { n:"02", when:"Week 1 · 2–3 days",       phase:"The Audit",        body:"Once we've agreed to proceed, we visit. We walk your sites, open your cabinets, review your stack, and meet your team. We complete our Transition Information Request — a structured questionnaire covering your environment, vendors, licences, contracts, escalation paths, and the small details that matter. You receive a written audit report with findings, risks, and recommended quick wins.", checks:["Site walk-through and cabinet audit","Transition Information Request completed jointly","Written audit report and risk register","Quick wins identified and prioritised"] },
  { n:"03", when:"Week 2 · 5 days",         phase:"The Build",        body:"We deploy our managed stack to your environment. SuperOps agents go on every endpoint. Huntress provides managed EDR. Proofpoint protects email. Cove backs up Microsoft 365 daily. Hudu becomes your living documentation — every device, password, contract, and runbook in one place. Where you have existing tools, we evaluate them. Where they're better than ours, we keep them.", checks:["SuperOps agents deployed and verified","Huntress, Proofpoint, and Cove activated","Hudu documentation built and populated","Existing tools reviewed — we keep what works"] },
  { n:"04", when:"Week 3 · 3–5 days",       phase:"The Handover",     body:"We coordinate directly with your previous provider for credentials, ownership transfers, runbook handovers, and outstanding contracts. We use a written handover checklist — nothing relies on memory or goodwill. Your team meets the engineers who'll be answering the phone.", checks:["Credential and ownership transfers, documented","Domain, M365, Azure, and hosting access verified","Escalation matrix shared with your team","Introduction to your assigned engineers"] },
  { n:"05", when:"Day 30 · Half a day",     phase:"Go-Live",          body:"Quiet, planned, and undramatic. We flip the switch — support now routes through Empreus. Your team lodges their first tickets. We're available all day. The monitoring is live. The documentation is current.", checks:["Support routing live through Empreus","First tickets lodged and resolved","Full-day availability from the team","Monitoring confirmed across all endpoints"] },
  { n:"06", when:"Days 30–90 · Ongoing",    phase:"The First 90 Days",body:"The relationship deepens. We work through the inevitable surprises every new environment reveals. We refine documentation. We resolve the items from the quick-wins list. We hold a 30-day review call and a 60-day review call.", checks:["30-day and 60-day review calls","Quick wins completed and documented","Environment documentation refined","Any issues from go-live closed out"] },
  { n:"07", when:"Day 90 onward",           phase:"The Steady State", body:"By day 90, the unusual should be unusual. You know our engineers. We know your environment. The runbooks are current. The monitoring is tuned. The work that was visible in the first ninety days now happens in the background, where it belongs.", checks:["90-day review and service health report","SLA performance reviewed","Annual planning conversation scheduled","You stop thinking about IT — which is the goal"] },
];

export default function Onboarding() {
  return (
    <>
      <PageHead crumb="Empreus · Onboarding" title="How we " accentWord="onboard." lede="A considered 30 to 45 day transition. Documented, deliberate, and built so nothing falls through the gaps when you switch providers." />

      {/* Stats */}
      <div style={{ borderTop:"1px solid var(--rule-soft)", borderBottom:"1px solid var(--rule-soft)" }}>
        <div style={{ maxWidth:"var(--max)", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", padding:"0 clamp(16px,3.5vw,48px)" }} className="ob-stats">
          {[["30–45 Days","Typical Transition"],["7 Phases","Documented"],["1 Named","Transition Lead"],["0 Surprises","at Go-Live"]].map(([big,lbl],i)=>(
            <div key={i} style={{ padding:"34px 22px", borderRight:i<3?"1px solid var(--rule-soft)":"none", textAlign:"center" }}>
              <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(28px,3vw,42px)", lineHeight:1, marginBottom:8 }}>{big}</div>
              <div style={{ fontSize:"10.5px", letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", fontWeight:500 }}>{lbl}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:720px){.ob-stats{grid-template-columns:1fr 1fr!important;}}`}</style>
      </div>

      <div style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(44px,6vw,78px) clamp(16px,3.5vw,48px) clamp(38px,5vw,60px)" }}>
        <div style={{ textAlign:"center", marginBottom:"clamp(38px,5vw,60px)" }}>
          <div style={{ fontSize:11, letterSpacing:".3em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:14, fontWeight:500 }}>The Process</div>
          <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(28px,3.6vw,48px)", lineHeight:1.05 }}>Seven phases.</h2>
        </div>
      </div>

      <div style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"0 clamp(16px,3.5vw,48px)" }}>
        {PHASES.map(({ n, when, phase, body, checks }) => (
          <div key={n} style={{ display:"grid", gridTemplateColumns:"240px 1fr", gap:"clamp(24px,4vw,70px)", padding:"clamp(38px,5vw,60px) 0", borderTop:"1px solid var(--rule-soft)", alignItems:"start" }} className="tl-step">
            <div>
              <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(46px,5vw,70px)", lineHeight:1, color:"var(--orange)", marginBottom:14 }}>{n}</div>
              <div style={{ fontSize:11, letterSpacing:".28em", textTransform:"uppercase", color:"var(--ink-mute)", fontWeight:500, marginBottom:8 }}>{when}</div>
              <div style={{ fontFamily:slab, fontWeight:500, fontSize:22, lineHeight:1.2 }}>{phase}</div>
            </div>
            <div>
              <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14, maxWidth:640 }}>{body}</p>
              <ul style={{ listStyle:"none", padding:0, marginTop:12 }}>
                {checks.map(c=>(
                  <li key={c} style={{ fontSize:"13.5px", lineHeight:1.6, color:"var(--ink)", paddingLeft:26, marginBottom:6, position:"relative" }}>
                    <span style={{ position:"absolute", left:0, color:"var(--orange)", fontWeight:600 }}>✓</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div style={{ padding:"clamp(38px,5vw,60px) 0", borderTop:"1px solid var(--rule-soft)", borderBottom:"1px solid var(--rule-soft)", textAlign:"center" }}>
          <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(24px,3vw,38px)", lineHeight:1.2, marginBottom:24 }}>Onboarding done badly is where MSP relationships go to die.</h2>
          <p style={{ fontSize:"14.5px", color:"var(--ink-mute)", maxWidth:580, margin:"0 auto 32px", lineHeight:1.7 }}>We&apos;ve inherited enough broken environments to know what bad onboarding costs. Ours is designed to surface the problems before go-live, not after.</p>
          <DiscoverLink href="/contact">Start a Conversation</DiscoverLink>
        </div>
        <style>{`@media(max-width:800px){.tl-step{grid-template-columns:1fr!important;gap:22px!important;padding:32px 0!important;}}`}</style>
      </div>
    </>
  );
}
