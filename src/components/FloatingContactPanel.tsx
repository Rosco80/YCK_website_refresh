"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { X, Phone, Mail } from "lucide-react";
import { LeadForm } from "./LeadForm";

const CALL_NUMBER = "+60162481899";

export function FloatingContactPanel() {
  const t = useTranslations("LandingPage.floatingPanel");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showWhatsAppTag, setShowWhatsAppTag] = useState(true);

  // Periodically show the WhatsApp tag
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWhatsAppTag(true);
    }, 15000); // reappear every 15 seconds
    return () => clearInterval(interval);
  }, []);

  // Auto-hide the WhatsApp tag after 5 seconds
  useEffect(() => {
    if (showWhatsAppTag) {
      const timeout = setTimeout(() => {
        setShowWhatsAppTag(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showWhatsAppTag]);

  // Prevent body scroll when form is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFormOpen]);

  return (
    <>
      {/* ===== Right-edge floating buttons ===== */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-90 flex flex-col items-end gap-3">
        {/* Contact Us Sidebar Tab */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="group flex flex-col items-center gap-2 bg-brand-teal hover:bg-brand-teal-deep text-white px-2 py-5 rounded-l-xl shadow-2xl transition-all duration-300 hover:px-3"
          aria-label={t("contactTab")}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest writing-vertical">
            {t("contactTab")}
          </span>
          <Mail className="w-4 h-4" />
        </button>

        {/* Phone Call Button */}
        <a
          href={`tel:${CALL_NUMBER}`}
          className="group relative flex items-center justify-center w-12 h-12 bg-white border border-brand-teal/20 rounded-l-xl shadow-xl hover:bg-brand-teal hover:text-white text-brand-teal transition-all duration-300"
          aria-label={t("callTooltip")}
        >
          <Phone className="w-5 h-5" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-brand-teal-deep text-white text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {t("callTooltip")}
          </span>
        </a>
      </div>

      {/* ===== WhatsApp Encouragement Tag ===== */}
      {showWhatsAppTag && (
        <div className="fixed bottom-7 right-24 lg:bottom-11 lg:right-28 z-90 animate-in fade-in slide-in-from-right-4 duration-500">
          <button
            onClick={() => setShowWhatsAppTag(false)}
            className="relative bg-white border border-brand-teal/10 shadow-clinical rounded-xl px-4 py-2.5 flex items-center gap-2 group hover:shadow-lg transition-shadow"
          >
            <span className="text-xs font-bold text-brand-teal-deep">
              {t("whatsappTag")}
            </span>
            {/* Speech bubble tail pointing right */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-8 border-l-white" />
            <div className="absolute -right-2.25 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-8 border-l-brand-teal/10" style={{ transform: 'translateY(-50%) translateX(1px)' }} />
          </button>
        </div>
      )}

      {/* ===== Slide-out Form Overlay ===== */}
      {isFormOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-95 animate-in fade-in duration-300"
            onClick={() => setIsFormOpen(false)}
          />

          {/* Form Panel */}
          <div className="fixed inset-y-0 right-0 w-full sm:w-120 md:w-135 bg-brand-bg z-100 shadow-2xl animate-in slide-in-from-right duration-500 flex flex-col">
            {/* Panel Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-teal/10 bg-white shrink-0">
              <h2 className="text-xl font-bold text-brand-teal-deep flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-brand-teal" />
                </div>
                {t("formTitle")}
              </h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="w-10 h-10 rounded-xl bg-brand-bg hover:bg-red-50 flex items-center justify-center transition-colors group"
                aria-label="Close form"
              >
                <X className="w-5 h-5 text-brand-teal-deep/40 group-hover:text-red-500 transition-colors" />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <LeadForm />
            </div>
          </div>
        </>
      )}

      {/* CSS for vertical text */}
      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </>
  );
}
