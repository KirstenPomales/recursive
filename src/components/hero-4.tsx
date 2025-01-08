"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero4() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            join{" "}
          </span>
          our
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            guild
          </span>
          <div className="mb-5 flex max-w-xs flex-wrap">
            <Image
              src="/images/they-glow.png"
              alt="Image"
              width={500}
              height={500}
              className="max-w-1/2 mt-5  h-auto  w-1/2 object-contain"
            />
          </div>
          <p className="max-w-md text-lg text-muted-foreground lg:text-left">
            Recursive Studios was founded by
            <a
              href="https://www.linkedin.com/in/singhalpranav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              &nbsp;Pranav&nbsp;
            </a>
            and
            <a
              href="https://www.linkedin.com/in/kirstenpomales/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              &nbsp; Kirsten&nbsp;
            </a>
            to solve real-world problems using web3 tech. They&apos;ve each been building in the
            blockchain space for the past 7 years - leading VC-backed startups, building deep
            protocol infra, and growing open-source communities. Together, they lead the team behind
            Recursive.{" "}
          </p>
          <p className="mt-5 max-w-md text-lg text-muted-foreground lg:text-left">
            If you&apos;re an independent product designer or engineer seeking a community that
            tackles interesting tech problems together, let&apos;s connect. Remote native. Freedom
            first. LFG.
          </p>
        </motion.h1>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="https://t.me/hellokirsten" target="_blank">
              Message Us
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/Recursive-(4)-(1).png"
          alt="SaaS Dashboard"
          width={1000}
          height={698}
          priority
          className="shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
