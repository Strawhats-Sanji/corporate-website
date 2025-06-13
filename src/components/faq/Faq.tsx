"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "../Button";
import { useRouter } from "next/navigation";

export default function Faq({
  title,
  amount,
}: {
  title?: string;
  amount?: number;
}) {
  const router = useRouter();

  const allFaqs = [
    {
      question: "What is non-interest banking?",
      answer:
        "A non-interest digital bank offers financial services that comply with ethical and profit-and-loss sharing principles. We do not charge or pay interest (riba), and our services are structured around transparency, fairness, and social responsibility. Delivered entirely through secure digital platforms. Rather than lending money with fixed interest, the bank engages in real economic activities—such as trade, leasing, and profit-sharing investments, while distributing returns and risks fairly with customers.",
    },
    {
      question: "How is non-interest banking different from conventional banking?",
      answer:
        "Unlike conventional banks, we do not deal in interest-based transactions. Our products are designed around partnerships, trade, and asset-backed financing models, ensuring fairness and shared risk between the bank and its customers.",
    },
    {
      question: "Is Summit Bank the same as an Islamic bank?",
      answer:
        "While both share similar principles (like avoiding interest and promoting ethical finance), a non-interest bank may serve a broader audience, including individuals and businesses who prefer ethical, inclusive finance, regardless of religious affiliation.",
    },
    {
      question: "What products and services does Summit Bank offer?",
      answer: `
        <ul class="list-disc list-inside space-y-1">
          <li>Current and Savings accounts</li>
          <li>Mobile banking and digital payments</li>
          <li>Non-interest financing for individuals and businesses</li>
          <li>Investment and ethical wealth management solutions</li>
          <li>Financial inclusion tools for underserved communities</li>
        </ul>
      `,
    },
    {
      question: "How secure is Summit Bank’s digital platform?",
      answer:
        "We prioritize security and data privacy. Our platforms use end-to-end encryption, multi-factor authentication, and real-time monitoring to protect your transactions and personal information.",
    },
    {
      question: "Can I open an account online?",
      answer: `
        <p><b>Yes</b>. Our onboarding process is 100% digital. Simply download our mobile app or visit our website to open an account within minutes—no physical paperwork required.</p>
        <ul class="list-disc list-inside">
          <li><b>Branch</b> : Visit any Summit Bank branch or Agent.</li>
          <li><b>Online </b> : Visit <b> <a href='https://www.summitbankng.com' target='_blank'>www.summitbankng.com</a> </b></li>
          <li><b>Mobile App </b> : Download Summit Bank App from the App Store or Play Store.</li>
        </ul>
      `,
    },
    {
      question: "How are profits made if Summit Bank does not charge interest?",
      answer:
        "Our income is derived from ethical investment activities, service charges, trade-based financing, lease contracts, and profit-sharing partnerships, not from interest.",
    },
    {
      question: "Does Summit Bank offer loans and financing?",
      answer: `
        <p><b>Yes</b>. We provide non-interest financing options such as:</p>
        <ul class="list-disc list-inside">
          <li>Asset-backed financing (e.g., Murabaha-like structures)</li>
          <li>Partnership-based funding (e.g., Mudarabah/Musharrakah-inspired models)</li>
          <li>Lease-based financing (e.g., Ijarah structures)</li>
          <li>Investment and wealth management solutions (ethically structured)</li>
          <li>Financial inclusion tools for underserved communities</li>
        </ul>
        <p>These are structured in a way that promotes shared responsibility and ethical returns.</p>
      `,
    },
    {
      question: "Who can bank with Summit?",
      answer:
        "All persons and entities looking for transparent, fair, and interest-free banking—whether for personal, business, or social purposes—are welcome to join.",
    },
    {
      question: "What are the key principles of Islamic Finance?",
      answer: `
        <ul class="list-disc list-inside">
          <li> <b>Risk Sharing:</b> Financiers and entrepreneurs share profits and losses.</li>
          <li> <b>Asset-Backed Transactions:</b> Financing must be linked to real goods or services.</li>
          <li> <b>Fairness & Justice:</b> Transactions must be equitable and non-exploitative.</li>
          <li> <b>Ethical Investment:</b> Prohibited sectors include alcohol, gambling and weapons.</li>
          <li> <b>Prohibition of Interest (Riba):</b> Fixed interest is disallowed; financing is return-based.</li>
          <li> <b>Avoidance of Excessive uncertainty (Gharar):</b> Highly speculative deals are not permissible.</li>
        </ul>
      `,
    },
    {
      question: "How do Non-Interest Banks operate?",
      answer:
        "Banks operate by using depositors' funds in Shari'ah-compliant ventures and sharing profits (or losses) based on agreed terms. Unlike conventional banks, Non-interest Banks do not earn from interest but from trade, leasing, and partnership models.",
    },
    {
      question: "What distinguishes Interest-Based from Profit-Based Systems?",
      answer: `
        <p><b>Interest-Based Banking:</b></p>
        <ul class="list-disc list-inside">
          <li>Deposits are loans to the bank.</li>
          <li>Fixed interest paid regardless of performance.</li>
          <li>Lender profits irrespective of borrower success.</li>
        </ul>
        <p><b>Profit-Based Islamic Banking:</b></p>
        <ul class="list-disc list-inside">
          <li>Deposits are treated as investments.</li>
          <li>Profits shared per agreed ratios; losses may apply.</li>
          <li>Earnings come from real economic activities.</li>
        </ul>
      `,
    },
    {
      question: "What Islamic banking products are offered?",
      answer: `
        <ul class="list-disc list-inside">
          <li> <b>Murabaha (Cost-Plus Sale):</b> Bank buys item and resells at agreed profit margin.</li>
          <li> <b>Mudarabah (Trust Financing):</b> Bank provides capital, while the customer manages the transaction.</li>
          <li> <b>Ijara (Leasing):</b> Bank leases asset to customer; eventual ownership is optional.</li>
          <li> <b>Sukuk (Islamic Bonds):</b> Asset-backed investments yielding shared returns.</li>
        </ul>
      `,
    },
     {
      question: "How do I contact Customer Support?",
      answer: `
        <ul class="list-none list-inside">
          <li> 📧 Email: info@summitbankng.com</li>
          <li> 📞 Phone: +234 (0) 700 700 0005</li>
          <li> 💬 Live chat: Available on our mobile app and website</li>
        </ul>

      `,
    },
    // {
    //   question: "How do I contact Customer Support?",
    //   answer: `
    //     📧 Email: info@summitbankng.com<br/>
    //     📞 Phone: +234 (0) 700 700 0005<br/>
    //     💬 Live chat: Available on our mobile app and website
    //   `,
    // },
  ];

  const handleChange = () => {
    router.push("/faq");
  };

  return (
    <div className="main space-y-6 py-20">
      {!title && (
        <h3 className="font-semibold text-center mb-6">
          Frequently Asked Questions
        </h3>
      )}
      <div className="space-y-4">
        {(amount ? allFaqs.slice(0, amount) : allFaqs).map((item, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>
                <h5>{item.question}</h5>
              </AccordionTrigger>
              <AccordionContent>
                {item.answer.includes("<") ? (
                  <div
                    className="faq-answer"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                ) : (
                  <p>{item.answer}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
        {!title && (
          <div className="flex items-center justify-center">
            <Button type="primary" text="See More" buttonFn={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
}
