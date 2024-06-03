"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import ParticlesComponent from "./components/particles";

export default function Home() {
  return (
    <>
      <main className="relative h-full w-full flex items-center justify-center text-white">
        <ParticlesComponent id="particles" />
        <section className="flex items-center justify-center mt-[5%] xl:-ml-[38%]">
          <div className="flex flex-col w-[390px] text-center xl:text-left">
            <h1 className="text-[40px]">
              Transforming ideas into
              <strong className="text-red-600"> Digital reality</strong>
            </h1>
            <p className="opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur inventore velit accusantium error maxime praesentium
              optio ex cum quia voluptatem mollitia delectus aut itaque in,
              exercitationem dolores eum nesciunt corrupti!
            </p>

            <div className="relative flex items-center justify-center ">
              <div className="animate-spin-slow min-w-[150px]">
                <Image src={"/projects.png"} width={150} height={150} />
              </div>
              <div className="absolute hover:translate-x-4 transition duration-1000 cursor-pointer min-w-[35px]">
                <FaArrowRightLong color="red" size={35} />
              </div>
            </div>
          </div>
        </section>
        <div className="fixed bottom-0 right-[4%] invisible xl:visible">
          <Image
            src={"/i.png"}
            width={600}
            height={600}
            alt="Apresentation image"
            className="h-auto w-auto "
          />
        </div>
      </main>
    </>
  );
}
