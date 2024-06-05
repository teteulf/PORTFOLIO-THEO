import { IoLogoJavascript, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { FaHtml5, FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents, SiFramer } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export function AboutInfo() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          {" "}
          Web development : <IoLogoJavascript /> <IoLogoCss3 /> <FaHtml5 />{" "}
          <IoLogoReact /> <SiTailwindcss /> <SiStyledcomponents /> <FaGithub />{" "}
          <FaGitAlt /> <FaNodeJs /> <SiFramer /> <RiNextjsFill />{" "}
          <BiLogoTypescript />
        </div>
        <div></div>
      </div>
    </>
  );
}

export function EducationInfo() {
  return <div> aasdasdasdasdasd</div>;
}

export function ExperienceInfo() {
  return <div>asddasdasdadasd</div>;
}
