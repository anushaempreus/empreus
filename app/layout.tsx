import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Empreus IT Support | Managed IT Services Canberra", template: "%s | Empreus IT Support" },
  description: "A small Canberra studio for managed IT, cybersecurity, cloud, and bespoke software. Considered IT since 2016. Call 02 6189 1322.",
  metadataBase: new URL("https://empreusitsupport.com.au"),
  openGraph: {
    siteName: "Empreus IT Support",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Empreus IT Support" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: ["managed IT Canberra", "IT support Canberra", "cybersecurity Canberra", "cloud services Canberra", "MSP Canberra", "Empreus IT"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Empreus IT Support",
          "image": "https://empreusitsupport.com.au/logo.jpg",
          "@id": "https://empreusitsupport.com.au",
          "url": "https://empreusitsupport.com.au",
          "telephone": "+61261891322",
          "email": "info@empreus.com.au",
          "address": { "@type": "PostalAddress", "streetAddress": "Unit 19, 63 Wollongong Street", "addressLocality": "Fyshwick", "addressRegion": "ACT", "postalCode": "2609", "addressCountry": "AU" },
          "geo": { "@type": "GeoCoordinates", "latitude": -35.3244, "longitude": 149.1637 },
          "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" },
          "sameAs": ["https://www.facebook.com/empreusitsupport/","https://www.linkedin.com/company/empreus-it-support/"],
          "priceRange": "$$",
          "areaServed": { "@type": "City", "name": "Canberra" }
        })}} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}