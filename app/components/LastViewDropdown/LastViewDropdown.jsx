"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function LastViewDropdown() {
  return (
    <Dropdown className="dark">
      <DropdownTrigger>
        <span className="    flex items-center justify-center   gap-[2px] text-[12px] sm:text-[14px] text-[#989898]">
          Last viewed by me
          <MdKeyboardArrowDown color="#989898" />
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" className="text-white " color="primary">
          Last viewed by me
        </DropdownItem>
        <DropdownItem key="copy" className="text-white  " color="primary">
          Last edited
        </DropdownItem>
        <DropdownItem key="edit" className="text-white  " color="primary">
          Alphabetically
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
