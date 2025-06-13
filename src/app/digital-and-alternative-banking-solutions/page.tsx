"use client";

import Faq from "@/components/faq/Faq";
import GenericHero from "@/components/generalHero/GenericHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import GenericSection from "@/components/section/GenericSection";
// import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";


export default function DigitalAndAlternativeBanking() {
  const heroData = {
    title: "Ethical Banking—Now Smarter, Simpler, and Digital",
    text: "Summit Bank’s Digital Banking blends Shariah-compliant tools with innovation for easy, ethical financial management.",
    image: "/pages-hero/ethical-banking-bg.png",
    subtitle: "Digital & Alternative Banking Solutions",
    // buttonText: "Get Started",
  };

  // const getStarted = () => {
  //   console.log("Get Started");
  // };

  const allSection = [
    {
      title: "Islamic FinTech Solutions",
      text: "Discover next-generation financial tools rooted in Islamic values. From Shariah-compliant digital banking platforms to ethical crowdfunding and blockchain-based transparency, our FinTech services offer smart, scalable, and fully halal alternatives to conventional finance.",
      image: "/pages-section/fintech-solutions.png",
      reverse: true,
    },
    {
      title: "Islamic Credit Cards (Ujrah-Based)",
      text: "Enjoy the convenience of a credit card, without the burden of interest. Our Ujrah-based credit cards operate on a transparent, fee-based model that keeps you financially empowered and aligned with Islamic values.",
      image: "/pages-section/credit-cards.png",
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
