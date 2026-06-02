import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Empreus IT Support | IT Support Canberra", template: "%s | Empreus IT Support" },
  description: "A small Canberra studio for managed IT, cybersecurity, cloud, and bespoke software. Built so you can stop thinking about IT. Considered IT, since 2016.",
  metadataBase: new URL("https://empreusitsupport.com.au"),
  openGraph: { siteName: "Empreus IT Support", locale: "en_AU", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
