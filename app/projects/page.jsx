"use client";

import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useTransition } from "../context/transitionContext";
import { useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Projects() {
  const { setIsOpen, language, variants } = useTransition();
  useLayoutEffect(() => {
    setIsOpen(false);
  }, []);
  return (
    <main className="text-white flex flex-col gap-4 md:gap-0 md:flex-row w-full h-full items-center justify-center">
      <motion.section
        className="flex flex-col items-center text-center flex-initial md:w-[550px]"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 2 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={uuidv4()}
            initial="initial"
            exit="exit"
            animate="animate"
            variants={variants}
          >
            <h1 className="font-bold text-[25px] md:text-[45px]">
              {language === "En" ? "My Projects" : "Meus Projetos"}
              <strong className="text-[25px] md:text-[45px] text-red-600">
                .
              </strong>
            </h1>
            <p className=" opacity-50 text-center leading-6 md:leading-normal md:text-left text-[14px] md:w-[400px]">
              {language === "En"
                ? "In this section, you will find a selection of my most recent creations. Each project was developed carefully, using the most current and advanced technologies present in the market, in order to ensure modern and efficient solutions."
                : "Aqui, você encontrará uma seleção das minhas criações mais recentes.  Cada projeto foi cuidadosamente desenvolvido utilizando as tecnologias mais atuais mercado, garantindo soluções modernas e eficientes."}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      <motion.section
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 1 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          className="w-[250px] h-[260px] md:h-auto md:w-[380px] flex items-center justify-center"
          id="swiper"
        >
          <SwiperSlide>
            <div className="bg-[#1e1e4746] hover:bg-[#40409646] rounded-lg h-[220px] md:h-[350px] w-[200px] md:w-[250px] relative flex flex-col ml-[28px] md:ml-16 items-center md:items-start justify-center cursor-pointer group">
              <Link
                href="https://api-movies-git-main-teteulfs-projects.vercel.app/"
                target="_blank"
              >
                <div className="flex flex-col gap-8 md:gap-16 md:-mt-12 items-center justify-center md:items-start md:justify-start">
                  <h1 className="md:ml-12 flex items-center gap-2">
                    <BiCameraMovie size={30} className="text-red-600" />{" "}
                    {language === "En" ? "Movie Api" : "Api de Filmes"}
                  </h1>
                  <p className="opacity-20 text-[14px] md:ml-12 flex md:w-[160px] w-[90%] text-center md:text-left">
                    {language === "En"
                      ? "Find ANY movie existent, and the informations about"
                      : "Encontre QUALQUER filme existente, e as inforamções sobre"}
                  </p>
                  <div className="absolute invisible md:visible w-[100px] h-[205px] right-2 opacity-60 -bottom-[100px] group-hover:bottom-[-50px] transition-all duration-500">
                    <Image
                      src={"/ApiProject.png"}
                      fill
                      priority
                      objectFit="cover"
                      sizes="max-inline-size: 100%"
                    />
                  </div>
                  <IoIosArrowRoundForward
                    size={50}
                    className="md:ml-10 -rotate-45 group-hover:rotate-[40px] group-hover:text-red-600 transition duration-200"
                  />
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#40409646] opacity-20 ml-[28px] md:ml-16 rounded-lg h-[220px] md:h-[350px] w-[200px] md:w-[250px]  "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#40409646] opacity-20 ml-[28px] md:ml-16 rounded-lg h-[220px] md:h-[350px] w-[200px] md:w-[250px] "></div>
          </SwiperSlide>
        </Swiper>
      </motion.section>
    </main>
  );
}
