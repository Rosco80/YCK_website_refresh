import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const tWhatsApp = useTranslations("WhatsApp");
  const tLegal = useTranslations("Legal");

  return (
    <footer className="bg-brand-teal-deep text-white pt-16 pb-12 border-t border-white/5 font-inter">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-8">
              <div className="bg-white p-6 rounded-2xl inline-block shadow-clinical">
                <Image 
                  src="/images/logo/wordmark_stacked.jpg" 
                  alt="YAPCHANKOR Clinical logo" 
                  width={240}
                  height={96}
                  className="h-20 lg:h-24 w-auto object-contain" 
                />
              </div>
            </div>
            <p className="text-body text-white/50 italic mb-10 max-w-xs">
              {t("tagline")}
            </p>
            <div className="flex space-x-5">
              <SocialIcon icon={<Facebook size={18} />} href="https://www.facebook.com/Yapchankor/" />
              <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/yapchankor/" />
              <SocialIcon 
                icon={
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                } 
                href="https://www.tiktok.com/@yapchankor?_r=1&_t=ZS-94qAfgWTPZV" 
              />
              <SocialIcon icon={<Youtube size={18} />} href="https://www.youtube.com/channel/UCunC7aMz009FoaBNVzDZREA" />
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-label mb-8 text-brand-gold/80">{t("servicesTitle")}</h4>
              <ul className="space-y-4 text-sm font-medium text-white/40">
                <li><FooterLink href="/conditions/back-pain">Back Pain</FooterLink></li>
                <li><FooterLink href="/conditions/knee-pain">Knee Pain</FooterLink></li>
                <li><FooterLink href="/conditions/shoulder-pain">Shoulder Pain</FooterLink></li>
                <li><FooterLink href="/conditions/slipped-disc">Slipped Disc</FooterLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-label mb-8 text-brand-gold/80">{t("locationsTitle")}</h4>
              <ul className="space-y-4 text-sm font-medium text-white/40">
                <li><FooterLink href="#">Ampang</FooterLink></li>
                <li><FooterLink href="#">Old Klang Road</FooterLink></li>
                <li><FooterLink href="#">Shah Alam</FooterLink></li>
                <li><FooterLink href="#">Subang Jaya</FooterLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-label mb-8 text-brand-gold/80">{t("companyTitle")}</h4>
              <ul className="space-y-4 text-sm font-medium text-white/40">
                <li><FooterLink href="/method">{tNav("method")}</FooterLink></li>
                <li><FooterLink href="/insights">{tNav("insights")}</FooterLink></li>
                <li><FooterLink href="/#faq">{tNav("faq")}</FooterLink></li>
                <li><FooterLink href={getWhatsAppUrl(tWhatsApp("defaultMessage"))}>{tNav("bookAssessment")}</FooterLink></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-label mb-8 text-brand-gold/80">{t("newsletterTitle")}</h4>
            <a 
              href="https://yckpainclinic.substack.com/subscribe?next=https%3A%2F%2Fsubstack.com%2F%40yapchankor&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mb-6 block w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-xs text-white/20 hover:border-brand-gold/50 transition-all group overflow-hidden"
            >
              <span className="font-medium">{t("newsletterPlaceholder")}</span>
              <div className="absolute right-2 top-2 bottom-2 bg-brand-gold text-white px-4 rounded-lg group-hover:bg-brand-gold-dark group-hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center">
                <ArrowRight size={16} />
              </div>
            </a>
            <p className="text-label text-white/20 leading-relaxed">
              {t("newsletterSubscribers")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[11px] font-medium text-white/30 tracking-wide">
            {t("copyright")}
          </div>
          <div className="flex space-x-10 text-[11px] font-medium text-white/30 tracking-wide">
            <FooterLink href="/privacy-policy">{tLegal("privacyPolicy")}</FooterLink>
            <FooterLink href="/terms-of-service">{tLegal("termsOfService")}</FooterLink>
            <FooterLink href="/legal-disclosure">{tLegal("legalDisclosure")}</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a href={href} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all">
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: any; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-brand-gold transition-colors block">
      {children}
    </Link>
  );
}
