"use client";

import Faq from "@/components/faq/Faq";
import GenericHero from "@/components/generalHero/GenericHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import GenericSection from "@/components/section/GenericSection";
// import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";


export default function DigitalAndAlternativeBanking() {
  const heroData = {
    title: "Ethical Banking - Now Smarter, Simpler, and Digital",
    text: "Summit Bank’s Digital Banking integrates ethical financial principles with advanced technology to deliver secure, transparent, and efficient financial management solutions.",
    image: "/pages-hero/ethical-banking-bg.png",
    subtitle: "Digital & Alternative Banking Solutions",
    // buttonText: "Get Started",
  };

  // const getStarted = () => {
  //   console.log("Get Started");
  // };

  const allSection = [
    {
      title: "Cutting-Edge FinTech Solutions",
      text: "Discover next-generation financial tools that powers our digital banking platforms. Providing ethical crowdfunding and blockchain transactions based on transparency. Our FinTech services offer smart, scalable, stable and secure environment to support your needs.",
      image: "/pages-section/fintech-solution.png",
      reverse: true,
    },
    {
      title: "Cards ",
      text: "Enjoy the convenience of using different range of cards. Our cards are secure, efficient and reliable.",
      image: "/pages-section/credit-cards.png",
    },
    {
      title: "POS Terminals (Point of Sale) ",
      text: "Our secure and customised point of sale terminals are designed to support merchants, agents and individuals to seamlessly perform instant transactions. ",
      image: "/pages-section/pos-digital.png",
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
