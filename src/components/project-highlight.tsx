"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ProjectHighlight() {
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
    <motion.section className="mx-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container flex flex-col gap-10 rounded-lg border bg-card p-8 pb-7 pt-10 shadow-sm sm:gap-14 sm:px-20 sm:pb-28 sm:pt-20 lg:flex-row"
      >
        <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
          <motion.div variants={itemVariants} className="mb-5 flex max-w-lg flex-wrap">
            <motion.div variants={itemVariants}>
              <Image
                src="/images/zerion-logo.png"
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
            we built the&nbsp;
            <motion.span
              variants={itemVariants}
              className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary"
            >
              Zerion Eliza plugin{" "}
            </motion.span>
            in&nbsp;
            <motion.span
              variants={itemVariants}
              className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline"
            >
              less than one week
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground lg:text-left">
            With the Zerion plugin, for the first time Eliza agents can access real-time wallet and
            token data on 14 chains. The Zerion plugin comes pre-installed when you fork the main
            Eliza repo.{" "}
          </motion.p>

          <motion.div className="grid grid-cols-2 gap-3">
            <Button size="lg" asChild className="cursor-pointer">
              <Link href="https://x.com/kirstenrpomales/status/1884244451721371833" target="_blank">
                Tutorial
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="cursor-pointer">
              <Link
                href="https://github.com/elizaOS/eliza/tree/main/packages/plugin-zerion"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Github className="size-5" />
                Github
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
