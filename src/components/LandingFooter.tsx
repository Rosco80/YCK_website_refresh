import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function LandingFooter() {
  const t = useTranslations("Footer");
  const tLegal = useTranslations("Legal");

  return (
    <footer className="bg-brand-teal-deep text-white pt-16 pb-12 border-t border-white/5 font-inter">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="bg-white p-6 rounded-2xl inline-block shadow-clinical mb-8">
            <Image 
              src="/images/logo/wordmark_stacked.jpg" 
              alt="YAPCHANKOR Clinical logo" 
              width={200}
              height={80}
              className="h-16 w-auto object-contain" 
            />
          </div>
          <p className="text-body text-white/50 italic mb-8 max-w-xs text-center">
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

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[11px] font-medium text-white/30 tracking-wide text-center md:text-left">
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
