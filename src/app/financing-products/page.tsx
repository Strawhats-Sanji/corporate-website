"use client";

import Faq from "@/components/faq/Faq";
import GenericHero from "@/components/generalHero/GenericHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import GenericSection from "@/components/section/GenericSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";

export default function FinancingProducts() {
  const heroData = {
    title: "Empower Your Ambitions—The Shariah Way",
    text: "Empowering your goals through ethical, Shariah-compliant financing tailored for individuals, businesses, and communities.",
    image: "/pages-hero/financing-bg.png",
    subtitle: "Financing Products",
    buttonText: "Get Started",
  };

  const getStarted = () => {
    console.log("Get Started");
  };

  const allSection = [
    {
      title: "Cost-Plus Financing (Murabaha)",
      text: "Need to purchase equipment, vehicles, or inventory? With Murabaha, we buy the asset and sell it to you at a pre-agreed profit margin; transparent, ethical, and interest-free.",
      image: "/pages-section/murabaha.png",
      reverse: true,
    },
    {
      title: "Leasing (Ijara)",
      text: "Access what you need now. Summit Bank purchases the asset and leases it to you for a set term. You enjoy full use, with the option to own it at the end.",
      image: "/pages-section/leasing.png",
    },
    {
      title: "Partnership Financing (Musharakah) ",
      text: "Enter a true partnership. We contribute capital together, share profits as agreed, and shoulder losses based on our input—aligned interests, shared growth.",
      image: "/pages-section/partnership-financing.png",
      reverse: true,
    },
    {
      title: "Profit-Sharing Investment (Mudarabah)",
      text: "Have the idea, but need the funding? You manage, We invest. Profits are shared per our agreement, while you retain operational control.",
      image: "/pages-section/profit-sharing.png",
    },
    {
      title: "Manufacturing Financing (Istisna)",
      text: "For builders, manufacturers, and creators; Summit finances your projects with flexible timelines and structured payments as your goods take shape.",
      image: "/pages-section/manufacturing-financing.png",
      reverse: true,
    },
    {
      title: "Forward Sale Financing (Salam)",
      text: "Ideal for agricultural producers. Receive funds now for products to be delivered later. Guaranteed support when you need it most.",
      image: "/pages-section/sale-financing.png",
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
