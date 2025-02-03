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

export function HeroAgents() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row"
    >
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.div variants={item} className="relative mb-8 w-full max-w-[400px]">
          <Image
            src="/images/ai-agent-developer.png"
            alt="recursive ai agent developer elizaos"
            width={400}
            height={300}
            className="rounded-lg"
            priority
          />
        </motion.div>
        <motion.h1
          variants={item}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary underline">
            fast track
          </span>{" "}
          your&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary">
            ai agent
          </span>{" "}
          app
        </motion.h1>
        <motion.p variants={item} className="text-lg ">
          <a className="text-muted-foreground"></a>
          <h2 className="font-heading text-2xl font-bold tracking-tight md:text-4xl">
            launch an AI agent in less than 3 weeks with Recursive{" "}
          </h2>
          <p className="mt-5 font-heading tracking-tight">
            Work with our team of AI and crypto experts to scope an MVP, engineer your first
            version, and be ready for launch day in less time than ever.{" "}
          </p>
        </motion.p>

        <motion.div variants={item} className="grid grid-cols-2 gap-3">
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
