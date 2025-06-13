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
    title: "Summit Cost-Plus - SCP (Murabaha)",
    text: "These are structured based on the customer’s risk and return expectations.",
  };

  const allFeatures = [
    {
      title: "Competitive financing profit rate",
      text: "Manage your money anytime, anywhere with our intuitive mobile app and online banking platform.",
    },
    {
      title: "Flexible tenor and payment plan",
      text: "Enjoy true financial freedom with zero minimum balance requirements and no hidden restrictions.",
    },
    {
      title:
        "Can be used for raw materials, goods and inventory finance, working capital funding, import and expert, letter of credit and guarantee services",
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
  ];
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
        "NGOs and Non-profit Organizations",
        "Government Ministries, Departments and Agencies",
        "T&Cs apply"
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
        <Faq amount={3} />
       {/*  <Testimonials /> */} 
      </DefaultLayout>
    </div>
  );
}
