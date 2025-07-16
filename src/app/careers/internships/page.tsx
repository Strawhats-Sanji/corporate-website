
"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenericHero from "@/components/generalHero/GenericHero";

export default function InternshipsPage() {
  return (
    <main className="min-h-screen">
      <Header scrollState={false} />
      <GenericHero
        title="Internship Programs"
        text=""
        subtitle="Gain valuable experience with our internship opportunities."
        image={"/internship.png"}
      />

      <div className="px-4 md:px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Begin Your Career with Summit Bank
        </h2>

        <p className="text-base sm:text-lg mb-4">
          Summit Bank offers dynamic internship programs designed to provide students and recent graduates with hands-on experience in the financial industry. Our internships are a great way to learn from experts, contribute to meaningful projects, and kickstart your career.
        </p>

        <p className="text-base sm:text-lg mb-4">
          We believe in nurturing new talent and providing a supportive environment for learning and professional development.
        </p>

        <div className="space-y-4 mt-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-secondary-color">
            Internship Areas
          </h3>
          <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
            <li>FinTech Development</li>
            <li>Marketing & Communications</li>
            <li>Financial Analysis</li>
            <li>Operations & Support</li>
          </ul>
        </div>

        <p className="text-base sm:text-lg mt-6">
          Interested in an internship? Send us your resume/CV and a cover letter detailing your interests and availability.
        </p>

        <p className="mt-4 text-base sm:text-lg">
          📧{" "}
          <a
            href="mailto:internships@summitbankng.com"
            className="text-secondary-color hover:underline"
          >
            internships@summitbankng.com
          </a>
        </p>
      </div>

      <Footer />
    </main>
  );
}
