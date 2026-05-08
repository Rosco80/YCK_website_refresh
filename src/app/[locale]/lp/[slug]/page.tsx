import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { FloatingContactPanel } from "@/components/FloatingContactPanel";
import { SanityModuleRenderer } from "@/components/SanityModuleRenderer";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await client.fetch(`*[_type == "landingPage" && slug.current == $slug][0]`, { slug });
  
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

  const page = await client.fetch(`*[_type == "landingPage" && slug.current == $slug][0]`, { slug });

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      <main className="grow">
        {page.modules?.map((module: any, index: number) => (
          <SanityModuleRenderer key={module._key || index} module={module} />
        ))}
      </main>
      <Footer />
      <FloatingContactPanel />
    </div>
  );
}
