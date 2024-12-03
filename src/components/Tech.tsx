import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaLaravel, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango, SiMysql, SiPrisma, SiScikitlearn, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const technologies = [
  { name: "React", icon: <FaReact  /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "TypeScript", icon: <BiLogoTypescript /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "SiMysql", icon: <SiMysql /> },
];

const Tech = () => {
  return (
  
     
      <div className="flex gap-2 flex-wrap ">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="border border-opacity-10 p-3 rounded-md border-slate-900 text-zinc-900 dark:text-zinc-400 hover:border-primary hover:text-primary dark:hover:text-primary transition duration-200 ease-in-out cursor-pointer text-2xl w-max backdrop-blur-3xl"
          >
            {tech.icon}
          </div>
        ))}
      </div>
  
  );
};

export default Tech;
