'use client'
import { useRef } from 'react'
import { motion } from "framer-motion";
import Tech from './Tech';
import Image from 'next/image';
import Card from './layout/Card';
import AnimatedLayout from './AnimatedLayout';
import { projects } from '@/data';

export default function About() {

    const scrollRef = useRef(null);

    return (
        <AnimatedLayout id="About" label="About">
            <section ref={scrollRef}>
                <motion.div
                    initial={{ x: 40 }}
                    whileInView={{ x: 0 }}
                    viewport={{ root: scrollRef }}
                    transition={{ duration: 0.5 }}
                    className='z-10 relative rounded-lg grid md:grid-cols-3 grid-cols-2 gap-3'
                >
                    {/* About Me Card */}
                    <Card bgDots title="About Me" className='col-span-2 dark:bg-zinc-800/30'>
                        <p className="text-base text-zinc-700 dark:text-zinc-300">

                            Hi there! I’m a full-stack web developer exploring data science, skilled in React, Django, Tailwind CSS, and Python. I’ve built projects ranging from dynamic web apps to e-commerce platforms and am passionate about learning, problem-solving, and creating impactful solutions.
                        </p>
                    </Card>

                    {/* Key Skills Card */}
                    <Card title="Key Skills" className='max-md:col-span-2'>
                        <Tech />
                    </Card>

                    {/* Latest Project Card */}
                    <Card title="Latest Project">
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <Image src={projects[0].image} alt="E-commerce Website" width={160} height={160} quality={100} />
                            <h3 className='font-semibold'>E-commerce Website</h3>
                        </div>
                    </Card>

                    {/* Let's Work Together Card */}
                    <Card WithIcon className='md:col-span-2 max-sm:p-3 bg-primary dark:bg-primary bg-opacity-100'>
                        <h2 className='sm:text-4xl  text-3xl font-semibold mt-5 text-zinc-50'>
                            Let&apos;s <br /> work <span className='text-black'>together.</span>
                        </h2>
                    </Card>
                </motion.div>
            </section>
        </AnimatedLayout>
    );
}
