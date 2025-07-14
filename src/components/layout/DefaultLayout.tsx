"use client";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ArrowUp } from "lucide-react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerState, setHeaderState] = useState(false);

  const gotoTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 50) {
          setHeaderState(true);
        } else {
          setHeaderState(false);
        }
      }
    };
    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();
    console.log(headerState);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerState]);

  return (
    <div>
      <Header scrollState={headerState} />
      {children}
      <div
        className={` fixed bottom-10 right-5 lg:right-10 bg-[var(--secondary-color)] h-[40px] w-[40px] rounded-lg flex items-center justify-center transition-all duration-300 text-white cursor-pointer hover:scale-105 z-[2000] ${
          headerState ? " visible" : "hidden"
        }`}
        onClick={gotoTop}
      >
       <ArrowUp size={20}/>
      </div>
      <Footer />
    </div>
  );
}
