"use client";

import { createContext, useContext } from 'react';

const SiteSettingsContext = createContext<any>(null);

export function SiteSettingsProvider({ children, settings }: { children: React.ReactNode, settings: any }) {
  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
