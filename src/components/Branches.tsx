"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, ArrowRight, ChevronRight } from "lucide-react";

export function Branches() {
  const t = useTranslations("Branches");

  const branches = [
    { 
      id: "ampang", 
      name: t("ampang.name"), 
      address: t("ampang.address"),
      phone: t("ampang.phone"),
      hours: t("ampang.hoursLines"),
      wazeUrl: t("ampang.wazeUrl"),
      googleMapsUrl: t("ampang.googleMapsUrl"),
      image: "/images/ampang_new.png" 
    },
    { 
      id: "okr", 
      name: t("okr.name"), 
      address: t("okr.address"),
      phone: t("okr.phone"),
      hours: t("okr.hoursLines"),
      wazeUrl: t("okr.wazeUrl"),
      googleMapsUrl: t("okr.googleMapsUrl"),
      image: "/images/okr.png" 
    },
    { 
      id: "shahAlam", 
      name: t("shahAlam.name"), 
      address: t("shahAlam.address"),
      phone: t("shahAlam.phone"),
      hours: t("shahAlam.hoursLines"),
      wazeUrl: t("shahAlam.wazeUrl"),
      googleMapsUrl: t("shahAlam.googleMapsUrl"),
      image: "/images/shah-alam_new.png" 
    },
    { 
      id: "subangJaya", 
      name: t("subangJaya.name"), 
      address: t("subangJaya.address"),
      phone: t("subangJaya.phone"),
      hours: t("subangJaya.hoursLines"),
      wazeUrl: t("subangJaya.wazeUrl"),
      googleMapsUrl: t("subangJaya.googleMapsUrl"),
      image: "/images/subang_new.png" 
    },
  ];

  return (
    <section id="branches" className="bg-brand-teal-deep py-16 lg:py-24 text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl lg:text-7xl font-bold mb-6 lg:mb-8 text-brand-gold tracking-tight"
          >
            {t("headline")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch, index) => (
            <BranchCard 
              key={branch.id}
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

function BranchCard({ name, address, phone, hours, wazeUrl, googleMapsUrl, image, index, ctaView, ctaBook, ctaDirections }: { name: string; address: string; phone: string; hours: string; wazeUrl: string; googleMapsUrl: string; image: string; index: number; ctaView: string; ctaBook: string; ctaDirections: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all group flex flex-col h-full shadow-2xl"
    >
      <div className="h-48 lg:h-56 overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep to-transparent opacity-60" />
      </div>
      <div className="p-6 lg:p-10 flex flex-col grow">
        <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 group-hover:text-brand-gold transition-colors tracking-tight h-14 overflow-hidden">{name}</h3>
        
        <div className="flex flex-col grow">
          <div className="space-y-4 lg:space-y-6 mb-8 min-h-40 lg:min-h-50">
            <div className="flex items-start space-x-4 text-xs lg:text-sm text-white/60">
              <MapPin className="w-4 h-4 mt-1 shrink-0 text-brand-gold" />
              <span className="leading-relaxed font-medium">{address}</span>
            </div>
            <div className="flex items-center space-x-4 text-xs lg:text-sm text-white/60">
              <Phone className="w-4 h-4 shrink-0 text-brand-gold" />
              <span className="font-medium">{phone}</span>
            </div>
            <div className="flex items-start space-x-4 text-xs lg:text-sm text-white/60">
              <Clock className="w-4 h-4 mt-1 shrink-0 text-brand-gold" />
              <span className="font-medium whitespace-pre-wrap">{hours}</span>
            </div>
          </div>

          <div className="space-y-4 pt-6 mt-auto border-t border-white/5 pb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">{ctaDirections}</span>
            <div className="flex items-center gap-3">
              <a 
                href={wazeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/5 hover:bg-brand-gold/20 px-5 py-2.5 rounded-xl transition-all border border-white/10 hover:border-brand-gold/40 text-white/50 hover:text-white group/link shadow-lg min-w-25"
              >
                <span className="text-xs font-black tracking-[0.15em] uppercase">Waze</span>
              </a>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/5 hover:bg-brand-gold/20 px-5 py-2.5 rounded-xl transition-all border border-white/10 hover:border-brand-gold/40 text-white/50 hover:text-white group/link shadow-lg min-w-30"
              >
                <span className="text-xs font-black tracking-[0.15em] uppercase">Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-white/5">
          <Button 
            className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-teal-deep font-bold rounded-xl h-11 lg:h-12 uppercase tracking-widest text-xs"
            id={`cta_book_branch_${index}_click`}
          >
            {ctaBook}
          </Button>
          <button className="w-full py-2 text-[10px] uppercase tracking-widest font-bold flex items-center justify-center space-x-2 text-white/30 hover:text-white transition-colors">
            <span>{ctaView}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
