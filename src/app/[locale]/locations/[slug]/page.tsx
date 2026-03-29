"use client";

import { useTranslations, useLocale } from "next-intl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ArrowLeft, ExternalLink, Navigation, Map as MapIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

// Clinician data with generated images
const cliniciansByBranch: Record<string, any[]> = {
  ampang: [
    { name: "Siti Aminah", title: "Senior Physiotherapist", bio: "With 12 years of clinical expertise, Siti specializes in advanced manual therapy and the Shaolin-inspired YAPCHANKOR treatment protocols.", image: "/images/physio_1_aminah_1774383175059.png" },
    { name: "David Wong", title: "Lead Physiotherapist", bio: "A specialist in musculoskeletal recovery, David focuses on chronic pain management and functional movement restoration.", image: "/images/physio_2_david_1774383191416.png" }
  ],
  okr: [
    { name: "Lim Wei Kiat", title: "Senior Consultant", bio: "With over 15 years of experience in spinal health and structural alignment, Wei Kiat has successfully treated thousands of patients with complex musculoskeletal issues.", image: "/images/physio_3_john_1774383210507.png" },
    { name: "Noraini binti Hassan", title: "Senior Physiotherapist", bio: "Noraini's clinical approach integrates advanced rehabilitation science with the YAPCHANKOR heritage method for comprehensive patient recovery.", image: "/images/physio_4_sarah_1774383227342.png" }
  ],
  shahAlam: [
     { name: "Ahmad Faizal", title: "Senior Physiotherapist", bio: "Specializing in sports injury and post-surgical rehabilitation, Ahmad is dedicated to helping patients achieve peak physical function.", image: "/images/physio_5_faizal_1774383244652.png" }
  ],
  subangJaya: [
     { name: "Michelle Tan", title: "Senior Physiotherapist", bio: "Michelle focuses on holistic recovery, utilizing the YAPCHANKOR method to resolve deep-seated inflammatory pain.", image: "/images/physio_6_michelle_1774383259951.png" }
  ]
};

