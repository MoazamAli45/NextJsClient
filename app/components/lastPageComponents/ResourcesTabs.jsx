"use client";
import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ResourcesCard from "./ResourcesCard";
import pic1 from "@/public/resources/pic1.png";
import pic2 from "@/public/resources/pic2.png";
import pic3 from "@/public/resources/pic3.png";
import pic4 from "@/public/resources/pic4.png";
const ResourcesTabs = () => {
  const [btn, setBtn] = useState("all");

  // Content for each tab
  const tabContents = [
    {
      title: "How to teach your old model new tricks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic velit nostrum, autem assumenda iure reprehenderit quibusdam possimus dignissimos dolore iusto molestias doloribus laboriosam perspiciatis obcaecati qui fuga placeat rerum!",
      author: "Josh Tobin",
      date: "April  11, 2023",
      pic: pic1,
    },
    {
      title: "Why do ML Projects Fail?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic velit nostrum, autem assumenda iure reprehenderit quibusdam possimus dignissimos dolore iusto molestias doloribus laboriosam perspiciatis obcaecati qui fuga placeat rerum!",
      author: "Visoki Cheung",
      date: "April 02  2023",
      pic: pic2,
    },
    {
      title: "How do people operationalize Machine Learning in 2023?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic velit nostrum, autem assumenda iure reprehenderit quibusdam possimus dignissimos dolore iusto molestias doloribus laboriosam perspiciatis obcaecati qui fuga placeat rerum!",
      author: "Kireet Agarwal",
      date: "March 23,2023",
      pic: pic3,
    },
    {
      title:
        "Active Surrogate Estimators:How many labels do you really need to approximate model performance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic velit nostrum, autem assumenda iure reprehenderit quibusdam possimus dignissimos dolore iusto molestias doloribus laboriosam perspiciatis obcaecati qui fuga placeat rerum!",
      author: "Josh Munech",
      date: "March 19,2023",
      pic: pic4,
    },
    {
      title: "How to teach your old model new tricks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic velit nostrum, autem assumenda iure reprehenderit quibusdam possimus dignissimos dolore iusto molestias doloribus laboriosam perspiciatis obcaecati qui fuga placeat rerum!",
      author: "Josh Tobin",
      date: "April  11, 2023",
      pic: pic1,
    },
    {
      title: "Why do ML Projects Fail?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic velit nostrum, autem assumenda iure reprehenderit quibusdam possimus dignissimos dolore iusto molestias doloribus laboriosam perspiciatis obcaecati qui fuga placeat rerum!",
      author: "Visoki Cheung",
      date: "April 02  2023",
      pic: pic2,
    },
    {
      title: "How do people operationalize Machine Learning in 2023?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic velit nostrum, autem assumenda iure reprehenderit quibusdam possimus dignissimos dolore iusto molestias doloribus laboriosam perspiciatis obcaecati qui fuga placeat rerum!",
      author: "Kireet Agarwal",
      date: "March 23,2023",
      pic: pic3,
    },
    {
      title:
        "Active Surrogate Estimators:How many labels do you really need to approximate model performance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic velit nostrum, autem assumenda iure reprehenderit quibusdam possimus dignissimos dolore iusto molestias doloribus laboriosam perspiciatis obcaecati qui fuga placeat rerum!",
      author: "Josh Munech",
      date: "March 19,2023",
      pic: pic4,
    },
  ];

  return (
    <>
      {" "}
      <div className="flex sm:justify-between sm:flex-row flex-col items-center justify-center border-b-2 border-gray-400 pb-[30px] ">
        <div className="flex items-center  gap-[5px] flex-wrap ">
          <span className="font-medium">Filter:</span>
          <button
            onClick={() => setBtn("all")}
            className={`text-[12px] font-[600] py-[10px]    border-[1.5px] border-gray-500 rounded-3xl px-[25px] py-[5px]" ${
              btn === "all" && "  bg-black border-none text-white "
            }
           `}
          >
            All
          </button>
          <button
            onClick={() => setBtn("artificial")}
            className={`text-[12px] font-[600] py-[10px]    border-[1.5px] border-gray-500 rounded-3xl px-[25px] py-[5px]" ${
              btn === "artificial" && "  bg-black border-none text-white "
            }
           `}
          >
            Artificial Intelligence
          </button>
          <button
            onClick={() => setBtn("developer")}
            className={`text-[12px] font-[600] py-[10px]    border-[1.5px] border-gray-500 rounded-3xl px-[25px] py-[5px]" ${
              btn === "developer" && "  bg-black border-none text-white "
            }
           `}
          >
            Developer Platform
          </button>
          <button
            onClick={() => setBtn("enterprise")}
            className={`text-[12px] font-[600] py-[10px]    border-[1.5px] border-gray-500 rounded-3xl px-[25px] py-[5px]" ${
              btn === "enterprise" && "  bg-black border-none text-white "
            }
           `}
          >
            Enterprise Software
          </button>
          <button
            onClick={() => setBtn("it")}
            className={`text-[12px] font-[600] py-[10px]    border-[1.5px] border-gray-500 rounded-3xl px-[25px] py-[5px]" ${
              btn === "it" && "  bg-black border-none text-white "
            }
           `}
          >
            Information Technology
          </button>
          <button
            onClick={() => setBtn("seo")}
            className={`text-[12px] font-[600] py-[10px]    border-[1.5px] border-gray-500 rounded-3xl px-[25px] py-[5px]" ${
              btn === "seo" && "  bg-black border-none text-white "
            }
           `}
          >
            Search Engine
          </button>
        </div>
        <div className="sm:flex gap-[5px] hidden ">
          <span className="font-medium text-gray-500">Search</span>
          <FiSearch className="w-[20px] h-[20px] text-gray-500" />
        </div>
      </div>
      {/* Display content based on the selected tab */}
      {btn === "all" && (
        <div className="py-[20px] my-[20px] grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[10px] gap-y-[15px]">
          {tabContents.map((content, index) => (
            <ResourcesCard
              key={index}
              title={content.title}
              description={content.description}
              author={content.author}
              date={content.date}
              pic={content.pic}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ResourcesTabs;
