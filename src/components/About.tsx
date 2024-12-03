'use client'
import React from 'react'
import { motion } from "framer-motion";
import Tech from './Tech';
import image from "../../public/ProjectImage/main.png";
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
export default function About() {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" z-10 relative  0 rounded-lg grid  md:grid-cols-3 grid-cols-2 gap-3 "
        >
            <div className='w-full  h-full rounded-lg -z-10 absolute top-0 left-0  blur-xl'></div>

            <div className='p-4 flex flex-col gap-5 rounded-lg dark:bg-zinc-900/30 bg-zinc-100 bg-opacity-30 shadow-sm  border border-opacity-15 dark:border-zinc-800  col-span-2 backdrop-blur-3xl'>
                <h2 className="text-xl  font-semibold   ">
                    About Me
                </h2>
                <p className=" text-base  ">
                    Hi! I’m <span className="text-primary font-semibold">Achraf</span>, a
                    full-stack developer with 7+ years of experience. I specialize in crafting
                    scalable, high-performance web applications that are as elegant as they are
                    functional . I am passionate about creating beautiful and user-friendly
                    experiences. 70px
                </p>
            </div>

            <div className='p-4 max-md:col-span-2  flex flex-col gap-5 rounded-lg dark:bg-zinc-800/20 bg-zinc-100 bg-opacity-30 shadow-sm  border border-opacity-15 dark:border-zinc-800'>
                <h3 className="text-xl font-semibold ">Key Skills</h3>
                <Tech />
            </div>
            <div className='p-4  relative  flex flex-col  md:col-span-2 gap-5 rounded-lg dark:bg-zinc-800/20 bg-zinc-100 bg-opacity-30 shadow-sm  border border-opacity-15 dark:border-zinc-800'>

                <h2 className='text-3xl font-semibold mt-5 '>Let&apos;s <br /> work <span className='text-primary'>together.</span>  </h2>

                <span className='absolute bottom-4 right-4 cursor-pointer group p-1 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-800 bg-zinc-200/40 rounded-full'><IoIosArrowRoundForward className='group-hover:translate-x-0.5 duration-300' /> </span>


            </div>
            <div className='p-4 flex flex-col  gap-5 rounded-lg dark:bg-zinc-800/20 bg-zinc-100 bg-opacity-30 shadow-sm  border border-opacity-15 dark:border-zinc-800'>
                <h3 className="text-xl font-semibold">Latest Project</h3>
                <div className='flex flex-col justify-center items-center gap-3'>

                <Image src={image} alt="" width={160} height={160} className=''  quality={100} />
                <h3  className=' font-semibold'>E-commerce website </h3>
                </div>
                
            </div>




        </motion.section>

    )
}
