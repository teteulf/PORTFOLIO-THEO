"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import ParticlesComponent from "./components/particles";
import { motion, AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import { useTransition } from "./context/transitionContext";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const { setIsOpen, language, variants } = useTransition();
  console.log(uuidv4);

  useLayoutEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <ParticlesComponent id="particles" />
      <main className="relative h-full w-full flex items-center justify-center text-white">
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
                exit="exit"
                variants={variants}
                transition={{ duration: 1.1 }}
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
                variants={variants}
                transition={{ duration: 1.1 }}
              >
                {language === "En"
                  ? "With a solid technical knowledge and a creative vision, I am committed to developing innovative solutions that not only work, but also provide an exceptional user experience."
                  : "Com um sólido conhecimento técnico e uma visão criativa, estou comprometido em desenvolver soluções inovadoras que não apenas funcionem , mas também proporcionem uma experiência excepcional ao usuário."}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                className="relative flex items-center justify-center "
                key={uuidv4()}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                variants={variants}
                transition={{ duration: 1.1 }}
              >
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
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>
        <AnimatePresence mode="wait">
          <motion.div
            key={uuidv4()}
            className="fixed flex-grow bottom-0 xl:right-[4%] invisible xl:visible"
            initial={{ x: "10vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: "10vw",
              opacity: 0,
              transition: { duration: 1 },
            }}
            transition={{ delay: 0, duration: 1 }}
          >
            <Image
              src={"/i.png"}
              width={600}
              height={600}
              alt="Apresentation image"
              className="w-[47vw]"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}
