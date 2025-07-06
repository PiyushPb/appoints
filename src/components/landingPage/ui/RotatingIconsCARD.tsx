/* eslint-disable @next/next/no-img-element */
import React from "react";

function RotatingIconsCARD() {
  return (
    <div className="w-full h-[300px] flex justify-center items-center">
      <div className="relative w-[200px] h-[200px] flex justify-center items-center">
        {/* Outer Circle */}
        <div className="absolute w-[270px] h-[270px] border-[1px] border-[#e1e2e3] rounded-full"></div>

        <div className="absolute w-[175px] h-[175px] z-1 animate-rotateAnimation">
          <div className="rounded-full items-center absolute top-[20px] translate-x-[-50%] bg-gray-200 w-[40px] h-[40px] flex justify-center">
            <div className="counter-rotate">
              <img
                className="w-[20px] h-[20px]"
                src="https://framerusercontent.com/images/AUafj9wkmgBuXBrhusy3dfwSXK4.png"
                alt=""
              />
            </div>
          </div>
          <div className="rounded-full items-center absolute top-[20px] right-[-40px] translate-x-[-50%] bg-gray-200 w-[40px] h-[40px] flex justify-center">
            <div className="counter-rotate">
              <img
                className="w-[20px] h-[20px]"
                src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg"
                alt=""
              />
            </div>
          </div>
          <div className="rounded-full items-center absolute bottom-[-20px] right-[50%] translate-x-[-50%] bg-gray-200 w-[40px] h-[40px] flex justify-center">
            <div className="counter-rotate">
              <img
                className="w-[20px] h-[20px]"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Middle Circle */}
        <div className="absolute w-[200px] h-[200px] border-[1px] border-[#e1e2e3] rounded-full"></div>

        {/* Inner Circle */}
        <div className="absolute w-[130px] h-[130px] border-[1px] border-[#e1e2e3] rounded-full"></div>

        {/* Label */}
        <span className="absolute text-[14px] bg-gray-200 border-[1px] border-[#e1e2e3] p-[6px] rounded-xl">
          appoints
        </span>
      </div>
    </div>
  );
}

export default RotatingIconsCARD;
