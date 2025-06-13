import Faq from "@/components/faq/Faq";
import SectionHero from "@/components/generalHero/SectionHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { SearchIcon } from "lucide-react";
import React from "react";

export default function Faqs() {
  return (
    <DefaultLayout>
      <div className="">
        <SectionHero
          mainClass={"!pt-[50px]"}
          title="Frequently Asked Questions"
        />
        <div className="main ">
          <div className="flex items-center border h-[70px]  p-2 px-4 rounded-lg gap-4 lg:w-[950px] mx-auto">
            <SearchIcon size={20} color="gray" />
            <input className="w-full h-[70px] outline-0 focus:outline-0" type="search" placeholder="Search" />
          </div>
        </div>
        <Faq title="show" />
      </div>
    </DefaultLayout>
  );
}
