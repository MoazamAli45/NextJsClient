import { FaPlus } from "react-icons/fa";
import { RiLayout2Fill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { LuGlobe } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import profile from "@/public/profile.png";

import React from "react";
import FramerDropdown from "../Dropdown/FramerDropdown";
import Image from "next/image";
// 888888
const Header = () => {
  return (
    <div className="w-full bg-black py-3 h-[10vh] dark">
      {/*   Container */}
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span>
            <FramerDropdown />
          </span>
          <div className="hidden md:flex gap-2 items-center">
            <span className="bg-[#888888] p-[5px]  rounded-md flex items-center justify-center  ">
              <FaPlus className="text-black" />
            </span>
            <span className=" my-auto ">
              <RiLayout2Fill className="text-[#888888] h-full text-3xl" />
            </span>
            <span className="  bg-[#888888] px-[7px] py-[1px] rounded-md flex items-center justify-center  ">
              <h4 className="text-black font-bold">T</h4>
            </span>
            <span className="bg-[#888888] p-[5px] rounded-md flex items-center justify-center   ">
              <FaDatabase className="text-black" />
            </span>
            <span className="bg-[#888888] p-[5px] rounded-md flex items-center justify-center  my-auto ">
              <MdElectricBolt className="text-black" />
            </span>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <h4 className="text-white font-medium text-[14px]">Untitled</h4>
          <span className="bg-[#333333] text-[#0099FF] shadow-lg font-medium text-[14px] rounded-md px-[5px] ">
            FREE{" "}
          </span>
        </div>
        {/*  Last div */}
        <div className="flex gap-[10px] items-center">
          <span className="relative w-[27px] h-[27px] rounded-md">
            <Image
              src={profile}
              alt="Picture of the author"
              className="relative  rounded-lg"
              fill
              sizes="27px"
            />
          </span>
          <span className="bg-[#2B2B2B] p-[7px]  rounded-md hidden md:flex items-center justify-center  ">
            <LuGlobe className="text-white" />
          </span>
          <span className="bg-[#2B2B2B] p-[7px]  rounded-md hidden md:flex items-center justify-center  ">
            <IoMdSettings className="text-white" />
          </span>
          <span className="bg-[#2B2B2B] p-[7px]  rounded-md hidden md:flex items-center justify-center  ">
            <FaPlay className="text-white" />
          </span>
          <button className="text-white font-medium text-[14px]  bg-[#2B2B2B] py-[5px] px-[7px] rounded-md  md:block hidden">
            Invite
          </button>
          <button className="text-white font-medium text-[14px]  bg-[#0099FF] py-[5px] px-[7px] rounded-md ">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
