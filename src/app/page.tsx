import CompaniesThatChooseUs from "@/components/landingPage/CompaniesThatChooseUs";
import LandingCTA from "@/components/landingPage/LandingCTA";
import WithUsSection from "@/components/landingPage/WithUsSection";
import LayoutContainer from "@/components/layout/layoutContainer";
import React from "react";

function page() {
  return (
    <main className="secondaryFont bg-[#f4f4f4] min-h-screen w-full">
      <LayoutContainer className="pb-0 pt-[92px] ">
        <LandingCTA />
      </LayoutContainer>
      <LayoutContainer>
        <CompaniesThatChooseUs />
      </LayoutContainer>
      <LayoutContainer className="py-[60px] md:py-[94px]">
        <WithUsSection />
      </LayoutContainer>
    </main>
  );
}

export default page;
