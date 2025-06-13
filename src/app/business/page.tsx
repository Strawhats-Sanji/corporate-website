import Faq from "@/components/faq/Faq";
import GeneralHero from "@/components/generalHero/GeneralHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Partners from "@/components/Partners";
import GenericSection from "@/components/section/GenericSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";

export default function Business() {
  const heroData = {
    title: "Smart Solutions to Streamline Your Business",
    text: "Unlock financial insights, streamline operations, and scale confidently with our innovative solutions.",
    image: "/business.png",
  };

  const allSections = [
    {
      title: "Smart Spending for Business Success",
      text: "Simplify expense management with Sharia-compliant business cards. Set limits, track spending, and stay in control—effortlessly.",
      image: "/pages-section/smart-spending.png",
      reverse: true,
      children: [
        "Custom Limits: Empower your team with preset spending caps—no endless approvals. ",
        "Instant Tracking: Capture receipts, spending reasons, and profit-sharing details in-app.",
        "Seamless Control: Monitor and adjust in real time from anywhere in Africa.",
      ],
    },
    {
      title: "Master Payroll with Summit Bank",
      text: "Simplify your company payroll with ease and confidence. Export data from any payroll software in your preferred format, upload it, schedule the payment date, and let us handle the rest.",
      image: "/pages-section/master-payroll.png",
      button: false,
      buttontext: "Open Account",
    },
    {
      title: "Scalable Financing to Boost Your Business",
      text: "Secure working capital financing to fuel your business growth. Enjoy a simple application process with competitive, Sharia-compliant profit rates and flexible repayment terms.",
      image: "/pages-section/scalable-financing.png",
      reverse: true,
      button: false,
      buttontext: "",
      customClass: "p-5 lg:p-10 rounded-2xl bg-[var(--inert-color)]",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <GeneralHero
          title={heroData.title}
          text={heroData.text}
          image={heroData.image}
        />
      {/* <Partners /> */}
        <div className="main ">
          <div className=" text-center space-y-6">
            <h3>Get Paid Faster, Pay Smarter</h3>
            <p className="lg:w-1/2 mx-auto">
              Send and receive payments across the globe in just a few clicks.
              Enjoy fast, fee-transparent transactions that help your business
              thrive.
            </p>
          </div>
        </div>
        {allSections?.map((item, index) => (
          <GenericSection
            key={index}
            title={item?.title}
            text={item?.text}
            image={item?.image}
            button={item?.button}
            buttonText={item?.buttontext}
            reverse={item?.reverse}
            customClass={item?.customClass}
          >
            {item?.children &&
              item?.children?.map((child, index) => (
                <li key={index} className="">
                  {child}
                </li>
              ))}
          </GenericSection>
        ))}
       {/* <Testimonials/>*/}
        <Faq amount={3}/>
      </DefaultLayout>
    </div>
  );
}
