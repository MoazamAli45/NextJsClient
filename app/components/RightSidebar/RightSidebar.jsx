import React from "react";
import { PiAlignLeft, PiAlignLeftSimpleFill } from "react-icons/pi";
import { PiAlignCenterHorizontalSimpleFill } from "react-icons/pi";
import { PiAlignRightSimpleFill } from "react-icons/pi";
import { PiAlignTopSimpleFill } from "react-icons/pi";
import { PiAlignCenterVerticalSimpleFill } from "react-icons/pi";
import { PiAlignBottomSimpleFill } from "react-icons/pi";
import { PiAlignCenterVerticalFill } from "react-icons/pi";
import { PiAlignCenterHorizontalFill } from "react-icons/pi";
import RightAccordian from "../RightAccordian/RightAccordian";

const RightSidebar = ({ show }) => {
  return (
    <>
      <div className="hidden md:block  w-[23%] bg-black border-t-[1px] border-solid border-[#1D1D1D] min-h-[90vh]">
        <div className="flex flex-col w-[90%] mx-auto py-[30px]">
          <div className="flex gap-[10px] w-full justify-center pb-[10px] border-b-[1px] border-solid border-[#262626]">
            <PiAlignLeftSimpleFill className="text-[#888888] text-[22px]" />
            <PiAlignCenterHorizontalSimpleFill className="text-[#888888] text-[22px]" />
            <PiAlignRightSimpleFill className="text-[#888888] text-[22px]" />
            <PiAlignTopSimpleFill className="text-[#888888] text-[22px]" />
            <PiAlignCenterVerticalSimpleFill className="text-[#888888] text-[22px]" />
            <PiAlignBottomSimpleFill className="text-[#888888] text-[22px]" />
            <PiAlignCenterVerticalFill className="text-[#888888] text-[22px]" />
            <PiAlignCenterHorizontalFill className="text-[#888888] text-[22px]" />
          </div>
          <div className="py-[10px] flex flex-col gap-[10px]">
            <h4 className="text-[18px] font-medium text-white">Theme </h4>
            <div className="flex bg-[#1D1D1D] rounded-lg px-[15px] py-[15px] text-[14px] gap-[5px] items-center">
              <div className="flex rounded-lg">
                <span className="bg-white min-w-[31px] lg:min-w-[40px] xl:min-w-[47px] 2xl:min-w-[60px]  2xl:w-1/5 3xl:min-w-[65px] h-[30px] rounded-l-md"></span>
                <span className="bg-gray-300 min-w-[31px] lg:min-w-[40px] xl:min-w-[47px] 2xl:min-w-[60px] 2xl:w-1/5 3xl:min-w-[65px]  h-[30px]"></span>
                <span className="bg-gray-500 min-w-[31px] lg:min-w-[40px] xl:min-w-[47px] 2xl:min-w-[60px] 2xl:w-1/5 3xl:min-w-[65px] h-[30px]"></span>
                <span className="bg-[#2B2A4C] min-w-[31px] lg:min-w-[40px] xl:min-w-[47px] 2xl:min-w-[60px] 2xl:w-1/5 3xl:min-w-[65px] h-[30px]"></span>
                <span className="bg-[#9AD0C2] min-w-[31px] lg:min-w-[40px] xl:min-w-[47px] 2xl:min-w-[60px] 2xl:w-1/5 3xl:min-w-[65px] h-[30px] rounded-r-md"></span>
              </div>
            </div>
            <span className="flex bg-[#1D1D1D] rounded-lg px-[10px] py-[5px] text-[14px] gap-[5px] items-center text-white justify-center">
              Shuffle
            </span>
          </div>
          <div className="border-t-[1px] border-solid border-[#262626]">
            <RightAccordian />
          </div>
        </div>
      </div>
      {show && (
        <div className="block md:hidden w-[320px] bg-black border-t-[1px] border-solid border-[#1D1D1D] min-h-[100vh] z-10">
          <div className="flex flex-col w-[90%] mx-auto py-[30px]">
            <div className="flex gap-[10px] w-full justify-center pb-[10px] border-b-[1px] border-solid border-[#262626]">
              <PiAlignLeftSimpleFill className="text-[#888888] text-[22px]" />
              <PiAlignCenterHorizontalSimpleFill className="text-[#888888] text-[22px]" />
              <PiAlignRightSimpleFill className="text-[#888888] text-[22px]" />
              <PiAlignTopSimpleFill className="text-[#888888] text-[22px]" />
              <PiAlignCenterVerticalSimpleFill className="text-[#888888] text-[22px]" />
              <PiAlignBottomSimpleFill className="text-[#888888] text-[22px]" />
              <PiAlignCenterVerticalFill className="text-[#888888] text-[22px]" />
              <PiAlignCenterHorizontalFill className="text-[#888888] text-[22px]" />
            </div>
            <div className="py-[10px] flex flex-col gap-[10px]">
              <h4 className="text-[18px] font-medium text-white">Theme </h4>
              <div className="flex bg-[#1D1D1D] rounded-lg px-[15px] py-[15px] text-[14px] gap-[5px] items-center">
                <div className="flex rounded-lg">
                  <span className="bg-white w-[40px] h-[30px] rounded-l-md"></span>
                  <span className="bg-gray-300 w-[40px]  h-[30px]"></span>
                  <span className="bg-gray-500 w-[40px] h-[30px]"></span>
                  <span className="bg-[#2B2A4C] w-[40px] h-[30px]"></span>
                  <span className="bg-[#9AD0C2] w-[36px] h-[30px] rounded-r-md"></span>
                </div>
              </div>
              <span className="flex bg-[#1D1D1D] rounded-lg px-[10px] py-[5px] text-[14px] gap-[5px] items-center text-white justify-center">
                Shuffle
              </span>
            </div>
            <div className="border-t-[1px] border-solid border-[#262626]">
              <RightAccordian />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightSidebar;
