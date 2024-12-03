import { routes } from '@/routes'
import clsx from 'clsx'
import React from 'react'

export default function Header() {

    const active = "px-2 py-1  text-zinc-50 bg-primary font-medium rounded-full z-20"
    return (
        <header className="relative w-max mx-auto py-2.5 px-5  ">
            {/* Background Layer */}
            <div className="bg-white dark:bg-zinc-800/40  backdrop-blur-2xl bg-opacity-50 shadow-lg shadow-zinc-100/50 dark:shadow-zinc-900 absolute inset-0 rounded-full z-0"></div>

            {/* Navigation */}
            <nav className="max-w-[300px] sm:max-w-xl z-10">
                <ul className="flex md:flex-wrap gap-2 text-sm max-sm:justify-center items-center text-zinc-900 dark:text-zinc-100">
                    {routes.map((route, index) => (
                        <li
                            key={index}
                            className={clsx("cursor-pointer px-2 py-1 z-20", route.name === "Home" ? active : "")}
                        >
                            {route.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
