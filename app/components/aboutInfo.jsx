"use-client";

import { IoLogoJavascript, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { FaHtml5, FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents, SiFramer } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "../context/transitionContext";
import { uuid } from "uuidv4";

const iconsData = [
  { icon: <IoLogoJavascript size={20} />, popUp: "JavaScript" },
  { icon: <IoLogoCss3 size={20} />, popUp: "Css" },
  { icon: <FaHtml5 size={20} />, popUp: "Html" },
  { icon: <IoLogoReact size={20} />, popUp: "React , ReactNative" },
  { icon: <SiTailwindcss size={20} />, popUp: "TailwindCss" },
  { icon: <SiStyledcomponents size={20} />, popUp: "StyledComponents" },
  { icon: <FaGithub size={20} />, popUp: "GitHub" },
  { icon: <FaGitAlt size={20} />, popUp: "Git" },
  { icon: <FaNodeJs size={20} />, popUp: "NodeJs" },
  { icon: <SiFramer size={20} />, popUp: "Framer-motion" },
  { icon: <RiNextjsFill size={20} />, popUp: "NextJs" },
  { icon: <BiLogoTypescript size={20} />, popUp: "TypeScript" },
];

export function AboutInfo() {
  const { language, skillKey } = useTransition();
  const [index, setIndex] = useState(null);
  const firstSixIcons = iconsData.slice(0, 6);
  const remainingIcons = iconsData.slice(6);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="flex flex-col gap-6 "
          key={skillKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center text-[17px] gap-4 xl:gap-[4px]">
            <div className={`opacity-70 font-extralight`}>
              {language === "En"
                ? "Web development -"
                : "Desenvolvimento web -"}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                {firstSixIcons.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="cursor-pointer flex flex-col items-center justify-center font-extralight"
                    onMouseEnter={() => setIndex(itemIndex)}
                    onMouseLeave={() => setIndex(null)}
                  >
                    {item.icon}
                    <div
                      className={`${
                        itemIndex === index ? "opacity-60" : "opacity-0"
                      } absolute bg-white text-black -mt-14 rounded-[4px] px-2 transition duration-700`}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {item.popUp}
                      <span
                        className={`absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white left-1/2 transform -translate-x-1/2 -bottom-[6px]`}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                {remainingIcons.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col items-center justify-center cursor-pointer"
                    onMouseEnter={() => setIndex(itemIndex + 6)}
                    onMouseLeave={() => setIndex(null)}
                  >
                    {item.icon}
                    <div
                      className={`${
                        itemIndex + 6 === index ? "opacity-60" : "opacity-0"
                      } absolute font-extralight bg-white text-black mt-16 rounded-[4px] px-2 transition duration-700`}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {item.popUp}
                      <span
                        className={`absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white left-1/2 transform -translate-x-1/2 -top-[6px]`}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="opacity-70 text-[17px] flex gap-2 font-extralight">
            <div>
              {language === "En"
                ? "English level - advanced"
                : "Nivel de inglês - avançado"}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export function EducationInfo() {
  const { language, educationKey } = useTransition();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex flex-col gap-6 w-full"
        key={educationKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="text-[16px] font-extralight flex flex-col gap-4 text-center xl:text-left">
          {" "}
          <div>
            Micael Waldorf / Escola Ágora -
            {language === "En"
              ? " Complete high school"
              : ` Ensino médio 
              completo`}
          </div>
          <div>Cultura Inglesa - Advanced 1 - 2016 / 2020</div>
          <div>
            Alura -{" "}
            {language === "En" ? " Front end training" : " Formação front end"}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ExperienceInfo() {
  const { language, experienceKey } = useTransition();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex flex-col gap-4 text-[16px] font-extralight text-center xl:text-left"
        key={experienceKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div>
          Mix Conceito - {language === "En" ? "Seller" : "Vendedor"} - 2017 /
          2019{" "}
        </div>
        <div>
          Ser-afim restaurant - {language === "En" ? "Waiter" : "Garçom"} - 2019
          / 2020
        </div>
        <div>
          Tea House - {language === "En" ? "Attendant" : "Atendente"} - 2020 /
          2022
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
