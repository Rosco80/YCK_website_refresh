import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function TermsOfService() {
  const t = useTranslations("MethodPage.Legal");

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-teal-deep">
      <Header />
      <main className="grow py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16">
            <h1 className="text-h2 text-brand-gold mb-4">
              {t("termsOfService")}
            </h1>
            <p className="text-body text-zinc-500 italic">{t("updated")}</p>
          </header>

          <div className="prose prose-zinc max-w-none space-y-12 text-zinc-700 leading-relaxed">
            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website or our clinical services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services. These terms apply to all visitors, users, and others who access or use our clinical facilities.
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                2. Clinical Services
              </h2>
              <p>
                Our services include clinical assessments, physiotherapy, and herbal-based treatments. All treatments are provided by certified professionals. We reserve the right to refuse service to anyone at our discretion if we believe it is in the best interest of the patient or staff.
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                3. Appointments and Cancellations
              </h2>
              <p>
                Appointments must be booked in advance through our authorized channels. Please provide at least 24 hours' notice for cancellations or rescheduling. Failure to provide adequate notice may result in a cancellation fee, as we allocate professional clinical staff for each session.
              </p>
            </section>

            <section className="scroll-mt-24">
              <h2 className="text-h4 text-brand-teal-deep mb-6 border-b border-brand-gold/20 pb-2">
                4. Limitation of Liability
              </h2>
              <p>
                While we strive for the best clinical outcomes using our heritage methods and modern science, results may vary depending on individual health conditions and adherence to rehabilitation programs. YAPCHANKOR is not liable for any indirect or consequential damages arising from the use of our clinical services.
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
