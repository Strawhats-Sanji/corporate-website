"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getCookie, setCookie } from "@/lib/cookies";

export type ConsentCategories = {
  necessary: boolean; // always true and locked
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  version: number;
  givenAt: number; // epoch ms
  categories: ConsentCategories;
};

const CONSENT_COOKIE_NAME = "cookie_consent";
const CONSENT_VERSION = 1; // bump when categories/purposes change

type ConsentContextType = {
  consent: ConsentState | null;
  isBannerVisible: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (categories: Omit<ConsentCategories, "necessary">) => void;
  isCategoryEnabled: (category: keyof ConsentCategories) => boolean;
};

const CookieConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function useCookieConsent(): ConsentContextType {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}

function parseConsent(raw: string | undefined): ConsentState | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ConsentState;
    if (typeof parsed?.version !== "number") return null;
    return parsed;
  } catch {
    return null;
  }
}

function stringifyConsent(consent: ConsentState): string {
  return JSON.stringify(consent);
}

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  // Initialize from cookie on mount
  useEffect(() => {
    const raw = getCookie(CONSENT_COOKIE_NAME);
    const existing = parseConsent(raw);
    if (!existing || existing.version !== CONSENT_VERSION) {
      setConsent(null);
      return;
    }
    setConsent(existing);
  }, []);

  const isBannerVisible = useMemo(() => consent === null, [consent]);

  const writeConsent = useCallback((state: ConsentState) => {
    setConsent(state);
    setCookie(CONSENT_COOKIE_NAME, stringifyConsent(state), {
      path: "/",
      maxAgeDays: 180, // 6 months
      sameSite: "Lax",
      secure: true,
    });
  }, []);

  const acceptAll = useCallback(() => {
    writeConsent({
      version: CONSENT_VERSION,
      givenAt: Date.now(),
      categories: { necessary: true, functional: true, analytics: true, marketing: true },
    });
  }, [writeConsent]);

  const rejectAll = useCallback(() => {
    writeConsent({
      version: CONSENT_VERSION,
      givenAt: Date.now(),
      categories: { necessary: true, functional: false, analytics: false, marketing: false },
    });
  }, [writeConsent]);

  const savePreferences = useCallback(
    (categories: Omit<ConsentCategories, "necessary">) => {
      writeConsent({
        version: CONSENT_VERSION,
        givenAt: Date.now(),
        categories: { necessary: true, ...categories },
      });
      setIsPreferencesOpen(false);
    },
    [writeConsent]
  );

  const openPreferences = useCallback(() => setIsPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), []);

  const value = useMemo<ConsentContextType>(
    () => ({
      consent,
      isBannerVisible,
      openPreferences,
      closePreferences,
      isPreferencesOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      isCategoryEnabled: (category) => {
        const categories = consent?.categories;
        if (!categories) return category === "necessary"; // only necessary when not consented
        return Boolean(categories[category]);
      },
    }),
    [consent, isBannerVisible, openPreferences, closePreferences, isPreferencesOpen, acceptAll, rejectAll, savePreferences]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
};


