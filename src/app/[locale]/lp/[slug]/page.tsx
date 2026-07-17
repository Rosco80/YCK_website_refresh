import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import { FloatingContactPanel } from "@/components/FloatingContactPanel";
import { SanityModuleRenderer } from "@/components/SanityModuleRenderer";
import { getLandingPageBySlug, getLandingPageSlugs } from "@/lib/sanity-queries";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export const revalidate = 86400;

type LandingPageModule = {
  _key?: string;
  [key: string]: unknown;
};

export async function generateStaticParams() {
  const slugs = await getLandingPageSlugs();

  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLandingPageBySlug(slug);
  
  if (!page) {
    return { title: 'Page Not Found' };
  }

  return {
    title: page.seoTitle || page.internalName,
    description: page.seoDescription || "",
  };
}

export default async function DynamicLandingPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const page = await getLandingPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader whatsappNumber={page.whatsappNumber} />
      <main className="grow">
        {page.modules?.map((module: LandingPageModule, index: number) => (
          <SanityModuleRenderer 
            key={module._key || index} 
            module={module} 
            whatsappMessage={page.localizedWhatsappMessage} 
            whatsappNumber={page.whatsappNumber}
          />
        ))}
      </main>
      <LandingFooter />
      <FloatingContactPanel whatsappNumber={page.whatsappNumber} />
      <WhatsAppWidget customMessage={page.localizedWhatsappMessage} customNumber={page.whatsappNumber} />
    </div>
  );
}
