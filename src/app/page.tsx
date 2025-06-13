import Banner from "@/components/Banner";
import Faq from "@/components/faq/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HeroCarousel from "@/components/HeroCarousel";
import IslamicFinances from "@/components/IslamicFinances";
import DefaultLayout from "@/components/layout/DefaultLayout";
import ProductsSection from "@/components/ProductsSection";
import RewardsSection from "@/components/RewardsSection";
import GenericSection from "@/components/section/GenericSection";

export default function Home() {
  const loanSection = {
    title: "Apply for Summit Instant Facility and Transform your Financial Life!",
    text: "Get up to Millions in business finance from Summit Bank at the best industry rate.",
    button: false,
    buttontext: "",
    image: "/pages-section/loan.png",
    customClass: "p-5 lg:p-10 rounded-2xl bg-[var(--inert-color)]",
  };
  return (
    <div className=" ">
      <DefaultLayout>
        <HeroCarousel />
        <ProductsSection />
        <div className="pb-20">
          <GenericSection
            title={loanSection?.title}
            text={loanSection?.text}
            image={loanSection?.image}
            button={loanSection?.button}
            buttonText={loanSection?.buttontext}
            customClass={loanSection?.customClass}
            reverse
          />
        </div>
        <Features />
        <IslamicFinances />
        {/* <RewardsSection /> */}
        <Banner />
          <Faq  amount={3}/>
      </DefaultLayout>
    </div>
  );
}
