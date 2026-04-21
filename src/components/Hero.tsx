import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const t = useTranslations("Hero");
  const tb = useTranslations("TrustBar");
  const tw = useTranslations("WhatsApp");
  const whatsappUrl = getWhatsAppUrl(tw("defaultMessage"));

  return (
    <section 
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-24 lg:pt-12 lg:pb-24"
    >
      {/* Background Layer with Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/yck_home_hero.webp" 
          alt="Physiotherapy treatment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] md:object-center transition-transform duration-1000 scale-[1.02] group-hover:scale-105"
        />
        {/* Darkened overlay for better text readability - Increased opacity */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/50 to-black/80" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center sm:text-left">
        <div className="max-w-4xl mx-auto sm:mx-0">
          <div>
            <h1 className="text-display text-white mb-6 drop-shadow-md">
              {t("title")}
            </h1>
            
            <p className="text-label mb-10 drop-shadow-sm text-2xl lg:text-3xl">
              {t("heritageHeadline")}
            </p>

            <p className="text-lead text-white/90 mb-16 lg:mb-20 max-w-3xl mx-auto sm:mx-0 drop-shadow-lg">
              {t("description1")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start mb-16 lg:mb-20">
              <Button 
                  asChild
                  size="lg"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-teal-deep rounded-full px-12 h-14 lg:h-16 text-sm lg:text-lg uppercase tracking-widest font-bold shadow-2xl transition-all hover:scale-105"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" id="cta_book_hero_click">
                    {t("primaryCTA")}
                  </a>
                </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 rounded-full px-12 h-14 lg:h-16 text-sm lg:text-lg uppercase tracking-widest font-bold backdrop-blur-md"
              >
                <Link href="/method">
                  {t("secondaryCTA")}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Bar - Expanded & Integrated */}
        <div
          className="max-w-7xl mx-auto border-t border-white/15 pt-16 mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0">
            <TrustItem 
              title={tb("item1.title")} 
              sub={tb("item1.sub")} 
            />
            <TrustItem 
              title={tb("item2.title")} 
              sub={tb("item2.sub")} 
              showDivider
            />
            <TrustItem 
              title={tb("item3.title")} 
              sub={tb("item3.sub")} 
              showDivider
            />
            <TrustItem 
              title={tb("item4.title")} 
              sub={tb("item4.sub")} 
              showDivider
            />
          </div>
        </div>
      </div>
      
      {/* Subtle Bottom Blend */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-brand-bg to-transparent opacity-40 z-10" />
    </section>
  );
}

function TrustItem({ title, sub, showDivider }: { title: string; sub: string; showDivider?: boolean }) {
  return (
    <div className={cn(
      "flex items-center space-x-6 px-4 sm:px-6 lg:px-10 group transition-all justify-start",
      showDivider && "lg:border-l lg:border-white/10"
    )}>
      <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center shadow-inner group-hover:bg-brand-gold/20 transition-colors shrink-0 relative overflow-hidden">
        <Image 
          src="/images/Untitled_design-removebg-preview.webp" 
          alt="" 
          fill
          sizes="64px"
          className="object-contain brightness-110 p-3.5" 
        />
      </div>
      <div className="text-left">
        <div className="text-h4 text-white leading-tight mb-1">
          {title}
        </div>
        <div className="text-label mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
          {sub}
        </div>
      </div>
    </div>
  );
}
