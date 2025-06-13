import FeaturesCard from "@/components/cards/FeaturesCard";
import Faq from "@/components/faq/Faq";
import AccountHero from "@/components/generalHero/AccountHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Partners from "@/components/Partners";
import FeaturesSection from "@/components/section/FeaturesSection";
import GenericSection from "@/components/section/GenericSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import Image from "next/image";
import React from "react";

export default function page() {
  const heroDetails = {
    title: "Summit Lease to Own Finance - SLOF (Ijara)",
    text: "These are structured based on the customer’s risk and return expectations.",
  };

  const allFeatures = [
    {
      title: "Lease with an option to own at the end of the tenure",
      text: "Manage your money anytime, anywhere with our intuitive mobile app and online banking platform.",
    },
    {
      title: "Transparent pricing",
      text: "Enjoy true financial freedom with zero minimum balance requirements and no hidden restrictions.",
    },
    {
      title: "Flexible tenor and payment plan",
      text: "Access your funds easily with our Shari'ah-compliant debit card and personalized cheque book.",
    },
    {
      title: "Insurance cover from reputable Takaful Company",
      text: "Access your funds easily with our Shari'ah-compliant debit card and personalized cheque book.",
    },
    {
      title: "No hidden charges",
      text: "Access your funds easily with our Shari'ah-compliant debit card and personalized cheque book.",
    },
    {
      title: "Available for homes, cars, and equipment",
      text: "Access your funds easily with our Shari'ah-compliant debit card and personalized cheque book.",
    },

      
    
 
  ]
const allSection = [
    {
      title: "Requirements",
      image: "/account/current-1.png",
      list: [
        "Business should be registered and in existence for at least 1 year",
        
        
      ],
      reverse: true,
    },
    {
      title: "Eligibility",
      image: "/account/current-2.png",
      list: [
        "Business should be registered and in existence for at least 1 year",
        "T&Cs apply"
        ,
    
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