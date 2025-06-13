"use client";

import Faq from "@/components/faq/Faq";
import GenericHero from "@/components/generalHero/GenericHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import GenericSection from "@/components/section/GenericSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";

export default function Takaful() {
  const heroData = {
    title: "Protect What Matters—The Ethical Way",
    text: "Summit Bank’s Takaful offers ethical, faith-based insurance through mutual assistance, ensuring peace of mind for family and business.",
    image: "/pages-hero/takaful-bg.png",
    subtitle: "Takaful (Islamic Insurance)",
    buttonText: "Get Started",
  };

  const getStarted = () => {
    console.log("Get Started");
  };

  const allSection = [
    {
      title: "General Takaful",
      text: "Protect your health, home, vehicle, and business assets through a cooperative model that spreads risk across all participants. Our General Takaful solutions ensure you're covered in life’s unexpected moments—without relying on interest or speculation.",
      image: "/pages-section/general-takaful.png",
      reverse: true,
    },
    {
      title: "Family Takaful",
      text: "Give your loved ones long-term financial security through a halal alternative to conventional life insurance. With Family Takaful, you contribute to a shared pool that supports others today—while building a savings and protection fund for your family’s future.",
      image: "/pages-section/family-takaful.png",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <GenericHero
          image={heroData.image}
          title={heroData?.title}
          text={heroData?.text}
          subtitle={heroData?.subtitle}
          // buttonText={heroData?.buttonText}
          // buttonFn={getStarted}
        />

        {allSection?.map((item, index) => (
          <GenericSection
            title={item?.title}
            text={item?.text}
            image={item?.image}
            reverse={item?.reverse}
            key={index}
          />
        ))}
          <Faq  amount={3}/>
       {/* <Testimonials/>*/}
      </DefaultLayout>
    </div>
  );
}
