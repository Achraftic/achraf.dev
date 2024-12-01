'use client'
import React from 'react'
import { motion } from "framer-motion";
import Tech from './Tech';
export default function About() {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" z-10 relative  0 rounded-lg grid  md:grid-cols-3 gap-3 grid-cols-1"
        >
            <div className='w-full  h-full rounded-lg -z-10 absolute top-0 left-0  blur-xl'></div>

            <div className='bg-zinc-100/20  text-zinc-900 dark:text-zinc-100 dark:bg-zinc-800/30 md:col-span-2 p-4 rounded-lg bg-opacity-70 backdrop-blur-3xl'>
                <h2 className="text-xl  font-semibold mb-4  ">
                    About Me
                </h2>
                <p className=" text-base ">
                    Hi! I’m <span className="text-primary font-semibold">Achraf</span>, a
                    full-stack developer with 7+ years of experience. I specialize in crafting
                    scalable, high-performance web applications that are as elegant as they are
                    functional . I am passionate about creating beautiful and user-friendly
                    experiences. 70px
                </p>
            </div>

            <div className='p-4 grid gap-5 rounded-lg dark:bg-zinc-900/30 bg-zinc-100 bg-opacity-30 shadow-sm  border border-opacity-20 dark:border-zinc-800'>
                <h3 className="text-xl font-semibold">Key Skills</h3>
                <Tech />
            </div>




        </motion.section>

    )
}
