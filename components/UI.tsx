"use client";
import Link from "next/link";

const slab = "var(--font-slab, 'Roboto Slab', Georgia, serif)";

// ───────────── Discover Link ─────────────
export function DiscoverLink({ href, children, style }: { href: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <Link href={href} style={{ fontSize:12, fontWeight:500, display:"inline-flex", alignItems:"center", gap:10, padding:"4px 0", borderBottom:"1px solid currentColor", transition:"color .25s", color:"var(--ink)", ...style }}
      onMouseEnter={e=>{e.currentTarget.style.color="var(--orange)";}}
      onMouseLeave={e=>{e.currentTarget.style.color="var(--ink)";}}>
      {children} <span style={{ fontSize:14, transition:"transform .25s", display:"inline-block" }}>→</span>
    </Link>
  );
}

// ───────────── Page Head ─────────────
export function PageHead({ crumb, eyebrow, title, accentWord, lede }: { crumb?: string; eyebrow?: string; title: string; accentWord?: string; lede?: string }) {
  const parts = accentWord ? title.split(accentWord) : [title];
  return (
    <div style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(44px,6vw,92px) clamp(16px,3.5vw,48px) clamp(38px,5vw,60px)", borderBottom:"1px solid var(--rule-soft)", textAlign:"center" }}>
      {crumb && <div className="anim-rise anim-delay-05" style={{ fontSize:11, letterSpacing:".28em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:22, fontWeight:500 }}>{crumb}</div>}
      {eyebrow && <div className="anim-rise anim-delay-05" style={{ fontFamily:slab, fontSize:14, color:"var(--orange)", letterSpacing:".1em", marginBottom:14 }}>{eyebrow}</div>}
      <h1 className="anim-rise anim-delay-15" style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(38px,5.6vw,76px)", lineHeight:1, letterSpacing:"-.01em", marginBottom:26 }}>
        {accentWord ? <>{parts[0]}<span style={{ color:"var(--orange)" }}>{accentWord}</span>{parts[1]}</> : title}
      </h1>
      {lede && <p className="anim-rise anim-delay-35" style={{ fontFamily:slab, fontWeight:400, fontSize:"clamp(17px,1.8vw,22px)", lineHeight:1.45, color:"var(--ink-mute)", maxWidth:640, margin:"0 auto" }}>{lede}</p>}
    </div>
  );
}

// ───────────── Stat Strip ─────────────
export function StatStrip({ stats }: { stats: { big: React.ReactNode; label: string }[] }) {
  return (
    <div style={{ borderTop:"1px solid var(--rule-soft)", borderBottom:"1px solid var(--rule-soft)" }}>
      <div style={{ maxWidth:"var(--max)", margin:"0 auto", display:"grid", gridTemplateColumns:`repeat(${stats.length},1fr)`, padding:"0 clamp(16px,3.5vw,48px)" }} className="stats-grid">
        {stats.map(({ big, label }, i) => (
          <div key={i} style={{ padding:"34px 22px", borderRight: i < stats.length-1 ? "1px solid var(--rule-soft)" : "none", textAlign:"center" }}>
            <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(32px,3.8vw,50px)", lineHeight:1, marginBottom:8 }}>{big}</div>
            <div style={{ fontSize:"10.5px", letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", fontWeight:500 }}>{label}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:720px){.stats-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </div>
  );
}

// ───────────── Visit Banner ─────────────
export function VisitBanner({ eyeline = "Visit us in" }: { eyeline?: string }) {
  return (
    <section style={{ background:"var(--paper-2)", padding:"clamp(60px,8vw,116px) clamp(16px,3.5vw,48px)" }}>
      <div style={{ maxWidth:"var(--max)", margin:"0 auto", display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:"clamp(40px,6vw,96px)", alignItems:"center" }} className="visit-inner">
        <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(40px,6.4vw,84px)", lineHeight:.95, letterSpacing:"-.015em" }}>
          {eyeline}<br /><span style={{ color:"var(--orange)" }}>Fyshwick.</span>
        </div>
        <div>
          <div style={{ fontSize:11, letterSpacing:".3em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:18, fontWeight:500 }}>Drop in or call ahead</div>
          {[
            ["Address","Unit 18/63 Wollongong Street\nFyshwick ACT 2609"],
            ["Telephone","02 6189 1322"],
            ["Email","support@empreus.com.au"],
            ["Hours","Monday – Friday, 9:00 AM – 5:00 PM"],
          ].map(([label,val])=>(
            <div key={label} style={{ marginBottom:22 }}>
              <strong style={{ display:"block", fontSize:10, letterSpacing:".28em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:8, fontWeight:500 }}>{label}</strong>
              <span style={{ fontFamily:slab, fontSize:17, fontWeight:400, color:"var(--ink)", lineHeight:1.45, display:"block", whiteSpace:"pre-line" }}>{val}</span>
            </div>
          ))}
          <DiscoverLink href="/contact" style={{ marginTop:8 }}>Request a Conversation</DiscoverLink>
        </div>
        <style>{`@media(max-width:900px){.visit-inner{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </section>
  );
}

// ───────────── Contact CTA (service pages) ─────────────
export function ContactCTA({ label = "Let's talk." }: { label?: string }) {
  return (
    <div style={{ background:"var(--paper-2)", padding:"clamp(40px,5vw,72px) clamp(16px,3.5vw,48px)" }}>
      <div style={{ maxWidth:"var(--max)", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(32px,5vw,80px)", alignItems:"center" }} className="cta-inner">
        <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(28px,3.8vw,52px)", lineHeight:1.05, letterSpacing:"-.01em" }}>
          {label}<br /><span style={{ color:"var(--ink-mute)", fontSize:".8em" }}>No pitch, no obligation</span>
        </div>
        <div>
          {[["Telephone","02 6189 1322","tel:0261891322"],["Email","support@empreus.com.au","mailto:support@empreus.com.au"],["In person","Unit 18, 63 Wollongong Street, Fyshwick ACT 2609",""]].map(([k,v,href])=>(
            <div key={k} style={{ marginBottom:18 }}>
              <strong style={{ display:"block", fontSize:10, letterSpacing:".26em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:4, fontWeight:500 }}>{k}</strong>
              {href ? <a href={href} style={{ fontFamily:slab, fontSize:16, color:"var(--ink)" }}>{v}</a> : <span style={{ fontFamily:slab, fontSize:16, color:"var(--ink)" }}>{v}</span>}
            </div>
          ))}
          <DiscoverLink href="/contact" style={{ marginTop:8 }}>Start a Conversation</DiscoverLink>
        </div>
        <style>{`@media(max-width:760px){.cta-inner{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </div>
  );
}

// ───────────── Service Sidebar (included list + who) ─────────────
export function ServiceSidebar({ included, who }: { included: string[]; who: string }) {
  return (
    <div style={{ background:"var(--paper-2)", padding:"clamp(28px,3vw,44px)" }}>
      <h3 style={{ fontFamily:slab, fontSize:13, letterSpacing:".12em", textTransform:"uppercase", color:"var(--ink)", marginBottom:20 }}>What&apos;s included</h3>
      <ul style={{ listStyle:"none", padding:0 }}>
        {included.map(item=>(
          <li key={item} style={{ fontSize:14, lineHeight:1.5, color:"var(--ink)", padding:"14px 0 14px 28px", borderBottom:"1px solid var(--rule)", position:"relative" }}>
            <span style={{ position:"absolute", left:0, color:"var(--orange)", fontWeight:600 }}>✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div style={{ marginTop:24, paddingTop:22, borderTop:"1px solid var(--rule)" }}>
        <strong style={{ display:"block", fontSize:10, letterSpacing:".26em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:8, fontWeight:600 }}>Who it&apos;s for</strong>
        <p style={{ fontSize:14, color:"var(--ink-mute)", lineHeight:1.6, margin:0 }}>{who}</p>
      </div>
    </div>
  );
}

// ───────────── Service Rail ─────────────
const ALL_SERVICES = [
  { n:"N° 01", href:"/services/managed-it", label:"Managed IT Services" },
  { n:"N° 02", href:"/services/enterprise-government", label:"Enterprise & Government" },
  { n:"N° 03", href:"/services/it-as-a-service", label:"Your IT as a Service" },
  { n:"N° 04", href:"/services/cloud", label:"Cloud Service" },
  { n:"N° 05", href:"/services/communication", label:"Communication" },
  { n:"N° 06", href:"/services/software-development", label:"Software & App Development" },
  { n:"N° 07", href:"/services/backup-recovery", label:"Backup & Recovery" },
  { n:"N° 08", href:"/services/it-security", label:"IT Security" },
  { n:"N° 09", href:"/services/it-audit", label:"IT Audit" },
  { n:"N° 10", href:"/services/datacentre", label:"Datacentre Services" },
  { n:"N° 11", href:"/services/managed-print", label:"Print & Managed Print" },
  { n:"N° 12", href:"/services/websites", label:"Websites" },
  { n:"N° 13", href:"/services/recycling", label:"Earth-friendly Recycling" },
];

export function ServiceRail({ show }: { show: string[] }) {
  const items = ALL_SERVICES.filter(s => show.includes(s.href));
  return (
    <div style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"0 clamp(16px,3.5vw,48px) clamp(60px,8vw,110px)" }}>
      <div style={{ fontSize:11, letterSpacing:".3em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:28, fontWeight:500, textAlign:"center" }}>Explore other services</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"clamp(12px,1.4vw,16px)" }} className="svc-rail-grid">
        {items.map(({ n, href, label }) => (
          <Link key={href} href={href} style={{ background:"var(--paper-2)", padding:"22px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:12, transition:"background .3s", textDecoration:"none" }}
            onMouseEnter={e=>{ e.currentTarget.style.background="var(--paper-3)"; (e.currentTarget.querySelector(".svc-nm") as HTMLElement).style.color="var(--orange)"; (e.currentTarget.querySelector(".svc-ar") as HTMLElement).style.color="var(--orange)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.background="var(--paper-2)"; (e.currentTarget.querySelector(".svc-nm") as HTMLElement).style.color="var(--ink)"; (e.currentTarget.querySelector(".svc-ar") as HTMLElement).style.color="var(--ink-faint)"; }}>
            <span style={{ fontFamily:slab, fontSize:12, color:"var(--ink-faint)", letterSpacing:".04em" }}>{n}</span>
            <span className="svc-nm" style={{ fontFamily:slab, fontWeight:500, fontSize:16, lineHeight:1.2, flex:1, paddingLeft:12, color:"var(--ink)", transition:"color .3s" }}>{label}</span>
            <span className="svc-ar" style={{ color:"var(--ink-faint)", transition:"color .3s" }}>→</span>
          </Link>
        ))}
      </div>
      <style>{`@media(max-width:900px){.svc-rail-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:440px){.svc-rail-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
