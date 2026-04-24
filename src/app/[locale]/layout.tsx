import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from "next/font/local";
import "../globals.css";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { client } from "@/sanity/lib/client";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const bandaRegular = localFont({
  src: "../fonts/Banda.ttf",
  variable: "--font-banda",
  weight: "400",
});

const gotham = localFont({
  src: [
    {
      path: "../fonts/Gotham-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gotham-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Gotham-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  title: {
    template: "%s | YAPCHANKOR",
    default: "YAPCHANKOR | Premium Pain Treatment & Physiotherapy Since 1979",
  },
  description: "YAPCHANKOR specializes in chronic pain resolution using the Shaolin injury medicine method, proprietary clinical formulations, and integrative rehabilitation.",
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "ms": "/ms",
      "zh": "/zh",
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const medicalClinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "YAPCHANKOR Pain Treatment Centre",
    "url": "https://yapchankor.com",
    "description": "Specialists in chronic pain resolution using Shaolin-based physiotherapy and proprietary clinical formulations since 1979.",
    "medicalSpecialty": [
      "Physiotherapy",
      "Musculoskeletal",
      "Pain Management"
    ],
    "availableService": [
      { "@type": "MedicalTherapy", "name": "Shaolin Physiotherapy" },
      { "@type": "MedicalTherapy", "name": "Chronic Pain Treatment" }
    ]
  };

  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`);

  return (
    <html lang={locale}>
      <head>
        {siteSettings?.googleSiteVerificationId && (
          <meta name="google-site-verification" content={siteSettings.googleSiteVerificationId} />
        )}
        {siteSettings?.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteSettings.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${siteSettings.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
        {siteSettings?.googleTagManagerId && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${siteSettings.googleTagManagerId}');
            `}
          </Script>
        )}
        {siteSettings?.metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${siteSettings.metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body
        className={`${bandaRegular.variable} ${gotham.variable} font-sans antialiased`}
      >
        {siteSettings?.googleTagManagerId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${siteSettings.googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicJsonLd) }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <WhatsAppWidget />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
