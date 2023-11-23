"use client";
import React from "react";
import Header from "@/app/components/Header/Header";
import LeftSidebar from "@/app/components/LeftSidebar/LeftSidebar";
import RightSidebar from "@/app/components/RightSidebar/RightSidebar";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";

import pic1 from "@/public/dashboard/pic1.png";
import pic2 from "@/public/dashboard/pic2.png";
import pic3 from "@/public/dashboard/pic3.png";
import pic4 from "@/public/dashboard/pic4.png";
const DashboardProject = () => {
  const [showLeftNavList, setShowLeftNavList] = useState(false);
  const [showRightNavList, setShowRightNavList] = useState(false);
  const handleShowNavList = () => {
    setShowLeftNavList((prev) => !prev);
    setShowRightNavList(false);
  };
  const handleShowRightNavList = () => {
    setShowRightNavList((prev) => !prev);
    setShowLeftNavList(false);
  };

  return (
    <div className="dark">
      <Header />
      <div className="flex bg-[#1D1D1D] min-h-[90vh]">
        <LeftSidebar
          show={showLeftNavList}
          onClose={(show) => {
            setShowLeftNavList(show);
          }}
        />
        <div className="w-full md:w-[54%]">
          {/*  Menu */}
          <div className=" w-[90%] mx-auto">
            <div className="flex justify-between ">
              {!showLeftNavList && (
                <span
                  className="bg-[#333333] p-[10px] rounded-full   mt-[20px] block md:hidden"
                  onClick={handleShowNavList}
                >
                  {<BiMenuAltLeft color="white" />}
                </span>
              )}
              {!showRightNavList && (
                <span
                  className="bg-[#333333] p-[10px] rounded-full  ml-[20px] mt-[20px] block md:hidden justify-self-end"
                  onClick={handleShowRightNavList}
                >
                  {<BiMenuAltRight color="white" />}
                </span>
              )}
            </div>
            {/*         Main */}
            <div className="grid xs:grid-cols-2 lg:grid-cols-4 w-[95%] mx-auto  my-[70px] gap-[12px]">
              <div
                className="flex  lg:max-w-[140px] h-[200px] rounded-ld overflow-hidden  bg-cover rounded-lg"
                style={{
                  backgroundImage: `url('/dashboard/pic1.png')`,
                }}
              >
                <div className="self-end my-[10px] mx-[10px]">
                  <h4 className="text-white font-medium text-[12px]">
                    Start the App tour
                  </h4>
                  <span className="text-[#685D76] shadow-lg font-medium text-[11px] rounded-md  ">
                    Interactive tutorial
                  </span>
                </div>
              </div>
              <div
                className="flex  lg:max-w-[140px] h-[200px]  rounded-ld overflow-hidden  bg-cover rounded-lg"
                style={{
                  backgroundImage: `url('/dashboard/pic2.png')`,
                }}
              >
                <div className="self-end my-[10px] mx-[10px]">
                  <h4 className="text-white font-medium text-[12px]">
                    Browse Templates
                  </h4>
                  <span className="text-[#685D76] shadow-lg font-medium text-[11px] rounded-md  ">
                    Duplicate in 1 click
                  </span>
                </div>
              </div>
              <div
                className="flex lg:max-w-[140px] h-[200px]  rounded-ld overflow-hidden  bg-cover rounded-lg"
                style={{
                  backgroundImage: `url('/dashboard/pic3.png')`,
                }}
              >
                <div className="self-end my-[10px] mx-[10px]">
                  <h4 className="text-white font-medium text-[12px]">
                    Paste from Figma
                  </h4>
                  <span className="text-[#685D76] shadow-lg font-medium text-[11px] rounded-md  ">
                    Import your design
                  </span>
                </div>
              </div>
              <div
                className="flex lg:max-w-[140px] h-[200px]  rounded-ld overflow-hidden  bg-cover rounded-lg"
                style={{
                  backgroundImage: `url('/dashboard/pic4.png')`,
                }}
              >
                <div className="self-end my-[10px] mx-[10px]">
                  <h4 className="text-white font-medium text-[12px]">
                    Watch Tutorials
                  </h4>
                  <span className="text-[#685D76] shadow-lg font-medium text-[11px] rounded-md  ">
                    Level up your skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightSidebar
          show={showRightNavList}
          onClose={(show) => {
            setShowRightNavList(show);
          }}
        />
      </div>
    </div>
  );
};

export default DashboardProject;
