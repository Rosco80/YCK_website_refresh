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
        "container mx-auto flex items-center justify-between px-6 transition-all duration-500",
        isScrolled ? "h-20" : "h-32 lg:h-40 pt-4"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-50">
          <Image
            src="/images/logo/wordmark_vertical.png"
            alt="YAPCHANKOR Clinic Logo"
            width={138}
            height={154}
            priority
            className={cn(
              "object-contain transition-all duration-500 hover:scale-[1.03]",
              isScrolled ? "h-12 lg:h-16 w-auto" : "h-20 sm:h-24 lg:h-32 w-auto"
            )}
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center space-x-3 lg:space-x-8">
          {/* Language Switcher */}
          <div className="flex items-center bg-brand-teal/5 lg:bg-transparent p-1 lg:p-0 rounded-lg lg:rounded-none lg:space-x-1">
            {routing.locales.map((l) => (
              <button
                key={l}
                onClick={() => handleLanguageChange(l)}
                className={cn(
                  "px-2 lg:px-2.5 py-1.5 lg:py-1 rounded text-label text-[10px] transition-all",
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
            className="rounded-full px-7 h-11 text-label bg-brand-teal text-white hover:bg-brand-teal-deep shadow-clinical"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t("whatsapp.button")}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
