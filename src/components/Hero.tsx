import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { getSiteSettings, getWebsiteImages } from "@/lib/sanity-queries";
import { urlForImage } from "@/sanity/lib/image";

export async function Hero({ hideLinks = false, customTitle, customSubtitle }: { hideLinks?: boolean, customTitle?: string, customSubtitle?: string } = {}) {
  const t = await getTranslations("Hero");
  const tb = await getTranslations("TrustBar");
  const tw = await getTranslations("WhatsApp");
  const { getLocale } = await import("next-intl/server");
  const locale = await getLocale() as 'en' | 'ms' | 'zh';
  const siteSettings = await getSiteSettings();
  
  const defaultMessageObj = siteSettings?.websiteWhatsappMessages?.localizedDefaultMessage;
  const resolvedMessage = typeof defaultMessageObj === 'string' 
    ? defaultMessageObj 
    : defaultMessageObj?.[locale];
    
  const defaultMessage = resolvedMessage || tw("defaultMessage");
  const whatsappUrl = getWhatsAppUrl(defaultMessage);

  const websiteImages = await getWebsiteImages();
  const heroImageSrc = websiteImages?.heroImage 
    ? urlForImage(websiteImages.heroImage)?.url() 
    : "/images/yck_home_hero.webp";

  return (
    <>
      <section 
        className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-20 lg:pt-12 lg:pb-20"
      >
        {/* Background Layer with Cinematic Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImageSrc || "/images/yck_home_hero.webp"} 
            alt="Physiotherapy treatment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_20%] md:object-[center_20%] transition-transform duration-1000 scale-[1.02] group-hover:scale-105"
          />
          {/* Darkened overlay for better text readability - Increased opacity */}
          <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/50 to-black/80" />
        </div>

        <div className="container mx-auto px-6 z-10 text-center sm:text-left pt-8">
          <div className="max-w-4xl mx-auto sm:mx-0">
            <div>
              <h1 className="text-display text-white mb-6 drop-shadow-md">
                {customTitle || t("title")}
              </h1>
              
              <p className="text-label mb-10 drop-shadow-sm text-2xl lg:text-3xl text-brand-gold">
                {customSubtitle || t("heritageHeadline")}
              </p>

              <p className="text-lead text-white/90 mb-12 max-w-3xl mx-auto sm:mx-0 drop-shadow-lg">
                {t("description1")}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
                <Button 
                    asChild
                    size="lg"
                    className="bg-brand-gold hover:bg-brand-gold/90 text-brand-teal-deep rounded-full px-12 h-14 lg:h-16 text-sm lg:text-lg uppercase tracking-widest font-bold shadow-2xl transition-all hover:scale-105"
                  >
                    <a href={hideLinks ? "#booking-form" : whatsappUrl} target={hideLinks ? "_self" : "_blank"} rel="noopener noreferrer" id="cta_book_hero_click">
                      {t("primaryCTA")}
                    </a>
                  </Button>
                {!hideLinks && (
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
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle Bottom Blend */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-brand-bg to-transparent opacity-80 z-10" />
      </section>

      {/* Trust Bar - Separate Section Below Hero */}
      <section className="bg-brand-bg py-16 lg:py-20 border-b border-brand-teal/10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
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
      </section>
    </>
  );
}

function TrustItem({ title, sub, showDivider }: { title: string; sub: string; showDivider?: boolean }) {
  return (
    <div className={cn(
      "flex items-center space-x-6 px-4 sm:px-6 lg:px-10 group transition-all justify-start",
      showDivider && "lg:border-l lg:border-brand-teal/10"
    )}>
      <div className="w-16 h-16 rounded-full bg-brand-teal/5 flex items-center justify-center group-hover:bg-brand-teal/10 transition-colors shrink-0 relative overflow-hidden">
        <Image 
          src="/images/Untitled_design-removebg-preview.webp" 
          alt="" 
          fill
          sizes="64px"
          className="object-contain p-3.5 opacity-80" 
        />
      </div>
      <div className="text-left">
        <div className="text-h4 text-brand-teal-deep leading-tight mb-1">
          {title}
        </div>
        <div className="text-label mt-1 text-brand-teal-deep/70 group-hover:text-brand-teal-deep transition-colors">
          {sub}
        </div>
      </div>
    </div>
  );
}
