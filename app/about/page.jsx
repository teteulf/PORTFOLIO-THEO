"use client";

import { useState } from "react";
import {
  AboutInfo,
  EducationInfo,
  ExperienceInfo,
} from "../components/aboutInfo";

const aboutData = [
  { name: "skills", info: <AboutInfo /> },
  { name: "Education", info: <EducationInfo /> },
  { name: "Experience", info: <ExperienceInfo /> },
];

export default function about() {
  const [index, setIndex] = useState(0);
  return (
    <main className="flex w-full h-full items-center justify-center">
      <section>
        <h1></h1>
        <p></p>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="flex gap-8 ">
          {aboutData.map((item, itemIndex) => (
            <div
              className={`${
                index === itemIndex &&
                "text-red-600 after:bg-red-600 after:transition-all after:duration-300 after:w-full"
              } text-white relative after:w-8 after:h-[2px] after:absolute after:bg-white after:bottom-0 after:left-0 cursor-pointer`}
              key={itemIndex}
              onClick={() => setIndex(itemIndex)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="text-white">{aboutData[index].info}</div>
      </section>
    </main>
  );
}
