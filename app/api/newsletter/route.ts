import { NextResponse } from "next/server";

const LIST_ID = "93e9255b-a1ff-40f1-ab07-7ee454581d61";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const addRes = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
    method: "PUT",
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ list_ids: [LIST_ID], contacts: [{ email }] }),
  });

  if (!addRes.ok) {
    console.error("SendGrid add contact error:", await addRes.text());
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }

  await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to: [{ email }], subject: "You're subscribed to the Empreus Journal" }],
      from: { email: "noreply@empreusmail.com.au", name: "Empreus IT Support" },
      content: [{ type: "text/html", value: `<div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:40px 24px;color:#181818;"><div style="font-size:28px;font-weight:700;color:#F37021;margin-bottom:4px;">EMPREUS</div><div style="font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#181818;margin-bottom:32px;">IT SUPPORT · CANBERRA</div><h1 style="font-size:22px;font-weight:500;margin-bottom:16px;">You're subscribed.</h1><p style="font-size:15px;line-height:1.7;color:#5E5E5E;margin-bottom:16px;">Thank you for subscribing to the Empreus Journal. You'll receive occasional notes from our studio — security advisories, Microsoft 365 updates, and bulletins from the workshop.</p><p style="font-size:15px;line-height:1.7;color:#5E5E5E;margin-bottom:32px;">We keep it infrequent and relevant. No noise.</p><hr style="border:none;border-top:1px solid #E3E0D9;margin-bottom:32px;" /><p style="font-size:13px;color:#6E6E6E;line-height:1.6;">Empreus IT Support · Unit 18, 63 Wollongong St, Fyshwick ACT 2609<br />02 6189 1322 · info@empreus.com.au</p></div>` }],
    }),
  });

  return NextResponse.json({ success: true });
}