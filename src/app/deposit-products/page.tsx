"use client";

import Faq from "@/components/faq/Faq";
import GenericHero from "@/components/generalHero/GenericHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import GenericSection from "@/components/section/GenericSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";

export default function DepositProduct() {
  const heroData = {
    title: "Save with Confidence. Grow Your Wealth Ethically.",
    text: "Ethical, interest-free deposit solutions to help you save securely and grow with confidence.",
    image: "/pages-hero/deposit-bg.png",
    subtitle: "Deposit Products",
    buttonText: "Get Started",
  };

  const getStarted = () => {
    console.log("Get Started");
  };

  const allSection = [
    {
      title: "Current Account (Qard Hasan)",
      text: "Our Qard Hasan Current Account is ideal for everyday transactions, offering you full access to your funds while ensuring zero interest. Your deposits are securely held and guaranteed by Summit Bank, allowing you to manage your finances with ease and integrity.",
      image: "/pages-section/current-account.png",
      reverse: true,

    },
    {
      title: "Savings Account (Mudarabah Savings)",
      text: "With our Mudarabah Savings Account, your money works ethically. We invest your funds into Shariah-compliant ventures, and you share in the profits—fairly and transparently. It’s savings, re-imagined for peace of mind and purpose.",
      image: "/pages-section/savings-account.png",
      button: false,
      buttontext: "Open Account",
    },
    {
      title: "Fixed/Term Deposit (Mudarabah Term Deposit)",
      text: "Choose our Mudarabah Term Deposit for structured, time-bound investments with competitive profit-sharing returns. It’s a reliable way to grow your wealth over time while aligning with your values.",
      image: "/pages-section/fixed-deposit.png",
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
            button={item?.button}
            buttonText={item?.buttontext}
            key={index}
          />
        ))}
          <Faq  amount={3}/>
       {/* <Testimonials/>*/}
      </DefaultLayout>
    </div>
  );
}
