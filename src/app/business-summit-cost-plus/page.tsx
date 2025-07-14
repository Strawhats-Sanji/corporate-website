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
import { text } from "stream/consumers";

export default function page() {
  const heroDetails = {
    title: "Summit Cost-Plus - SCP (Murabaha)",
    text: "These are structured to enable customers acquire assets through transparent, fixed-profit sales.",
  };

  const allFeatures = [
    {
      title: "Shariah-compliant purchase financing",
      text: "Summit purchases the asset on your behalf and resells it to you at a pre-agreed profit margin.",
    },
    {
      title: "Fixed and predictable payments",
      text: "Clear, fixed monthly or quarterly payment plans. No surprise charges, your payment structure is known from day one.",
    },
    {
      title: "Inventory, trade, capital, guarantees.",
      text: "Applicable for goods such as equipment, inventory, vehicles, or other approved tangible assets.",
    },
    {
      title: "Insurance cover from reputable Takaful Company",
      text: "Access to Islamic insurance (Takaful) to protect the financed asset, ensuring added peace of mind.",
    },
    {
      title: "No hidden charges",
      text: "All fees, costs, and profit margins are disclosed in advance.",
    },
        
  ]
const allSection = [
    {
      title: "Requirements",
      image: "/account/current-1.png",
      list: [
        "Completed application form",
        "Proof of business existence and registration",
        "Proforma invoice for the asset/goods to be financed",
        "Collateral cover on a need basis ",
        
      ],
      reverse: true,
    },
    {
      title: "Eligibility",
      image: "/account/current-2.png",
      list: [
        "SMEs and Registered businesses",
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