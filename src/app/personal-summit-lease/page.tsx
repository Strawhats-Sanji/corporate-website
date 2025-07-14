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
    title: "Summit Lease to Own Finance - SLOF (Ijara)",
    text: "These are Flexible, Shariah-Compliant Lease Financing for Long-Term Asset Ownership",
  };

  const allFeatures = [
    {
      title: "Available for homes, cars, and equipment",
      text: "Finance is tied to a tangible asset such as vehicles, equipment, or property.",
    },
    {
      title: "Lease with an option to own at the end of the tenure",
      text: "Full ownership is transferred to the client at the end of the lease term.",
    },
    {
      title: "Transparent pricing",
      text: "Detailed Ijara contract outlining rights, responsibilities, and costs.",
    },
    {
      title: "Flexible tenor and payment plan",
      text: "Tenors typically range from 12 to 60 months. Customizable monthly or quarterly payment schedules.",
    },
    {
      title: "Insurance cover from reputable Takaful Company",
      text: "Coverage is provided via approved Takaful operators in line with Islamic financial principles.",
    },
    {
      title: "No hidden charges",
      text: "No hidden fees or interest-based clauses.",
    },
  ]
const allSection = [
    {
      title: "Requirements",
      image: "/account/current-1.png",
      list: [
        "Completed financing application form",
        "Valid means of identification",
        "Proof of stable income",
        "Proforma invoice for the leased asset",
        "Collateral/security deposit (case-dependent)",
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