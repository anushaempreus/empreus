"use client";
import Link from "next/link";
import { PageHead, DiscoverLink } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

const SERVICES = [
  { n:"N° 01", tag:"Flagship",       href:"/services/managed-it",           name:"Managed IT Services",       blurb:"Unlimited support, layered security, 24/7 monitoring.", variant:"feature", wide:true },
  { n:"N° 02", tag:"Intelligence",   href:"/services/managed-ai",            name:"Managed AI Services",       blurb:"Copilot, deployed, governed, and made safe." },
  { n:"N° 03", tag:"Compliance",     href:"/services/enterprise-government", name:"Enterprise & Government",   blurb:"Security governance, compliance, and infrastructure." },
  { n:"N° 04", tag:"Subscription",   href:"/services/it-as-a-service",       name:"Your IT, as a Service",     blurb:"Hardware, software, support — one monthly cost." },
  { n:"N° 05", tag:"Infrastructure", href:"/services/cloud",                  name:"Cloud Service",             blurb:"Migration, management, optimisation — by design." },
  { n:"N° 06", tag:"Connectivity",   href:"/services/communication",          name:"Communication",             blurb:"Internet, VoIP, SD-WAN, video conferencing." },
  { n:"N° 07", tag:"Bespoke",        href:"/services/software-development",   name:"Software & App Development",blurb:"Software that feels effortless. Built around your work.", variant:"dark" },
  { n:"N° 08", tag:"Continuity",     href:"/services/backup-recovery",        name:"Backup & Recovery",         blurb:"Automated backups, tested recovery, assured restore." },
  { n:"N° 09", tag:"Protection",     href:"/services/it-security",            name:"IT Security",               blurb:"Endpoint, EDR, governance — the invisible architecture." },
  { n:"N° 10", tag:"Assessment",     href:"/services/it-audit",               name:"IT Audit",                  blurb:"Risks illuminated, opportunities revealed, path forward." },
  { n:"N° 11", tag:"Critical",       href:"/services/datacentre",             name:"Datacentre Services",       blurb:"Monitored and managed with rigour. Continuity by design." },
  { n:"N° 12", tag:"Office",         href:"/services/managed-print",          name:"Print & Managed Print",     blurb:"Setup, servicing, repairs — the overlooked details." },
  { n:"N° 13", tag:"Online",         href:"/services/websites",               name:"Websites",                  blurb:"Domains, development, hosting, and backups." },
  { n:"N° 14", tag:"Responsibility", href:"/services/recycling",              name:"Earth-friendly Recycling",  blurb:"Devices, cartridges, batteries — responsibly returned." },
];

export default function Services() {
  return (
    <>
      <PageHead crumb="Empreus · Services" title="What we " accentWord="do." lede="Fourteen services. One team. From a Tuesday-morning helpdesk ticket to a multi-year compliance program — handled under one roof, to one standard." />
      <section style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(60px,8vw,116px) clamp(16px,3.5vw,48px)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"clamp(12px,1.4vw,18px)" }} className="svc-collection">
          {SERVICES.map(({ n, tag, href, name, blurb, variant, wide }) => {
            const isF=variant==="feature", isD=variant==="dark", inv=isF||isD;
            const bg=isF?"var(--orange)":isD?"var(--ink)":"var(--paper-2)";
            return (
              <Link key={href} href={href} className={wide?"svc-wide":""} style={{ position:"relative", aspectRatio:wide?"auto":"4/5", background:bg, padding:"clamp(20px,2vw,30px)", display:"flex", flexDirection:"column", justifyContent:"space-between", textDecoration:"none", color:inv?"var(--paper)":"var(--ink)", gridColumn:wide?"span 2":undefined, transition:"background .3s" }}
                onMouseEnter={e=>{e.currentTarget.style.background=isF?"var(--orange-deep)":isD?"#2A2A2A":"var(--paper-3)";}}
                onMouseLeave={e=>{e.currentTarget.style.background=bg;}}>
                <div style={{ display:"flex", justifyContent:"space-between", fontSize:"10.5px", letterSpacing:".22em", textTransform:"uppercase", fontWeight:500 }}>
                  <span style={{ fontFamily:slab }}>{n}</span><span style={{ color:inv?"rgba(255,255,255,.7)":"var(--ink-faint)" }}>{tag}</span>
                </div>
                <div style={{ fontFamily:slab, fontWeight:500, fontSize:wide?"clamp(28px,3.2vw,46px)":"clamp(22px,2.3vw,33px)", lineHeight:1.05, margin:"auto 0", padding:wide?"28px 0":"18px 0" }}>{name}</div>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:12 }}>
                  <span style={{ fontSize:"11.5px", color:inv?"rgba(255,255,255,.8)":"var(--ink-mute)", lineHeight:1.5, maxWidth:"72%" }}>{blurb}</span>
                  <span style={{ width:32, height:32, border:`1px solid ${inv?"var(--paper)":"currentColor"}`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:12 }}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
        <style>{`
          @media(max-width:1100px){.svc-collection{grid-template-columns:repeat(3,1fr)!important;}}
          @media(max-width:760px){.svc-collection{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:440px){.svc-collection{grid-template-columns:1fr!important;}.svc-wide{grid-column:span 1!important;aspect-ratio:4/5!important;}}
        `}</style>
      </section>
      <div style={{ background:"var(--paper-2)", padding:"clamp(48px,6vw,78px) clamp(16px,3.5vw,48px)", textAlign:"center" }}>
        <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(24px,3vw,40px)", marginBottom:20 }}>Ready to begin?</h2>
        <p style={{ fontFamily:slab, fontSize:"clamp(16px,1.8vw,20px)", color:"var(--ink-mute)", marginBottom:36, maxWidth:500, margin:"0 auto 36px" }}>An honest first conversation</p>
        <div style={{ display:"flex", gap:32, justifyContent:"center", flexWrap:"wrap", fontSize:"14.5px" }}>
          {[["Telephone","02 6189 1322"],["Email","support@empreus.com.au"],["In person","Unit 18, 63 Wollongong Street, Fyshwick ACT 2609"]].map(([k,v])=>(
            <div key={k}><strong style={{ display:"block", fontSize:10, letterSpacing:".26em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:4 }}>{k}</strong><span style={{ fontFamily:slab, fontSize:16 }}>{v}</span></div>
          ))}
        </div>
        <div style={{ marginTop:32 }}><DiscoverLink href="/onboarding">See How We Onboard</DiscoverLink></div>
      </div>
    </>
  );
}
