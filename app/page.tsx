"use client";
import Link from "next/link";
import { DiscoverLink, VisitBanner } from "@/components/UI";

const slab = "var(--font-slab, 'Roboto Slab', Georgia, serif)";

const SERVICES = [
  { n:"N° 01", tag:"Flagship",       href:"/services/managed-it",           name:"Managed\nIT Services",        blurb:"Unlimited support, layered security, 24/7 monitoring.",          variant:"feature", wide:true },
  { n:"N° 02", tag:"Compliance",     href:"/services/enterprise-government", name:"Enterprise &\nGovernment",    blurb:"Security governance, compliance, and infrastructure.",            variant:"" },
  { n:"N° 03", tag:"Subscription",   href:"/services/it-as-a-service",       name:"Your IT,\nas a Service",      blurb:"Hardware, software, support — one monthly cost.",                 variant:"" },
  { n:"N° 04", tag:"Infrastructure", href:"/services/cloud",                  name:"Cloud\nService",              blurb:"Migration, management, optimisation — by design.",               variant:"" },
  { n:"N° 05", tag:"Connectivity",   href:"/services/communication",          name:"Communication",               blurb:"Internet, VoIP, SD-WAN, video conferencing.",                    variant:"" },
  { n:"N° 06", tag:"Bespoke",        href:"/services/software-development",   name:"Software &\nApp Development", blurb:"Software that feels effortless. Built around your work.",        variant:"dark" },
  { n:"N° 07", tag:"Continuity",     href:"/services/backup-recovery",        name:"Backup &\nRecovery",          blurb:"Automated backups, tested recovery, assured restore.",            variant:"" },
  { n:"N° 08", tag:"Protection",     href:"/services/it-security",            name:"IT\nSecurity",                blurb:"Endpoint, EDR, governance — the invisible architecture.",        variant:"" },
  { n:"N° 09", tag:"Assessment",     href:"/services/it-audit",               name:"IT\nAudit",                   blurb:"Risks illuminated, opportunities revealed, path forward.",       variant:"" },
  { n:"N° 10", tag:"Critical",       href:"/services/datacentre",             name:"Datacentre\nServices",        blurb:"Monitored and managed with rigour. Continuity by design.",       variant:"" },
  { n:"N° 11", tag:"Office",         href:"/services/managed-print",          name:"Print &\nManaged Print",      blurb:"Setup, servicing, repairs — the overlooked details.",            variant:"" },
  { n:"N° 12", tag:"Online",         href:"/services/websites",               name:"Websites",                    blurb:"Domains, development, hosting, and backups.",                    variant:"" },
  { n:"N° 13", tag:"Responsibility", href:"/services/recycling",              name:"Earth-friendly\nRecycling",   blurb:"Devices, cartridges, batteries — responsibly returned.",         variant:"" },
];

