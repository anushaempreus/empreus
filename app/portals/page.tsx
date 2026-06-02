"use client";
import { PageHead } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

const PORTALS = [
  { n:"N° 01", title:"Client Portal",    desc:"Lodge and track support requests, view your tickets, and see the status of work in progress — all in one place.", link:"Open Portal",       href:"#" },
  { n:"N° 02", title:"Hardware Store",   desc:"Browse and order business-grade hardware at panel pricing, with quotes and procurement handled by our team.",      link:"Visit Store",       href:"#" },
  { n:"N° 03", title:"Domain Manager",   desc:"Manage the domains we host for you — renewals, DNS, and records — or ask us to handle it on your behalf.",          link:"Manage Domains",    href:"#" },
  { n:"N° 04", title:"Knowledge Base",   desc:"How-to guides written by our team: Bitwarden setup, delegated mailboxes, and the everyday questions, answered.",    link:"Browse Guides",     href:"#" },
  { n:"N° 05", title:"Microsoft 365",    desc:"Quick links to your Microsoft 365 admin and user portals, plus our guides for common tasks.",                       link:"Go to 365",         href:"https://portal.office.com" },
  { n:"N° 06", title:"Remote Support",   desc:"Start a remote support session when an engineer asks — secure, on-demand screen sharing.",                          link:"Start Session",     href:"#" },
];

export default function Portals() {
  return (
    <>
      <PageHead crumb="Empreus · Portals" title="Your " accentWord="portals." lede="Your store. Your domains. Your support — all in one place. Quick links to the tools and systems we run for you." />
      <div style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"clamp(16px,2vw,24px)" }} className="portal-grid">
        {PORTALS.map(({ n, title, desc, link, href }) => (
          <a key={title} href={href} style={{ border:"1px solid var(--rule)", padding:"clamp(28px,3vw,44px)", display:"flex", flexDirection:"column", minHeight:280, transition:"background .3s, border-color .3s", textDecoration:"none", color:"var(--ink)" }}
            onMouseEnter={e=>{e.currentTarget.style.background="var(--paper-2)";e.currentTarget.style.borderColor="var(--orange)";(e.currentTarget.querySelector(".pc-link") as HTMLElement).style.color="var(--orange)";}}
            onMouseLeave={e=>{e.currentTarget.style.background="";e.currentTarget.style.borderColor="var(--rule)";(e.currentTarget.querySelector(".pc-link") as HTMLElement).style.color="var(--ink)";}}>
            <div style={{ fontFamily:slab, fontSize:13, color:"var(--orange)", marginBottom:18, letterSpacing:".08em" }}>{n}</div>
            <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(22px,2.2vw,28px)", marginBottom:14 }}>{title}</h3>
            <p style={{ fontSize:14, color:"var(--ink-mute)", lineHeight:1.65, marginBottom:24, flex:1 }}>{desc}</p>
            <span className="pc-link" style={{ fontSize:"11.5px", letterSpacing:".18em", textTransform:"uppercase", fontWeight:500, display:"inline-flex", alignItems:"center", gap:10, color:"var(--ink)", transition:"color .2s" }}>{link} →</span>
          </a>
        ))}
        <style>{`@media(max-width:860px){.portal-grid{grid-template-columns:1fr!important;}}`}</style>
      </div>
      <div style={{ background:"var(--paper-2)", padding:"clamp(48px,6vw,78px) clamp(16px,3.5vw,48px)", textAlign:"center" }}>
        <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(20px,2.4vw,28px)", marginBottom:14 }}>Need a hand finding something?</h3>
        <p style={{ color:"var(--ink-mute)", marginBottom:8 }}>We&apos;re here during business hours</p>
        <p style={{ fontFamily:slab, fontSize:18 }}>02 6189 1322 · support@empreus.com.au</p>
        <p style={{ fontSize:13, color:"var(--ink-mute)", marginTop:8 }}>Monday – Friday, 9:00 AM – 5:00 PM</p>
      </div>
    </>
  );
}
