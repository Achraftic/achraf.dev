import Tech from "@/components/Tech";
import Image from "next/image";
import img from "../../public/1695851354840-Standard.png";
import { Button } from "@/components/ui/button";
import { HiDownload } from "react-icons/hi";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { GrGithub } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";


export default function Home() {
  return (
    <div className="max-w-4xl mx-auto max-md:p-5">
      {/* Header Section */}
      <header className="relative w-max mx-auto my-7 py-2.5 px-5">
        <div className="bg-white dark:bg-zinc-800/60 bg-opacity-90  shadow-lg shadow-zinc-100/50 dark:shadow-zinc-900 absolute inset-0 rounded-full -z-10"></div>
        <nav className="max-w-[300px] sm:max-w-xl">
          <ul className="flex flex-wrap gap-2 text-sm max-sm:justify-center items-center">
            <li className="cursor-pointer px-2 py-1 bg-zinc-300/20 backdrop-blur-2xl text-zinc-900 dark:bg-zinc-50 font-medium rounded-full">
              Home
            </li>
            <li className="cursor-pointer px-2 py-1">About</li>
            <li className="cursor-pointer px-2 py-1">Contact</li>
            <li className="cursor-pointer px-2 py-1">Projects</li>
            <li className="cursor-pointer px-2 py-1">Tech</li>
          </ul>
        </nav>
      </header>

      {/* Introduction Section */}
      <div className="md:p-4 p-10 ">
        <div className=" flex max-md:flex-wrap items-center">
          <div className=" gap-5 flex flex-col">
            <h1 className="text-5xl max-sm:text-4xl  font-bold ">
              Hello 👋  there! I&apos;m  <span className="">Achraf</span>
            </h1>
            <div className=" gap-4 grid text-base">
              <p className="text-zinc-700 dark:text-zinc-300">
                I&apos;m a full-stack developer passionate about building products and web
                apps that can impact millions of lives.
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                As a senior software engineer with 7 years of experience, I specialize
                in crafting scalable, performance-optimized, and visually appealing
                web applications.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Button className="group" variant={"outline"}> Download Cv <HiDownload className=" group-hover:translate-y-0.5 transition duration-200 ease-in-out" /></Button>
              <div className="text-xl flex  gap-2  text-zinc-500   ">
                <span className="  backdrop-blur-3xl p-1.5 cursor-pointer hover:bg-primary transition-all ease-in-out  hover:text-zinc-50 rounded-full">

                  <CiLinkedin />
                </span>
                <span className="  backdrop-blur-3xl p-1.5 cursor-pointer hover:bg-primary transition-all ease-in-out  hover:text-zinc-50 rounded-full">
                  <GrGithub />
                </span>
                <span className="  backdrop-blur-3xl p-1.5 cursor-pointer hover:bg-primary transition-all ease-in-out  hover:text-zinc-50 rounded-full">
                  <RiInstagramLine />
                </span>
                <span className="  backdrop-blur-3xl p-1.5 cursor-pointer hover:bg-primary transition-all ease-in-out  hover:text-zinc-50 rounded-full">
                  <CiFacebook />
                </span>
                <span className="  backdrop-blur-3xl p-1.5 cursor-pointer hover:bg-primary transition-all ease-in-out  hover:text-zinc-50 rounded-full">
                  <FaWhatsapp />
                </span>
              </div>
            </div>

          </div>

          <div className="mx-auto max-md:my-5 ">
            <Image
              src={img}
              alt="John's profile picture"
              className="max-md:w-64"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Technologies Section */}
        <Tech />
      </div>
    </div>
  );
}
