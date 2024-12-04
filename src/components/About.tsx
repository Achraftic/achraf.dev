'use client'
import React, { useRef } from 'react'
import { motion } from "framer-motion";
import Tech from './Tech';
import image from "../../public/ProjectImage/main.png";
import Image from 'next/image';
import Card from './layout/Card';

export default function About() {

    const scrollRef = useRef(null);

    return (
        <section ref={scrollRef}>
            <motion.div
                initial={{ x: 40 }}
                whileInView={{x: 0 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: 0.5 }}
                className='z-10 relative rounded-lg grid md:grid-cols-3 grid-cols-2 gap-3'
            >
                {/* About Me Card */}
                <Card bgDots title="About Me" className='col-span-2 dark:bg-zinc-800/30'>
                    <p className="text-base text-zinc-800 dark:text-zinc-100">
                        Hi! I’m <span className="text-primary font-semibold">Achraf</span>, a
                        full-stack developer with 7+ years of experience. I specialize in crafting
                        scalable, high-performance web applications that are as elegant as they are
                        functional. I am passionate about creating beautiful and user-friendly
                        experiences.
                    </p>
                </Card>

                {/* Key Skills Card */}
                <Card title="Key Skills" className='max-md:col-span-2'>
                    <Tech />
                </Card>

                {/* Latest Project Card */}
                <Card title="Latest Project">
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Image src={image} alt="E-commerce Website" width={160} height={160} quality={100} />
                        <h3 className='font-semibold'>E-commerce Website</h3>
                    </div>
                </Card>

                {/* Let's Work Together Card */}
                <Card WithIcon className='md:col-span-2 bg-primary dark:bg-primary bg-opacity-100'>
                    <h2 className='md:text-4xl text-3xl font-semibold mt-5 text-zinc-50'>
                        Let&apos;s <br /> work <span className='text-black'>together.</span>
                    </h2>
                </Card>
            </motion.div>
        </section>
    );
}
