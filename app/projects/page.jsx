import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
import Link from "next/link";

export default function projects() {
  return (
    <main className="text-white flex w-full h-full items-center justify-center">
      <section className="flex flex-col items-center flex-initial mt-0">
        {" "}
        <h1 className="font-bold text-[45px]">
          {" "}
          My Projects<strong className="text-[45px] text-red-600">.</strong>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
          voluptatibus omnis corrupti quia accusantium error magni distinctio
          eos, rerum explicabo labore eveniet beatae, minima magnam, pariatur
          impedit ullam velit veniam.
        </p>
      </section>
      <section className="flex gap-2">
        <Link
          href="https://api-movies-git-main-teteulfs-projects.vercel.app/"
          target="blank"
        >
          <div className="bg-[#24246046] overflow-hidden hover:bg-[#40409646] rounded-lg h-[350px] w-[250px] relative flex flex-col items-start justify-center  cursor-pointer group ">
            <div className="flex flex-col gap-16 -mt-12">
              <h1 className="ml-12 flex items-center gap-2">
                <BiCameraMovie size={30} className="text-red-600" /> Movie Api
              </h1>
              <p className="opacity-20 text-[14px] ml-12 flex w-[160px]">
                Find ANY movie existent , and the informations about
              </p>
              <div className="absolute  w-[100px] h-[205px] right-2 opacity-60 -bottom-[100px] group-hover:bottom-[-50px] transition-all duration-500 ">
                <Image
                  src={"/ApiProject.png"}
                  fill
                  priority
                  objectFit="cover"
                  sizes="max-inline-size: 100%"
                  className=""
                />
              </div>

              <IoIosArrowRoundForward
                size={50}
                className="ml-10 -rotate-45 group-hover:rotate-[40px] group-hover:text-red-600 transition duration-200"
              />
            </div>
          </div>
        </Link>
        <div className="bg-[#2d2d78] opacity-20 rounded-lg h-[350px] w-[250px]"></div>
        <div className="bg-[#2d2d78] opacity-20 rounded-lg h-[350px] w-[250px]"></div>
      </section>
    </main>
  );
}
