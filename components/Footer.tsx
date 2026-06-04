"use client";
import Link from "next/link";
import { useState } from "react";

const slab = "var(--font-slab, 'Roboto Slab', Georgia, serif)";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const submit = async () => {
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return <p style={{ fontSize:14, color:"var(--orange)", marginTop:8 }}>You&apos;re subscribed. Thank you.</p>;
  }

  return (
    <div style={{ display:"flex", maxWidth:480, margin:"0 auto", borderBottom:"1px solid var(--ink)" }}>
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        style={{ flex:1, border:"none", background:"transparent", padding:"12px 4px", fontFamily:"inherit", fontSize:14, color:"var(--ink)", outline:"none" }}
      />
      <button
        type="button"
        onClick={submit}
        disabled={status==="sending"}
        style={{ background:"none", border:"none", color:"var(--ink)", fontSize:12, fontWeight:500, letterSpacing:".15em", textTransform:"uppercase", padding:"12px 4px", transition:"color .2s", cursor:"pointer", opacity:status==="sending"?0.6:1 }}
        onMouseEnter={e=>(e.currentTarget.style.color="var(--orange)")}
        onMouseLeave={e=>(e.currentTarget.style.color="var(--ink)")}>
        {status === "sending" ? "Subscribing…" : "Subscribe →"}
      </button>
      {status === "error" && <p style={{ fontSize:12, color:"red", marginTop:8 }}>Something went wrong. Please try again.</p>}
    </div>
  );
}

export default function Footer() {
  return (
    <>
      {/* Newsletter */}
      <section style={{ padding:"clamp(48px,6vw,78px) clamp(16px,3.5vw,48px)", textAlign:"center", borderTop:"1px solid var(--rule-soft)", borderBottom:"1px solid var(--rule-soft)" }}>
        <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(22px,2.4vw,32px)", marginBottom:14, letterSpacing:"-.005em" }}>Stay Informed</h3>
        <p style={{ color:"var(--ink-mute)", marginBottom:30, maxWidth:480, marginLeft:"auto", marginRight:"auto" }}>Occasional notes from the Empreus journal — security advisories, Microsoft 365 updates, and the occasional studio bulletin.</p>
        <NewsletterForm />
      </section>

      <footer style={{ padding:"clamp(48px,6vw,78px) clamp(16px,3.5vw,48px) 32px" }}>
        <div style={{ maxWidth:"var(--max)", margin:"0 auto", display:"grid", gridTemplateColumns:"1.5fr repeat(4,1fr)", gap:"clamp(24px,3vw,56px)", paddingBottom:54, borderBottom:"1px solid var(--rule)" }} className="foot-grid">
          <div>
            <div style={{ fontFamily:slab, fontWeight:600, fontSize:24, color:"var(--orange)", marginBottom:8 }}>EMPREUS</div>
            <small style={{ display:"block", fontSize:9, letterSpacing:".3em", marginBottom:18, color:"var(--ink)", fontWeight:500 }}>IT SUPPORT · CANBERRA</small>
            <p style={{ fontSize:13, color:"var(--ink-mute)", lineHeight:1.7, maxWidth:300 }}>A small Canberra studio for considered IT. Composed since 2016.</p>
          </div>
          <FootCol title="Services" links={[
            ["/services/managed-it","Managed IT Services"],
            ["/services/enterprise-government","Enterprise & Government"],
            ["/services/it-as-a-service","Your IT as a Service"],
            ["/services/cloud","Cloud Service"],
            ["/services/communication","Communication"],
            ["/services","All Services"],
          ]} />
          <FootCol title="The Studio" links={[
            ["/heritage-tiers","Heritage Tiers"],
            ["/about","About"],
            ["/director","From the Director"],
            ["/onboarding","Onboarding"],
            ["/journal","Journal"],
          ]} />
          <FootCol title="Client" links={[
            ["/portals","Portals"],
            ["/service-request","Service Request"],
            ["/contact","Contact"],
            ["/legal","Legal & Privacy"],
          ]} />
          <div>
            <h5 style={{ fontSize:11, letterSpacing:".15em", textTransform:"uppercase", color:"var(--ink)", marginBottom:18, fontWeight:600 }}>Contact</h5>
            <ul style={{ listStyle:"none", padding:0 }}>
              {[["tel:0261891322","02 6189 1322"],["mailto:info@empreus.com.au","info@empreus.com.au"]].map(([href,label])=>(
                <li key={href} style={{ marginBottom:9 }}><a href={href} style={{ fontSize:13, color:"var(--ink-mute)", transition:"color .2s" }} onMouseEnter={e=>(e.currentTarget.style.color="var(--orange)")} onMouseLeave={e=>(e.currentTarget.style.color="var(--ink-mute)")}>{label}</a></li>
              ))}
              <li style={{ fontSize:13, color:"var(--ink-mute)", marginBottom:9 }}>Unit 19/63 Wollongong St</li>
              <li style={{ fontSize:13, color:"var(--ink-mute)" }}>Fyshwick ACT 2609</li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth:"var(--max)", margin:"0 auto", paddingTop:28, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16, fontSize:11, color:"var(--ink-faint)" }}>
          <span>© Empreus Support Pty Ltd · ABN 65 611 219 188</span>
          <div>
            {[
              ["/legal","Privacy"],
              ["/legal","Terms"],
              ["https://www.linkedin.com/company/empreus-it-support/","LinkedIn"],
              ["https://www.facebook.com/empreusitsupport/","Facebook"],
            ].map(([href,label])=>(
              <a key={label} href={href} style={{ marginRight:16, transition:"color .2s", color:"var(--ink-faint)" }} onMouseEnter={e=>(e.currentTarget.style.color="var(--ink)")} onMouseLeave={e=>(e.currentTarget.style.color="var(--ink-faint)")}>{label}</a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) { .foot-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .foot-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </>
  );
}

function FootCol({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h5 style={{ fontSize:11, letterSpacing:".15em", textTransform:"uppercase", color:"var(--ink)", marginBottom:18, fontWeight:600 }}>{title}</h5>
      <ul style={{ listStyle:"none", padding:0 }}>
        {links.map(([href,label])=>(
          <li key={href+label} style={{ marginBottom:9 }}>
            <Link href={href} style={{ fontSize:13, color:"var(--ink-mute)", transition:"color .2s" }}
              onMouseEnter={(e)=>(e.currentTarget.style.color="var(--orange)")}
              onMouseLeave={(e)=>(e.currentTarget.style.color="var(--ink-mute)")}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}