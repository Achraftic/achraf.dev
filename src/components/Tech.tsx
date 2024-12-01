import React from "react";
import { FaReact, FaLaravel, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango, SiTailwindcss } from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact  /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "React", icon: <FaReact /> },
];

const Tech = () => {
  return (
    <div id="technologie" className="section">
     
      <div className="flex gap-4 flex-wrap sm:py-4 px-6 justify-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="border border-opacity-10 p-4 rounded-md border-slate-900 text-zinc-900 dark:text-zinc-800 hover:border-purple-700 hover:text-purple-600 transition duration-200 ease-in-out cursor-pointer text-4xl w-max"
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
