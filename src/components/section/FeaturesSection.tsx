import React from "react";
import FeaturesCard from "../cards/FeaturesCard";

export default function FeaturesSection({ features }: { features: any }) {
  return (
    <div className="main space-y-6 py-10">
        <h3 className=" text-center">Features that Keep You in Control</h3>
      <div className="mx-auto grid lg:grid-cols-2 gap-3 xl:w-[70%]">
        {features?.map((feature: any, index: number) => (
          <FeaturesCard title={feature?.title} text={feature?.text} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
