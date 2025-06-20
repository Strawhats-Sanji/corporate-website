"use client";
import React from "react";
import FeaturesCard from "../cards/FeaturesCard";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";


interface FeatureItem {
  title: string;
  text: string;
  icon?: string; // Optional if you want to add icons later
  link?: string; // Optional: link to open account page
}

interface ProductsSectionProps {
  features: FeatureItem[];
}

export default function ProductsSection({ features }: ProductsSectionProps) {
  return (
    <section className="w-full max-w-7xl px-6 mx-auto mt-12">
      <div className="flex justify-center gap-6 overflow-x-auto pb-4">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl border-t-4 border-[#C6B17D] shadow-md hover:shadow-lg transition-all duration-300 min-w-[340px] max-w-md"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-[#0A1E42] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {item.text}
            </p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#AF1F23] hover:bg-[#b99f5f] rounded-md transition-colors"
              >
                Open Account
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}


// export default function ProductsFeature({ features }: { features: any }) {
//   return (
//     <div className="main space-y-6 py-10 ">
//       <div className="mx-auto grid lg:grid-cols-3 gap-10 xl:w-[80%]">
//         {features?.map((feature: any, index: number) => (
//           <FeaturesCard title={feature?.title} text={feature?.text} key={index} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// }
