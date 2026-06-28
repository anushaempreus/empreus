"use client";
import Link from "next/link";
import { PageHead } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

const ENTRIES = [
  { date:"12 Jun 2026",  type:"AI",          pull:"Copilot is coming to your Microsoft 365. Here's how to let it in safely.",        cat:"AI · Governance",            title:"Copilot is coming to your Microsoft 365. Here's how to let it in safely.", desc:"Microsoft Copilot inherits every permission you've ever set — including the ones you've forgotten. Switching it on without preparation is how organisations accidentally surface payroll to the whole company.", alt:true },
  { date:"28 May 2026",  type:"Advisory",    pull:"A practical guide to the Microsoft 365 July price increase.",                      cat:"Microsoft 365 · Pricing",    title:"What changes for ACT clients on 1 July — and how to plan.",             desc:"Month-to-month billing, mitigation steps, and what we're recommending for clients.", alt:false },
  { date:"14 May 2026",  type:"Security",    pull:"Why we standardised on Huntress across every managed environment.",                cat:"EDR · Security",              title:"The case for managed EDR over traditional antivirus, in 2026.",          desc:"Detection, response, and what 24/7 coverage actually buys you.", alt:true },
  { date:"15 Apr 2026",  type:"How-to",      pull:"Bitwarden: a practical setup guide for small teams.",                             cat:"Security · How-to",           title:"Password management without the friction — our recommended setup.",      desc:"Personal vaults, shared collections, recovery, and the IT password spreadsheet problem.", alt:false },
  { date:"28 Mar 2026",  type:"Studio",      pull:"Why we say no to some clients.",                                                  cat:"Studio · Philosophy",        title:"On staying small and being selective about who we work with.",           desc:"A note on the relationships we look for, and the ones we politely decline.", alt:true },
  { date:"04 Mar 2026",  type:"Compliance",  pull:"DISP, IRAP, ISM, Essential Eight — a quick map.",                               cat:"Government · Compliance",     title:"Which standard applies to you — and what compliance actually costs.",    desc:"A short orientation for organisations entering federal procurement.", alt:false },
  { date:"02 Feb 2026",  type:"Continuity",  pull:"Backup is not recovery.",                                                        cat:"Continuity · Backup",        title:"What we test, how often, and why most MSPs don't.",                     desc:"What good recovery testing looks like, what's typical, and where to start.", alt:true },
];

export default function Journal() {
  return (
    <>
      <PageHead crumb="Empreus · Journal" title="The " accentWord="Journal." lede="Security advisories, Microsoft 365 updates, AI guidance, and occasional bulletins from the Empreus workshop." />
      <section style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(60px,8vw,116px) clamp(16px,3.5vw,48px)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"clamp(20px,3vw,40px)" }} className="jgrid">
          {ENTRIES.map(({ date, type, pull, cat, title, desc, alt }) => (
            <div key={title} style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <div style={{ aspectRatio:"5/4", background:alt?"var(--ink)":"var(--paper-2)", padding:30, display:"flex", flexDirection:"column", justifyContent:"space-between", color:alt?"var(--paper)":"var(--ink)" }}>
                <div style={{ fontSize:"10.5px", letterSpacing:".22em", textTransform:"uppercase", color:alt?"rgba(255,255,255,.6)":"var(--ink-faint)", fontWeight:500 }}>{date} · {type}</div>
                <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(20px,2vw,27px)", lineHeight:1.15 }}>{pull}</div>
              </div>
              <div>
                <div style={{ fontSize:"10.5px", letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>{cat}</div>
                <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:16, lineHeight:1.35, marginBottom:10 }}>{title}</h3>
                <p style={{ fontSize:13, color:"var(--ink-mute)", lineHeight:1.55 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:900px){.jgrid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      </section>
    </>
  );
}
