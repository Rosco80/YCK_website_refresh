"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export function Branches() {
  const t = useTranslations("Branches");

  const branches = [
    { id: "ampang", name: t("ampang"), image: "/images/ampang.png" },
    { id: "okr", name: t("okr"), image: "/images/okr.png" },
    { id: "shahAlam", name: t("shahAlam"), image: "/images/shah-alam.png" },
    { id: "subangJaya", name: t("subangJaya"), image: "/images/subang.png" },
  ];

  return (
    <section className="bg-brand-teal-deep text-white py-16 lg:py-32">
      <div className="container mx-auto px-4">
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
              address={t("addressPlaceholder")}
              image={branch.image}
              index={index}
              ctaView={t("ctaView")}
              ctaBook={t("ctaBook")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchCard({ name, address, image, index, ctaView, ctaBook }: { name: string; address: string; image: string; index: number; ctaView: string; ctaBook: string }) {
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
        <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 group-hover:text-brand-gold transition-colors tracking-tight">{name}</h3>
        
        <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-10 grow">
          <div className="flex items-start space-x-4 text-xs lg:text-sm text-white/60">
            <MapPin className="w-4 h-4 mt-1 shrink-0 text-brand-gold" />
            <span className="leading-relaxed font-medium">{address}</span>
          </div>
          <div className="flex items-center space-x-4 text-xs lg:text-sm text-white/60">
            <Phone className="w-4 h-4 shrink-0 text-brand-gold" />
            <span className="font-medium">+603-XXXX-XXXX</span>
          </div>
          <div className="flex items-start space-x-4 text-xs lg:text-sm text-white/60">
            <Clock className="w-4 h-4 mt-1 shrink-0 text-brand-gold" />
            <span className="font-medium">Mon-Sun: 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <div className="space-y-3">
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
