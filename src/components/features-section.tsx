"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
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

export function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container flex flex-col items-center gap-6 py-24 sm:gap-7"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">who we help</span>
        <h2 className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl">
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            specialists{" "}
          </span>
          that&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            know your niche
          </span>
        </h2>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="max-w-xl text-balance text-center text-lg text-muted-foreground"
      >
        We&apos;ve worked with teams like yours to produce software that makes millions.
      </motion.p>

      <motion.div variants={containerVariants} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <Card className="border-0">
            <CardContent className="flex flex-col gap-4 bg-background p-6">
              <div className="relative h-60">
                <Image
                  src="/images/3.png"
                  alt="Image"
                  fill
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mt-7 text-2xl font-semibold leading-none tracking-tight md:text-3xl">
                Venture Firms
              </h3>
              <p className="text-sm text-muted-foreground">
                We build tools that help crypto VC firms manage their portfolios and understand
                token unlocks in real-time.
              </p>
              <Button className="mr-auto cursor-pointer">
                <Link href="/tooling">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-0">
            <CardContent className="flex flex-col gap-4 border-0 bg-background p-6">
              <div className="relative h-60">
                <Image
                  src="/images/2.png"
                  alt="Image"
                  fill
                  className="float-left mb-4 mr-4 h-auto w-full object-contain"
                />
              </div>
              <h3 className="mt-7 text-2xl font-semibold leading-none tracking-tight md:text-3xl">
                Startups and Protocols
              </h3>
              <p className="text-sm text-muted-foreground">
                We design and build full-stack DAPPs and apps, powered by the most modern frameworks
                and AI models.
              </p>
              <Button className="mr-auto cursor-pointer" variant="outline">
                <Link href="https://cal.com/recursive" target="_blank">
                  Schedule a Call
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
