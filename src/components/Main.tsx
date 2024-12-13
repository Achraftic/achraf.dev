"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiDownload } from "react-icons/hi";
import AnimatedLayout from "./AnimatedLayout";
import { HeroData, social_links } from "@/data";

export default function Main() {
    return (
        <AnimatedLayout id="Home" label="Home">
        <motion.main
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
            className="z-30 flex py-10 max-lg:flex-wrap min-h-[60vh]"
        >
            {/* Left Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="gap-5 flex flex-col"
            >
                <h1 className="sm:text-6xl text-4xl font-bold">
                    Hello 👋 there! I&apos;m <span className="text-primary">Achraf</span>
                </h1>
                <div className="gap-4 grid text-base">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-zinc-700 dark:text-zinc-300"
                    >
                        I&apos;m a full-stack developer passionate about building products and
                        web apps that can solve real-world problems.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-zinc-600 dark:text-zinc-300 max-w-screen-lg"
                    >
                     As a full-stack developer with a growing passion for development, I specialize in creating scalable, user-friendly, and performance-optimized web applications. I’m building my skills in crafting visually appealing and functional solutions.
                    </motion.p>
                </div>
                <div className="flex max-sm:flex-wrap-reverse gap-4 items-center">
                    <Button
                        className="group"
                        variant="outline"
                    >
                        Download CV{" "}
                        <HiDownload className="group-hover:translate-y-0.5 transition duration-200 ease-in-out" />
                    </Button>
                    <div className="text-xl flex  gap-1 text-zinc-500">
                        {social_links.map((social, idx) => (
                            <motion.a
                                target="_blank"
                                key={idx}
                                href={social.href}
                                whileTap={{ scale: 0.9 }}
                                className="backdrop-blur-3xl p-1.5 cursor-pointer hover:bg-primary transition-all ease-in-out hover:text-zinc-50 rounded-full"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Right Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mx-auto max-md:my-5"
            >
                <Image
                    src={HeroData.image}
                    alt="Achraf's profile picture"
                    className="max-md:w-64 max-lg:w-80  "
                    width={500}
                    height={500}
                    priority
                   

                />
            </motion.div>
        </motion.main>
        </AnimatedLayout>
    );
}
