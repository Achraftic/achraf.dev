"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from "../../public/1695851354840-Standard.png";
import { Button } from "@/components/ui/button";
import { HiDownload } from "react-icons/hi";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { GrGithub } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

export default function Main() {
    return (
        <motion.main
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
            className="z-30 flex max-md:flex-wrap items-center"
        >
            {/* Left Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="gap-5 flex flex-col"
            >
                <h1 className="text-5xl max-sm:text-4xl font-bold">
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
                        web apps that can impact millions of lives.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-zinc-600 dark:text-zinc-300"
                    >
                        As a senior software engineer with 7 years of experience, I specialize
                        in crafting scalable, performance-optimized, and visually appealing web
                        applications.
                    </motion.p>
                </div>
                <div className="flex gap-4 items-center">
                    <Button
                        className="group"
                        variant="outline"
                    >
                        Download CV{" "}
                        <HiDownload className="group-hover:translate-y-0.5 transition duration-200 ease-in-out" />
                    </Button>
                    <div className="text-xl flex gap-2 text-zinc-500">
                        {[
                            { icon: <CiLinkedin />, href: "#" },
                            { icon: <GrGithub />, href: "#" },
                            { icon: <RiInstagramLine />, href: "#" },
                            { icon: <CiFacebook />, href: "#" },
                            { icon: <FaWhatsapp />, href: "#" },
                        ].map((social, idx) => (
                            <motion.a
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
                    src={img}
                    alt="Achraf's profile picture"
                    className="max-md:w-64"
                    width={500}
                    height={500}
                />
            </motion.div>
        </motion.main>
    );
}
