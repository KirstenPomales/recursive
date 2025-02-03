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
        className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl"
      >
        {title}
        <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary"></span>
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
