"use-client";

import { IoLogoJavascript, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { FaHtml5, FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents, SiFramer } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [index, setIndex] = useState(null);
  const firstSixIcons = iconsData.slice(0, 6);
  const remainingIcons = iconsData.slice(6);
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center text-[18px] gap-4">
          <div className="opacity-50">Web development -</div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              {firstSixIcons.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="cursor-pointer flex flex-col items-center justify-center"
                  onMouseEnter={() => setIndex(itemIndex)}
                  onMouseLeave={() => setIndex(null)}
                >
                  {item.icon}
                  <div
                    className={`${
                      itemIndex === index ? "opacity-60" : "opacity-0"
                    } absolute bg-white text-black -mt-16 rounded-[4px] px-2 transition duration-700`}
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
                    } absolute bg-white text-black mt-16 rounded-[4px] px-2transition duration-700`}
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
      </div>
    </>
  );
}

export function EducationInfo() {
  return (
    <div className="text-[18px]">
      {" "}
      <div> aasdasdasdasdasdasdasdasdasdasdas</div>;
    </div>
  );
}

export function ExperienceInfo() {
  return <div className="text-[18px]">asddasdasdadasdasdasdasdasdasdass</div>;
}
