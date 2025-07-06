import React from "react";
import { HiPlus } from "react-icons/hi";

function LayoutContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className="w-full h-full relative">
      <div
        className={`max-w-[1200px] mx-auto border-s-[1px] border-e-[1px] border-[#e1e2e3] h-full p-[12px] ${className}`}
      >
        {children}
      </div>
      <div className="divider-container">
        <div className="w-full h-[1px] bg-[#e1e2e3] layout-line"></div>
        <div className="inner-divider">
          <div className="layout-icon-wrapper">
            <div className="w-[24px] h-[24px] flex justify-center items-center bg-[#f4f4f4] text-[#b6b6b6]">
              <HiPlus />
            </div>
          </div>
          <div className="bg-[#14141426] grow shrink-0 basis-0"></div>
          <div className="layout-icon-wrapper">
            <div className="w-[24px] h-[24px] flex justify-center items-center bg-[#f4f4f4] text-[#b6b6b6]">
              <HiPlus />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LayoutContainer;
