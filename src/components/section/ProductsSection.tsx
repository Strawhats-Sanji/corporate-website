import React from "react";
import FeaturesCard from "../cards/FeaturesCard";

export default function ProductsFeature({ features }: { features: any }) {
  return (
    <div className="main space-y-6 py-10 ">
      <div className="mx-auto grid lg:grid-cols-3 gap-10 xl:w-[80%]">
        {features?.map((feature: any, index: number) => (
          <FeaturesCard title={feature?.title} text={feature?.text} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
