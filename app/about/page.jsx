"use client";

import { useLayoutEffect, useState, useEffect } from "react";
import { IoSchool } from "react-icons/io5";
import {
  AboutInfo,
  EducationInfo,
  ExperienceInfo,
} from "../components/aboutInfo";
import { useTransition } from "../context/transitionContext";
import { AnimatePresence, motion } from "framer-motion";

const aboutData = [
  { nameEnglish: "skills", namePortuguese: "habilidades", info: <AboutInfo /> },
  {
    nameEnglish: "education",
    namePortuguese: "educação",
    info: <EducationInfo />,
  },
  {
    nameEnglish: "experience",
    namePortuguese: "experiência",
    info: <ExperienceInfo />,
  },
];

export default function About() {
  const [index, setIndex] = useState(0);
  const { setIsOpen, language, key, key2 } = useTransition();

  useLayoutEffect(() => {
    setIsOpen(false);
  }, []);
  return (
    <main className="flex flex-col xl:flex-row w-full h-full items-center justify-center gap-4 md:gap-16 ">
      <AnimatePresence mode="wait">
        <motion.section
          key={key2}
          className="flex flex-col items-center justify-center text-center xl:text-left"
          initial={{ x: "-10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-10%", opacity: 0 }}
          transition={{ delay: 0, duration: 2 }}
        >
          <h1 className=" text-[30px] md:text-[50px] xl:text-[60px] text-white font-bold">
            Captivating <strong className="text-red-600">stories</strong>.
          </h1>
          <p className=" leading-8 md:leading-normal w-[80%] max-w-[550px] xl:max-w-[100%] xl:w-[550px] opacity-50 text-white text-[14px]">
            {language === "Pt"
              ? "Olá, meu nome é Theo. Tenho 23 anos e há pouco mais de um ano comecei minha jornada no mundo da programação. Desde então, essa paixão tem crescido a cada linha de código que escrevo. Encontrei na programação uma forma de combinar lógica, criatividade e uma vontade incessante de sempre aprender!"
              : "Hi, my name is Theo. I am 23 years old and just over a year ago, I began my journey into the world of programming. Since then, this passion has grown with every line of code I write. I have found in programming a way to combine logic, creativity, and an insatiable desire to always learn!"}
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
              <div className="text-[35px] text-red-600 font-extrabold">
                150+
              </div>
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
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.section
          className="flex flex-col items-center xl:items-start justify-center relative gap-8 xl:min-w-[412px]"
          key={key}
          initial={{ x: "10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 2 }}
          exit={{ x: "10%", opacity: 0 }}
        >
          <div className="flex gap-4 xl:gap-12">
            {aboutData.map((item, itemIndex) => (
              <div
                className={`${
                  index === itemIndex ? "text-red-600" : "text-white"
                } relative cursor-pointer`}
                key={itemIndex}
                onClick={() => {
                  setIndex(itemIndex), console.log(key);
                }}
              >
                {language === "En" ? item.nameEnglish : item.namePortuguese}
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
      </AnimatePresence>
    </main>
  );
}
