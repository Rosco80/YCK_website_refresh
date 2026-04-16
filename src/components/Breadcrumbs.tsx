"use client";

import { Link, usePathname } from "@/i18n/routing";
import { ChevronRight, Home } from "lucide-react";
import { useTranslations } from "next-intl";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs() {
  const pathname = usePathname() || "";
  const t = useTranslations("Navigation");
  const tc = useTranslations("Conditions.list");

  // Filter out empty segments after splitting
  const segments = pathname.split("/").filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [];

  // Always start with Home
  breadcrumbs.push({ label: t("home") || "Home", href: "/" });

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    let label = segment;

    // Localize known segments
    if (segment === "conditions") {
        label = t("conditions");
    } else if (segment === "solutions") {
        label = t("solutions");
    } else if (segment === "formulations") {
        label = t("formulations");
    } else if (index === segments.length - 1) {
        // Last segment - potentially a condition slug
        try {
            const localizedTitle = tc(`${segment}.title`);
            if (localizedTitle && !localizedTitle.includes("Conditions.list")) {
                label = localizedTitle;
            }
        } catch (e) {
            // Use segment as label if translation fails
        }
    }

    breadcrumbs.push({
      label: label.charAt(0).toUpperCase() + label.slice(1).replace(/-/g, " "),
      href: currentPath,
    });
  });

  return (
    <nav className="flex mb-8 overflow-x-auto no-scrollbar whitespace-nowrap" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-white/30 mx-1 md:mx-2" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-sm font-medium text-brand-gold">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {index === 0 && <Home className="w-3 h-3 mr-2" />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
