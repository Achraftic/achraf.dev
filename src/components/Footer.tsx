'use client'
import { routes } from '@/routes'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { scrollToSection } from './Header'
import { social_links } from '@/data'

interface NavigationItem {
    name: string
    href?: string
    path?: string
    icon?: JSX.Element
}

const navigation: {
    main: NavigationItem[]
    social: NavigationItem[]
} = {
    main: [
         ...routes
    ],
    social: [
        {
            name: 'Twitter',
            href: 'https://twitter.com/ansub',
            icon: <FaTwitter />

        },
        {
            name: 'GitHub',
            href: 'https://github.com/ansub',
            icon: <FaGithub />

        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/ansub',
            icon: <FaLinkedin />

        },
    ],
}

const Footer: React.FC = () => {
    return (
        <footer className="w-full">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <a
                                onClick={() => scrollToSection(item.name)}
                                className="cursor-pointer text-sm hover:text-primary text-zinc-600  dark:text-zinc-200 dark:hover:text-primary transition duration-200 ease-in-out"
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-5 flex justify-center gap-4">
                    {social_links.map((item) => (
                        <a  target='_blank'
                            key={item.href}
                            href={item.href}
                            className="text-zinc-600 text-lg hover:text-primary dark:text-zinc-200 dark:hover:text-primary transition duration-200 ease-in-out"
                        >
                           
                            {item.icon}
                        </a>
                    ))}
                </div>
                <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-100">
                    &copy; {new Date().getFullYear()} Achraf. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
