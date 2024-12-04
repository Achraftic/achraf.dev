import { useScroll,motion, useSpring } from 'framer-motion';
import React from 'react'

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      })
      console.log(scrollYProgress);
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={{scaleX,transformOrigin: 'left'}} className=" fixed inset-0 bg-primary z-[999] h-1"></motion.div>
  )
}
