import { LandingHeader } from "@/components/LandingHeader";
import { LandingHero } from "@/components/LandingHero";
import { LandingLocations } from "@/components/LandingLocations";
import { LandingFooter } from "@/components/LandingFooter";
import { getTranslations } from "next-intl/server";
import { getWhatsAppUrl, ADS_WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default async function PainReliefLandingPage() {
  const t = await getTranslations("LandingPage");
  const whatsappUrl = getWhatsAppUrl(t("whatsapp.message"), ADS_WHATSAPP_NUMBER);

  return (
    <main className="min-h-screen bg-brand-bg">
      <LandingHeader />
      
      <LandingHero />

      <LandingLocations />

      {/* WhatsApp CTA Section */}
      <section className="py-20 bg-brand-teal-deep text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="w-8 h-8 text-brand-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("whatsapp.title")}
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              {t("hero.subtitle")}
            </p>
            <Button
              asChild
              className="bg-brand-gold text-brand-teal-deep hover:bg-brand-gold-dark rounded-full px-12 h-16 text-lg font-bold shadow-xl transition-all hover:scale-105"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t("whatsapp.button")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <LandingFooter />
    </main>
  );
}
