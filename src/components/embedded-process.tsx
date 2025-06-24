"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export function EmbeddedProcess() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container flex flex-col items-center gap-6 py-24 sm:gap-7"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">a team who gets you</span>
        <h2 className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl">
          advising from{" "}
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            former founders
          </span>{" "}
          of&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            VC-backed protocol infra
          </span>
        </h2>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-balance text-center text-lg text-muted-foreground"
      >
        We work hand-in-hand with founders to share our experience, our (strong) opinions, and
        lessons we&apos;ve learned in building our own protocol ecosystems. We&apos;re aligned
        long-term partners, who want to see blockchain tech reach mass adoption through the success
        of protocols like yours.
      </motion.p>

      <motion.div variants={containerVariants} className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <div className="relative mb-4 size-40">
            <Image src="/images/circle-1.png" alt="SDKs & APIs" fill className="object-contain" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">We&apos;ve Been in Your Shoes</h3>
          <p className="mb-4 text-muted-foreground">
            As founders of protocols like yours, we understand the unique pains of building and
            scaling lower-level infra from the ground up.
          </p>
          <Link
            href="/leadership"
            className="inline-flex items-center justify-center rounded-md border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
          >
            Meet Our Team
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <div className="relative mb-4 size-40">
            <Image src="/images/circle-2.png" alt="SDKs & APIs" fill className="object-contain" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">We&apos;ve Seen What Works</h3>
          <p className="mb-4 text-muted-foreground">
            Years of integrating existing protocols taught us what makes developer onboarding
            successful - and where most teams fall short.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
          >
            View Our Work
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <div className="relative mb-4 size-40">
            <Image src="/images/circle-3.png" alt="SDKs & APIs" fill className="object-contain" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">We Know How to Win</h3>
          <p className="mb-4 text-muted-foreground">
            After deploying many different protocol activation strategies, we&apos;ve learned what
            turns builder programs from money pits into powerful activations.
          </p>
          <Link
            href="/hackathons"
            className="inline-flex items-center justify-center rounded-md border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
          >
            What Our Clients Say
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
