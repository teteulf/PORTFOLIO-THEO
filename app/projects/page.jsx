"use client";

import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useTransition } from "../context/transitionContext";
import { useLayoutEffect } from "react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Projects() {
  const { setIsOpen } = useTransition();
  useLayoutEffect(() => {
    setIsOpen(false);
  }, []);
  return (
    <main className="text-white flex flex-col gap-4 md:gap-0 md:flex-row w-full h-full items-center justify-center">
      <motion.section
        className="flex flex-col items-center flex-initial md:w-[550px]"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 2 }}
      >
        <h1 className="font-bold text-[25px] md:text-[45px]">
          My Projects
          <strong className="text-[25px] md:text-[45px] text-red-600">.</strong>
        </h1>
        <p className=" opacity-50 text-center leading-6 md:leading-normal md:text-left text-[14px] w-[80%] md:w-[400px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
          voluptatibus omnis corrupti quia accusantium error magni distinctio
          eos, rerum explicabo labore eveniet beatae, minima magnam, pariatur
          impedit ullam velit veniam.
        </p>
      </motion.section>

      <motion.section
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 2 }}
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
                className=""
              >
                <div className="flex flex-col gap-8 md:gap-16 md:-mt-12">
                  <h1 className="ml-12 flex items-center gap-2">
                    <BiCameraMovie size={30} className="text-red-600" /> Movie
                    Api
                  </h1>
                  <p className="opacity-20 text-[14px] ml-12 flex w-[160px]">
                    Find ANY movie existent, and the informations about
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
                    className="ml-10 -rotate-45 group-hover:rotate-[40px] group-hover:text-red-600 transition duration-200"
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
