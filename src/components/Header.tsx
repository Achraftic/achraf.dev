"use client"
import { routes } from '@/routes'
import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'
export default function Header() {

    const active = "px-2 py-1  text-zinc-50 bg-primary font-medium rounded-full z-20"
    const activeClass = "Home"
    return (
        <header className=" w-max mx-auto py-2.5 px-5  sticky z-[999] top-5 left-0 right-0  ">
            {/* Background Layer */}
            <div className="bg-zinc-50 dark:bg-zinc-800/40  backdrop-blur-md bg-opacity-50 shadow border dark:border-zinc-800/30  border-zinc-200/30  absolute inset-0 rounded-full z-0"></div>

            {/* Navigation */}
            <nav className="max-w-[300px] sm:max-w-xl z-10">
                <ul className="flex md:flex-wrap gap-2 text-sm max-sm:justify-center items-center text-zinc-900 dark:text-zinc-100">
                    {routes.map((route, index) => (
                        <li
                            key={index}
                            className={clsx("cursor-pointer px-2 py-1 z-20 relative", route.name === activeClass ? active : "")}
                        >

                            {activeClass === route.name && <motion.span
                                layoutId="tab"
                                transition={{ type: 'spring', duration: 0.4 }} className='w-full h-full absolute top-0 left-0 z-[-1] rounded-full bg-primary'></motion.span>}

                            {route.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
