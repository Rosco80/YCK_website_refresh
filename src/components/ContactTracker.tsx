"use client";

import { useEffect } from "react";

export function ContactTracker() {
  useEffect(() => {
    // Function to get UTM parameters from URL safely
    const getUTMParams = () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        return {
          utm_campaign: searchParams.get("utm_campaign") || "",
          utm_source: searchParams.get("utm_source") || "",
          utm_medium: searchParams.get("utm_medium") || "",
        };
      } catch (e) {
        return { utm_campaign: "", utm_source: "", utm_medium: "" };
      }
    };

    const handleLinkClick = (e: MouseEvent) => {
      // Traverse up to find if an 'a' tag was clicked
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== "A") {
        target = target.parentElement;
      }

      if (!target) return;

      const href = (target as HTMLAnchorElement).href;
      if (!href) return;

      const utmParams = getUTMParams();
      const dataLayer = (window as any).dataLayer || [];

      // Check if it's a WhatsApp link
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        dataLayer.push({
          event: "whatsapp_click",
          ...utmParams,
        });
      } 
      // Check if it's a Call link
      else if (href.startsWith("tel:")) {
        dataLayer.push({
          event: "call_click",
          ...utmParams,
        });
      }
    };

    // Attach listener globally
    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return null; // This component doesn't render anything
}
