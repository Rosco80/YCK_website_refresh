import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "Branches" });
  
  let branchName = "";
  try {
    branchName = t(`${slug}.name`);
  } catch (e) {
    branchName = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  }
  
  return {
    title: `${branchName} Branch | Professional Pain Treatment`,
    description: `Visit our ${branchName} clinic for expert treatment of chronic back pain, knee osteoarthritis, and sports injuries using the Shaolin-based YAPCHANKOR method.`,
  };
}

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
