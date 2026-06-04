"use client";
import Link from "next/link";
import { PageHead } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

const COMPARISON = [
  { feature:"Monthly price (per user)", essential:"A$55", ascend:"A$192.50", prestige:"A$302.50", isPrice:true },
  { feature:"Endpoint Protection (Next-Gen AV)",          essential:true,  ascend:true,  prestige:true },
  { feature:"Web Protection / DNS Filtering",             essential:true,  ascend:true,  prestige:true },
  { feature:"EDR (Endpoint Detection & Response)",        essential:true,  ascend:true,  prestige:true },
  { feature:"Monitoring & Patch Management",              essential:true,  ascend:true,  prestige:true },
  { feature:"Intune Device Management",                   essential:false, ascend:true,  prestige:true },
  { feature:"Printer Management",                         essential:true,  ascend:true,  prestige:true },
  { feature:"Email Backup (Microsoft 365)",               essential:true,  ascend:true,  prestige:true },
  { feature:"Email Security",                             essential:true,  ascend:true,  prestige:true },
  { feature:"Email Signature Automation",                 essential:true,  ascend:true,  prestige:true },
  { feature:"Password Manager",                           essential:true,  ascend:true,  prestige:true },
  { feature:"Warranty Management",                        essential:true,  ascend:true,  prestige:true },
  { feature:"Documentation (Assets & IT Records)",        essential:true,  ascend:true,  prestige:true },
  { feature:"Unlimited Support",                          essential:false, ascend:true,  prestige:true },
  { feature:"Hardware as a Service (HaaS)",               essential:false, ascend:false, prestige:true },
];

const Check = () => <span style={{ color:"#4a7c59", fontSize:18, fontWeight:600 }}>✓</span>;
const Cross = () => <span style={{ color:"var(--orange)", fontSize:16, fontWeight:600 }}>✕</span>;