const JOURNAL = [
  { date:"28 May 2026 · Advisory", pull:"A practical guide to the Microsoft 365 July price increase.", cat:"Microsoft 365 · Pricing", title:"What changes for ACT clients on 1 July — and how to plan.", desc:"Month-to-month billing, mitigation steps, and what we're recommending.", alt:false },
  { date:"14 May 2026 · Security",  pull:"Why we standardised on Huntress across every environment.",   cat:"EDR · Security",           title:"The case for managed EDR over traditional antivirus, in 2026.", desc:"Detection, response, and what 24/7 coverage actually buys you.", alt:true },
  { date:"02 May 2026 · Studio",    pull:"The SOP library, now 48 documents strong.",                   cat:"Operations · Documentation", title:"Why we publish our SOPs — and what's in the library this quarter.", desc:"Transparency, repeatability, and the discipline of writing things down.", alt:false },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"LocalBusiness","name":"Empreus IT Support",
        "image":"https://empreusitsupport.com.au/logo.png","@id":"https://empreusitsupport.com.au",
        "url":"https://empreusitsupport.com.au","telephone":"+61261891322",
        "address":{"@type":"PostalAddress","streetAddress":"Unit 19, 63 Wollongong Street","addressLocality":"Fyshwick","addressRegion":"ACT","postalCode":"2609","addressCountry":"AU"},
        "openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"17:00"},
        "sameAs":["https://www.facebook.com/empreusitsupport/","https://www.linkedin.com/company/empreus-it-support/"]
      })}} />

      {/* Hero */}
      <section style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(60px,9vw,130px) clamp(16px,3.5vw,48px) clamp(48px,7vw,96px)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div aria-hidden style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-46%)", fontFamily:slab, fontWeight:600, fontSize:"min(70vw,900px)", lineHeight:1, color:"var(--orange)", opacity:.03, pointerEvents:"none", zIndex:0, letterSpacing:"-.04em" }}>E</div>
        <div style={{ position:"relative", zIndex:1 }}>
          <div className="anim-rise anim-delay-05" style={{ fontSize:11, letterSpacing:".35em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:28, fontWeight:500, display:"inline-flex", alignItems:"center", gap:14 }}>
            <span style={{ width:28, height:1, background:"var(--orange)", display:"inline-block" }} />
            Considered IT · Canberra since 2016
            <span style={{ width:28, height:1, background:"var(--orange)", display:"inline-block" }} />
          </div>
          <h1 className="anim-rise anim-delay-15" style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(54px,10.5vw,160px)", lineHeight:.92, letterSpacing:"-.015em", marginBottom:34, color:"var(--ink)" }}>
            IT that<br /><span style={{ color:"var(--orange)" }}>just works.</span>
          </h1>
          <p className="anim-rise anim-delay-35" style={{ fontSize:"clamp(15px,1.5vw,18px)", lineHeight:1.6, color:"var(--ink-mute)", maxWidth:580, margin:"0 auto 38px" }}>
            A small Canberra studio for managed IT, cybersecurity, cloud, and bespoke software. Built so you can stop thinking about IT.
          </p>
          <div className="anim-rise anim-delay-5" style={{ display:"inline-flex", gap:28, flexWrap:"wrap", justifyContent:"center" }}>
            <DiscoverLink href="/services">See What We Do</DiscoverLink>
            <DiscoverLink href="/onboarding">How We Onboard</DiscoverLink>
            <DiscoverLink href="/contact">Start a Conversation</DiscoverLink>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{ borderTop:"1px solid var(--rule-soft)", borderBottom:"1px solid var(--rule-soft)" }}>
        <div style={{ maxWidth:"var(--max)", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", padding:"0 clamp(16px,3.5vw,48px)" }} className="stats-grid">
          {[
            { big:"10",  label:"Years in Canberra" },
            { big:"13",  label:"Services, One Team" },
            { big:"24/7", label:"Monitoring & Response" },
            { big:"DTA", label:"Marketplace Panel" },
          ].map(({ big, label }, i) => (
            <div key={i} style={{ padding:"34px 22px", borderRight:i<3?"1px solid var(--rule-soft)":"none", textAlign:"center" }}>
              <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(32px,3.8vw,50px)", lineHeight:1, marginBottom:8 }}>{big}</div>
              <div style={{ fontSize:"10.5px", letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", fontWeight:500 }}>{label}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:720px){.stats-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </div>

      {/* Services */}
      <section style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(60px,8vw,116px) clamp(16px,3.5vw,48px)" }}>
        <div style={{ textAlign:"center", marginBottom:"clamp(38px,5vw,60px)" }}>
          <div style={{ fontSize:11, letterSpacing:".3em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:14, fontWeight:500 }}>What We Do</div>
          <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(28px,3.6vw,48px)", lineHeight:1.05, letterSpacing:"-.005em" }}>Thirteen services. One team.</h2>
          <p style={{ fontSize:"14.5px", color:"var(--ink-mute)", marginTop:14, maxWidth:600, marginLeft:"auto", marginRight:"auto", lineHeight:1.6 }}>From a Tuesday-morning helpdesk ticket to a multi-year compliance program — handled under one roof, to one standard.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"clamp(12px,1.4vw,18px)" }} className="collection-grid">
          {SERVICES.map((s) => <ServiceTile key={s.href} {...s} wide={!!s.wide} />)}
        </div>
        <div style={{ marginTop:"clamp(40px,5vw,60px)", textAlign:"center" }}>
          <DiscoverLink href="/services">View All Services</DiscoverLink>
        </div>
        <style>{`
          @media(max-width:1100px){.collection-grid{grid-template-columns:repeat(3,1fr)!important;}}
          @media(max-width:760px){.collection-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:440px){.collection-grid{grid-template-columns:1fr!important;}}
          @media(max-width:440px){.tile-wide{grid-column:span 1!important;aspect-ratio:4/5!important;}}
        `}</style>
      </section>

      {/* Editorial */}
      <section style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(60px,8vw,116px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"center", borderTop:"1px solid var(--rule-soft)", borderBottom:"1px solid var(--rule-soft)" }} className="editorial-grid">
        <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(40px,6.4vw,92px)", lineHeight:.95, letterSpacing:"-.015em" }}>
          <span>Small studio.</span><br />
          <span style={{ color:"var(--ink-mute)" }}>Long memory.</span><br />
          <span style={{ color:"var(--orange)" }}>Careful work.</span>
        </div>
        <div>
          <div style={{ fontSize:11, letterSpacing:".3em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:18, fontWeight:500 }}>The Studio</div>
          <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(22px,2.4vw,30px)", lineHeight:1.2, marginBottom:20, letterSpacing:"-.005em" }}>We&apos;re a small Canberra MSP, on purpose.</h2>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14, maxWidth:460 }}>Empreus is small by design. Our engineers work the same clients for years. They remember the cabinet your server lives in, the way your CFO prefers to be escalated, and which printer always jams on Tuesdays.</p>
          <p style={{ fontSize:"14.5px", lineHeight:1.7, color:"var(--ink-mute)", marginBottom:14, maxWidth:460 }}>Our stack — SuperOps, Hudu, Huntress, Proofpoint, Cove — was chosen on merits, not marketing. Our standards stay high not because they&apos;re enforced, but because they&apos;re shared across the team.</p>
          <DiscoverLink href="/about" style={{ marginTop:16 }}>More About Us</DiscoverLink>
        </div>
        <style>{`@media(max-width:900px){.editorial-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Journal */}
      <section style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(60px,8vw,116px) clamp(16px,3.5vw,48px)" }}>
        <div style={{ textAlign:"center", marginBottom:"clamp(38px,5vw,60px)" }}>
          <div style={{ fontSize:11, letterSpacing:".3em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:14, fontWeight:500 }}>The Journal</div>
          <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(28px,3.6vw,48px)", lineHeight:1.05 }}>Notes from the studio.</h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"clamp(20px,3vw,40px)" }} className="journal-grid">
          {JOURNAL.map(({ date, pull, cat, title, desc, alt }) => (
            <Link key={title} href="/journal" style={{ display:"flex", flexDirection:"column", gap:16, textDecoration:"none" }}>
              <div style={{ aspectRatio:"5/4", background:alt?"var(--ink)":"var(--paper-2)", padding:30, display:"flex", flexDirection:"column", justifyContent:"space-between", color:alt?"var(--paper)":"var(--ink)" }}>
                <div style={{ fontSize:"10.5px", letterSpacing:".22em", textTransform:"uppercase", color:alt?"rgba(255,255,255,.6)":"var(--ink-faint)", fontWeight:500 }}>{date}</div>
                <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(20px,2vw,27px)", lineHeight:1.15 }}>{pull}</div>
              </div>
              <div>
                <div style={{ fontSize:"10.5px", letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>{cat}</div>
                <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:16, lineHeight:1.35, marginBottom:10 }}>{title}</h3>
                <p style={{ fontSize:13, color:"var(--ink-mute)", lineHeight:1.55 }}>{desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop:"clamp(40px,5vw,60px)", textAlign:"center" }}>
          <DiscoverLink href="/journal">Read the Journal</DiscoverLink>
        </div>
        <style>{`@media(max-width:900px){.journal-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      </section>

      <VisitBanner />
    </>
  );
}

function ServiceTile({ n, tag, href, name, blurb, variant, wide }: { n:string; tag:string; href:string; name:string; blurb:string; variant:string; wide:boolean }) {
  const isF = variant==="feature", isD = variant==="dark";
  const bg = isF?"var(--orange)":isD?"var(--ink)":"var(--paper-2)";
  const bgH = isF?"var(--orange-deep)":isD?"#2A2A2A":"var(--paper-3)";
  const inv = isF||isD;
  return (
    <Link href={href} className={wide?"tile-wide":""} style={{ position:"relative", aspectRatio:wide?"auto":"4/5", background:bg, padding:"clamp(20px,2vw,30px)", display:"flex", flexDirection:"column", justifyContent:"space-between", transition:"background .35s", overflow:"hidden", textDecoration:"none", color:inv?"var(--paper)":"var(--ink)", gridColumn:wide?"span 2":undefined }}
      onMouseEnter={e=>{ e.currentTarget.style.background=bgH; }}
      onMouseLeave={e=>{ e.currentTarget.style.background=bg; }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", fontSize:"10.5px", letterSpacing:".22em", textTransform:"uppercase", fontWeight:500 }}>
        <span style={{ fontFamily:slab, color:inv?"rgba(255,255,255,.9)":"var(--ink)" }}>{n}</span>
        <span style={{ color:inv?"rgba(255,255,255,.7)":"var(--ink-faint)" }}>{tag}</span>
      </div>
      <div style={{ fontFamily:slab, fontWeight:500, fontSize:wide?"clamp(28px,3.2vw,46px)":"clamp(22px,2.3vw,33px)", lineHeight:1.05, letterSpacing:"-.005em", margin:"auto 0", padding:wide?"28px 0":"18px 0", whiteSpace:"pre-line" }}>{name}</div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:12 }}>
        <span style={{ fontSize:wide?13:"11.5px", color:inv?"rgba(255,255,255,.8)":"var(--ink-mute)", lineHeight:1.5, maxWidth:wide?"60%":"72%" }}>{blurb}</span>
        <span style={{ width:32, height:32, border:`1px solid ${inv?"var(--paper)":"currentColor"}`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:12 }}>→</span>
      </div>
    </Link>
  );
}
