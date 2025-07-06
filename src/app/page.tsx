import LandingCTA from "@/components/landingPage/LandingCTA";
import LayoutContainer from "@/components/layout/layoutContainer";
import React from "react";

function page() {
  return (
    <main className="secondaryFont bg-[#f4f4f4] min-h-screen w-full">
      <LayoutContainer className="pb-0 pt-[92px] ">
        <LandingCTA />
      </LayoutContainer>
      <LayoutContainer>
        <h1 className="text-3xl font-bold underline text-red-600">
          Hello world!
        </h1>
      </LayoutContainer>
    </main>
  );
}

export default page;
