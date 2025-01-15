"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function AboutTeam() {
  // Animation variants for consistent animation across elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1, // Added slight delay before children start animating
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  const MotionButton = motion(Button);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="container flex flex-col items-center gap-10 pb-28 pt-10 sm:pt-20 sm:gap-14 lg:flex-row"
    >
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.div variants={itemVariants} className="mb-5 flex max-w-xs flex-wrap">
          <motion.div variants={itemVariants}>
            <Image
              src="/images/they-glow.png"
              alt="Image"
              width={500}
              height={500}
              className="h-auto object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          over&nbsp;
          <motion.span
            variants={itemVariants}
            className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary"
          >
            7 years{" "}
          </motion.span>
          experience building&nbsp;
          <motion.span
            variants={itemVariants}
            className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline"
          >
            crypto native products
          </motion.span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg text-muted-foreground lg:text-left">
          Recursive Studios was founded by
          <motion.a
            variants={itemVariants}
            href="/leadership#pranav"
            rel="noopener noreferrer"
            className="text-primary"
          >
            &nbsp;Pranav&nbsp;
          </motion.a>
          and
          <motion.a
            variants={itemVariants}
            href="/leadership#kirsten"
            rel="noopener noreferrer"
            className="text-primary"
          >
            &nbsp;Kirsten&nbsp;
          </motion.a>
          to solve real-world problems using web3 tech. Now, they lead a team of developers building
          powerful open-source software and helping web 3 startups scale engineering.{" "}
        </motion.p>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
          <MotionButton
            variants={itemVariants}
            size="lg"
            asChild
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/leadership">About Our Team</Link>
          </MotionButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
