import { ButtonInterface } from "@/lib/buttonInterface";
import React from "react";

export default function Button({
  text,
  loading,
  buttonFn,
  custom,
  type,
  children
}: ButtonInterface) {
  return (
    <button
      className={` h-[45px] cursor-pointer hover:shadow-xl flex items-center gap-2 justify-center w-fit text-center px-6 transition-all duration-300 hover:px-8 py-2 border rounded-lg ${
        type == "primary"
          ? "bg-[var(--secondary-color)] border-[var(--secondary-color)] text-white"
          : type == "secondary"
          ? "bg-[var(--primary-color)] border-[var(--primary-color)] text-white"
          : type == "outline"
          ? "bg-[var(--primary-color)] text-[var(--secondary-color)] border-white "
          : ""
      } 
      disabled:bg-gray-400 disabled:text-gray-500 
      ${custom}
      `}
      disabled={loading}
      onClick={buttonFn}
    >
      {text}
      {children}
    </button>
  );
}
