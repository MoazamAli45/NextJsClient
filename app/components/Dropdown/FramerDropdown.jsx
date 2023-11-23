"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import Framer from "@/app/assets/icons/Framer";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
export default function FramerDropdown() {
  const [isUpArrowVisible, setIsUpArrowVisible] = useState(true);

  const handleClick = () => {
    setIsUpArrowVisible((prev) => !prev);
  };
  return (
    <Dropdown className="dark">
      <DropdownTrigger>
        <span
          className="bg-[#333333] rounded-md px-[10px]  py-[10px]  flex items-center justify-center h-[80%] my-auto gap-[2px]"
          onClick={handleClick}
        >
          <Framer />{" "}
          {isUpArrowVisible ? (
            <MdKeyboardArrowUp color="#989898" />
          ) : (
            <MdKeyboardArrowDown color="#989898" />
          )}
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" className="text-white " color="primary">
          Account Setting
        </DropdownItem>
        <DropdownItem key="copy" className="text-white  " color="primary">
          Community
        </DropdownItem>
        <DropdownItem key="edit" className="text-white  " color="primary">
          Updates
        </DropdownItem>
        <DropdownItem key="delete" className="text-white" color="primary">
          Sign out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
