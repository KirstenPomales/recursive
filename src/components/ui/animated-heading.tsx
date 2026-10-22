"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  title: string;
  subtitle: string;
}

export function AnimatedHeading({ title, subtitle }: AnimatedHeadingProps) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <motion.h2
        variants={itemVariants}
        className="text-balance text-center font-heading text-3xl font-black tracking-tight md:text-5xl uppercase"
      >
        <span className="bg-secondary text-black px-3 py-1 border-2 border-black shadow-neo">{title}</span>
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="max-w-xl text-center text-lg text-primary-foreground/80"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
