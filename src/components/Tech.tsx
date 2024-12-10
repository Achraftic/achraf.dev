import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaLaravel, FaJs, FaHtml5, FaCss3, FaDocker } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango, SiMysql, SiPandas, SiPrisma, SiScikitlearn, SiTailwindcss } from "react-icons/si";
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
  { name: "SiPandas", icon: <SiPandas /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "TypeScript", icon: <BiLogoTypescript /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "SiMysql", icon: <SiMysql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
];

const Tech = () => {
  return (
  
     
      <div className="flex gap-2 flex-wrap ">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="border p-3 rounded-md border-zinc-900 dark:border-zinc-800 text-zinc-900 dark:text-zinc-400 hover:border-primary hover:text-primary dark:hover:text-primary transition duration-200 ease-in-out cursor-pointer text-2xl w-max backdrop-blur-3xl border-opacity-5 dark:hover:border-primary "
          >
            {tech.icon}
          </div>
        ))}
      </div>
  
  );
};

export default Tech;
