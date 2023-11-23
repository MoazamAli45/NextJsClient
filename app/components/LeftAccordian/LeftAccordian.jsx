import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { FaPlus } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";

export default function LeftAccordian() {
  return (
    <Accordion fullWidth>
      <AccordionItem
        key="1"
        aria-label="Web"
        indicator={<FaPlus color="white" />}
        title={<span className="text-white text-[14px]">Web</span>}
        fullWidth
        className="max-w-[250px] w-[250px] text-white text-[14px]"
      >
        {/* {defaultContent} */}
        <div className="flex bg-[#1D1D1D] rounded-lg px-[15px] py-[10px] text-[14px] gap-[5px] items-center">
          <GoHomeFill color="white" className="text-[14px]" /> Home
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="CMS"
        indicator={<FaPlus color="white" />}
        title={<span className="text-white text-[14px]">Cms</span>}
        fullWidth
        className="max-w-[250px] w-[250px]"
      >
        <div className="flex bg-[#1D1D1D] text-white rounded-lg px-[15px] py-[10px] text-[14px] gap-[5px] items-center">
          Cms
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Canvas"
        indicator={<FaPlus color="white" />}
        title={<span className="text-white text-[14px]">Canvas</span>}
        fullWidth
        className="max-w-[250px] w-[250px]"
      >
        <div className="flex bg-[#1D1D1D] text-white rounded-lg px-[15px] py-[10px] text-[14px] gap-[5px] items-center">
          Canvas
        </div>
      </AccordionItem>
    </Accordion>
  );
}
