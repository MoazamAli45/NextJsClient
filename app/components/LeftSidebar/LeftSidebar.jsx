"use client";
import React from "react";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import LeftAccordian from "../LeftAccordian/LeftAccordian";
const LeftSidebar = ({ show }) => {
  return (
    <>
      <div className="hidden md:block  xl:w-[23%] bg-black border-t-[1px] border-solid border-[#1D1D1D] min-h-[90vh]">
        <div className="flex flex-col w-[95%] mx-auto py-[30px]">
          <div className="flex w-full flex-col items-center">
            <Tabs aria-label="Options">
              <Tab key="pages" title="Pages">
                <div className="border-t-[1px] border-solid border-[#262626]">
                  <LeftAccordian />
                </div>
              </Tab>
              <Tab key="layer" title="Layer">
                <Card>
                  <CardBody>Layers</CardBody>
                </Card>
              </Tab>
              <Tab key="assets" title="Assets">
                <Card>
                  <CardBody>Assets</CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      {show && (
        <div className="block md:hidden w-[300px] bg-black border-t-[1px] border-solid border-[#1D1D1D] min-h-[100vh] z-10">
          <div className="flex flex-col w-[95%] mx-auto py-[30px]">
            <div className="flex  flex-col items-center  w-[280px]  ">
              <Tabs aria-label="Options">
                <Tab key="pages" title="Pages">
                  <div className="border-t-[1px] border-solid border-[#262626] ">
                    <LeftAccordian />
                  </div>
                </Tab>
                <Tab key="layer" title="Layer">
                  <div className="border-t-[1px] border-solid border-[#262626]  px-[5px] ">
                    <div className="flex bg-[#1D1D1D] text-white rounded-lg px-[15px] py-[10px] text-[14px] gap-[5px] items-center">
                      Layer
                    </div>
                  </div>
                </Tab>
                <Tab key="assets" title="Assets">
                  <Card>
                    <CardBody>Assets</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
