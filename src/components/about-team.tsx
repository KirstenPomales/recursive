"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function AboutTeam() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-10 sm:pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="mb-5 flex max-w-xs flex-wrap">
          <Image
            src="/images/they-glow.png"
            alt="Image"
            width={500}
            height={500}
            className="h-auto  object-contain"
          />
        </div>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          over&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            7 years{" "}
          </span>
          experience building&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            crypto native products
          </span>
        </motion.h1>

        <p className="text-lg text-muted-foreground lg:text-left">
          Recursive Studios was founded by
          <a href="/leadership#pranav" rel="noopener noreferrer" className="text-primary">
            &nbsp;Pranav&nbsp;
          </a>
          and
          <a href="/leadership#kirsten" rel="noopener noreferrer" className="text-primary">
            &nbsp; Kirsten&nbsp;
          </a>
          to solve real-world problems using web3 tech. Now, they lead a team of developers building
          powerful open-source software and helping web 3 startups scale engineering.{" "}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="/leadership">About Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
