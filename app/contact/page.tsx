"use client";
import { useState } from "react";
import { PageHead } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";
const SERVICES = ["Managed IT Services","Enterprise & Government","Your IT as a Service","Cloud Service","IT Security","Software & App Development","Communication","Backup & Recovery","IT Audit","Datacentre Services","Websites","Onboarding from another provider","Something else"];

export default function Contact() {
  const [form, setForm] = useState({ name:"", organisation:"", email:"", telephone:"", service:SERVICES[0], message:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = { width:"100%", border:"none", borderBottom:"1px solid var(--rule)", background:"transparent", padding:"12px 4px", fontFamily:"inherit", fontSize:15, color:"var(--ink)", outline:"none" };

  return (
    <>
      <PageHead crumb="Empreus · Contact" title="Start a conversation." lede="No pitch, no obligation. Tell us what you're looking for and we'll be in touch within one business day." />
      <div style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(44px,6vw,78px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:"clamp(40px,6vw,96px)" }} className="contact-layout">

        <div>
          <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:20, marginBottom:24 }}>The Studio</h3>
          {[["Address","Unit 18, 63 Wollongong Street\nFyshwick ACT 2609"],["Telephone","02 6189 1322"],["General","support@empreus.com.au"],["New Engagements","darko@empreus.com.au"],["Hours","Monday – Friday\n9:00 AM – 5:00 PM\n24/7 monitoring for managed clients"],["Business","Empreus Support Pty Ltd\nABN 65 611 219 188"]].map(([k,v])=>(
            <div key={k} style={{ marginBottom:26 }}>
              <strong style={{ display:"block", fontSize:10, letterSpacing:".28em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:8, fontWeight:500 }}>{k}</strong>
              <span style={{ fontFamily:slab, fontSize:17, color:"var(--ink)", lineHeight:1.45, display:"block", whiteSpace:"pre-line" }}>{v}</span>
            </div>
          ))}
        </div>

        {status === "sent" ? (
          <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"clamp(40px,5vw,60px)", background:"var(--paper-2)", textAlign:"center" }}>
            <div style={{ fontSize:32, marginBottom:16 }}>✓</div>
            <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:24, marginBottom:12 }}>Message received.</h3>
            <p style={{ fontSize:15, color:"var(--ink-mute)", lineHeight:1.7 }}>Thank you for getting in touch. We&apos;ll be back to you within one business day.</p>
          </div>
        ) : (
          <div style={{ display:"flex", flexDirection:"column" }}>
            <div style={{ marginBottom:26 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Your Name *</div>
              <input type="text" name="name" required value={form.name} onChange={handle} style={inputStyle}
                onFocus={e=>(e.target.style.borderBottomColor="var(--orange)")}
                onBlur={e=>(e.target.style.borderBottomColor="var(--rule)")} />
            </div>
            <div style={{ marginBottom:26 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Organisation</div>
              <input type="text" name="organisation" value={form.organisation} onChange={handle} style={inputStyle}
                onFocus={e=>(e.target.style.borderBottomColor="var(--orange)")}
                onBlur={e=>(e.target.style.borderBottomColor="var(--rule)")} />
            </div>
            <div style={{ marginBottom:26 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Email *</div>
              <input type="email" name="email" required value={form.email} onChange={handle} style={inputStyle}
                onFocus={e=>(e.target.style.borderBottomColor="var(--orange)")}
                onBlur={e=>(e.target.style.borderBottomColor="var(--rule)")} />
            </div>
            <div style={{ marginBottom:26 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Telephone</div>
              <input type="tel" name="telephone" value={form.telephone} onChange={handle} style={inputStyle}
                onFocus={e=>(e.target.style.borderBottomColor="var(--orange)")}
                onBlur={e=>(e.target.style.borderBottomColor="var(--rule)")} />
            </div>
            <div style={{ marginBottom:26 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>What can we help with?</div>
              <select name="service" value={form.service} onChange={handle} style={inputStyle}>
                {SERVICES.map(s=><option key={s}>{s}</option>)}
              </select>
            </div>
            <div style={{ marginBottom:26 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>A few details *</div>
              <textarea name="message" required value={form.message} onChange={handle} rows={5}
                placeholder="Team size, current provider (if any), and what's prompting the conversation."
                style={{ ...inputStyle, resize:"vertical" }}
                onFocus={e=>(e.currentTarget.style.borderBottomColor="var(--orange)")}
                onBlur={e=>(e.currentTarget.style.borderBottomColor="var(--rule)")} />
            </div>
            {status === "error" && (
              <p style={{ fontSize:13, color:"red", marginBottom:16 }}>Something went wrong. Please email us directly at support@empreus.com.au</p>
            )}
            <button type="button" onClick={submit} disabled={status==="sending"}
              style={{ background:"var(--ink)", color:"var(--paper)", border:"none", padding:"18px 36px", fontSize:12, letterSpacing:".22em", textTransform:"uppercase", fontWeight:500, cursor:"pointer", transition:"background .2s", display:"inline-flex", alignItems:"center", gap:12, alignSelf:"flex-start", opacity:status==="sending"?0.6:1 }}
              onMouseEnter={e=>(e.currentTarget.style.background="var(--orange)")}
              onMouseLeave={e=>(e.currentTarget.style.background="var(--ink)")}>
              {status === "sending" ? "Sending…" : "Send Message →"}
            </button>
            <p style={{ fontSize:12, color:"var(--ink-mute)", marginTop:24, lineHeight:1.6 }}>By submitting, you agree to be contacted by Empreus IT Support regarding your enquiry.</p>
          </div>
        )}
        <style>{`@media(max-width:900px){.contact-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </>
  );
}