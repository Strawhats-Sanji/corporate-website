import { SectionInterface } from "@/lib/sectionInterface";
import React from "react";

export default function Section({
  custom,
  image,
  title,
  text,
  reverse,
  buttonFn,
}: SectionInterface) {
  return (
    <div className="w-full ">
      <div className="main"></div>
    </div>
  );
}
