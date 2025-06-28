// "use client";
// import Image from "next/image";
// import React from "react";
// import Button from "./Button";
// import Framer from "./Framer";
// import { slideUp } from "@/lib/animation";


// export default function Banner() {
//   const handleApply = () => {
//     console.log("applied");
//   };
//   return (
//     <div className="relative  max-h-[800px] lg:h-[150vh] h-screen w-full bg-gradient-to-b from-[#574419] to-[#956E26] flex flex-col items-center gap-4 p-10">
//       <Framer animation={slideUp(0.4)}>
//         <h2 className="text-white text-center md:w-[60%] pt-10 z-10 mx-auto">
//           Wherever You Go, We have Got You Covered
//         </h2>
//       </Framer>
//       {/* <Framer animation={slideUp(0.6)}>
//         <Button
//           text=""
//           buttonFn={handleApply}
//           custom={" !bg-white mt-5  relative z-10"}
//         />
//       </Framer> */}
//       {/* <Image
//         className=" absolute bottom-0 object-cover md:object-contain w-full h-full left-0 z-0"
//         src="/card-bg.png"
//         alt="card-bg"
//         width={400}
//         height={400}
//       />
//       <Image
//         className=" absolute bottom-0 object-contain w-full h-full left-0 z-0"
//         src="/bg-summit.png"
//         alt="bg-summit"
//         width={400}
//         height={400}
//       /> */}
//     </div>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const headingWords = [
    "Wherever",
    "You",
    "Go,",
    "We",
    "Have",
    "Got",
    "You",
    "Covered",
  ];

  return (
    <div className="relative h-screen w-full flex flex-col justify-start items-center overflow-hidden pt-20">
      {/* Animated Heading ABOVE the video */}
      <h2 className="text-[#AF1F23] text-center text-3xl md:text-5xl font-bold z-30 flex flex-wrap justify-center gap-2 px-4 md:w-[70%] leading-snug">
        {headingWords.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Background Video (under text now) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bootscreen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg- bg-opacity-40 z-10" />
    </div>
  );
}
