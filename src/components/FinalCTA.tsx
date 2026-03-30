import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCTA() {
  const t = useTranslations("FinalCTA");
  const tw = useTranslations("WhatsApp");
  const whatsappUrl = getWhatsAppUrl(tw("defaultMessage"));

  return (
    <section className="bg-brand-teal-deep py-16 lg:py-32 relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-200 h-200 bg-brand-gold/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-brand-teal/30 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
              {t("headline")}
            </h2>
            <p className="text-lg lg:text-2xl text-white/70 mb-10 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              {t("description")}
            </p>
            
            <Button 
              asChild
              className="w-full sm:w-auto px-10 sm:px-12 h-14 sm:h-18 text-base lg:text-xl font-bold bg-white text-brand-teal-deep hover:bg-white/90 rounded-full shadow-2xl transition-all duration-300 uppercase tracking-widest min-w-0 sm:min-w-[320px]"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta_final_assessment_click"
                className="inline-flex items-center justify-center"
              >
                {t("ctaBook")}
                <ChevronRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </Button>

            <div className="mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-white/10">
              <p className="text-[10px] lg:text-sm border-white tracking-[0.3em] font-bold text-white uppercase opacity-40">
                {t("heritage")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
