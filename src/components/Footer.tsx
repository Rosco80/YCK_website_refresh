"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-brand-teal-deep text-white pt-16 pb-12 border-t border-white/5 font-inter">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="bg-white p-6 rounded-2xl inline-block shadow-clinical">
                <img 
                  src="/images/logo/wordmark_stacked.jpg" 
                  alt="YAPCHANKOR Clinical" 
                  className="h-20 lg:h-24 w-auto object-contain" 
                />
              </div>
            </motion.div>
            <p className="text-white/50 leading-relaxed mb-10 max-w-xs font-medium italic text-sm lg:text-base">
              {t("tagline")}
            </p>
            <div className="flex space-x-5">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-brand-gold/80">{t("servicesTitle")}</h4>
              <ul className="space-y-4 text-[13px] font-medium text-white/40">
                <li><FooterLink href="#">Back Pain</FooterLink></li>
                <li><FooterLink href="#">Knee Pain</FooterLink></li>
                <li><FooterLink href="#">Shoulder Pain</FooterLink></li>
                <li><FooterLink href="#">Physiotherapy</FooterLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-brand-gold/80">{t("locationsTitle")}</h4>
              <ul className="space-y-4 text-[13px] font-medium text-white/40">
                <li><FooterLink href="#">Ampang</FooterLink></li>
                <li><FooterLink href="#">Old Klang Road</FooterLink></li>
                <li><FooterLink href="#">Shah Alam</FooterLink></li>
                <li><FooterLink href="#">Subang Jaya</FooterLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-brand-gold/80">{t("companyTitle")}</h4>
              <ul className="space-y-4 text-[13px] font-medium text-white/40">
                <li><FooterLink href="#">Our Method</FooterLink></li>
                <li><FooterLink href="#">About Us</FooterLink></li>
                <li><FooterLink href="#">Clinical Science</FooterLink></li>
                <li><FooterLink href="#">Careers</FooterLink></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-brand-gold/80">{t("newsletterTitle")}</h4>
            <div className="relative mb-6">
              <input 
                type="email" 
                id="footer-newsletter-email"
                name="email"
                placeholder={t("newsletterPlaceholder")}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-xs focus:outline-hidden focus:border-brand-gold/50 transition-colors placeholder:text-white/20"
                suppressHydrationWarning
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-gold text-brand-teal-deep px-4 rounded-lg hover:bg-brand-gold-dark hover:scale-[1.02] active:scale-[0.98] transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.15em] font-bold leading-relaxed">
              Join 5,000+ subscribers for clinical health insights.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[11px] font-medium text-white/30 tracking-wide">
            {t("copyright")}
          </div>
          <div className="flex space-x-10 text-[11px] font-medium text-white/30 tracking-wide">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Legal Disclosure</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a href={href} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-teal-deep hover:border-brand-gold transition-all">
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-brand-gold transition-colors block">
      {children}
    </a>
  );
}
