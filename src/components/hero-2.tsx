"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero2() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="font-heading text-4xl sm:text-5xl tracking-tight lg:text-6xl text-balance font-bold"
        >
          custom
          <span className="bg-clip-text bg-gradient-to-br from-accent to-primary text-secondary">
            portfolio management tools{" "}
          </span>
          for
          <span className="text-primary bg-clip-text bg-gradient-to-br from-accent to-primary underline">
            crypto native funds
          </span>
        </motion.h1>
        <p className="max-w-md text-lg text-muted-foreground lg:text-left">
          Recursive Studios has helped some of the top VC firms in web3 gather real-time insights to
          improve fund management strategies with custom portfolio management tools.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="#">Message Us</Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="#">Schedule a Call</Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/Screenshot-2025-01-07-at-12-33-11-PM.png"
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
