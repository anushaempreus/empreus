"use client";
import { PageHead, DiscoverLink, VisitBanner } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

export default function About() {
  return (
    <>
      <PageHead crumb="Empreus · About" title="The Studio." accentWord="Studio." lede="A small Canberra MSP that has stayed small on purpose. Founded in 2016, still answering its own phone." />
      <div style={{ maxWidth:820, margin:"0 auto", padding:"clamp(44px,6vw,84px) clamp(16px,3.5vw,48px)" }}>
        <p style={{ fontFamily:slab, fontSize:"clamp(19px,2vw,24px)", lineHeight:1.45, marginBottom:32 }}>Empreus was founded in 2016 by Darko Reljic, a Canberran engineer who wanted to run an IT business the way he thought IT should be run — slowly, carefully, with the phone answered by someone who knew your name.</p>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>Ten years on, we&apos;re still a small team, and that&apos;s deliberate. We&apos;ve turned down growth that would have changed what we are. We don&apos;t run a call centre, an offshore overflow desk, or a sales floor. We have engineers who&apos;ve worked the same clients for years.</p>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>We hold a simple conviction: technology, at its best, is an act of craftsmanship. The wiring should be neat even where nobody sees it. The documentation should make sense to the next engineer who picks it up. The tools should be chosen on their merits — not because a vendor took us to lunch.</p>

        <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(24px,2.6vw,32px)", lineHeight:1.2, margin:"46px 0 18px" }}>What we do</h2>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>We run fourteen services across daily IT support, managed AI, security, cloud, software development, communication, and enterprise governance. Our clients are ACT government departments, Canberra businesses, and a handful of national organisations. We&apos;re a member of the DTA Hardware Marketplace Panel, Australian-owned and operated, and locally accountable.</p>

        <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(24px,2.6vw,32px)", lineHeight:1.2, margin:"46px 0 18px" }}>How we work</h2>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:20 }}>Our stack is deliberate and small. SuperOps for RMM and PSA. Huntress for managed EDR. Proofpoint for email security. Cove for Microsoft 365 backup. Hudu for documentation. Every managed client gets the full stack. Every engagement gets documentation. Every escalation goes to a named person.</p>

        <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(24px,2.6vw,32px)", lineHeight:1.2, margin:"46px 0 18px" }}>Who we work with</h2>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>We&apos;re not for everyone. We&apos;re for the organisations where the CFO has read the contract twice and asked about clause 14.2. The ones where the operations manager would rather pay a little more for one phone call answered properly than save ten percent across three.</p>

        <hr style={{ border:"none", borderTop:"1px solid var(--rule-soft)", margin:"40px 0" }} />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }} className="facts-grid">
          {[["Founded","2016, Canberra"],["Entity","Empreus Support Pty Ltd · ABN 65 611 219 188"],["Address","Unit 18, 63 Wollongong Street, Fyshwick ACT 2609"],["Panels","DTA Hardware Marketplace"],["Services","Fourteen, under one roof"],["Hours","Mon–Fri, 9 AM – 5 PM · 24/7 monitoring"]].map(([k,v])=>(
            <div key={k}><strong style={{ display:"block", fontSize:10, letterSpacing:".26em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:4 }}>{k}</strong><span style={{ fontSize:15, color:"var(--ink)" }}>{v}</span></div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.facts-grid{grid-template-columns:1fr!important;}}`}</style>
        <div style={{ marginTop:40 }}><DiscoverLink href="/director">Read the message from our Director</DiscoverLink></div>
      </div>
      <VisitBanner eyeline="The kettle's always on" />
    </>
  );
}
