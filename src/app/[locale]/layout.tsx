import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from "next/font/local";
import "../globals.css";

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

  return (
    <html lang={locale}>
      <body
        className={`${bandaRegular.variable} ${gotham.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
