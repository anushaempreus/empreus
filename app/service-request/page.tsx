"use client";
import { PageHead } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

export default function ServiceRequest() {
  return (
    <>
      <PageHead crumb="Empreus · Service Request" title="Log a " accentWord="request." lede="Existing clients can lodge a support request below. For anything urgent or business-critical, please call us directly on 02 6189 1322." />

      <div style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(44px,6vw,78px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:"clamp(40px,6vw,96px)" }} className="sr-layout">
        <div>
          <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:20, marginBottom:24 }}>Faster ways to reach us</h3>
          {[["Urgent / Critical","02 6189 1322"],["By Email","support@empreus.com.au"],["Client Portal","Lodge & track tickets"],["Hours","Monday – Friday\n9:00 AM – 5:00 PM\n24/7 monitoring for managed clients"]].map(([k,v])=>(
            <div key={k} style={{ marginBottom:26 }}>
              <strong style={{ display:"block", fontSize:10, letterSpacing:".28em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:8, fontWeight:500 }}>{k}</strong>
              <span style={{ fontFamily:slab, fontSize:17, color:"var(--ink)", lineHeight:1.45, display:"block", whiteSpace:"pre-line" }}>{v}</span>
            </div>
          ))}
          <p style={{ fontSize:13, color:"var(--ink-mute)", lineHeight:1.6, marginTop:8 }}>After Hours: Managed clients, follow your escalation card for after-hours support.</p>
        </div>

        <form onSubmit={e=>e.preventDefault()} style={{ display:"flex", flexDirection:"column" }}>
          {[["Your Name","text",true],["Organisation","text",false],["Email","email",true],["Telephone","tel",false]].map(([label,type,req])=>(
            <div key={String(label)} style={{ marginBottom:26 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>{label}</div>
              <input type={String(type)} required={Boolean(req)} style={{ width:"100%", border:"none", borderBottom:"1px solid var(--rule)", background:"transparent", padding:"12px 4px", fontFamily:"inherit", fontSize:15, color:"var(--ink)", outline:"none" }}
                onFocus={e=>(e.target.style.borderBottomColor="var(--orange)")}
                onBlur={e=>(e.target.style.borderBottomColor="var(--rule)")} />
            </div>
          ))}
          <div style={{ marginBottom:26 }}>
            <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Priority</div>
            <select style={{ width:"100%", border:"none", borderBottom:"1px solid var(--rule)", background:"transparent", padding:"12px 4px", fontFamily:"inherit", fontSize:15, color:"var(--ink)", outline:"none" }}>
              <option>Standard — respond within business hours</option>
              <option>High — affecting several people</option>
              <option>Urgent — business-critical (please also call)</option>
            </select>
          </div>
          <div style={{ marginBottom:26 }}>
            <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Affected system or service</div>
            <input type="text" placeholder="e.g. email, a specific application, a device" style={{ width:"100%", border:"none", borderBottom:"1px solid var(--rule)", background:"transparent", padding:"12px 4px", fontFamily:"inherit", fontSize:15, color:"var(--ink)", outline:"none" }}
              onFocus={e=>(e.target.style.borderBottomColor="var(--orange)")}
              onBlur={e=>(e.target.style.borderBottomColor="var(--rule)")} />
          </div>
          <div style={{ marginBottom:26 }}>
            <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Describe the issue</div>
            <textarea placeholder="What's happening, when it started, any error messages, and how many people are affected." style={{ width:"100%", border:"none", borderBottom:"1px solid var(--rule)", background:"transparent", padding:"12px 4px", fontFamily:"inherit", fontSize:15, color:"var(--ink)", outline:"none", minHeight:120, resize:"vertical" }}
              onFocus={e=>(e.currentTarget.style.borderBottomColor="var(--orange)")}
              onBlur={e=>(e.currentTarget.style.borderBottomColor="var(--rule)")} />
          </div>
          <button type="submit" style={{ background:"var(--ink)", color:"var(--paper)", border:"none", padding:"18px 36px", fontSize:12, letterSpacing:".22em", textTransform:"uppercase", fontWeight:500, cursor:"pointer", transition:"background .2s", display:"inline-flex", alignItems:"center", gap:12, alignSelf:"flex-start" }}
            onMouseEnter={e=>(e.currentTarget.style.background="var(--orange)")}
            onMouseLeave={e=>(e.currentTarget.style.background="var(--ink)")}>
            Submit Request →
          </button>
          <p style={{ fontSize:12, color:"var(--ink-mute)", marginTop:24, lineHeight:1.6 }}>For urgent or business-critical issues, please call <strong>02 6189 1322</strong> in addition to submitting this form so we can respond immediately.</p>
        </form>
        <style>{`@media(max-width:900px){.sr-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </>
  );
}