export default function LocationPage() {
  const { slug } = useParams();
  const t = useTranslations("Branches");
  const navT = useTranslations("Navigation");
  const locale = useLocale();
  
  // Ensure slug is a string
  const branchId = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : "";
  
  // Try to get branch data
  let branchName = "";
  let branchAddress = "";
  let branchPhone = "";
  let branchHours = "";
  let wazeUrl = "";
  let googleMapsUrl = "";
  let branchImage = "/images/hero_cinematic.png";

  try {
    branchName = t(`${branchId}.name`);
    branchAddress = t(`${branchId}.address`);
    branchPhone = t(`${branchId}.phone`);
    branchHours = t(`${branchId}.hoursLines`);
    wazeUrl = t(`${branchId}.wazeUrl`);
    googleMapsUrl = t(`${branchId}.googleMapsUrl`);
    
    // Custom images for branches
    if (branchId === 'ampang') branchImage = "/images/ampang_new.webp";
    if (branchId === 'okr') branchImage = "/images/OKR YCK  Interior.webp";
    if (branchId === 'shahAlam') branchImage = "/images/shah-alam_new.webp";
    if (branchId === 'subangJaya') branchImage = "/images/subang_new.webp";
  } catch (e) {
    return (
      <div className="min-h-screen flex flex-col bg-brand-bg items-center justify-center p-10">
        <h1 className="text-4xl font-bold text-brand-teal-deep mb-6">Location Not Found</h1>
        <Link href="/" className="text-brand-teal font-bold hover:underline">Return to homepage</Link>
      </div>
    );
  }

  const physios = cliniciansByBranch[branchId] || [];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Header />
      
      <main className="grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-teal-deep text-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src={branchImage} 
              className="w-full h-full object-cover"
              alt={branchName}
            />
            <div className="absolute inset-0 bg-linear-to-b from-brand-teal-deep/80 via-transparent to-brand-teal-deep" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/#branches" className="inline-flex items-center space-x-2 text-brand-gold hover:text-white transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="text-xs font-bold uppercase tracking-widest">Back to Locations</span>
              </Link>
              <h1 className="text-4xl lg:text-7xl font-black mb-6 tracking-tight drop-shadow-lg">
                YAPCHANKOR <span className="text-brand-gold">{branchName}</span>
              </h1>
              <p className="text-xl lg:text-3xl font-medium text-white/80 max-w-3xl uppercase tracking-widest leading-relaxed">
                Professional Chronic Pain Treatment
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-brand-teal-deep mb-8 tracking-tight">Location Details</h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal-deep/40 mb-2">Address</p>
                          <p className="text-xl font-medium text-brand-teal-deep leading-relaxed">{branchAddress}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal-deep/40 mb-2">Phone</p>
                          <p className="text-xl font-medium text-brand-teal-deep">{branchPhone}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal-deep/40 mb-2">Operating Hours</p>
                          <p className="text-xl font-medium text-brand-teal-deep whitespace-pre-wrap">{branchHours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-brand-teal/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-teal-deep/40 mb-6">Navigation</p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={wazeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-brand-bg hover:bg-brand-teal/5 px-8 py-4 rounded-2xl border border-brand-teal/10 transition-all font-bold text-brand-teal-deep group"
                    >
                      <Navigation className="w-5 h-5 text-brand-teal/40 group-hover:text-brand-teal transition-colors" />
                      <span>Open in Waze</span>
                      <ExternalLink className="w-4 h-4 text-brand-gold" />
                    </a>
                    <a 
                      href={googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-brand-bg hover:bg-brand-teal/5 px-8 py-4 rounded-2xl border border-brand-teal/10 transition-all font-bold text-brand-teal-deep group"
                    >
                      <MapIcon className="w-5 h-5 text-brand-teal/40 group-hover:text-brand-teal transition-colors" />
                      <span>Google Maps</span>
                      <ExternalLink className="w-4 h-4 text-brand-gold" />
                    </a>
                  </div>
                </div>
              </div>

              <aside className="bg-brand-bg p-10 rounded-[2.5rem] border border-brand-teal/5 sticky top-24">
                <h3 className="text-2xl font-bold text-brand-teal-deep mb-6">Book an Assessment</h3>
                <p className="text-brand-teal-deep/60 mb-8 font-medium">Ready to start your recovery? Schedule a professional assessment at our {branchName} clinic today.</p>
                <Button className="w-full bg-brand-teal hover:bg-brand-teal-deep text-white h-16 rounded-2xl text-base font-bold uppercase tracking-widest shadow-xl">
                  {navT("bookAssessment")}
                </Button>
                <p className="mt-6 text-center text-xs font-bold text-brand-teal-deep/30 uppercase tracking-widest">No Referral Needed</p>
              </aside>
            </div>
          </div>
        </section>

        {/* Physios Section */}
        {physios.length > 0 && (
          <section className="py-24 bg-brand-bg">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mb-16">
                <h2 className="text-3xl lg:text-6xl font-black text-brand-teal-deep mb-6 tracking-tight">Meet Our <span className="text-brand-gold">Clinicians</span></h2>
                <p className="text-xl text-brand-teal-deep/60 font-medium leading-relaxed">
                  Our team at {branchName} consists of highly trained physiotherapists specializing in the YAPCHANKOR method.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {physios.map((physio, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-[2.5rem] p-8 border border-brand-teal/5 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-center text-center"
                  >
                    <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden mb-8 border-8 border-brand-bg shadow-inner relative">
                      <img 
                        src={physio.image} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        alt={physio.name} 
                      />
                      <div className="absolute inset-0 bg-brand-teal-deep/10 group-hover:opacity-0 transition-opacity" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-teal-deep mb-2">{physio.name}</h3>
                    <p className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">{physio.title}</p>
                    <p className="text-brand-teal-deep/60 font-medium leading-relaxed mb-10 grow">
                      {physio.bio}
                    </p>
                    <Button className="w-full bg-brand-bg hover:bg-brand-teal text-brand-teal-deep hover:text-white border border-brand-teal/10 h-12 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
                      Book with {physio.name.split(' ')[0]}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
