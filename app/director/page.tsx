"use client";
import { PageHead, DiscoverLink } from "@/components/UI";

const slab = "var(--font-slab,'Roboto Slab',Georgia,serif)";

export default function Director() {
  return (
    <>
      <PageHead crumb="Empreus · About · From the Director" title="A note from the Director." lede="On why we started Empreus, why we've stayed small, and the kind of work we still want to do." />
      <article style={{ maxWidth:760, margin:"0 auto", padding:"clamp(44px,6vw,84px) clamp(16px,3.5vw,48px)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingBottom:24, borderBottom:"1px solid var(--rule-soft)", marginBottom:44, fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", fontWeight:500 }}>
          <span>Darko Reljic · Director</span><span>Fyshwick, 2026</span>
        </div>
        <p style={{ fontFamily:slab, fontWeight:400, fontSize:"clamp(20px,2vw,26px)", lineHeight:1.45, marginBottom:38 }}>I started Empreus in 2016 because I wanted to work somewhere that did IT the way I thought it should be done — slowly, carefully, with the phone answered by someone who knew your name.</p>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>Most managed IT shops grow by adding tickets, then queues, then call centres, then offshore overflow. The work becomes a conveyor belt. The engineer who set up your environment is rarely the one who answers when something breaks. Two months later, nobody at the MSP remembers anything about you except your account code.</p>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>We&apos;ve done the opposite. Empreus has stayed small on purpose. Our engineers work the same clients for years. They remember the cabinet your server lives in, the way your CFO prefers to be escalated, and which printer always jams on Tuesdays. When you call us, you get the person who knows the answer — not the person who has to look up your environment first.</p>
        <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(24px,2.6vw,32px)", lineHeight:1.2, margin:"46px 0 18px" }}>What I believe about IT</h2>
        <blockquote style={{ fontFamily:slab, fontWeight:400, fontSize:"clamp(20px,2.2vw,26px)", lineHeight:1.45, borderLeft:"2px solid var(--orange)", padding:"8px 0 8px 24px", margin:"34px 0" }}>The standards should be high enough that they reveal themselves only in their absence — in what doesn&apos;t happen.</blockquote>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>I believe IT, at its best, is an act of craftsmanship. The wiring should be neat even where nobody sees it. The documentation should make sense to the next person who picks it up. The tools should be chosen on merits — not because a vendor took us to lunch.</p>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>That sounds romantic. In practice it means we spend more time on documentation than most MSPs find sensible. It means our engineers leave a site only when the runbook is updated. It means we say no to clients who want us to cut corners we won&apos;t cut, and no to vendors selling us tools we don&apos;t need.</p>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>Our standards are kept high not because they&apos;re enforced. They&apos;re kept high because they&apos;re shared.</p>
        <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(24px,2.6vw,32px)", lineHeight:1.2, margin:"46px 0 18px" }}>Who we&apos;re for</h2>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>We&apos;re not for everyone, and we don&apos;t try to be. We&apos;re for the organisations that notice the difference. The ones where the CFO has read the contract twice and asked questions about clause 14.2. The ones where the operations manager would rather pay a little more for one phone call answered properly than save ten percent across three calls passed around.</p>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>We&apos;re for the federal department that needs a partner who can be cleared, who understands governance, who will sit in the room and write the policy with you. We&apos;re for the Canberra business that&apos;s been burned twice by an MSP that scaled too fast and forgot them.</p>
        <h2 style={{ fontFamily:slab, fontWeight:500, fontSize:"clamp(24px,2.6vw,32px)", lineHeight:1.2, margin:"46px 0 18px" }}>What&apos;s next</h2>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:22 }}>We keep investing in three things: our people, our documentation, and our standards. We expect to stay small. We expect to be selective about who we work with. And we expect — perhaps the highest compliment our work can earn — that our clients will eventually take what we do for granted.</p>
        <p style={{ fontSize:16, lineHeight:1.8, marginBottom:40 }}>If any of this sounds like the kind of relationship you&apos;d value, I&apos;d be glad to talk. The kettle&apos;s always on.</p>
        <div style={{ marginTop:54, paddingTop:32, borderTop:"1px solid var(--rule-soft)" }}>
          <div style={{ fontFamily:slab, fontWeight:500, fontSize:18, marginBottom:4 }}>Darko Reljic</div>
          <div style={{ fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--ink-mute)", fontWeight:500 }}>Director, Empreus Support Pty Ltd</div>
        </div>
        <div style={{ marginTop:40 }}><DiscoverLink href="/contact">Start a Conversation</DiscoverLink></div>
      </article>
    </>
  );
}
