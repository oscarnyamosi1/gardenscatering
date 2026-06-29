import type { Metadata } from 'next';
import { Providers } from './providers';
import { Navbar } from '@/components/layout/Navbar';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://gardensevents.vercel.app"),

  title: "Gardens Catering Company | Catering Services, Cakes & Events",

  description:
    "gardens Catering Company offers professional catering, cakes, event food services, custom menus, and culinary experiences. Led by Chef Kizito, Lewis Areri and the gardens team.",

  keywords: [
    "gardens Catering",
    "Catering Company",
    "Event Catering",
    "Wedding Catering",
    "Birthday Catering",
    "Cake Services",
    "gardens Kitchen and Bites",
    "Chef Kizito",
    "Lewis Areri",
    "Oscar Nyamosi",
    "OMON_DEVs",
  ],

  authors: [
    {
      name: "OMON_DEVs — Oscar Nyamosi",
    },
  ],

  creator: "OMON_DEVs",
  publisher: "OMON_DEVs",

  applicationName: "gardens Catering Company",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://gardensevents.vercel.app/",
  },

  verification: {
    // google:"t1mVzWNatI_cGeZO-PpSkX6k2Xf0QmVKKh51Ffu-xAM"
    // google: "aRfE4iLaCug0ZhyX-N5T2XyH5CaF_lh1OpYmCilmhOM",
  },

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.png",
  },

  openGraph: {
    title: "gardens Catering Company | Catering & Cake Services",
    description:
      "gardens Events premium catering and cake services for events, celebrations, and special occasions.",
    url: "https://gardensevents.vercel.app/",
    siteName: "gardens Events Catering Company",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "gardens Catering Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "gardens Catering Company",
    description:
      "Professional catering, cakes and event food services.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* google verifier */}
        <meta name="google-site-verification" content="t1mVzWNatI_cGeZO-PpSkX6k2Xf0QmVKKh51Ffu-xAM" />
        <meta name="google-site-verification" content="aRfE4iLaCug0ZhyX-N5T2XyH5CaF_lh1OpYmCilmhOM" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}







// import type { Metadata, Viewport } from "next";
// import Script from "next/script";
// import { Providers } from "./providers";
// import { Navbar } from "@/components/layout/Navbar";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://gardensevents.vercel.app"),

//   title: "gardens Catering Company | Catering Services, Cakes & Events",

//   description:
//     "gardens Catering Company offers professional catering, cakes, event food services, custom menus, and culinary experiences. Led by Chef Kizito, Lewis Areri and the gardens team.",

//   keywords: [
//     "gardens Catering",
//     "Catering Company",
//     "Event Catering",
//     "Wedding Catering",
//     "Birthday Catering",
//     "Cake Services",
//     "gardens Kitchen and Bites",
//     "Chef Kizito",
//     "Lewis Areri",
//     "Oscar Nyamosi",
//     "OMON_DEVs",
//   ],

//   authors: [
//     {
//       name: "OMON_DEVs — Oscar Nyamosi",
//     },
//   ],

//   creator: "OMON_DEVs",
//   publisher: "OMON_DEVs",

//   applicationName: "gardens Catering Company",

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//     },
//   },

//   alternates: {
//     canonical: "https://gardensevents.vercel.app/",
//   },

//   verification: {
//     google: "aRfE4iLaCug0ZhyX-N5T2XyH5CaF_lh1OpYmCilmhOM",
//   },

//   icons: {
//     icon: [
//       {
//         url: "/favicon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/logo.png",
//   },

//   openGraph: {
//     title: "gardens Catering Company | Catering & Cake Services",
//     description:
//       "gardens Events premium catering and cake services for events, celebrations, and special occasions.",
//     url: "https://gardensevents.vercel.app/",
//     siteName: "gardens Events Catering Company",
//     type: "website",
//     images: [
//       {
//         url: "/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "gardens Catering Company",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "gardens Catering Company",
//     description:
//       "Professional catering, cakes and event food services.",
//     images: ["/logo.png"],
//   },
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   themeColor: "#b8860b",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         {/* Google Fonts */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />

//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Space+Mono:wght@400;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>

//       <body>
//         <Providers>
//           <Navbar />
//           {children}
//         </Providers>

//         <Script
//           id="structured-data"
//           type="application/ld+json"
//           strategy="afterInteractive"
//         >
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             name: "gardens Catering Company",
//             url: "https://gardensevents.vercel.app",
//             logo: "https://gardensevents.vercel.app/logo.png",
//             image: "https://gardensevents.vercel.app/logo.png",
//             description:
//               "Professional catering and cake services for events and celebrations.",
//             sameAs: [
//               "https://www.tiktok.com/@gardenskitchenandbites1",
//             ],
//             founder: [
//               {
//                 "@type": "Person",
//                 name: "Chef Kizito",
//               },
//               {
//                 "@type": "Person",
//                 name: "Lewis Areri",
//               },
//             ],
//             employee: [
//               {
//                 "@type": "Person",
//                 name: "Chef Kizito",
//               },
//               {
//                 "@type": "Person",
//                 name: "Lewis Areri",
//               },
//             ],
//             creator: {
//               "@type": "Organization",
//               name: "OMONDEVs",
//             },
//           })}
//         </Script>
//       </body>
//     </html>
//   );
// }