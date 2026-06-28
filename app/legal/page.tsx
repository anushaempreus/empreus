"use client";
import { PageHead } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

const SECTIONS = [
  {
    heading: "Introduction",
    content: "At Empreus IT Support, we respect and protect the privacy of everyone who interacts with our services, reflecting our commitment to a refined standard of trust. This Privacy and Cookies Policy explains how we collect, use, and safeguard your information when you visit our website, empreusitsupport.com.au, or engage with us in any capacity.\n\nThis policy outlines our data-handling practices, ensuring you remain informed about the information we gather, how we use it, and your rights concerning your personal data. By accessing our website or using our services, you acknowledge and agree to the terms described herein.",
  },
  {
    heading: "2. Information We Collect",
    subsections: [
      { sub: "2.1 Personal Data", body: "This may include your name, email address, phone number, or other information you provide voluntarily, such as when you contact us, subscribe to our newsletter, or complete a form." },
      { sub: "2.2 Technical Data", body: "We may automatically collect information about your device, browser type, IP address, and browsing patterns through the use of cookies or similar technologies." },
    ],
  },
  {
    heading: "3. How We Use Your Information",
    bullets: [
      ["Service Delivery", "To manage and fulfil our service obligations, respond to inquiries, and provide customer support."],
      ["Communication", "To keep you informed about our products, services, and events. You may opt out of marketing communications at any time."],
      ["Website Improvement", "To analyse trends and usage, helping us refine our website's design and functionality."],
      ["Security and Compliance", "To detect, prevent, and respond to potential threats or unlawful activities, and to comply with legal and regulatory requirements."],
    ],
  },
  {
    heading: "4. Information Sharing & Disclosure",
    content: "We do not sell or rent your personal information to third parties. However, we may share data with:",
    bullets: [
      ["Service Providers", "Trusted partners who assist with our operations (e.g., hosting, analytics, or marketing), always bound by strict confidentiality obligations."],
      ["Legal Requirements", "Authorities or regulatory bodies if mandated by law or if necessary to protect our rights, property, or the safety of our clients."],
    ],
  },
  {
    heading: "5. Cookies & Similar Technologies",
    content: "Cookies are small text files stored on your device that help us enhance your browsing experience.",
    subsections: [
      {
        sub: "5.1 Types of Cookies We Use",
        bullets: [
          ["Essential Cookies", "Required for the operation of our website (e.g., to log in or use shopping carts)."],
          ["Analytical/Performance Cookies", "Help us understand how visitors navigate our site, enabling us to optimise user experience."],
          ["Functionality Cookies", "Remember your preferences (e.g., region, language) for a personalised visit."],
          ["Targeting/Advertising Cookies", "Track browsing habits to tailor marketing messages."],
        ],
      },
      { sub: "5.2 Cookie Management", body: "You can configure your browser settings to refuse some or all cookies. However, this may affect certain features of our website. For more information about cookies, visit www.allaboutcookies.org." },
    ],
  },
  {
    heading: "6. Data Security",
    content: "We apply rigorous technical and organisational measures to protect your data against unauthorised access, alteration, or destruction. These measures include encrypted communications, secure servers, and access control protocols, ensuring your data is handled with the utmost care.",
  },
  {
    heading: "7. Data Retention",
    content: "We retain personal information only as long as it is necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law or to protect our interests.",
  },
  {
    heading: "8. Third-Party Links",
    content: "Our website may include links to external websites. We are not responsible for the content, privacy practices, or security of any linked sites. We encourage you to review the policies of these third parties before sharing any personal data.",
  },
  {
    heading: "9. Your Rights",
    content: "Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information, or object to certain processing activities. To exercise these rights or inquire further, please contact us using the details in Section 12.",
  },
  {
    heading: "10. Governing Law",
    content: "This Privacy Policy is governed by the laws of the State of Victoria, Australia. Any disputes arising out of or relating to this policy shall be resolved in accordance with the dispute resolution provisions of the Master Services Agreement.",
  },
  {
    heading: "11. Updates to This Policy",
    content: "We may revise this Privacy and Cookies Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised \"Last Updated\" date, and significant changes will be communicated where appropriate.",
  },
  {
    heading: "12. Contact Us",
    content: "If you have any questions or concerns about this policy, or wish to update, correct, or request deletion of your personal data, please contact us:",
    contact: true,
  },
];

export default function Legal() {
  return (
    <>
      <PageHead
        crumb="Empreus · Legal & Privacy"
        title="Legal & Privacy"
        lede="At Empreus IT, we respect and protect the privacy of everyone who interacts with our services, reflecting our commitment to a refined standard of trust."
      />

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(44px,6vw,84px) clamp(16px,3.5vw,48px)" }}>
        {SECTIONS.map(({ heading, content, bullets, subsections, contact }) => (
          <div key={heading}>
            <h2 style={{ fontFamily: slab, fontWeight: 500, fontSize: "clamp(20px,2.2vw,26px)", color: "var(--orange)", margin: "44px 0 16px", lineHeight: 1.2 }}>
              {heading}
            </h2>

            {content && (
              <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 16, whiteSpace: "pre-line" }}>{content}</p>
            )}

            {bullets && (
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 16 }}>
                {(bullets as string[][]).map(([term, def]) => (
                  <li key={term} style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 10, paddingLeft: 0 }}>
                    <strong>{term}:</strong> {def}
                  </li>
                ))}
              </ul>
            )}

            {subsections && (subsections as { sub: string; body?: string; bullets?: string[][] }[]).map(({ sub, body, bullets: sb }) => (
              <div key={sub} style={{ marginBottom: 20 }}>
                <h3 style={{ fontFamily: slab, fontWeight: 500, fontSize: 18, marginBottom: 10, marginTop: 24 }}>{sub}</h3>
                {body && <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 10 }}>{body}</p>}
                {sb && (
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {sb.map(([term, def]) => (
                      <li key={term} style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 10 }}>
                        <strong>{term}:</strong> {def}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {contact && (
              <div style={{ marginTop: 16, padding: "clamp(24px,3vw,36px)", background: "var(--paper-2)", borderLeft: "3px solid var(--orange)" }}>
                <p style={{ fontFamily: slab, fontWeight: 500, fontSize: 18, marginBottom: 16 }}>Empreus IT Support</p>
                {[
                  ["Email", "legal@empreus.com.au", "mailto:legal@empreus.com.au"],
                  ["Website", "empreusitsupport.com.au", "https://empreusitsupport.com.au"],
                  ["Phone", "02 6189 1322", "tel:0261891322"],
                  ["Address", "Unit 18, 63 Wollongong St, Fyshwick ACT 2609", ""],
                ].map(([label, value, href]) => (
                  <div key={label} style={{ marginBottom: 10 }}>
                    <strong style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ink-faint)", display: "block", marginBottom: 2 }}>{label}</strong>
                    {href
                      ? <a href={href} style={{ fontSize: 15, color: "var(--ink)" }}>{value}</a>
                      : <span style={{ fontSize: 15, color: "var(--ink)" }}>{value}</span>
                    }
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <p style={{ fontSize: 12, color: "var(--ink-faint)", marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--rule-soft)" }}>
          Last updated 2026. This policy is provided for convenience and does not constitute legal advice.
        </p>
      </article>
    </>
  );
}