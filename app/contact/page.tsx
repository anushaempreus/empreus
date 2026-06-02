"use client";
import { PageHead } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";
const SERVICES = ["Managed IT Services","Enterprise & Government","Your IT as a Service","Cloud Service","IT Security","Software & App Development","Communication","Backup & Recovery","IT Audit","Datacentre Services","Websites","Onboarding from another provider","Something else"];

export default function Contact() {
  return (
    <>
      <PageHead crumb="Empreus · Contact" title="Start a " accentWord="conversation." lede="No pitch, no obligation. Tell us what you're looking for and we'll be in touch within one business day." />
      <div style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(44px,6vw,78px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:"clamp(40px,6vw,96px)" }} className="contact-layout">

        {/* Side info */}
        <div>
          <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:20, marginBottom:24 }}>The Studio</h3>
          {[["Address","Unit 19, 63 Wollongong Street\nFyshwick ACT 2609"],["Telephone","02 6189 1322"],["General","support@empreus.com.au"],["New Engagements","darko@empreus.com.au"],["Hours","Monday – Friday\n9:00 AM – 5:00 PM\n24/7 monitoring for managed clients"],["Business","Empreus Support Pty Ltd\nABN 65 611 219 188"]].map(([k,v])=>(
            <div key={k} style={{ marginBottom:26 }}>
              <strong style={{ display:"block", fontSize:10, letterSpacing:".28em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:8, fontWeight:500 }}>{k}</strong>
              <span style={{ fontFamily:slab, fontSize:17, fontWeight:400, color:"var(--ink)", lineHeight:1.45, display:"block", whiteSpace:"pre-line" }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Form */}
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
            <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>What can we help with?</div>
            <select style={{ width:"100%", border:"none", borderBottom:"1px solid var(--rule)", background:"transparent", padding:"12px 4px", fontFamily:"inherit", fontSize:15, color:"var(--ink)", outline:"none" }}>
              {SERVICES.map(s=><option key={s}>{s}</option>)}
            </select>
          </div>
          <div style={{ marginBottom:26 }}>
            <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>A few details</div>
            <textarea style={{ width:"100%", border:"none", borderBottom:"1px solid var(--rule)", background:"transparent", padding:"12px 4px", fontFamily:"inherit", fontSize:15, color:"var(--ink)", outline:"none", minHeight:120, resize:"vertical" }} placeholder="Team size, current provider (if any), and what's prompting the conversation."
              onFocus={e=>(e.currentTarget.style.borderBottomColor="var(--orange)")}
              onBlur={e=>(e.currentTarget.style.borderBottomColor="var(--rule)")} />
          </div>
          <button type="submit" style={{ background:"var(--ink)", color:"var(--paper)", border:"none", padding:"18px 36px", fontSize:12, letterSpacing:".22em", textTransform:"uppercase", fontWeight:500, cursor:"pointer", transition:"background .2s", display:"inline-flex", alignItems:"center", gap:12, alignSelf:"flex-start" }}
            onMouseEnter={e=>(e.currentTarget.style.background="var(--orange)")}
            onMouseLeave={e=>(e.currentTarget.style.background="var(--ink)")}>
            Send Message →
          </button>
          <p style={{ fontSize:12, color:"var(--ink-mute)", marginTop:24, lineHeight:1.6 }}>By submitting, you agree to be contacted by Empreus IT Support regarding your enquiry. We don&apos;t share your details with third parties.</p>
        </form>
        <style>{`@media(max-width:900px){.contact-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>

      {/* Visit */}
      <div style={{ background:"var(--paper-2)", padding:"clamp(48px,6vw,78px) clamp(16px,3.5vw,48px)" }}>
        <div style={{ maxWidth:"var(--max)", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(32px,5vw,80px)", alignItems:"center" }} className="visit-layout">
          <div style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(32px,5vw,72px)", lineHeight:.95 }}>
            Or visit<br />in person.<br /><span style={{ color:"var(--orange)" }}>The kettle&apos;s always on.</span>
          </div>
          <div>
            {[["Address","Unit 19, 63 Wollongong Street\nFyshwick ACT 2609"],["Parking","Free street parking on Wollongong St"],["By appointment","Email or call ahead for the Director"]].map(([k,v])=>(
              <div key={k} style={{ marginBottom:22 }}>
                <strong style={{ display:"block", fontSize:10, letterSpacing:".28em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:8, fontWeight:500 }}>{k}</strong>
                <span style={{ fontFamily:slab, fontSize:17, fontWeight:400, color:"var(--ink)", lineHeight:1.45, display:"block", whiteSpace:"pre-line" }}>{v}</span>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:760px){.visit-layout{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </div>
    </>
  );
}
