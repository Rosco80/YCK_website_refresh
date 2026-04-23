"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, routing, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getWhatsAppUrl, ADS_WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function LandingHeader() {
  const t = useTranslations("LandingPage");
  const tNav = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappUrl = getWhatsAppUrl(t("whatsapp.message"), ADS_WHATSAPP_NUMBER);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const localeLabels: Record<string, string> = { en: "EN", ms: "BM", zh: "中文" };

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      isScrolled 
        ? "bg-brand-bg shadow-clinical border-b border-brand-teal/10" 
        : "bg-brand-bg/0 border-b border-transparent"
    )}>
      <div className={cn(
        "container mx-auto px-4 sm:px-6 transition-all duration-500 overflow-hidden",
        isScrolled ? "py-3 lg:h-20" : "py-4 lg:h-40 lg:pt-4"
      )}>
        <div className="flex items-center justify-between h-full lg:grid lg:grid-cols-12 lg:gap-20">
          {/* Logo Side - Aligns with content on desktop */}
          <div className="lg:col-span-7 flex items-center shrink-0">
            <Link href="/" className="flex items-center relative z-50">
              <Image
                src="/images/logo/main_logo.webp"
                alt="YAPCHANKOR Clinic Logo"
                width={180}
                height={60}
                priority
                className={cn(
                  "object-contain transition-all duration-500 hover:scale-[1.03]",
                  isScrolled ? "h-10 lg:h-16 w-auto" : "h-14 sm:h-20 lg:h-32 w-auto"
                )}
              />
            </Link>
          </div>

          {/* Actions Side - Aligns with Form Card on desktop */}
          <div className="lg:col-span-5 flex items-center justify-end space-x-2 lg:space-x-8">
            {/* Language Switcher */}
            <div className="flex items-center bg-brand-teal/5 lg:bg-transparent p-1 lg:p-0 rounded-lg lg:rounded-none lg:space-x-1">
              {routing.locales.map((l) => (
                <button
                  key={l}
                  onClick={() => handleLanguageChange(l)}
                  className={cn(
                    "px-1.5 lg:px-2.5 py-1 lg:py-1 rounded text-label text-[10px] transition-all",
                    locale === l 
                      ? "bg-brand-teal text-white shadow-sm" 
                      : "text-brand-teal-deep/40 hover:text-brand-teal hover:bg-brand-teal/5"
                  )}
                >
                  {localeLabels[l] ?? l}
                </button>
              ))}
            </div>

            <Button 
              asChild
              className="rounded-full px-4 lg:px-7 h-9 lg:h-11 text-[10px] lg:text-xs text-label bg-brand-teal text-white hover:bg-brand-teal-deep shadow-clinical shrink-0"
            >
              <a href="#booking-form" rel="noopener noreferrer">
                {t("whatsapp.button")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
