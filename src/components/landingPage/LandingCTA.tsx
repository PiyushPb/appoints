import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import CalendarDEMO1 from "./ui/CalendarDEMO1";
import { GoInfo } from "react-icons/go";

function LandingCTA() {
  return (
    <div
      className="w-full bg-white relative rounded-[12px] border-[1px] border-[#e1e2e3] items-center flex flex-[1_0_0%] flex-row flex-nowrap gap-0 h-min p-0 overflow-hidden py-[74px] pl-[64px]"
      style={{
        boxShadow: "0 1px 5px -4px #242424b3, 0 4px 8px #2424240d",
      }}
    >
      {/* vertical spacing left */}
      <div className="w-[64px] opacity-1 h-full flex"></div>
      {/* <CalendarDEMO1 /> */}
      <div className="items-center flex flex-none flex-row flex-nowrap gap-[48px] h-min justify-start max-w-[12800px] overflow-visible p-0 relative w-full">
        <LeftSideContainer />
        <RightSideContainer />
      </div>
    </div>
  );
}

const LeftSideContainer = () => {
  return (
    <div className="flex flex-col flex-nowrap items-start flex-[1_0_0px] gap-[16px] h-min max-w-[960px] overflow-visible w-[1xp]">
      <Badge variant="outline" className="secondaryFont">
        CalLite v0 Launched 🥳
      </Badge>
      <>
        <h1 className="text-[64px] text-[#141414] leading-[1.1em]">
          The better way to schedule your meetings
        </h1>
        <p className="secondaryFont text-[#898989]">
          A fully customizable scheduling software for individuals, businesses
          taking calls and developers building scheduling platforms where users
          meet users.
        </p>
      </>
      <div className="w-full flex flex-col gap-2">
        <Button className="w-full secondaryFont">
          <FcGoogle />
          Sign up with Google
        </Button>
        <Button variant="outline" className="w-full secondaryFont">
          Sign up with Email
        </Button>
      </div>
      <span className="secondaryFont text-[14px] text-[#898989]">
        No credit card required
      </span>
    </div>
  );
};

const RightSideContainer = () => {
  return (
    <div className="flex flex-col flex-nowrap items-start justify-start flex-[1_0_0px] gap-12 h-min overflow-visible p-0 relative w-px">
      <div className="flex-none h-auto relative w-auto">
        <div className="flex flex-nowrap items-start justify-start gap-0 h-min overflow-hidden p-0 relative w-[713px] flex-row">
          <CalendarDEMO1 />
        </div>
      </div>
      <div className="w-full pr-5 flex flex-row flex-nowrap items-start justify-start gap-2 h-min overflow-hidden p-0 relative text-[#898989]">
        <GoInfo className=" text-[20px]" />
        <p className="secondaryFont text-[12px]">
          This is a clone website of <span>cal.com</span>, this is my personal
          project and wanted to make something incredible while i want to learn
          <span>NEXT.js</span>. If you want to contribute to this project please visit my github profile. click here 
          <a href=""></a>
        </p>
      </div>
    </div>

    // <div
    //   className="flex flex-start flex-[1_0_0px] flex-col flex-nowrap gap-[48px] h-min justify-start relative w-[900px]"
    //   style={{
    //     transform: "translateX(10px)",
    //     overflow: "visible",
    //   }}
    // >
    //   <CalendarDEMO1 />
    // </div>
  );
};

export default LandingCTA;
