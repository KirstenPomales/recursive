"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export function EmbeddedTechnologies() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container flex flex-col items-center gap-6 py-24 sm:gap-7"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">
          technologies we work with
        </span>
        <h2 className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl">
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            full-stack
          </span>{" "}
          expertise across&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            blockchain & web3
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6"
      >
        {["EVM", "SVM", "ZK", "Rust", "Solidity", "TypeScript"].map((tech) => (
          <div key={tech} className="flex flex-col items-center gap-2">
            <div className="relative size-16">
              <Image src="/images/placeholder.png" alt={tech} fill className="object-contain" />
            </div>
            <span className="text-sm font-medium">{tech}</span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
