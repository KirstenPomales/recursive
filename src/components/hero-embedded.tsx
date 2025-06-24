"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

export function HeroEmbedded() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row"
    >
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.h1
          variants={itemVariants}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary underline">
            embedded engineering
          </span>{" "}
          for&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary">
            protocol ecosystems
          </span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg">
          <h2 className="font-heading text-2xl font-bold tracking-tight md:text-4xl">
            We partner with L1, L2, DeFi, and infra protocols to work towards long-term ecosystem
            goals
          </h2>
          <p className="mt-5 font-heading tracking-tight">
            From protocol development to SDKs, APIs, and ecosystem apps - we help you go to market
            and bring everything needed for developer adoption. End-to-end development for new and
            growing blockchain ecosystems.
          </p>
        </motion.p>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="https://cal.com/recursive" target="_blank">
              Schedule a Call
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="/leadership">About Our Team</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
