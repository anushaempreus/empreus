"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const slab = "var(--font-slab, 'Roboto Slab', Georgia, serif)";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/director", label: "Director" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/heritage-tiers", label: "Heritage Tiers" },
];

const SERVICES = [
  { href: "/services/managed-it", label: "Managed IT Services" },
  { href: "/services/managed-ai", label: "Managed AI Services" },
  { href: "/services/enterprise-government", label: "Enterprise & Government" },
  { href: "/services/it-as-a-service", label: "Your IT as a Service" },
  { href: "/services/cloud", label: "Cloud Service" },
  { href: "/services/communication", label: "Communication" },
  { href: "/services/software-development", label: "Software & App Development" },
  { href: "/services/backup-recovery", label: "Backup & Recovery" },
  { href: "/services/it-security", label: "IT Security" },
  { href: "/services/it-audit", label: "IT Audit" },
  { href: "/services/datacentre", label: "Datacentre Services" },
  { href: "/services/managed-print", label: "Print & Managed Print" },
  { href: "/services/websites", label: "Websites" },
  { href: "/services/recycling", label: "Earth-friendly Recycling" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Utility bar */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px clamp(16px,3.5vw,48px)", fontSize:11, color:"var(--ink-mute)", borderBottom:"1px solid var(--rule-soft)" }}>
        <span>Australia · English</span>
        <div style={{ display:"flex", gap:24, alignItems:"center" }}>
          <Link href="/service-request" style={{ transition:"color .2s" }}>Service Request</Link>
          <span style={{ color:"var(--rule)" }}>|</span>
          <a href="tel:0261891322">02 6189 1322</a>
        </div>
      </div>

      {/* Main header */}
      <header style={{ background:"var(--paper)", padding:"22px clamp(16px,3.5vw,48px) 0", borderBottom:"1px solid var(--rule-soft)", position:"sticky", top:0, zIndex:60 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr auto 1fr", alignItems:"center", paddingBottom:16 }}>
          <div className="h-side-left" style={{ display:"flex", gap:22, fontSize:12, color:"var(--ink)", alignItems:"center" }}>
            <Link href="/services" style={{ transition:"color .2s" }} onMouseEnter={e=>(e.currentTarget.style.color="var(--orange)")} onMouseLeave={e=>(e.currentTarget.style.color="var(--ink)")}>Services</Link>
            <Link href="/contact" style={{ transition:"color .2s" }} onMouseEnter={e=>(e.currentTarget.style.color="var(--orange)")} onMouseLeave={e=>(e.currentTarget.style.color="var(--ink)")}>Contact</Link>
          </div>

          <Link href="/" style={{ fontFamily:slab, fontWeight:600, fontSize:"clamp(24px,2.5vw,32px)", letterSpacing:".02em", color:"var(--orange)", textAlign:"center", lineHeight:1, textDecoration:"none" }}>
            EMPREUS
            <small style={{ display:"block", fontFamily:"var(--font-inter,Inter,sans-serif)", fontWeight:500, fontSize:"8.5px", letterSpacing:".3em", color:"var(--ink)", marginTop:5 }}>IT SUPPORT · CANBERRA</small>
          </Link>

          <div className="h-side-right" style={{ display:"flex", gap:22, fontSize:12, color:"var(--ink)", alignItems:"center", justifyContent:"flex-end" }}>
            <Link href="/service-request" style={{ transition:"color .2s" }} onMouseEnter={e=>(e.currentTarget.style.color="var(--orange)")} onMouseLeave={e=>(e.currentTarget.style.color="var(--ink)")}>Service Request</Link>
          </div>

          <div style={{ justifySelf:"end", gridColumn:3 }} className="burger-cell-mobile">
            <button onClick={() => setOpen(true)} aria-label="Open menu" style={{ display:"none", background:"none", border:"none", flexDirection:"column", gap:5, padding:8, cursor:"pointer" }} className="burger-btn">
              <span style={{ display:"block", width:22, height:2, background:"var(--ink)" }} />
              <span style={{ display:"block", width:22, height:2, background:"var(--ink)" }} />
              <span style={{ display:"block", width:22, height:2, background:"var(--ink)" }} />
            </button>
          </div>
        </div>

        <nav style={{ display:"flex", justifyContent:"center", gap:"clamp(18px,2.2vw,36px)", padding:"13px 0", fontSize:12, letterSpacing:".04em" }}>
          {NAV.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <Link key={href} href={href} style={{ position:"relative", padding:"6px 2px", color: active ? "var(--orange)" : "var(--ink)", transition:"color .2s", whiteSpace:"nowrap", textDecoration:"none" }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--orange)")}
                onMouseLeave={e=>(e.currentTarget.style.color= active ? "var(--orange)" : "var(--ink)")}>
                {label}
                {active && <span style={{ position:"absolute", left:"50%", bottom:-1, transform:"translateX(-50%)", width:22, height:2, background:"var(--orange)", display:"block" }} />}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Mobile drawer */}
      <div style={{ position:"fixed", inset:0, background:"var(--paper)", zIndex:100, transform: open ? "translateX(0)" : "translateX(100%)", transition:"transform .4s cubic-bezier(.4,0,.2,1)", display:"flex", flexDirection:"column", padding:"24px clamp(16px,3.5vw,48px)", overflowY:"auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingBottom:28, borderBottom:"1px solid var(--rule-soft)" }}>
          <Link href="/" onClick={()=>setOpen(false)} style={{ fontFamily:slab, fontWeight:600, fontSize:"clamp(24px,2.5vw,32px)", letterSpacing:".02em", color:"var(--orange)", lineHeight:1 }}>
            EMPREUS
            <small style={{ display:"block", fontFamily:"var(--font-inter,Inter,sans-serif)", fontWeight:500, fontSize:"8.5px", letterSpacing:".3em", color:"var(--ink)", marginTop:5 }}>IT SUPPORT · CANBERRA</small>
          </Link>
          <button onClick={()=>setOpen(false)} aria-label="Close menu" style={{ background:"none", border:"none", fontSize:28, lineHeight:1, color:"var(--ink)", padding:"4px 12px", cursor:"pointer" }}>×</button>
        </div>
        <nav style={{ display:"flex", flexDirection:"column", paddingTop:16 }}>
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href} onClick={()=>setOpen(false)} style={{ fontFamily:slab, fontWeight:500, fontSize:22, padding:"16px 0", borderBottom:"1px solid var(--rule-soft)", color: isActive(pathname,href) ? "var(--orange)" : "var(--ink)", transition:"color .2s" }}>{label}</Link>
          ))}
          <span style={{ fontSize:10, letterSpacing:".3em", textTransform:"uppercase", color:"var(--ink-faint)", padding:"24px 0 4px", fontWeight:600 }}>Our Services</span>
          {SERVICES.map(({ href, label }) => (
            <Link key={href} href={href} onClick={()=>setOpen(false)} style={{ fontSize:16, padding:"11px 0 11px 16px", borderBottom:"1px solid var(--rule-soft)", color:"var(--ink)", transition:"color .2s" }}>{label}</Link>
          ))}
        </nav>
        <div style={{ marginTop:"auto", paddingTop:28, fontSize:13, color:"var(--ink-mute)", lineHeight:1.7 }}>
          02 6189 1322<br />support@empreus.com.au<br />Unit 18/63 Wollongong St, Fyshwick ACT 2609
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .h-side-left, .h-side-right, nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
