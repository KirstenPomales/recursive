"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CtaSectionLeader() {
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

  return (
    <motion.section
      className="container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="relative flex flex-1 flex-col items-center gap-6 overflow-hidden rounded-t-[2.5rem] rounded-bl-[5rem] from-accent to-primary px-6 pt-24">
        <motion.h2
          variants={itemVariants}
          className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl"
        >
          let&apos;s build
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            &nbsp;together
          </span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-center text-lg text-primary-foreground/80"
        >
          Recursive Studios is a collective of the best engineering talent in deep tech. Let&apos;s
          explore how we can help you achive your product goals in 2025.{" "}
        </motion.p>
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="https://t.me/hellokirsten" target="_blank">
              Message Us
            </Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="https://cal.com/recursive" target="_blank">
              Schedule a Call
            </Link>
          </Button>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-0 lg:-mb-40">
          <Image
            alt="SaaS Dashboard"
            src="/images/Recursive-banner.png"
            width={900}
            height={698}
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
