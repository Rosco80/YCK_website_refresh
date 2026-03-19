"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, routing, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { href: "/method", label: t("method") },
    { href: "/formulations", label: t("formulations") },
    { href: "/locations", label: t("locations") },
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
        isScrolled ? "h-16" : "h-20"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-50">
          <img 
            src="/images/logo/logo no back with dots.png" 
            alt="YAPCHANKOR" 
            className="h-12 w-auto object-contain transition-transform hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10 text-xs uppercase tracking-widest font-bold text-brand-teal-deep/60">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-teal transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions & Hamburger */}
        <div className="flex items-center space-x-3 lg:space-x-8">
          {/* Language Switcher (Desktop & Mobile) */}
          <div className="flex items-center bg-brand-teal/5 lg:bg-transparent p-1 lg:p-0 rounded-lg lg:rounded-none lg:space-x-1">
            {routing.locales.map((l) => (
              <button
                key={l}
                onClick={() => handleLanguageChange(l)}
                className={cn(
                  "px-2 lg:px-2.5 py-1.5 lg:py-1 rounded text-[10px] font-bold tracking-wider uppercase transition-all",
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
            className="hidden sm:flex rounded-full px-7 h-11 text-xs uppercase tracking-wider bg-brand-teal text-white hover:bg-brand-teal-deep"
            id="cta_book_header_click"
          >
            {t("bookAssessment")}
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-teal relative z-50 ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
        className="fixed inset-0 bg-brand-bg flex flex-col pt-32 px-10 pb-10 overflow-y-auto"
      >
        <nav className="flex flex-col space-y-8 mb-12">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-2xl font-bold text-brand-teal-deep hover:text-brand-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Button 
            className="w-full rounded-2xl h-14 text-sm font-bold uppercase tracking-widest bg-brand-teal text-white shadow-clinical-hover"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("bookAssessment")}
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
