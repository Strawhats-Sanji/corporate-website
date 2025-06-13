import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenericHero from "@/components/generalHero/GenericHero";
import Framer from "@/components/Framer";
import { slideUp } from "@/lib/animation";

export default function CareerOpportunitiesPage() {
  return (
    <main className="min-h-screen">
      <Header scrollState={false} />
      <GenericHero
        text="Career Opportunities"
        title="Career Opportunities"
        subtitle="Explore exciting career paths at Summit Bank."
        image={"/careers.avif"}
      />

      <div className="main py-20 max-w-5xl mx-auto px-4">
        <Framer animation={slideUp(0.6)}>
          
          <h2 className="text-4xl font-bold mb-6 text-primary">Where Innovation Meets Integrity</h2>

          <p className="text-lg mb-4 leading-relaxed">
            At our non-interest digital bank, we are building the future of ethical finance, combining cutting-edge technology with value-driven banking.
            We offer dynamic career opportunities for individuals passionate about making a meaningful impact while upholding transparency, fairness, and inclusion.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            Whether you are a tech enthusiast, finance expert, or customer champion, you will find a place to grow, innovate, and lead with purpose.
          </p>

          <p className="text-lg mb-6 leading-relaxed">
            Explore our current openings and discover how you can shape the future of finance with us.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="text-2xl font-semibold text-secondary-color">Why Join Us?</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Thrive in a fast-paced digital environment</li>
              <li>Join a mission to deliver ethical, interest-free banking</li>
              <li>Collaborate with talented, purpose-driven teams</li>
              <li>Access continuous learning & leadership development</li>
              <li>Contribute to sustainable, inclusive financial growth</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            We are looking for bold thinkers and ethical leaders, ready to build the future with passion and purpose.
          </p>

          <p className="mt-6 text-lg">
            📧{" "}
            <a href="mailto:careers@summitbank.com" className="text-secondary-color underline hover:text-secondary-dark">
              careers@summitbank.com
            </a>
          </p>
        </Framer>
      </div>

      <Footer />
    </main>
  );
}
