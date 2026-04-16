import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function LegalDisclosure() {
  const t = useTranslations("MethodPage.Legal");

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-teal-deep">
      <Header />
      <main className="grow py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16">
            <h1 className="text-h2 text-brand-gold mb-4">
              {t("legalDisclosure")}
            </h1>
            <p className="text-body text-zinc-500 italic">{t("updated")}</p>
          </header>

          <div className="prose prose-zinc max-w-none space-y-12 text-zinc-700 leading-relaxed">
            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                1. Business Information
              </h2>
              <p>
                YAPCHANKOR is operated by Red Meridian Sdn. Bhd. (201101022247). Our principal clinical offices are located in Ampang, Old Klang Road, Shah Alam, and Subang Jaya, Malaysia. We have been serving the community with specialized pain treatment since 1979.
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                2. Professional Accreditation
              </h2>
              <p>
                All clinical staff at YAPCHANKOR are certified and registered professionals in their respective fields, including physiotherapy and traditional Chinese medicine. Our methods are based on a unique combination of Shaolin injury medicine heritage and modern clinical science.
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                3. External Links
              </h2>
              <p>
                Our website may contain links to external sites, such as Substack for clinical insights or our social media platforms. We are not responsible for the privacy practices, clinical content, or accuracy of information on these external sites.
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                4. Intellectual Property
              </h2>
              <p>
                The name "YAPCHANKOR", our treatment methods, and proprietary herbal formulas are protected by trademark and copyright laws. No part of this website, its design, or its clinical content may be reproduced or used without our prior written consent.
              </p>
            </section>

            <section className="mt-20">
              <div className="p-8 bg-brand-teal/5 rounded-2xl border border-brand-teal/20 shadow-sm">
                <p className="text-body text-sm text-zinc-600 italic">
                  {t("disclaimer")}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
