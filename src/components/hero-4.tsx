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
          className="font-heading text-4xl sm:text-5xl tracking-tight lg:text-6xl text-balance font-bold"
        >
          <span className="bg-clip-text bg-gradient-to-br from-accent to-primary text-secondary">
            join{" "}
          </span>
          our
          <span className="text-primary bg-clip-text bg-gradient-to-br from-accent to-primary underline">
            guild
          </span>
          <div className="flex flex-wrap max-w-xs mb-5">
            <Image
              src="/images/they-glow.png"
              alt="Image"
              width={500}
              height={500}
              className="max-w-1/2 w-1/2  h-auto  object-contain mt-5"
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
              Pranav
            </a>
            and
            <a
              href="https://www.linkedin.com/in/kirstenpomales/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Kirsten
            </a>
            to solve real-world problems using web3 tech. They&apos;ve each been building in the
            blockchain space for the past 7 years - leading VC-backed startups, building deep
            protocol infra, and growing open-source communities. Together, they lead the team behind
            Recursive.{" "}
          </p>
          <p className="max-w-md text-lg text-muted-foreground lg:text-left mt-5">
            If you&apos;re an independent product designer or engineer seeking a community that
            tackles interesting tech problems together, let&apos;s connect. Remote native. Freedom
            first. LFG.
          </p>
        </motion.h1>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="#">Message Us</Link>
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
