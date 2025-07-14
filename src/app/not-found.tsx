"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../components/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function notFound() {
  const router = useRouter();

  return (
    <DefaultLayout>
      <div className="h-[80vh] flex items-center flex-col justify-center text-secondary-color">
        <h1>404</h1>
        <p className="pb-5">The Page Doesn't Exist</p>
        <Button
          text="Go Back"
          type="primary"
          buttonFn={() => router.push("/")}
        />
      </div>
    </DefaultLayout>
  );
}
