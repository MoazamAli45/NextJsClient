import React from "react";
import Header from "../components/lastPageComponents/Header";
import ResourcesTabs from "../components/lastPageComponents/ResourcesTabs";

const page = () => {
  return (
    <>
      <Header />
      <div className="mx-[10px] md:mx-[2rem] border-t-[2px] border-solid border-gray-400 my-[20px]">
        <h1 className="text-[30px] text-black my-[25px] font-medium">
          Updates & research
        </h1>
        <ResourcesTabs />
      </div>
    </>
  );
};

export default page;
