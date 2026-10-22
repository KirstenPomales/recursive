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
      className="container flex flex-col items-center gap-10 pb-28 pt-10 sm:gap-14 sm:pt-20 lg:flex-row"
    >
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.div variants={itemVariants} className="mb-5 flex max-w-xs flex-wrap">
          <motion.div variants={itemVariants} className="border-2 border-black shadow-neo bg-white p-2 rotate-3">
            <Image
              src="/images/they-glow.png"
              alt="Image"
              width={500}
              height={500}
              className="h-auto object-contain border-2 border-black"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-balance font-heading text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-black"
        >
          over&nbsp;
          <motion.span
            variants={itemVariants}
            className="bg-primary text-white px-2 inline-block -rotate-2"
          >
            8 years{" "}
          </motion.span>
          <br/>
          experience building&nbsp;
          <motion.span
            variants={itemVariants}
            className="underline decoration-4 decoration-black underline-offset-4"
          >
            crypto-native products
          </motion.span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg font-medium text-black lg:text-left border-l-4 border-black pl-4">
          Recursive Studios was founded by
          <a href="/leadership#pranav" className="text-primary font-bold hover:underline">
            &nbsp;Pranav&nbsp;
          </a>
          and
          <a href="/leadership#kirsten" className="text-primary font-bold hover:underline">
            &nbsp; Kirsten&nbsp;
          </a>
          to solve real-world problems using web3 tech. Now, they lead a team of developers building
          powerful open-source software and helping startups scale engineering.{" "}
        </motion.p>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
          <MotionButton
            variants={itemVariants}
            size="lg"
            asChild
            className="cursor-pointer border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <Link href="/leadership">About Our Team</Link>
          </MotionButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
