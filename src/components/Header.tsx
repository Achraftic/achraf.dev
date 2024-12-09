"use client";

import { routes } from "@/routes";
import clsx from "clsx";
import  { useContext } from "react";
import { motion, animate } from "framer-motion";
import { HeaderContext } from "@/context/activeLink";

export const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 100; // Adjusted for -50px offset
    animate(window.scrollY, top, {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }
};
export default function Header() {
  const context = useContext(HeaderContext);

  return (
    <header className="w-max mx-auto py-2.5 px-5 sticky z-[999] top-5 left-0 right-0">
      {/* Background Layer */}
      <div className="bg-zinc-50 dark:bg-zinc-800/40 backdrop-blur-md bg-opacity-50 shadow border dark:border-zinc-800/30 border-zinc-200/30 absolute inset-0 rounded-full z-0"></div>

      {/* Navigation */}
      <nav className="max-w-[300px] sm:max-w-xl z-10">
        <ul className="flex md:flex-wrap gap-2 text-sm max-sm:justify-center items-center text-zinc-900 dark:text-zinc-100">
          {routes.map((route, index) => (
            <li
              key={index}
              className={clsx(
                "cursor-pointer px-2 py-1 z-20 relative",
                route.name === context?.activeLink && "text-zinc-50"
              )}
              onClick={() => scrollToSection(route.name)}
            >
              {context?.activeLink === route.name && (
                <motion.span
                  layoutId="tab"
                  transition={{ type: "spring", duration: 0.6 }}
                  className="w-full h-full absolute top-0 left-0 z-[-1] rounded-full bg-primary"
                ></motion.span>
              )}
              {route.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
