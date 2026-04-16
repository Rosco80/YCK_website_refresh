import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

function renderDescriptionWithLinks(text: string): (string | React.ReactElement)[] {
  const conditionLinks = [
    { text: "back pain", href: "/conditions/back-pain" },
    { text: "knee pain", href: "/conditions/knee-pain" },
    { text: "shoulder injuries", href: "/conditions/shoulder-pain" },
  ];

  let parts: (string | React.ReactElement)[] = [text];

  conditionLinks.forEach(({ text: condText, href }) => {
    parts = parts.flatMap(part => {
      if (typeof part !== "string") return part;
      const regex = new RegExp(`(${condText})`, "gi");
      if (!regex.test(part)) return part;

      return part.split(new RegExp(`(${condText})`, "i")).map((segment, i) =>
        segment.toLowerCase() === condText.toLowerCase()
          ? <Link key={`${href}-${i}`} href={href} className="text-brand-teal hover:text-brand-teal-deep underline transition-colors">{segment}</Link>
          : segment
      );
    });
  });

  return parts;
}

export function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const features = [
    {
      icon: "/images/manual therapy.webp",
      label: t("item1"),
    },
    {
      icon: "/images/structuredrehab.webp",
      label: t("item2"),
    },
    {
      icon: "/images/clinicalformulation.webp",
      label: t("item3"),
    },
  ];

  return (
    <section className="bg-brand-bg py-16 lg:py-24 border-y border-brand-teal/5 relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-label text-xl lg:text-2xl mb-10">
              {t("title")}
            </h2>
            
            <h3 className="text-h3 text-brand-teal mb-8 lg:mb-12 max-w-5xl mx-auto">
              {t("subtitle")}
            </h3>

            <div className="text-body-lg text-brand-teal-deep/70 mb-12 lg:mb-20 max-w-3xl mx-auto space-y-4">
              {t("description").split("\n\n").map((paragraph, i) => (
                <p key={i}>{renderDescriptionWithLinks(paragraph)}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center group"
                >
                  <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-white shadow-clinical mb-4 transition-transform group-hover:scale-105 duration-500 flex items-center justify-center p-8 relative">
                    <Image 
                      src={feature.icon} 
                      alt={feature.label}
                      fill
                      sizes="192px"
                      className="object-contain mix-multiply p-8" 
                    />
                  </div>
                  <span className="text-label text-brand-teal-deep mt-4">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
