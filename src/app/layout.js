import { Lora } from "next/font/google";
const lora = Lora({ subsets: ['latin', 'cyrillic'], weight: "400" });
import Head from 'next/head';

import "./globals.css";
import TopHeader from "@/components/topHeader";
import PracticeNavbar from "@/components/practiceNavbar";
import RightDrawer from "@/components/rightDrawer";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/ScrollButton";
import { keywords as keyword } from "@/utils/seo";

export const metadata = {
  title: {
    default: "Zaheer Welfare Organization:Welfare Trust",
    template: "%s - Zaheer Welfare Organization"
  },
  description: "come and Join Us @Zaheer Welfare Organization!",
  keywords: keyword
};

<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script type="application/ld+json" className="yoast-schema-graph">
          {
            `"@context": "https://schema.org",
            "@type": "NGO",
            "name": "Zaheer Welfare Organization",
            "alternateName": "Zaheer Welfare Trust",
            "url": "https://welfare-trust.vercel.app/",
            "logo": "https://welfare-trust.vercel.app/",
            "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+923223760042",
           "contactType": "customer service",
           "contactOption": "TollFree",
           "areaServed": "PK",
          "availableLanguage": "en"
  }`
          }
        </script>
      </Head>
      <body className={lora.className}>
        <>
          <TopHeader />
          <PracticeNavbar />
          <RightDrawer />
          <ScrollToTopButton />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}