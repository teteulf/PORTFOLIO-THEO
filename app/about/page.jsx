"use client";

import { useLayoutEffect, useState } from "react";
import { IoSchool } from "react-icons/io5";
import {
  AboutInfo,
  EducationInfo,
  ExperienceInfo,
} from "../components/aboutInfo";
import { useTransition } from "../context/transitionContext";
import { motion } from "framer-motion";

const aboutData = [
  { name: "skills", info: <AboutInfo /> },
  { name: "Education", info: <EducationInfo /> },
  { name: "Experience", info: <ExperienceInfo /> },
];

export default function About() {
  const [index, setIndex] = useState(0);
  const { setIsOpen } = useTransition();
  useLayoutEffect(() => {
    setIsOpen(false);
  }, []);
  return (
    <main className="flex flex-col xl:flex-row w-full h-full items-center justify-center gap-4 md:gap-16 ">
      <motion.section
        className="flex flex-col items-center justify-center text-center xl:text-left"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 2 }}
      >
        <h1 className=" text-[30px] md:text-[50px] xl:text-[60px] text-white font-bold">
          Captivating <strong className="text-red-600">stories</strong>.
        </h1>
        <p className=" leading-8 md:leading-normal w-[80%] max-w-[550px] xl:max-w-[100%] xl:w-[550px] opacity-50 text-white text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia
          enim voluptate perferendis. Illum recusandae perferendis officiis
          autem maxime repellat delectus labore sequi. Veniam repellendus cumque
          placeat dolor vero perspiciatis.
        </p>
        <div className="mt-10 xl:mt-20 items-center hidden  md:flex  md:gap-6">
          <div className="flex flex-col justify-center border-r-[0.5px] border-gray-500 border-opacity-50 xl:max-w-[130px] max-h-[110px] md:pr-10">
            <div className="text-[35px] text-red-600 font-extrabold">10+</div>
            <p className="text-white text-[10px] max-w-[100px] uppercase tracking-[1px] leading-[1.4]">
              technologies that I work
            </p>
          </div>
          <div className="flex flex-col justify-center border-r-[0.5px] border-gray-500 border-opacity-50 xl:max-w-[130px] max-h-[110px] md:pr-10">
            <div className="text-[35px] text-red-600 font-extrabold">15+</div>
            <p className="text-white max-w-[100px] uppercase text-[10px] tracking-[1px] leading-[1.4]">
              course certificates
            </p>
          </div>
          <div className="flex flex-col justify-center border-r-[0.5px] border-gray-500 border-opacity-50 xl:max-w-[130px] max-h-[110px] md:pr-10">
            <div className="text-[35px] text-red-600 font-extrabold">150+</div>
            <p className="text-white max-w-[100px] uppercase text-[10px] tracking-[1px] leading-[1.4]">
              hours of course
            </p>
          </div>
          <div className="flex flex-col justify-center xl:max-w-[130px] max-h-[110px]">
            <div className="text-[35px] text-red-600 font-extrabold">4+</div>
            <p className="text-white max-w-[100px] uppercase text-[10px] tracking-[1px] leading-[1.4]">
              projects completed
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="flex flex-col items-center xl:items-start justify-center relative gap-8 xl:min-w-[412px]"
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 1 }}
      >
        <div className="flex gap-4 xl:gap-12">
          {aboutData.map((item, itemIndex) => (
            <div
              className={`${
                index === itemIndex ? "text-red-600" : "text-white"
              } relative cursor-pointer`}
              key={itemIndex}
              onClick={() => setIndex(itemIndex)}
            >
              {item.name}
              <div
                className={`${
                  index === itemIndex
                    ? "bg-red-600 transition-all w-[100%] duration-500 h-[2px]"
                    : "w-8 h-[2px] absolute bg-white bottom-0 left-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex text-white relative min-h-[150px] xl:min-w-[300px] ">
          {aboutData[index].info}
        </div>
        <a className="hidden md:flex xl:flex-start w-[400px]  items-center justify-center  xl:justify-start text-[20px] text-gray-400 cursor-pointer hover:text-gray-600 group">
          Download my CV -{" "}
          <IoSchool
            className="ml-2 text-gray-400 group-hover:text-gray-600"
            size={30}
          />{" "}
        </a>
      </motion.section>
    </main>
  );
}
