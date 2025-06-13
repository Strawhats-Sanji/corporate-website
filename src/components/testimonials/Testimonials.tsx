"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-fit py-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden space-y-6">
      <h3>What our clients are saying</h3>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Summit Bank’s Smart Business Spending Cards have been a game-changer for us. My team can handle purchases up to their limits without me micromanaging, and the app tracks everything—receipts, reasons, all in one place. We’ve cut expense admin time by 60% compared to our old bank, leaving me free to focus on scaling across West Africa.",
    name: "Adewale Ogunleye",
    image: "/testimonial/1.png",
    title: "Founder of Nile Trading Co",
  },
  {
    quote:
      "Switching to Summit Bank was the best decision for our agribusiness. The spending cards let my field team buy supplies on the spot, and the app’s tracking beats anything LOTUS offers. Plus, their Trade & Working Capital Financing gave us the boost to double our harvest output this year.”",
    name: "Chinedu Okeke",
    image: "/testimonial/2.png",
    title: "Manager at Okeke Farms",
  },
  {
    quote:
      "With Summit Bank’s Smart Business Spending Cards, we’ve streamlined our procurement process significantly. The card limits empower our sales team to make immediate purchases, and the integrated app allows us to analyze spending patterns for better budgeting. This shift has improved our turnaround time for projects by over 50%.",
    name: "Fatima Juma",
    image: "/testimonial/1.png",
    title: "CEO of Juma Construction",
  },
];
