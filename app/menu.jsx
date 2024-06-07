"use client";
import { HiUser, HiHome, HiEnvelope, HiViewColumns } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Contact", path: "/contact", icon: <HiEnvelope /> },
  { name: "Projects", path: "/projects", icon: <HiViewColumns /> },
];

export default function Menu() {
  const pathname = usePathname();
  return (
    <nav
      className="flex flex-col items-center
      xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto
       xl:right-[2%] z-50 top-0 xl:w-16 
      xl:max-w-md xl:h-screen w-full"
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between opacity-4
      xl:justify-center gap-y-6 px-4 md:px-40 xl:px-4 text-white xl:w-[50px] h-[50px] xl:h-auto
      py-8 xl:py-4 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
      >
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              rel="preload"
              className={`${
                link.path === pathname && "text-red-600"
              } cursor-pointer hover:text-red-600 transition-all duration-300`}
              key={index}
            >
              <div className="group flex items-center">
                {link.icon}
                <div
                  className="hidden absolute text-black right-[120%]
                 bg-white rounded-[3px] group-hover:flex"
                >
                  {link.name}
                </div>
                <div
                  className="hidden border-solid border-l-white border-l-8 
                border-y-transparent border-y-[6px] border-r-0 absolute right-[103%] xl:group-hover:flex"
                ></div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
