"use client";
import React from "react";
import { motion } from "framer-motion";
import { FramerInterface } from "@/lib/framerInterface";

export default function Framer({
  trigger,
  animation,
  viewport,
  children,
}: FramerInterface) {
  return (
    <div className=" overflow-hidden">
      <motion.section
        key={trigger}
        variants={animation}
        initial="hidden"
        whileInView="show"
        exit={{ opacity: 0 }}
        viewport={{ once: true, amount: viewport }}
      >
        {children}
      </motion.section>
    </div>
  );
}

export function ImageFramer({
  trigger,
  animation,
  viewport,
  children,
}: FramerInterface) {
  return (
    <div className=" overflow-hidden">
      <motion.image
        key={trigger}
        variants={animation}
        initial="hidden"
        whileInView="show"
        exit={{ opacity: 0 }}
        viewport={{ once: true, amount: viewport }}
      >
        {children}
      </motion.image>
    </div>
  );
}