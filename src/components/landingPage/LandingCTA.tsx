import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import CalendarDEMO1 from "./ui/CalendarDEMO1";
import { GoInfo } from "react-icons/go";

function LandingCTA() {
  return (
    <div
      className="w-full bg-white relative rounded-[12px] border-[1px] border-[#e1e2e3] items-center flex flex-[1_0_0%] flex-row flex-nowrap gap-0 h-min p-0 overflow-hidden p-5 md:py-[74px] md:pl-[64px]"
      style={{
        boxShadow: "0 1px 5px -4px #242424b3, 0 4px 8px #2424240d",
      }}
    >
      {/* vertical spacing left */}
      <div className="w-[64px] opacity-1 h-full flex"></div>
      {/* <CalendarDEMO1 /> */}
      <div className="items-center flex flex-none flex-col md:flex-row flex-nowrap gap-[48px] h-min justify-start max-w-[12800px] overflow-visible p-0 relative w-full">
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
        Appoints v0 Launched 🥳
      </Badge>
      <>
        <h1 className="text-[40px] md:text-[64px] text-[#242424] leading-[0.9em] md:leading-[1.1em]">
          The better way to schedule your meetings
        </h1>
        <p className="secondaryFont text-[#898989] text-[14px] md:text-[16px]">
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
    <div className="md:flex flex-col flex-nowrap items-start justify-start  flex-[1_0_0px] gap-12 h-min overflow-visible p-0 relative w-px hidden">
      <div className="flex-none h-auto relative w-auto">
        <div className="flex flex-nowrap items-start justify-start gap-0 h-min overflow-hidden p-0 relative w-[713px] flex-row">
          <CalendarDEMO1 />
        </div>
      </div>
      <div className="w-full pr-5 flex flex-row flex-nowrap justify-start items-center gap-2 h-min overflow-hidden p-0 relative text-[#898989]">
        <GoInfo className=" text-[45px]" />
        <p className="secondaryFont text-[12px]">
          This is a personal project — a clone of{" "}
          <a
            href="https://cal.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            cal.com
          </a>{" "}
          — built to enhance my skills in <span>NEXT.js</span> and explore
          full-stack development. If you&apos;re interested in contributing or
          reviewing the code, feel free to visit the GitHub repository:&nbsp;
          <a
            href="https://github.com/PiyushPb/appoints"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            github.com/PiyushPb/appoints
          </a>
        </p>
      </div>
    </div>
  );
};

export default LandingCTA;
