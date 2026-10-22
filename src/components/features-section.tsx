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
      type: "spring",
      stiffness: 100
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
      <motion.div variants={itemVariants} className="flex flex-col gap-3 items-center">
        <span className="text-center font-bold uppercase text-black border-2 border-black px-2 py-1 bg-secondary shadow-neo">who we help</span>
        <h2 className="text-balance text-center font-heading text-3xl font-black tracking-tight md:text-5xl text-black mt-4">
          <span className="bg-primary text-white px-2">
            specialists{" "}
          </span>
          &nbsp;across&nbsp;
          <span className="underline decoration-4 decoration-black underline-offset-4">
            EVM, SVM, and ZK
          </span>
        </h2>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-balance text-center text-lg font-bold text-black/80 max-w-2xl"
      >
        We&apos;ve worked with teams like yours to produce software that impacts millions.
      </motion.p>

      <motion.div variants={containerVariants} className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full">
        <motion.div variants={itemVariants} className="h-full">
          <div className="h-full flex flex-col border-2 border-black bg-white shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all p-6">
              <div className="relative h-60 w-full border-2 border-black mb-6 bg-muted">
                <Image
                  src="/images/ai-agent-developer-eliza-1.png"
                  alt="Image"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-black leading-none tracking-tight md:text-3xl mb-4 text-black">
                AI Agents & Agentic Infra
              </h3>
              <p className="text-sm font-medium text-black/70 mb-6 flex-grow">
                We build custom AI agents and tools, powered by blockchain; from customer support
                agents to advanced trading agents. Leverage the best agentic frameworks from N18 to
                Eliza for business and consumer apps.
              </p>

              <Button className="w-full cursor-pointer border-2 border-black shadow-neo active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                <Link href="/ai-agent-developer">Build Your Agent</Link>
              </Button>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="h-full">
          <div className="h-full flex flex-col border-2 border-black bg-white shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all p-6">
              <div className="relative h-60 w-full border-2 border-black mb-6 bg-muted">
                <Image
                  src="/images/2.png"
                  alt="Image"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-black leading-none tracking-tight md:text-3xl mb-4 text-black">
                MVP Apps & Protocols
              </h3>
              <p className="text-sm font-medium text-black/70 mb-6 flex-grow">
                We design and build full-stack DAPPs and apps, powered by the most modern frameworks
                and AI models. Trying to take your product to market fast? We offer fast-track G2M
                deals to meet your timelines.
              </p>
              <Button className="w-full cursor-pointer border-2 border-black bg-white text-black hover:bg-muted shadow-neo active:shadow-none active:translate-x-[2px] active:translate-y-[2px]" asChild>
                <Link href="https://cal.com/recursive" target="_blank">
                  Schedule a Call
                </Link>
              </Button>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="h-full">
          <div className="h-full flex flex-col border-2 border-black bg-white shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all p-6">
              <div className="relative h-60 w-full border-2 border-black mb-6 bg-muted">
                <Image
                  src="/images/3.png"
                  alt="Image"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-black leading-none tracking-tight md:text-3xl mb-4 text-black">
                Protocol Ecosystems
              </h3>
              <p className="text-sm font-medium text-black/70 mb-6 flex-grow">
                We work as an embedded dev team for L1, L2, and infra teams; helping them build the
                tools needed for builder adoption - from protocols and starter kits to full-scale
                ecosystem applications.
              </p>
              <Button className="w-full cursor-pointer border-2 border-black shadow-neo active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                <Link href="/embedded-engineering">Scale Your Protocol</Link>
              </Button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
