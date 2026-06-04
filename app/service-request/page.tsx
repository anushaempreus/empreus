"use client";
import { useState } from "react";
import { PageHead } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

export default function ServiceRequest() {
  const [form, setForm] = useState({ name:"", organisation:"", email:"", telephone:"", priority:"Standard — respond within business hours", system:"", description:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.description) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/service-request", {
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
      <PageHead crumb="Empreus · Service Request" title="Log a request." lede="Existing clients can lodge a support request below. For anything urgent or business-critical, please call us directly on 02 6189 1322." />
      <div style={{ maxWidth:"var(--max)", margin:"0 auto", padding:"clamp(44px,6vw,78px) clamp(16px,3.5vw,48px)", display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:"clamp(40px,6vw,96px)" }} className="sr-layout">

        <div>
          <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:20, marginBottom:24 }}>Faster ways to reach us</h3>
          {[["Urgent / Critical","02 6189 1322"],["By Email","support@empreus.com.au"],["Hours","Monday – Friday\n9:00 AM – 5:00 PM\n24/7 monitoring for managed clients"]].map(([k,v])=>(
            <div key={k} style={{ marginBottom:26 }}>
              <strong style={{ display:"block", fontSize:10, letterSpacing:".28em", textTransform:"uppercase", color:"var(--ink-faint)", marginBottom:8, fontWeight:500 }}>{k}</strong>
              <span style={{ fontFamily:slab, fontSize:17, color:"var(--ink)", lineHeight:1.45, display:"block", whiteSpace:"pre-line" }}>{v}</span>
            </div>
          ))}
          <p style={{ fontSize:13, color:"var(--ink-mute)", lineHeight:1.6, marginTop:8 }}>After Hours: Managed clients, follow your escalation card for after-hours support.</p>
        </div>

        {status === "sent" ? (
          <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"clamp(40px,5vw,60px)", background:"var(--paper-2)", textAlign:"center" }}>
            <div style={{ fontSize:32, marginBottom:16 }}>✓</div>
            <h3 style={{ fontFamily:slab, fontWeight:500, fontSize:24, marginBottom:12 }}>Request received.</h3>
            <p style={{ fontSize:15, color:"var(--ink-mute)", lineHeight:1.7 }}>We&apos;ll be in touch shortly. For urgent issues please call 02 6189 1322.</p>
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
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Priority</div>
              <select name="priority" value={form.priority} onChange={handle} style={inputStyle}>
                <option>Standard — respond within business hours</option>
                <option>High — affecting several people</option>
                <option>Urgent — business-critical (please also call)</option>
              </select>
            </div>
            <div style={{ marginBottom:26 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Affected system or service</div>
              <input type="text" name="system" value={form.system} onChange={handle} placeholder="e.g. email, a specific application, a device" style={inputStyle}
                onFocus={e=>(e.target.style.borderBottomColor="var(--orange)")}
                onBlur={e=>(e.target.style.borderBottomColor="var(--rule)")} />
            </div>
            <div style={{ marginBottom:26 }}>
              <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:8, fontWeight:500 }}>Describe the issue *</div>
              <textarea name="description" required value={form.description} onChange={handle} rows={5}
                placeholder="What's happening, when it started, any error messages, and how many people are affected."
                style={{ ...inputStyle, resize:"vertical" }}
                onFocus={e=>(e.currentTarget.style.borderBottomColor="var(--orange)")}
                onBlur={e=>(e.currentTarget.style.borderBottomColor="var(--rule)")} />
            </div>
            {status === "error" && (
              <p style={{ fontSize:13, color:"red", marginBottom:16 }}>Something went wrong. Please call us on 02 6189 1322 or email support@empreus.com.au</p>
            )}
            <button type="button" onClick={submit} disabled={status==="sending"}
              style={{ background:"var(--ink)", color:"var(--paper)", border:"none", padding:"18px 36px", fontSize:12, letterSpacing:".22em", textTransform:"uppercase", fontWeight:500, cursor:"pointer", transition:"background .2s", display:"inline-flex", alignItems:"center", gap:12, alignSelf:"flex-start", opacity:status==="sending"?0.6:1 }}
              onMouseEnter={e=>(e.currentTarget.style.background="var(--orange)")}
              onMouseLeave={e=>(e.currentTarget.style.background="var(--ink)")}>
              {status === "sending" ? "Sending…" : "Submit Request →"}
            </button>
            <p style={{ fontSize:12, color:"var(--ink-mute)", marginTop:24, lineHeight:1.6 }}>For urgent or business-critical issues, please call <strong>02 6189 1322</strong> in addition to submitting this form.</p>
          </div>
        )}
        <style>{`@media(max-width:900px){.sr-layout{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </>
  );
}