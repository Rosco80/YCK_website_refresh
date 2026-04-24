"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { getWhatsAppUrl, ADS_WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function LandingLocations() {
  const t = useTranslations("Branches");
  const tl = useTranslations("LandingPage");

  const branches = [
    { 
      id: "ampang", 
      name: t("ampang.name"), 
      address: t("ampang.address"),
      phone: t("ampang.phone"),
      hours: t("ampang.hoursLines"),
      image: "/images/ampang_new.webp",
    },
    { 
      id: "okr", 
      name: t("okr.name"), 
      address: t("okr.address"),
      phone: t("okr.phone"),
      hours: t("okr.hoursLines"),
      image: "/images/OKR YCK  Interior.webp",
    },
    { 
      id: "shahAlam", 
      name: t("shahAlam.name"), 
      address: t("shahAlam.address"),
      phone: t("shahAlam.phone"),
      hours: t("shahAlam.hoursLines"),
      image: "/images/shah-alam_new.webp",
    },
    { 
      id: "subangJaya", 
      name: t("subangJaya.name"), 
      address: t("subangJaya.address"),
      phone: t("subangJaya.phone"),
      hours: t("subangJaya.hoursLines"),
      image: "/images/subang_new.webp",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-deep mb-6">
            {tl("locations.title")}
          </h2>
          <p className="text-brand-teal-deep/60">
            {tl("locations.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {branches.map((branch) => (
            <div 
              key={branch.id}
              className="group bg-brand-bg rounded-3xl overflow-hidden border border-brand-teal/5 hover:shadow-clinical transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative shrink-0">
                <Image 
                  src={branch.image} 
                  alt={branch.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">{branch.name}</h3>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    <p className="text-xs text-brand-teal-deep/70 font-medium leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                    <p className="text-xs text-brand-teal-deep/70 font-medium">
                      {branch.phone}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    <p className="text-xs text-brand-teal-deep/70 font-medium whitespace-pre-wrap">
                      {branch.hours}
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button 
                    asChild
                    className="w-full bg-brand-teal text-white hover:bg-brand-teal-deep rounded-xl h-10 text-[10px] uppercase font-black tracking-widest"
                  >
                    <a 
                      href={getWhatsAppUrl(`Hi YAPCHANKOR, I saw your ad and would like to visit the ${branch.name} branch.`, ADS_WHATSAPP_NUMBER)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {tl("locations.cta")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
