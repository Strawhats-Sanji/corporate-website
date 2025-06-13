import Image from "next/image";
import React from "react";

export default function FeaturesCard({
  image,
  title,
  text,
  index
}: {
  text: string;
  title: string;
  image?: any;
  index?: number;
}) {
  return (
    <div className="border flex items-center justify-center rounded-xl h-[300px] w-full">
      <div className="p-10 flex flex-col justify-center items-center text-center space-y-6">
        <Image
          src={
            index ==0 ? "/account/mobile-icon.svg": 
            index ==1 ? "/account/balance-icon.svg" :
            index ==2 ? "/account/debit-card.svg" :
            index ==3 ? "/account/funds-icon.svg" : 
            "/account/mobile-icon.svg"
          }
          height={40}
          width={40}
          alt="mobile"
        />
        <h5 className="text-center">{title}</h5>
        <p className="text-center">
            {text}
        </p>
      </div>
    </div>
  );
}
