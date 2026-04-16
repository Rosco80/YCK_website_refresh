import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, ArrowRight, ChevronRight } from "lucide-react";
import Script from "next/script";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Branches() {
  const t = useTranslations("Branches");

  const locale = useLocale();

  const branches = [
    { 
      id: "ampang", 
      name: t("ampang.name"), 
      address: t("ampang.address"),
      phone: t("ampang.phone"),
      hours: t("ampang.hoursLines"),
      wazeUrl: t("ampang.wazeUrl"),
      googleMapsUrl: t("ampang.googleMapsUrl"),
      image: "/images/ampang_new.webp",
      geo: { lat: 3.1467, lng: 101.7660 }
    },
    { 
      id: "okr", 
      name: t("okr.name"), 
      address: t("okr.address"),
      phone: t("okr.phone"),
      hours: t("okr.hoursLines"),
      wazeUrl: t("okr.wazeUrl"),
      googleMapsUrl: t("okr.googleMapsUrl"),
      image: "/images/OKR YCK  Interior.webp",
      geo: { lat: 3.0983, lng: 101.6735 }
    },
    { 
      id: "shahAlam", 
      name: t("shahAlam.name"), 
      address: t("shahAlam.address"),
      phone: t("shahAlam.phone"),
      hours: t("shahAlam.hoursLines"),
      wazeUrl: t("shahAlam.wazeUrl"),
      googleMapsUrl: t("shahAlam.googleMapsUrl"),
      image: "/images/shah-alam_new.webp",
      geo: { lat: 3.0816, lng: 101.5401 }
    },
    { 
      id: "subangJaya", 
      name: t("subangJaya.name"), 
      address: t("subangJaya.address"),
      phone: t("subangJaya.phone"),
      hours: t("subangJaya.hoursLines"),
      wazeUrl: t("subangJaya.wazeUrl"),
      googleMapsUrl: t("subangJaya.googleMapsUrl"),
      image: "/images/subang_new.webp",
      geo: { lat: 3.0778, lng: 101.5886 }
    },
  ];

  const schemas = branches.map(branch => ({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `YAPCHANKOR ${branch.name}`,
    "image": `https://yapchankor.com${branch.image}`,
    "@id": `https://yapchankor.com/${locale}/locations/${branch.id}`,
    "url": `https://yapchankor.com/${locale}/locations/${branch.id}`,
    "telephone": branch.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": branch.address,
      "addressLocality": branch.name,
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": branch.geo.lat,
      "longitude": branch.geo.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  }));

  return (
    <section id="branches" className="bg-brand-teal-deep py-16 lg:py-24 text-white overflow-hidden relative">
      {schemas.map((schema, idx) => (
        <Script
          key={`schema-${branches[idx].id}`}
          id={`ld-json-${branches[idx].id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-h2 text-brand-gold mb-6 lg:mb-8">
            {t("headline")}
          </h2>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch, index) => (
            <BranchCard 
              key={branch.id}
              id={branch.id}
              name={branch.name}
              address={branch.address}
              phone={branch.phone}
              hours={branch.hours}
              wazeUrl={branch.wazeUrl}
              googleMapsUrl={branch.googleMapsUrl}
              image={branch.image}
              index={index}
              ctaView={t("ctaView")}
              ctaBook={t("ctaBook")}
              ctaDirections={t("ctaDirections")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchCard({ id, name, address, phone, hours, wazeUrl, googleMapsUrl, image, index, ctaView, ctaBook, ctaDirections }: { id: string; name: string; address: string; phone: string; hours: string; wazeUrl: string; googleMapsUrl: string; image: string; index: number; ctaView: string; ctaBook: string; ctaDirections: string }) {
  const tw = useTranslations("WhatsApp");
  const whatsappUrl = getWhatsAppUrl(tw("branchMessage", { branch: name }));

  return (
    <div 
      className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all group flex flex-col h-full shadow-2xl"
    >
      <div className="h-48 lg:h-56 overflow-hidden relative">
        <Image src={image} alt={name} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep to-transparent opacity-60" />
      </div>
      <div className="p-6 lg:p-10 flex flex-col grow">
        <h3 className="text-h4 mb-6 lg:mb-8 group-hover:text-brand-gold transition-colors h-14 overflow-hidden">{name}</h3>
        
        <div className="flex flex-col grow">
          <div className="space-y-4 lg:space-y-6 mb-8 min-h-40 lg:min-h-50 text-white/60">
            <div className="flex items-start space-x-4">
              <MapPin className="w-4 h-4 mt-1 shrink-0 text-brand-gold" />
              <span className="text-sm font-medium">{address}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-4 h-4 shrink-0 text-brand-gold" />
              <span className="text-sm font-medium">{phone}</span>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-4 h-4 mt-1 shrink-0 text-brand-gold" />
              <span className="text-sm font-medium whitespace-pre-wrap">{hours}</span>
            </div>
          </div>

          <div className="space-y-4 pt-6 mt-auto border-t border-white/5 pb-8">
            <span className="text-label text-white/30">{ctaDirections}</span>
            <div className="flex items-center gap-3">
              <a 
                href={wazeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/5 hover:bg-brand-gold/20 px-5 py-2.5 rounded-xl transition-all border border-white/10 hover:border-brand-gold/40 text-white/50 hover:text-white group/link shadow-lg min-w-25"
              >
                <span className="text-label">Waze</span>
              </a>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/5 hover:bg-brand-gold/20 px-5 py-2.5 rounded-xl transition-all border border-white/10 hover:border-brand-gold/40 text-white/50 hover:text-white group/link shadow-lg min-w-30"
              >
                <span className="text-label">Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-white/5">
          <Button 
            asChild
            className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-bold rounded-xl h-11 lg:h-12 uppercase tracking-widest text-xs"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" id={`cta_book_branch_${index}_click`}>
              {ctaBook}
            </a>
          </Button>
          <Link 
            href={`/locations/${id}`}
            className="w-full py-2 text-label flex items-center justify-center space-x-2 text-white/30 hover:text-white transition-colors"
          >
            <span>{ctaView}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
