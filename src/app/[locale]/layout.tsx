import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from "next/font/local";
import "../globals.css";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Analytics } from '@vercel/analytics/next';

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

  return (
    <html lang={locale}>
      <body
        className={`${bandaRegular.variable} ${gotham.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicJsonLd) }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <WhatsAppWidget />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