export default function HeritageTiers() {
  return (
    <>
      <PageHead
        crumb="Empreus · Heritage Tiers"
        title="Heritage Tiers"
        lede="A three-tier structure for modern organisations: foundational protection, operational maturity, and fully-managed lifecycle — presented in a clean comparison format for proposals and web."
      />

      {/* Three tier cards */}
      <section style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:0, alignItems:"stretch" }} className="tier-grid">

          {/* Essential */}
          <div style={{ border:"1px solid var(--rule)", padding:"clamp(28px,3vw,44px)", display:"flex", flexDirection:"column" }}>
            <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:24, fontWeight:500, lineHeight:1.6 }}>
              Foundational protection and governance for small teams — structured, reliable, and intentionally scoped.
            </div>
            <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(32px,3.5vw,48px)", lineHeight:1.05, marginBottom:16 }}>Heritage Essential</h2>
            <div style={{ fontFamily:slab, fontSize:18, marginBottom:32 }}>A$55 <span style={{ fontSize:13, color:"var(--ink-mute)" }}>/ user / month (incl. GST)</span></div>

            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:12, fontWeight:600 }}>Security & Protection</div>
              {["Endpoint Protection (Next-Gen AV)","Web Protection / DNS Filtering","EDR (Endpoint Detection & Response)","Email Security (Anti-Spam & Threat Filtering)","Email Backup (Microsoft 365 Backup)"].map(i=>(
                <div key={i} style={{ fontSize:14, lineHeight:1.6, paddingLeft:16, marginBottom:6, position:"relative", color:"var(--ink)" }}>
                  <span style={{ position:"absolute", left:0, color:"#4a7c59" }}>○</span>{i}
                </div>
              ))}
            </div>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:12, fontWeight:600 }}>Monitoring & Management</div>
              {["24/7 Monitoring & Alerting","Patch Management","Printer Management","Warranty Management (Tracking & Claims Support)","Documentation (Asset Register & Secure IT Records)"].map(i=>(
                <div key={i} style={{ fontSize:14, lineHeight:1.6, paddingLeft:16, marginBottom:6, position:"relative", color:"var(--ink)" }}>
                  <span style={{ position:"absolute", left:0, color:"#4a7c59" }}>○</span>{i}
                </div>
              ))}
            </div>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:12, fontWeight:600 }}>Productivity & Identity</div>
              {["Email Signature Automation","Password Manager"].map(i=>(
                <div key={i} style={{ fontSize:14, lineHeight:1.6, paddingLeft:16, marginBottom:6, position:"relative", color:"var(--ink)" }}>
                  <span style={{ position:"absolute", left:0, color:"#4a7c59" }}>○</span>{i}
                </div>
              ))}
            </div>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:12, fontWeight:600 }}>Support Model</div>
              <div style={{ fontSize:14, lineHeight:1.6, paddingLeft:16, position:"relative", color:"var(--ink)" }}>
                <span style={{ position:"absolute", left:0, color:"#4a7c59" }}>○</span>
                <strong>No unlimited support</strong> (support billed per incident / hours)
              </div>
            </div>
          </div>

          {/* Ascend - featured */}
          <div style={{ background:"var(--orange)", padding:"clamp(28px,3vw,44px)", display:"flex", flexDirection:"column", color:"var(--paper)" }}>
            <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(255,255,255,.8)", marginBottom:24, fontWeight:500, lineHeight:1.6 }}>
              Operational maturity and predictable support — the core managed partnership.
            </div>
            <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(32px,3.5vw,48px)", lineHeight:1.05, marginBottom:16 }}>Heritage Ascend</h2>
            <div style={{ fontFamily:slab, fontSize:18, marginBottom:32 }}>A$192.50 <span style={{ fontSize:13, color:"rgba(255,255,255,.8)" }}>/ user / month (incl. GST)</span></div>

            <div style={{ fontSize:14, color:"rgba(255,255,255,.9)", marginBottom:16, fontStyle:"italic" }}>Includes everything in Essential, plus</div>
            {["Intune Device Management (Endpoint configuration & compliance policies)","Unlimited Support (Remote + On-site, per agreement)"].map(i=>(
              <div key={i} style={{ fontSize:14, lineHeight:1.6, paddingLeft:16, marginBottom:8, position:"relative", color:"rgba(255,255,255,.95)" }}>
                <span style={{ position:"absolute", left:0, color:"rgba(255,255,255,.9)" }}>○</span>{i}
              </div>
            ))}

            <div style={{ marginTop:28, marginBottom:16 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(255,255,255,.8)", marginBottom:12, fontWeight:600 }}>Why teams choose Ascend</div>
              {["Predictable monthly IT cost","Improved identity and device control via enterprise licensing","Faster outcomes through unlimited support"].map(i=>(
                <div key={i} style={{ fontSize:14, lineHeight:1.6, paddingLeft:16, marginBottom:8, position:"relative", color:"rgba(255,255,255,.95)" }}>
                  <span style={{ position:"absolute", left:0 }}>○</span>{i}
                </div>
              ))}
            </div>
          </div>

          {/* Prestige */}
          <div style={{ border:"1px solid var(--rule)", padding:"clamp(28px,3vw,44px)", display:"flex", flexDirection:"column" }}>
            <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:24, fontWeight:500, lineHeight:1.6 }}>
              Complete lifecycle ownership — security, support, and hardware delivered as a single, refined subscription.
            </div>
            <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(32px,3.5vw,48px)", lineHeight:1.05, marginBottom:16 }}>Heritage Prestige</h2>
            <div style={{ fontFamily:slab, fontSize:18, marginBottom:32 }}>A$302.50 <span style={{ fontSize:13, color:"var(--ink-mute)" }}>/ user / month (incl. GST)</span></div>

            <div style={{ fontSize:14, color:"var(--ink-mute)", marginBottom:16, fontStyle:"italic" }}>Includes everything in Ascend, plus</div>
            {["Intune Device Management (Endpoint configuration & compliance policies)","Hardware as a Service (HaaS)"].map(i=>(
              <div key={i} style={{ fontSize:14, lineHeight:1.6, paddingLeft:16, marginBottom:8, position:"relative", color:"var(--ink)" }}>
                <span style={{ position:"absolute", left:0, color:"#4a7c59" }}>○</span>{i}
              </div>
            ))}

            <div style={{ marginTop:28, marginBottom:16 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:12, fontWeight:600 }}>HaaS (typical inclusions)</div>
              {["Business-grade laptops/desktops (per standard)","Provisioning, deployment & asset tagging","Lifecycle refresh (e.g., 3–4 years)","Warranty coordination included"].map(i=>(
                <div key={i} style={{ fontSize:14, lineHeight:1.6, paddingLeft:16, marginBottom:8, position:"relative", color:"var(--ink)" }}>
                  <span style={{ position:"absolute", left:0, color:"#4a7c59" }}>○</span>{i}
                </div>
              ))}
            </div>

            <div style={{ marginTop:20 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:12, fontWeight:600 }}>Outcome</div>
              {["No upfront capital expenditure","Technology stays current by design"].map(i=>(
                <div key={i} style={{ fontSize:14, lineHeight:1.6, paddingLeft:16, marginBottom:8, position:"relative", color:"var(--ink)" }}>
                  <span style={{ position:"absolute", left:0, color:"#4a7c59" }}>○</span>{i}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.tier-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Structured Comparison */}
      <section style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(48px,6vw,88px) clamp(16px,3.5vw,48px)", borderTop:"1px solid var(--rule-soft)" }}>
        <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(28px,3.5vw,48px)", textAlign:"center", marginBottom:"clamp(32px,4vw,56px)" }}>Structured Comparison</h2>
        <div style={{ overflowX:"auto" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
            <thead>
              <tr style={{ borderBottom:"2px solid var(--rule)" }}>
                <th style={{ textAlign:"left", padding:"16px 12px", fontFamily:slab, fontWeight:500, fontSize:16, width:"40%" }}>Category</th>
                <th style={{ textAlign:"center", padding:"16px 12px", fontFamily:slab, fontWeight:500, fontSize:16 }}>Heritage Essential</th>
                <th style={{ textAlign:"center", padding:"16px 12px", fontFamily:slab, fontWeight:500, fontSize:16 }}>Heritage Ascend</th>
                <th style={{ textAlign:"center", padding:"16px 12px", fontFamily:slab, fontWeight:500, fontSize:16 }}>Heritage Prestige</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(({ feature, essential, ascend, prestige, isPrice }) => (
                <tr key={feature} style={{ borderBottom:"1px solid var(--rule-soft)" }}>
                  <td style={{ padding:"16px 12px", color: isPrice ? "var(--orange)" : "var(--ink)", fontWeight: isPrice ? 500 : 400 }}>{feature}</td>
                  <td style={{ padding:"16px 12px", textAlign:"center" }}>
                    {isPrice ? <><span style={{ fontFamily:slab, fontSize:18 }}>{essential as string}</span><br /><span style={{ fontSize:10, letterSpacing:".15em", textTransform:"uppercase", color:"var(--ink-mute)" }}>incl. GST</span></> : essential ? <Check /> : <Cross />}
                  </td>
                  <td style={{ padding:"16px 12px", textAlign:"center" }}>
                    {isPrice ? <><span style={{ fontFamily:slab, fontSize:18 }}>{ascend as string}</span><br /><span style={{ fontSize:10, letterSpacing:".15em", textTransform:"uppercase", color:"var(--ink-mute)" }}>incl. GST</span></> : ascend ? <Check /> : <Cross />}
                  </td>
                  <td style={{ padding:"16px 12px", textAlign:"center" }}>
                    {isPrice ? <><span style={{ fontFamily:slab, fontSize:18 }}>{prestige as string}</span><br /><span style={{ fontSize:10, letterSpacing:".15em", textTransform:"uppercase", color:"var(--ink-mute)" }}>incl. GST</span></> : prestige ? <Check /> : <Cross />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background:"var(--paper-2)", padding:"clamp(60px,8vw,100px) clamp(16px,3.5vw,48px)", textAlign:"center" }}>
        <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(28px,3.5vw,48px)", marginBottom:16 }}>An elegant approach to unrivalled innovation</h2>
        <p style={{ fontSize:13, letterSpacing:".18em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:36, maxWidth:700, margin:"0 auto 36px" }}>
          If you are responding to a tender, we can provide scope alignment, service schedules, and supporting compliance documentation on request.
        </p>
        <Link href="/contact"
          style={{ display:"inline-block", background:"var(--orange)", color:"var(--paper)", padding:"16px 40px", fontSize:13, letterSpacing:".18em", textTransform:"uppercase", fontWeight:500, borderRadius:4, transition:"background .2s", textDecoration:"none" }}
          onMouseEnter={e=>(e.currentTarget.style.background="var(--orange-deep)")}
          onMouseLeave={e=>(e.currentTarget.style.background="var(--orange)")}>
          Get in Touch
        </Link>
      </div>
    </>
  );
}