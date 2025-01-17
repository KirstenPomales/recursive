"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function HeroHackathons() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row"
    >
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.h1
          variants={item}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          we&apos;re&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary underline">
            obsessed
          </span>{" "}
          with&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary">
            hackathons
          </span>
        </motion.h1>
        <motion.p variants={item} className="text-lg ">
          <a className="text-muted-foreground">
            Our team has build tech and won prizes at over a dozen web3 hackathons in the past three
            years. Each of these products was built in under 48 hours. What can we say - we&apos;re
            obsessed with building.{" "}
          </a>
        </motion.p>
        <motion.h2 variants={item} className="text-2xl">
          <a className="font-medium italic text-muted-foreground">
            &quot;Hackathons give us hands-on experience with the latest in emerging tech - so we
            can empower our clients with new innovations as they happen.&quot;
          </a>
        </motion.h2>
        <motion.div variants={item} className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="/leadership">About Our Team</Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="https://cal.com/recursive" target="_blank">
              Schedule a Call
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
