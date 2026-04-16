import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations("MethodPage.Legal");

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-teal-deep">
      <Header />
      <main className="grow py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16">
            <h1 className="text-h2 text-brand-gold mb-4">
              {t("privacyPolicy")}
            </h1>
            <p className="text-body text-zinc-500 italic">{t("updated")}</p>
          </header>

          <div className="prose prose-zinc max-w-none space-y-12 text-zinc-700 leading-relaxed">
            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                1. Introduction
              </h2>
              <p>
                At YAPCHANKOR, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website and use our clinical services. We adhere to the highest clinical standards of confidentiality.
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                2. Information We Collect
              </h2>
              <p>
                We may collect personal information that you provide to us directly, including but not limited to your name, contact details, health history, and booking preferences. We also collect automated data through cookies and server logs to improve your browsing experience and technical performance.
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                3. Use of Information
              </h2>
              <p>
                Your information is used solely for providing professional clinical assessments, managing appointments, and communicating important health-related updates. We do not sell, rent, or share your data with third parties for marketing purposes. Your clinical data is handled with extreme sensitivity.
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                4. Data Security
              </h2>
              <p>
                We implement robust technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. Access to patient records and personal data is strictly limited to authorized clinical and administrative staff who are bound by confidentiality agreements.
              </p>
            </section>

            <section className="mt-20">
              <div className="p-8 bg-brand-teal/5 rounded-2xl border border-brand-teal/20 shadow-sm">
                <p className="text-body text-sm text-zinc-600 italic">
                  {t("disclaimer")}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
