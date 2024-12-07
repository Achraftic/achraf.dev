/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useContext, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeaderContext } from '@/context/activeLink';

const AnimatedLayout: React.FC<{ id: string; label: string; children: React.ReactNode }> = ({
  id,
  label,
  children,
}) => {
  const ref = useRef(null);
  const context = useContext(HeaderContext);

  const isisInView = useInView(ref, { margin: '0% 0px -10% 0px' });

  React.useEffect(() => {
    if (isisInView) {
      context?.setActiveLink(label);
    }
  }, [isisInView, label, context?.setActiveLink]);

  return (
    <motion.section
      ref={ref}
      id={id}

      initial={{ opacity: 0, x: 50 }} // Initial state
      animate={{
        opacity: isisInView ? 1 : 0, // Fade-in effect
        x: isisInView ? 0 : 50,      // Slide-up effect

      }}
      transition={{
        opacity: { duration: 0.6, ease: "easeOut" }, // Fade-in transition
        x: { duration: 0.6, ease: "easeOut" },       // Slide-up transition
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedLayout;
