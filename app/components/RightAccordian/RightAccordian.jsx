import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiArrowsHorizontalFill } from "react-icons/pi";
const positions = [
  {
    label: "Relative",
    value: "relative",
  },
  {
    label: "Absolute",
    value: "absolute",
  },
];
const sizes = [
  {
    label: "Fill",
    value: "fill",
  },
  {
    label: "Fit",
    value: "fit",
  },
  {
    label: "Rel",
    value: "rel",
  },
];

export default function RightAccordian() {
  return (
    <div className="dark">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Web"
          indicator={<FaPlus color="white" />}
          title={<span className="text-white text-[14px]">Link</span>}
          fullWidth
          className=" text-white text-[14px]"
        ></AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Position"
          indicator={<FaPlus color="white" />}
          title={<span className="text-white text-[14px] ">Position</span>}
          fullWidth
        >
          <div className="flex justify-between items-center dark">
            <div className="w-1/3">
              <span className="text-gray-300 font-normal text-[14px]">
                Type
              </span>
            </div>
            <div className="w-2/3  dark">
              <Select
                items={positions}
                label=""
                placeholder="Relative"
                labelPlacement="none"
                className="max-w-xs dark"
                selectorIcon={
                  <MdKeyboardArrowDown className="text-[14px] " color="white" />
                }
              >
                {(position) => (
                  <SelectItem
                    key={position.value}
                    value={position.value}
                    data-selected="relative"
                  >
                    {position.label}
                  </SelectItem>
                )}
              </Select>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Size"
          indicator={<FaPlus color="white" />}
          title={<span className="text-white text-[14px]">Size</span>}
          fullWidth
        >
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between items-center dark">
              <div className="w-1/3">
                <span className="text-gray-400 font-normal text-[14px]">
                  Width
                </span>
              </div>
              <div className="w-2/3 flex gap-[10px] dark">
                <div className="flex bg-[#27272A] text-white rounded-xl  pl-[10px] pr-[45px] py-[10px] text-[14px] gap-[5px] items-center">
                  1fr
                </div>
                <Select
                  items={sizes}
                  label=""
                  placeholder={<span className="text-white">Fill</span>}
                  labelPlacement="none"
                  className="max-w-xs dark"
                  selectorIcon={
                    <MdKeyboardArrowDown
                      className="text-[14px] "
                      color="#9ca3af"
                    />
                  }
                >
                  {(size) => (
                    <SelectItem
                      key={size.value}
                      value={size.value}
                      data-selected="relative"
                    >
                      {size.label}
                    </SelectItem>
                  )}
                </Select>
              </div>
            </div>
            <div className="flex justify-between items-center dark">
              <div className="w-1/3">
                <span className="text-gray-400 font-normal text-[14px]">
                  Height
                </span>
              </div>
              <div className="w-2/3 flex gap-[10px] dark">
                <div className="  flex bg-[#27272A] text-white rounded-xl  pl-[10px] pr-[30px] py-[10px] text-[14px] gap-[5px] items-center">
                  Auto
                </div>
                <Select
                  items={sizes}
                  label=""
                  placeholder={<span className="text-white">Fit</span>}
                  labelPlacement="none"
                  className="max-w-xs dark w-1/2"
                  selectorIcon={
                    <MdKeyboardArrowDown
                      className="text-[14px] "
                      color="#9ca3af"
                    />
                  }
                >
                  {(size) => (
                    <SelectItem
                      key={size.value}
                      value={size.value}
                      data-selected="relative"
                    >
                      {size.label}
                    </SelectItem>
                  )}
                </Select>
              </div>
            </div>
            <div className="flex justify-between items-center dark">
              <div className="w-1/3">
                <span className="text-gray-400 font-normal text-[14px]">
                  Max Width
                </span>
              </div>
              <div className="w-2/3 flex gap-[10px] dark">
                <div className="flex bg-[#27272A] text-white rounded-xl  pl-[10px] pr-[27px] py-[10px] text-[14px] gap-[5px] items-center">
                  100%
                </div>
                <Select
                  items={sizes}
                  label=""
                  placeholder={<span className="text-white">Rel</span>}
                  labelPlacement="none"
                  className="max-w-xs dark"
                  selectorIcon={
                    <MdKeyboardArrowDown
                      className="text-[14px] "
                      color="#9ca3af"
                    />
                  }
                >
                  {(size) => (
                    <SelectItem
                      key={size.value}
                      value={size.value}
                      data-selected="relative"
                    >
                      {size.label}
                    </SelectItem>
                  )}
                </Select>
              </div>
            </div>
            <div className="flex justify-between items-center dark">
              <div className=" ml-auto w-2/3 flex gap-[10px] dark">
                <div className="flex bg-[#27272A] text-white rounded-xl  pl-[5px] w-full py-[5px] text-[14px] gap-[5px] items-center">
                  <span className="bg-[#3F3F46] p-[5px] rounded-md">
                    <PiArrowsHorizontalFill className="text-[16px] font-bold " />
                  </span>
                  <span className="text-[14px] text-[#9ca3af]">Add...</span>
                </div>
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Effects"
          indicator={<FaPlus color="white" />}
          title={<span className="text-white text-[14px]">Effects</span>}
          fullWidth
          className="border-t-[1px] border-solid border-[#262626]"
        ></AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Styles"
          indicator={<FaPlus color="white" />}
          title={<span className="text-white text-[14px]">Styles</span>}
          fullWidth
        ></AccordionItem>
      </Accordion>
    </div>
  );
}
