"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, routing, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const t = useTranslations("Navigation");
  const tw = useTranslations("WhatsApp");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = getWhatsAppUrl(tw("defaultMessage"));

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
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/conditions", label: t("conditions") },
    { href: "/testimonials", label: t("testimonials") },
    { href: "/method", label: t("method") },
    { href: "/formulations", label: t("formulations") },
    { href: "/#branches", label: t("locations") },
    { href: "/insights", label: t("insights") },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      isScrolled 
        ? "bg-brand-bg shadow-clinical border-b border-brand-teal/10" 
        : "bg-brand-bg/0 border-b border-transparent"
    )}>
      <div className={cn(
        "container mx-auto flex items-center justify-between px-6 transition-all duration-500",
        isScrolled ? "h-20" : "h-44 lg:h-48 pt-4"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-50">
          <Image
            src="/images/logo/main_logo.webp"
            alt="YAPCHANKOR Clinic Logo"
            width={180}
            height={60}
            priority
            className={cn(
              "object-contain transition-all duration-500 hover:scale-[1.03]",
              isScrolled ? "h-12 lg:h-16 w-auto" : "h-24 sm:h-32 lg:h-38.5 w-auto"
            )}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-x-4 2xl:gap-x-12 px-6 text-label text-brand-teal-deep/60 mx-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-brand-teal transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions & Hamburger */}
        <div className="flex items-center space-x-3 lg:space-x-8 lg:pl-12 lg:border-l lg:border-brand-teal/10">
          {/* Language Switcher (Desktop & Mobile) */}
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
            className="hidden sm:flex rounded-full px-7 h-11 text-label bg-brand-teal text-white hover:bg-brand-teal-deep"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" id="cta_book_header_click">
              {t("bookAssessment")}
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-brand-teal relative z-50 ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0, display: "block" },
          closed: { opacity: 0, x: "100%", transitionEnd: { display: "none" } },
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-brand-bg flex flex-col pt-52 px-10 pb-10 overflow-y-auto z-40"
      >
        <nav className="flex flex-col space-y-8 mb-12">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-h4 text-brand-teal-deep hover:text-brand-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Button 
            asChild
            className="w-full rounded-2xl h-14 text-label bg-brand-teal text-white shadow-clinical-hover"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              {t("bookAssessment")}
            </a>
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
