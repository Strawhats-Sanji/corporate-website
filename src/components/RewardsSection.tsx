"use client";
import Image from "next/image";
import React from "react";
import Framer from "./Framer";
import { fadeIn, fadeInLetters, slideUp } from "@/lib/animation";

export default function RewardsSection() {
  const allRewards = [
    {
      title: "Membership Reward Points",
      text: "Summit Customers accumulate points through purchases, subscriptions, or engagement with a Summit to get Offer cashback, travel miles, or partner discounts (e.g., Visa, Mastercard, Amex)..",
      image: "/medal.svg",
    },
    {
      title: "Treat Redemption",
      text: "Points can be redeemed for various treats like cashback, discounts, gift cards, travel, or exclusive services.",
      image: "/wallet.svg",
    },
  ];
  return (
    <div className="w-full pb-10">
      <div className="main grid lg:grid-cols-2 gap-4">
        <Framer animation={fadeIn("up", 0.5)}>
          <Image
            className=" w-full h-full md:h-[300px] lg:h-[520px] object-cover rounded-2xl"
            src={"/summit-card-bg.png"}
            height={500}
            width={500}
            alt="rewards"
          />
        </Framer>
        <div className="grid gap-3">
          {allRewards.map((item, index) => (
            <Framer animation={fadeInLetters(index)} key={index}>
              <div className="border rounded-xl p-5 space-y-4">
                <Image
                  src={item.image}
                  height={50}
                  width={50}
                  alt={item.title}
                />
                <Framer animation={slideUp(0.7)}>
                  <h4>{item.title}</h4>
                </Framer>
                <Framer animation={slideUp(0.8)}>
                  <p className="">{item.text}</p>
                </Framer>
              </div>
            </Framer>
          ))}
        </div>
      </div>
    </div>
  );
}
