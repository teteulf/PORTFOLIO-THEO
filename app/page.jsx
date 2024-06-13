"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import ParticlesComponent from "./components/particles";
import { motion, AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import { useTransition } from "./context/transitionContext";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid"; // Importando uuidv4

export default function Home() {
  const { setIsOpen, language, variants } = useTransition();

  useLayoutEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <main className="relative h-full w-full flex items-center justify-center text-white">
        <ParticlesComponent id="particles" />
        <motion.section
          className="flex items-center justify-center xl:mt-[5%] xl:-ml-[38%]"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-50%", opacity: 0 }}
          transition={{ delay: 0, duration: 1.5 }}
        >
          <div className="flex flex-col w-[95%] md:w-[390px] text-center xl:text-left">
            <AnimatePresence mode="wait">
              <motion.h1
                className={`leading-tight${
                  language === "En"
                    ? "text-[25px] md:text-[40px]"
                    : "text-[25px] md:text-[35px]"
                }`}
                key={uuidv4()}
                initial="initial"
                animate="animate"
                transition="transition"
                variants={variants}
              >
                {language === "En"
                  ? "Transforming ideas into"
                  : "Transformando ideias em"}
                <strong className="text-red-600">
                  {language === "En"
                    ? " Digital reality"
                    : " Realidade digital"}
                </strong>
              </motion.h1>

              <motion.p
                key={uuidv4()}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={variants}
              >
                {language === "En"
                  ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore velit accusantium error maxime praesentium optio ex cum quia voluptatem mollitia delectus aut itaque in exercitationem dolores eum nesciunt corrupti."
                  : "Teste em para ver se esta funcionando ou nao a linguagem, tlgd meu brother."}
              </motion.p>
            </AnimatePresence>
            <div className="relative flex items-center justify-center ">
              <div className="animate-spin-slow min-w-[150px]">
                <Image
                  src={"/projects.png"}
                  width={150}
                  height={150}
                  alt="project link"
                />
              </div>
              <div className="absolute hover:translate-x-4 transition duration-1000 cursor-pointer min-w-[35px]">
                <Link href="/projects">
                  <FaArrowRightLong color="red" size={35} />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="fixed flex-grow bottom-0 xl:right-[4%] invisible xl:visible"
          initial={{ x: "50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "200vw", opacity: 0 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <Image
            src={"/i.png"}
            width={600}
            height={600}
            alt="Apresentation image"
            className="w-[47vw]"
          />
        </motion.div>
      </main>
    </>
  );
}
