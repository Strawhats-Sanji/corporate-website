"use client";

import Faq from "@/components/faq/Faq";
import GenericHero from "@/components/generalHero/GenericHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import GenericSection from "@/components/section/GenericSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";

export default function page() {
  const heroData = {
    title: "Grow Your Wealth Ethically—With Confidence and Clarity",
    text: "Summit Bank’s Treasury & Investment Products offer Shariah-compliant, zero-interest growth through ethical assets and markets",
    image: "/pages-hero/treasury-bg.png",
    subtitle: "Treasury & Investment Products",
    buttonText: "Get Started",
  };

  const getStarted = () => {
    console.log("Get Started");
  };

  const allSection = [
    {
      title: "Islamic Bonds (Sukuk)",
      text: "Participate in the profits of real, tangible assets. Our Sukuk offerings provide a stable and Shariah-compliant alternative to conventional bonds, giving you consistent returns without interest-based risk.",
      image: "/pages-section/sukuk-bg.png",
      reverse: true,
    },
    {
      title: "Islamic Mutual Funds",
      text: "Diversify your portfolio while investing in halal opportunities. Our mutual funds are carefully screened to include only Shariah-compliant stocks and businesses, ensuring your earnings are rooted in ethical practices.",
      image: "/pages-section/islamic-mutual-funds.png",
    },
    {
        title: "Islamic Money Market Investments (Commodity Murabaha)",
        text: "Manage your short-term liquidity in a Shariah-compliant way. With Commodity Murabaha, you can access stable returns through real commodity trades, ideal for businesses and individuals seeking risk-averse options.",
        image: "/pages-section/money-market.png",
        reverse: true,
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
