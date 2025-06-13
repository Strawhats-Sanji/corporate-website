"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenericHero from "@/components/generalHero/GenericHero";
import Framer from "@/components/Framer";
import { slideUp } from "@/lib/animation";

export default function InternshipsPage() {
  return (
    <main className="min-h-screen">
      <Header scrollState={false} />
      <GenericHero
        title="Internship Programs"
        subtitle="Gain valuable experience with our internship opportunities."
        breadcumb={["Home", "Careers", "Internships"]}
        image={"/internship.jpg"}
      />
      <div className="main py-20">
        <Framer animation={slideUp(0.6)}>
          <h2 className="text-3xl font-bold mb-6">Begin Your Career with Summit Bank</h2>
          <p className="text-lg mb-4">
            Summit Bank offers dynamic internship programs designed to provide students and recent graduates with hands-on experience in the financial industry. Our internships are a great way to learn from experts, contribute to meaningful projects, and kickstart your career.
          </p>
          <p className="text-lg mb-4">
            We believe in nurturing new talent and providing a supportive environment for learning and professional development.
          </p>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-secondary-color">Internship Areas</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>FinTech Development</li>
              <li>Marketing & Communications</li>
              <li>Financial Analysis</li>
              <li>Operations & Support</li>
            </ul>
          </div>
          <p className="text-lg mt-6">
            Interested in an internship? Send us your resume/CV and a cover letter detailing your interests and availability.
          </p>
          <p className="mt-4">
            📧{" "}
            <a href="mailto:internships@summitbank.com" className="text-secondary-color hover:underline">
              internships@summitbank.com
            </a>
          </p>
        </Framer>
      </div>
      <Footer />
    </main>
  );
} 