"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

// Update this with your Formspree ID
const FORMSPREE_ID = "xdaywjpy"; 

export function LeadForm({ className }: { className?: string }) {
  const t = useTranslations("LandingPage.form");
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Add submission date in DD-MM-YYYY format
    const now = new Date();
    data["Submission Date"] = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch (err) {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className={cn("bg-white p-8 rounded-2xl shadow-clinical text-center py-20", className)}>
        <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-teal-deep mb-2">{t("success")}</h3>
      </div>
    );
  }

  return (
    <div className={cn("bg-white p-8 rounded-2xl shadow-clinical border border-brand-teal/5", className)}>
      <h3 className="text-2xl font-bold text-brand-teal-deep mb-2">{t("title")}</h3>
      <p className="text-brand-teal-deep/60 text-sm mb-8">{t("subtitle")}</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {/* Anti-spam honeypot */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        
        {/* Internal Tagging */}
        <input type="hidden" name="Lead Source" value="Google Ads" />

        {/* Contact Details */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-teal/40 mb-4 border-b border-brand-teal/5 pb-2">Contact Details</h4>
        </div>

        <div>
          <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep/40 mb-1.5 ml-1">
            {t("name")}
          </label>
          <input
            type="text"
            id="name"
            name="Full Name"
            required
            placeholder="Michael Chen"
            className="w-full bg-brand-bg/30 border border-brand-teal/10 rounded-xl px-4 py-3.5 text-brand-teal-deep focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep/40 mb-1.5 ml-1">
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            required
            placeholder="michaelykchen627@gmail.com"
            className="w-full bg-brand-bg/30 border border-brand-teal/10 rounded-xl px-4 py-3.5 text-brand-teal-deep focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep/40 mb-1.5 ml-1">
            {t("phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="Phone"
            required
            placeholder="+60..."
            className="w-full bg-brand-bg/30 border border-brand-teal/10 rounded-xl px-4 py-3.5 text-brand-teal-deep focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="contact_method" className="block text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep/40 mb-1.5 ml-1">
            {t("contactMethod.label")}
          </label>
          <select
            id="contact_method"
            name="Contact Method"
            required
            className="w-full bg-brand-bg/30 border border-brand-teal/10 rounded-xl px-4 py-3.5 text-brand-teal-deep focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm appearance-none"
          >
            <option value="whatsapp">{t("contactMethod.whatsapp")}</option>
            <option value="Email">{t("contactMethod.email")}</option>
            <option value="call">{t("contactMethod.call")}</option>
          </select>
        </div>

        {/* Appointment Details */}
        <div className="md:col-span-2 mt-4">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-teal/40 mb-4 border-b border-brand-teal/5 pb-2">Appointment Details</h4>
        </div>

        <div>
          <label htmlFor="preferred_date" className="block text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep/40 mb-1.5 ml-1">
            {t("preferredDate")}
          </label>
          <input
            type="text"
            id="preferred_date"
            name="Preferred Date"
            required
            placeholder="DD/MM/YYYY"
            className="w-full bg-brand-bg/30 border border-brand-teal/10 rounded-xl px-4 py-3.5 text-brand-teal-deep focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="preferred_time" className="block text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep/40 mb-1.5 ml-1">
            {t("preferredTime.label")}
          </label>
          <select
            id="preferred_time"
            name="Preferred Time"
            required
            className="w-full bg-brand-bg/30 border border-brand-teal/10 rounded-xl px-4 py-3.5 text-brand-teal-deep focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm appearance-none"
          >
            <option value="morning_session_(9.00_am-12.00_pm)">{t("preferredTime.morning")}</option>
            <option value="early_afternoon_session_(12.00-3.00_pm)">{t("preferredTime.afternoon")}</option>
            <option value="night_session_(6.00-9.00_pm)">{t("preferredTime.night")}</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="branch" className="block text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep/40 mb-1.5 ml-1">
            {t("branch.label")}
          </label>
          <select
            id="branch"
            name="Branch"
            required
            className="w-full bg-brand-bg/30 border border-brand-teal/10 rounded-xl px-4 py-3.5 text-brand-teal-deep focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm appearance-none"
          >
            <option value="yck_hq_old_klang_road">{t("branch.okr")}</option>
            <option value="yck_ampang">{t("branch.ampang")}</option>
            <option value="yck_subang_jaya">{t("branch.subang")}</option>
            <option value="yck_shah_alam">{t("branch.shahalam")}</option>
          </select>
        </div>

        {/* Additional Info */}
        <div className="md:col-span-2 mt-4">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-teal/40 mb-4 border-b border-brand-teal/5 pb-2">Additional Info</h4>
        </div>

        <div>
          <label htmlFor="physical_issue" className="block text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep/40 mb-1.5 ml-1">
            {t("physicalIssue")}
          </label>
          <input
            type="text"
            id="physical_issue"
            name="Physical Issue"
            required
            placeholder="Shoulder Ache"
            className="w-full bg-brand-bg/30 border border-brand-teal/10 rounded-xl px-4 py-3.5 text-brand-teal-deep focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="pain_duration" className="block text-[10px] font-bold uppercase tracking-wider text-brand-teal-deep/40 mb-1.5 ml-1">
            {t("painDuration")}
          </label>
          <input
            type="text"
            id="pain_duration"
            name="Pain Duration"
            required
            placeholder="3 months"
            className="w-full bg-brand-bg/30 border border-brand-teal/10 rounded-xl px-4 py-3.5 text-brand-teal-deep focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm"
          />
        </div>

        <div className="md:col-span-2 mt-6">
          <Button
            type="submit"
            disabled={state === "submitting"}
            className="w-full py-7 text-label bg-brand-gold text-brand-teal-deep hover:bg-brand-gold-dark rounded-xl shadow-clinical-hover transition-all"
          >
            {state === "submitting" ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin h-4 w-4" />
                {t("submitting")}
              </div>
            ) : (
              t("submit")
            )}
          </Button>

          {state === "error" && (
            <p className="text-red-500 text-[10px] font-bold uppercase text-center mt-4 tracking-widest">{t("error")}</p>
          )}
        </div>
      </form>
    </div>
  );
}
