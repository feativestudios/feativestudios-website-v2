

import { Jost } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import ClientLayoutWrapper from "./components/ClientLayoutWrapper";


const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Feative Studios",
  description:
    "Explore Feative Studios for cutting-edge browser and mobile games. Dive into strategy, RPGs, and more!",
  keywords:
    "Feative Studios, browser games, mobile games, RPGs, strategy games",
  openGraph: {
    title: "Feative Studios - Innovative Gaming Experiences",
    description:
      "Explore Feative Studios for cutting-edge browser and mobile games. Dive into strategy, RPGs, and more!",
    images: [{ url: "https://www.feativestudios.com/Web_thumbnail.jpg" }],
    url: "https://www.feativestudios.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feative Studios - Innovative Gaming Experiences",
    description:
      "Explore Feative Studios for cutting-edge browser and mobile games. Dive into strategy, RPGs, and more!",
    images: ["/favicon.ico"],
  },
     icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  metadataBase: new URL("https://www.feativestudios.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <link rel="icon" href="/favicon.ico"/>
  

      </head>

      <body className={jost.className}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>

        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Feative Studios",
              url: "https://feativestudios.com",
              logo: "https://feativestudios.com/web_fav_icon.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1 406-235-6377",
                contactType: "Customer Support",
              },
              sameAs: [
                "https://www.linkedin.com/company/feative-studios",
                "https://www.facebook.com/profile.php?id=61562092664446",
                "https://x.com/Feativestudios",
                "https://www.instagram.com/feativestudios/",
              ],
              description:
                "Feative studios create immersive experiences for the metaverse, AR, VR, and beyond. From game development to stunning game art, we push the boundaries of the digital world.",
              founder: "Muhammad Umar",
              foundingDate: "2025",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "1001 S MAIN ST, STE 500, Kalispell, MT, United States, Montana",
                addressLocality: "Kalispell",
                addressRegion: "MT",
                postalCode: "59901",
                addressCountry: "US",
              },
              offers: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Game Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Metaverse" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "AR/VR" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Art & Design" },
                  },
                ],
              },
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8KE2K0C3HT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8KE2K0C3HT');
          `}
        </Script>
      </body>
    </html>
  );
}