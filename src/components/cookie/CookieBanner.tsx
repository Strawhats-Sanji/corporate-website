"use client";

import React from "react";
import { useCookieConsent } from "./CookieConsentContext";
import { AnimatePresence, motion } from "framer-motion";

const brandPrimary = "#b00600"; // deep red
const brandAccent = "#c6b17d"; // gold

export const CookieBanner: React.FC = () => {
  const { isBannerVisible, acceptAll, rejectAll, openPreferences } = useCookieConsent();

  return (
    <AnimatePresence>
      {isBannerVisible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-50"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div
            className="mx-auto max-w-5xl rounded-t-xl border p-4 shadow-2xl"
            style={{ backgroundColor: "#ffffff", borderColor: brandAccent }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm" style={{ color: "#333" }}>
                We use cookies to enhance your experience. Some are necessary, while others are for functional,
                analytics, and marketing purposes. You can accept all, reject non-essential, or set preferences.
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  className="rounded-md px-3 py-2 text-sm"
                  style={{ border: `1px solid ${brandAccent}`, color: brandPrimary }}
                  onClick={openPreferences}
                >
                  Preferences
                </button>
                <button
                  className="rounded-md px-3 py-2 text-sm"
                  style={{ border: `1px solid ${brandAccent}`, color: brandPrimary }}
                  onClick={rejectAll}
                >
                  Reject all
                </button>
                <button
                  className="rounded-md px-3 py-2 text-sm text-white"
                  style={{ backgroundColor: brandPrimary, border: `1px solid ${brandPrimary}` }}
                  onClick={acceptAll}
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;


