import { cn } from '@/lib/utils';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function Card({
  children,
  title,
  WithIcon = false,
  className,
}: Readonly<{ children: React.ReactNode; title?: string; WithIcon?: boolean; className?: string }>) {

  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      whileTap={{ scale: 0.98 }}
      whileInView={{ opacity: 1 }} // Animation when the element enters the viewport
      viewport={{ once: true }} // Trigger the animation once when the card comes into view
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'p-4 relative flex flex-col gap-5 rounded-lg dark:bg-zinc-900/30 bg-zinc-100 bg-opacity-30 shadow-sm border border-opacity-15 dark:border-zinc-800 backdrop-blur-3xl',
        className
      )}
    >
      {title && <h2 className="text-xl font-semibold">{title}</h2>}

      {children}

      {WithIcon && (
        <span className="absolute bottom-4 right-4 cursor-pointer group p-1 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-800 bg-zinc-100 rounded-full">
          <IoIosArrowRoundForward className="group-hover:translate-x-0.5 duration-300" />
        </span>
      )}
    </motion.div>
  );
}
