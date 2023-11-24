import React from "react";
import Image from "next/image";
import pic1 from "@/public/resources/pic1.png";
const ResourcesCard = (props) => {
  return (
    <div className="flex flex-col  gap-[10px] ">
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden ">
        <Image
          src={props.pic}
          alt={props.title}
          fill
          priority
          className="absolute object-cover w-full h-full rounded-xl border-[6px] border-[#ccd0c2]"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[18px] font-[600] text-black">{props.title}</h1>
        <p className="text-[14px] text-gray-400 line-clamp-2">
          {props.description}
        </p>
        <div className="flex items-center gap-[10px] my-[5px]">
          <span
            className={
              "text-[12px] font-[600] border-[2px] border-gray-500 text-gray-500 rounded-3xl px-[10px] py-[6px]"
            }
          >
            {props.author}
          </span>
          <span
            className={
              "text-[12px] font-[600] border-[2px] border-gray-500 text-gray-500 rounded-3xl px-[10px] py-[6px]"
            }
          >
            {props.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
