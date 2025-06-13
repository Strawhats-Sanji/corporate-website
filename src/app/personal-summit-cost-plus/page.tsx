import FeaturesCard from "@/components/cards/FeaturesCard";
import Faq from "@/components/faq/Faq";
import AccountHero from "@/components/generalHero/AccountHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Partners from "@/components/Partners";
import FeaturesSection from "@/components/section/FeaturesSection";
import GenericSection from "@/components/section/GenericSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import Image from "next/image";
import { title } from "process";
import React from "react";

export default function page() {
  const heroDetails = {
    title: "Summit Cost-Plus - SCP (Murabaha)",
    text: "Bank freely with a Shari'ah-compliant current account that gives you control, convenience, and peace of mind.",
  };

  const allFeatures = [
    {
      title: "Online & Mobile Bankincost-plus mark-up financing",
      text: "Manage your money anytime, anywhere with our intuitive mobile app and online banking platform.",
    },
    {
      title: "Structured payment plans",
      text: "Enjoy true financial freedom with zero minimum balance requirements and no hidden restrictions.",
    },
    {
      title: "Available for vehicles, household goods and consumables",
      text: "Access your funds easily with our Shari'ah-compliant debit card and personalized cheque book.",
    },
    {
      title: "No hidden charges",
      text: "Make quick, reliable and secure transactions with comprehensive payment solutions.",
    },
    {
      title: "Shariah-compliant documentation",
      text: "Make quick, reliable and secure transactions with comprehensive payment solutions.",
    },
  ];

  const allSection = [
    {
      title: "What You'll Need",
      image: "/account/current-1.png",
      list: [
        "Completed financing application form",
        "Proof of steady income (salary slips or business financials)",
        "Valid identification",
        "Proforma invoice for the asset to be financed",
        "Collateral may be required for high-value financing",
      ],
      reverse: true,
    },
    {
      title: "Eligibility",
      image: "/account/current-2.png",
      list: [
        "Salaried employees, Business owners, and Professionals",
        "T&Cs apply",
        
      ],
    },
  ];

  return (
    <div className="">
      <DefaultLayout>
        <AccountHero text={heroDetails?.text} title={heroDetails?.title} />
        {/* <Partners /> */}
        <FeaturesSection features={allFeatures} />
        {allSection?.map((res, index) => (
          <GenericSection
            title={res?.title}
            image={res?.image}
            reverse={res?.reverse}
            key={index}
          >
            <div className="space-y-3">
              {res?.list.map((item, index) => (
                <div className="flex gap-4 items-center" key={index}>
                  <Image
                    src={"/account/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <p className="text-[var(--text-color)]">{item}</p>
                </div>
              ))}
            </div>
          </GenericSection>
        ))}
         <Faq  amount={3}/>
       {/*  <Testimonials /> */} 
      </DefaultLayout>
    </div>
  );
}