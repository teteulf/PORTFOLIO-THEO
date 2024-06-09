import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import Image from "next/image";

export default function HeaderLayout() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex flex-col max-w-[100vw] xl:flex-row justify-center items-center md:gap-[35%] z-10">
        <div className="flex text-[30px] md:text-[40px] text-gray-200 mt:2 xl:mt-4">
          <Image src={"/NameLogo.png"} height={200} width={200} />
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
