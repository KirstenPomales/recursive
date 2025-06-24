"use client";

import { motion } from "framer-motion";

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

export function EmbeddedWhyChoose() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container flex flex-col items-center gap-6 py-24 sm:gap-7"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">why choose recursive</span>
        <h2 className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl">
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            proven
          </span>{" "}
          track record with&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            major protocols
          </span>
        </h2>
      </motion.div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="font-semibold">VC-Backed Founder Experience</h3>
              <p className="text-sm text-muted-foreground">
                Our team includes former VC-backed founders who understand the challenges of
                building and scaling protocol ecosystems.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="font-semibold">Full-Stack Expertise</h3>
              <p className="text-sm text-muted-foreground">
                From smart contracts to frontend applications, we handle every layer of the stack
                with modern, production-ready code.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="font-semibold">Go-to-Market Strategy</h3>
              <p className="text-sm text-muted-foreground">
                We don&apos;t just build - we help you launch. Our GTM expertise ensures your
                protocol gets the developer adoption it needs.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="font-semibold">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">
                We&apos;ve built products for Dragonfly Capital, Zerion, XRPL Foundation, iExec,
                EthersJS and more.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="font-semibold">Flexible Engagement</h3>
              <p className="text-sm text-muted-foreground">
                Work with us hourly, on retainer, or as a full embedded team. We adapt to your needs
                and timeline.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 size-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="font-semibold">Ongoing Support</h3>
              <p className="text-sm text-muted-foreground">
                We provide ongoing maintenance, updates, and support to ensure your ecosystem
                continues to grow and evolve.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
