"use client";

import React, { useEffect, useState } from "react";
import { useCookieConsent } from "./CookieConsentContext";
import { AnimatePresence, motion } from "framer-motion";

const brandPrimary = "#b00600";
const brandAccent = "#c6b17d";

export const CookiePreferencesModal: React.FC = () => {
  const { isPreferencesOpen, closePreferences, consent, savePreferences } = useCookieConsent();
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (consent) {
      setFunctional(consent.categories.functional);
      setAnalytics(consent.categories.analytics);
      setMarketing(consent.categories.marketing);
    }
  }, [consent]);

  return (
    <AnimatePresence>
      {isPreferencesOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ backgroundColor: "#000" }}
            onClick={closePreferences}
          />
          <motion.div
            className="relative z-10 w-full max-w-lg rounded-xl p-6 shadow-2xl"
            style={{ backgroundColor: "#ffffff", border: `1px solid ${brandAccent}` }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold" style={{ color: brandPrimary }}>Cookie preferences</h2>
              <button
                aria-label="Close"
                className="rounded-md px-2 py-1 text-sm"
                style={{ border: `1px solid ${brandAccent}`, color: brandPrimary }}
                onClick={closePreferences}
              >
                Close
              </button>
            </div>
            <p className="mb-4 text-sm" style={{ color: "#333" }}>
              Manage your cookie categories below. Necessary cookies are always on to ensure the site functions correctly.
            </p>
            <div className="space-y-3">
              <CategoryToggle name="Necessary" description="Required for core site functionality" checked readOnly />
              <CategoryToggle
                name="Functional"
                description="Remember choices and improve functionality"
                checked={functional}
                onChange={setFunctional}
              />
              <CategoryToggle
                name="Analytics"
                description="Collect usage statistics to improve the site"
                checked={analytics}
                onChange={setAnalytics}
              />
              <CategoryToggle
                name="Marketing"
                description="Personalize content and measure effectiveness"
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                className="rounded-md px-3 py-2 text-sm"
                style={{ border: `1px solid ${brandAccent}`, color: brandPrimary }}
                onClick={closePreferences}
              >
                Cancel
              </button>
              <button
                className="rounded-md px-3 py-2 text-sm text-white"
                style={{ backgroundColor: brandPrimary, border: `1px solid ${brandPrimary}` }}
                onClick={() => savePreferences({ functional, analytics, marketing })}
              >
                Save preferences
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const CategoryToggle: React.FC<{
  name: string;
  description: string;
  checked?: boolean;
  onChange?: (v: boolean) => void;
  readOnly?: boolean;
}> = ({ name, description, checked, onChange, readOnly }) => {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg p-4" style={{ border: `1px solid ${brandAccent}` }}>
      <div>
        <div className="font-medium" style={{ color: brandPrimary }}>{name}</div>
        <div className="text-xs" style={{ color: "#555" }}>{description}</div>
      </div>
      <label className="inline-flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          readOnly={readOnly}
          aria-readonly={readOnly}
        />
      </label>
    </div>
  );
};

export default CookiePreferencesModal;


