import SectionHero from "@/components/generalHero/SectionHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import React from "react";

export default function Branches() {
  const offices = [
    {
      state: "FCT ABUJA",
      locationType: "Head Office",
      address: "5 Amal Pepple Street, Off Ameyo Adadevoh Way, Jahi, Abuja",
      phone: "+234 (0) 700 700 0005",
    },
    {
      state: "KANO",
      locationType: "Branch Office",
      address: "France Road Branch - 32-40 Home Plus Plaza, France Road Kano",
      phone: "+234 (0) 700 700 0005",
    },
    {
      state: "KANO",
      locationType: "Branch Office",
      address: "Bank Road Branch - No. 2, Bank Road, Kano State",
      phone: "+234 (0) 700 700 0005",
    },
    {
      state: "LAGOS",
      locationType: "Liaison Office",
      address: "234 Adeola Odeku Street, 3rd Floor, Victoria Island, Lagos.",
      phone: "+234 (0) 700 700 0005",
    },
  ];
  

  return (
    <div>
      <DefaultLayout>
        <SectionHero
          mainClass={"bg-pattern !text-white py-10 rounded-2xl"}
          title="Branch Locations"
          subtitle="Summit Bank"
        />
        <div className="">
          <div className="main pt-20 py-10">
            <div className="w-full grid lg:grid-cols-2 flex-col gap-20">
              {offices.map((branch) => (
                <div
                  key={branch.state}
                  className="w-full space-y-2"
                >
                  <h5 className="!font-semibold ">{branch.locationType}</h5>
                  <h5 className="">{branch.state}</h5>
                  <ul className="">
                  
                      <li
                        className=" cursor-pointer hover:underline hover:text-[var(--secondary-color)] transition-all duration-300"
                      >
                        {branch.address}
                      </li>
                      <a href={`tel:${branch.phone}`}>{branch?.phone}</a>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
