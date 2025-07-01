"use client";
import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <DefaultLayout>
        <div className="main py-20 !pt-[160px]">
          <div className="max-w-8xl mx-auto space-y-6 text-justify leading-relaxed text-base text-gray-800">

            {/* Page Title */}
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl base:text-2xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Introduction & Scope</h4>
              <p>
                This Privacy Policy complies with the Nigeria Data Protection Act (NDPA) and the EU General Data Protection Regulation (GDPR), where applicable. It outlines how Summit Bank Ltd (“Summit Bank”) collects, processes, protects, and manages personal data from customers, employees, vendors, visitors, and third parties. We regularly review this policy to ensure it reflects best practices and transparency.
              </p>
              <p>
                This document details the types of personal data we collect, why we collect it, how we process it, who we may share it with, and the rights of data subjects under relevant data protection laws.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Roles & Responsibilities</h4>
              <p>The <strong>Data Protection Officer (DPO)</strong> at Summit Bank oversees policy implementation and ensures compliance with data protection laws. The DPO is responsible for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ensuring the correctness and currency of this document.</li>
                <li>Managing and reporting data breaches.</li>
                <li>Conducting periodic training for employees handling personal data.</li>
                <li>Monitoring and enforcing compliance with NDPA and GDPR provisions.</li>
                <li>Coordinating data protection impact assessments (DPIAs).</li>
              </ul>
              <p>Employees handling personal data must follow this policy and ensure compliance with data protection guidelines.</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Policy Statement</h4>
              <p>
                Summit Bank aims to maintain the confidentiality, integrity, and security of personal data. The bank ensures transparency in the collection, use, and storage of data while informing data subjects of their rights and choices under the NDPA.
              </p>
            </div>

            {/* Indented: About Summit Bank */}
            <div className="space-y-2 pl-4 ml-2">
              <h4 className="text-base font-semibold">About Summit Bank PLC</h4>
              <p>
                Summit Bank PLC is a licensed commercial financial institution regulated by the Central Bank of Nigeria (CBN), operating within Nigeria. Renowned for its innovation and commitment to excellence, the Bank employs advanced technology in its banking services while adhering to both national and international data protection standards.
              </p>
            </div>

            {/* Indented: Types of Data */}
            <div className="space-y-2 pl-4 ml-2">
              <h4 className="text-base font-semibold">Types of Personal Data We Collect</h4>
              <p> 
                Summit Bank collects various categories of personal data, depending on the processing requirement, as detailed below:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-left text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2 font-semibold text-gray-700">Data Type</th>
                      <th className="border px-4 py-2 font-semibold text-gray-700">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr><td className="border px-4 py-2 font-medium">Identity Data</td><td className="border px-4 py-2">Full name, marital status, biometric data, National Identification Number NIN, passport details, date of birth, gender, employment history, citezenship.</td></tr>
                    <tr><td className="border px-4 py-2 font-medium">Contact Data</td><td className="border px-4 py-2">Home and business addresses, email addresses, phone numbers, and communication records.</td></tr>
                    <tr><td className="border px-4 py-2 font-medium">Financial Data</td><td className="border px-4 py-2">Bank account details, Bank Verification Number (BVN), income, financial status, credit history, debit/credit card details.</td></tr>
                    <tr><td className="border px-4 py-2 font-medium">Transaction Data</td><td className="border px-4 py-2">Records of transactions, including payment history and geolocation data related to banking activities.</td></tr>
                    <tr><td className="border px-4 py-2 font-medium">Technical Data</td><td className="border px-4 py-2">IP addresses, device details, login credentials, browser types, geolocation data, and user agent information.</td></tr>
                    <tr><td className="border px-4 py-2 font-medium">Profile Data</td><td className="border px-4 py-2">Online banking usernames, passwords, security questions, and preference settings.</td></tr>
                    <tr><td className="border px-4 py-2 font-medium">Job Application Data</td><td className="border px-4 py-2">Resumes, contact details, and other relevant recruitment information.</td></tr>
                    <tr><td className="border px-4 py-2 font-medium">Usage Data</td><td className="border px-4 py-2">Information on customer interactions with our website, mobile applications, and services.</td></tr>
                    <tr><td className="border px-4 py-2 font-medium">Marketing Data</td><td className="border px-4 py-2">Preferences related to marketing and consent provided for promotional activities.</td></tr>
                    <tr><td className="border px-4 py-2 font-medium">Other Data</td><td className="border px-4 py-2">CCTV footage, recorded customer service calls, and digital interactions with bank representatives.</td></tr>
                  </tbody>
                </table>
              </div>
              <p>For biometric and facial recognition data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Collection:</strong> Gathered via secure channels (e.g., ATMs, banking apps) with user consent.</li>
                <li><strong>Usage:</strong> Strictly for identity verification, fraud prevention, and service personalization.</li>
                <li><strong>Disclosure:</strong> Shared only with regulatory bodies and trusted service providers under strict confidentiality agreements.</li>
                <li><strong>Retention:</strong> Stored securely and retained only for as long as necessary to meet operational or legal requirements.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Purpose of Data Collection</h4>
              <p>
                Summit Bank collects and processes Personal data for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Account registration and identity verification.</strong></li>
                <li><strong>Compliance with legal and regulatory obligations.</strong></li>
                <li><strong>Risk management, fraud prevention, and security monitoring.</strong></li>
                <li><strong>Customer service enhancement and personalized banking experiences.</strong></li>
                <li><strong>Marketing, communications, and service improvements.</strong></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Legal Basis for Processing</h4>
              <p>
                Summit Bank processes personal data based on:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Consent</strong> from the data subject.</li>
                <li><strong>Contractual necessity</strong> where processing is required for account management.</li>
                <li><strong>Legal obligations</strong> under financial regulatory laws.</li>
                <li><strong>Vital interests</strong> where data processing protects users From security risks.</li>
                <li><strong>Legitimate interests</strong> in fraud prevention, service improvement, and operational security.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Consent & Withdrawal</h4>
              <p>
                Where required, Summit Bank seeks explicit consent before processing personal data. Data subjects can withdraw their consent at any time by submitting a written request. </p>
                <p>If personal data belongs to minors, parental consent and verification are mandatory before collection.</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Use of Cookies</h4>
              <p>Summit Bank’s website uses cookies for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Improving user experience and website functionality.</li>
                <li>Providing personalized services.</li>
                <li>Analyzing site performance and security. </li>
              </ul>
              <p>Users may disable cookies via their browser settings; however, doing so may impact certain website features.</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Disclosure to Third Parties</h4>
              <p>
                Personal data may be disclosed to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Regulatory authorities</strong> to comply with financial and data protection laws.</li>
                <li><strong>Third-party service providers </strong> are bound by strict confidentiality agreements..</li>
                <li><strong>International partners,</strong> ensuring compliance with data protection standards..</li>
              </ul>
            </div>

            {/* Indented: Cross-Border Data Transfers */}
            <div className="space-y-2 pl-4 ml-2">
              <h4 className="text-base font-semibold">Cross-Border Data Transfers</h4>
              <p>
                Where personal data is transferred outside Nigeria:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The receiving country must have <strong>adequate data protection laws</strong>.</li>
                <li>Data transfers must occur under <strong>legally binding agreements</strong>.</li>
                <li>Standard <strong>contractual clauses or binding corporate rules</strong> must be in place.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Data Retention & Deletion</h4>
              <p>
                Summit Bank retains personal data based on:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>A minimum of 10 years</strong> post-account closure per regulatory requirements.</li>
                <li><strong>A minimum of 5 years</strong> for transaction records per CBN guidelines.</li>
                <li><strong>As long as necessary</strong> for operational and legal needs. Upon expiration, personal data is securely deleted or anonymized.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Data Subject Rights</h4>
              <p>
                Data subjects have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access and obtain copies</strong> of their personal data.</li>
                <li><strong>Request corrections</strong> to inaccurate data.</li>
                <li><strong>Request data deletion </strong> when no longer necessary.</li>
                <li><strong>Restrict processing</strong> under certain conditions.</li>
                <li><strong>Transfer their data</strong> to another service provider.</li>
                <li><strong>Object to certain processing activities,</strong> including marketing.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">Contact Us</h4>
              <p>
                For data privacy-related concerns,<br />
                <strong>Supervisory Authorithy (NDPC):</strong>{" "}
                <a href="mailto:dpo@ndpc.gov.ng" className="text-blue-600 underline">dpo@ndpc.gov.ng</a><br />
                <strong>Summit Bank Data Protection Officer:</strong>{" "}
                <a href="mailto:dataprotectionoffice@summitbankng.com" className="text-blue-600 underline">dataprotectionoffice@summitbankng.com</a>
              </p>
            </div>

            <p className="text-sm text-gray-600 pt-6 border-t border-gray-300">
              This Privacy Policy is reviewed periodically to reflect regulatory and operational changes.
            </p>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
