import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, organisation, email, telephone, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const body = {
    personalizations: [{ to: [{ email: "info@empreus.com.au", name: "Empreus IT Support" }], subject: `New Contact Form Enquiry from ${name}` }],
    from: { email: "noreply@empreusmail.com.au", name: "Empreus Website" },
    reply_to: { email, name },
    content: [{ type: "text/html", value: `<h2>New Contact Form Submission</h2><table cellpadding="8" style="font-family:sans-serif;font-size:14px;"><tr><td><strong>Name</strong></td><td>${name}</td></tr><tr><td><strong>Organisation</strong></td><td>${organisation || "—"}</td></tr><tr><td><strong>Email</strong></td><td>${email}</td></tr><tr><td><strong>Telephone</strong></td><td>${telephone || "—"}</td></tr><tr><td><strong>Service</strong></td><td>${service || "—"}</td></tr><tr><td><strong>Message</strong></td><td>${message}</td></tr></table>` }],
  };

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    console.error("SendGrid error:", await res.text());
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}