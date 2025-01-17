"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HackathonsSection() {
  return (
    <section
      id="joinus"
      className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row"
    >
      <div className="flex flex-1 flex-col gap-8 sm:items-center lg:items-start lg:gap-10">
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          ps:{" "}
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary underline">
            we&apos;re obsessed
          </span>{" "}
          with{" "}
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary">
            hackathons
          </span>
        </motion.h1>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-lg "
        >
          <a className="text-muted-foreground">
            Our team has build tech and won prizes at over a dozen web3 hackathons in the past three
            years. What can we say - we&apos;re obsessed with building.{" "}
          </a>
        </motion.p>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-2xl"
        >
          <a className="font-medium italic text-muted-foreground">
            &quot;Hackathons give us hands-on experience with the latest in emerging tech - so we
            can empower our clients with new innovations as they happen.&quot;
          </a>
        </motion.h2>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="/hackathons">View our Hackathon Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
