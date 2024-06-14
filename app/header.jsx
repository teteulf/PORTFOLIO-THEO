"use client";

import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { useTransition } from "./context/transitionContext";
import Image from "next/image";

export default function HeaderLayout() {
  const { language, setLanguage } = useTransition();
  return (
    <>
      <div className="mt-4 md:mt-0 fixed top-0 left-0 right-0 flex flex-col-reverse max-w-[100vw] xl:flex-row justify-center items-center md:gap-[15%] z-10">
        <div className="hidden md:flex text-[30px] md:text-[40px] text-gray-200 mt:2 xl:mt-4">
          <h1 className="text-[30px]">
            <strong className="tracking-wider">theo</strong> lefevre
            <strong className="text-red-600">.</strong>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <p className="font-bold text-white">En</p>
          <div className="flex relative">
            <div
              onClick={() => {
                if (language === "En") {
                  setLanguage("Pt");
                } else {
                  setLanguage("En");
                }
                console.log(language);
              }}
              className={`bg-red-600 w-[50px] h-[20px] cursor-pointer rounded-xl after:absolute after:rounded-full after:bg-white after:w-[16px] after:h-[16px] after:mt-[2px] after:transition-all after:duration-500 ${
                language === "Pt" ? "after:ml-[62%]" : " after:ml-[2px]"
              } `}
            ></div>
          </div>
          <p className="font-bold text-white">Pt</p>
        </div>

        <div className="flex md:justify-center text-teal-300 gap-10 md:pt-4 text-xl">
          <a>
            <BsInstagram className="cursor-pointer hover:animate-bounce hover:text-red-600" />
          </a>
          <a>
            <FaWhatsapp className="cursor-pointer hover:animate-bounce hover:text-red-600" />
          </a>
          <a>
            <RiDiscordLine className="cursor-pointer hover:animate-bounce hover:text-red-600" />
          </a>
          <a>
            <SlSocialLinkedin className="cursor-pointer hover:animate-bounce hover:text-red-600" />
          </a>
        </div>
      </div>
    </>
  );
}
