"use client";
import Button from "@/components/Button";
import SectionHero from "@/components/generalHero/SectionHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function page() {
    const submit = () => {
        console.log("submitted")
    }
  return (
    <DefaultLayout>
      <div>
        <SectionHero
          mainClass={"!pt-[50px]"}
          title="Enquiries & Complaints"
          text="Can’t find what you are looking for? Please contact us, and we will get back to you as soon as possible."
        />
        <div className="main lg:!w-[60%] space-y-6 py-10 pb-20">
            <div className="">
                <label>Full Name</label>
                <Input placeholder="Enter your full name" />
            </div>
            <div className="">
                <label>Email Address</label>
                <Input placeholder="Enter your email" />
            </div>
            <div className="">
                <label>Message</label>
                <Textarea className="h-[200px] resize-none" placeholder="Type in your message here" />
            </div>
            <Button custom={'!w-full'} type="primary" text="Submit" buttonFn={submit}/>
        </div>
      </div>
    </DefaultLayout>
  );
}
