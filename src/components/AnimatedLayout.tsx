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

  const isInView = useInView(ref, { margin: '-20% 0px -50% 0px' });

  React.useEffect(() => {
    if (isInView) {
      context?.setActiveLink(label);
    }
  }, [isInView, label, context?.setActiveLink]);

  return (
    <motion.section
      ref={ref}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedLayout;
