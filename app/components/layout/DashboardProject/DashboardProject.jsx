"use client";
import React from "react";
import Header from "../../dashboardComponents/Header/Header";
import LeftSidebar from "../../dashboardComponents/LeftSidebar/LeftSidebar";
import RightSidebar from "../../dashboardComponents/RightSidebar/RightSidebar";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { RiLayoutGridFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import LastViewDropdown from "../../dashboardComponents/LastViewDropdown/LastViewDropdown";
import cardPic from "@/public/dashboard/whitebg.png";
import Image from "next/image";
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
        <div className="w-full md:w-[55%]">
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
            <div className="grid xs:grid-cols-2 lg:grid-cols-4 w-[95%] lg:w-full mx-auto  my-[70px] gap-[12px]">
              <div
                className="flex  lg:max-w-[160px] h-[200px] rounded-ld overflow-hidden  bg-cover rounded-lg"
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
                className="flex  lg:max-w-[160px] h-[200px]  rounded-ld overflow-hidden  bg-cover rounded-lg"
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
                className="flex lg:max-w-[160px] h-[200px]  rounded-ld overflow-hidden  bg-cover rounded-lg"
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
                className="flex lg:max-w-[160px] h-[200px]  rounded-ld overflow-hidden  bg-cover rounded-lg"
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
            {/*    Projects */}
            <div className="bg-background w-full mt-[20px] mb-[30px]">
              {/*   Inside Content */}
              <div className="w-[90%] mx-auto py-[25px] pr-[10px] flex flex-col gap-[10px]">
                <div className="flex justify-between">
                  <h4 className="text-white font-medium text-[18px]">Recent</h4>
                  <div className="flex gap-[8px] ">
                    <div className="flex bg-[#27272A] rounded-md p-[2px] pr-[7px]  items-center gap-[8px]">
                      <span className="py-[5px] px-[7px] bg-[#3F3F46] rounded-md">
                        <RiLayoutGridFill className="text-white text-[16px] " />
                      </span>
                      <span>
                        <AiOutlineMenu className="text-[#999999] text-[16px] " />
                      </span>
                    </div>
                    <button className="flex gap-[8px] items-center rounded-lg bg-[#0099FF] px-[10px] py-[5px]">
                      <FaPlus className="text-white text-[16px] " />
                      <span className="text-white text-[14px]">New</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between my-[10px]">
                  <div className="flex items-center">
                    <span>
                      <FiSearch className="text-[16px]" color="#999999" />
                    </span>
                    <input
                      type="text"
                      placeholder="Search 40 projects..."
                      className="bg-transparent border-none outline-none rounded-md text-[12px] sm:text-[14px] text-white  py-[5px] ml-[10px] w-[200px]"
                    />
                  </div>
                  <LastViewDropdown />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[20px]">
                  <CardDashboard />
                  <CardDashboard />
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

const CardDashboard = () => {
  return (
    <div className="  flex flex-col gap-[10px]">
      <div className="bg-[#282828] rounded-md  py-[30px]">
        <div className="relative w-[70%] h-[200px] mx-auto">
          <Image
            src={cardPic}
            alt="white background"
            fill
            priority
            className="absolute object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-[5px]">
          <h4 className="text-white text-[16px] font-medium">Untitled</h4>
          <span className="text-[#888888] text-[14px]  ">View one day ago</span>
        </div>
        <span className="bg-[#333333] text-[#888888] shadow-lg font-medium text-[12px] rounded-md p-[5px] ">
          FREE{" "}
        </span>
      </div>
    </div>
  );
};
