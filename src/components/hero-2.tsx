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
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          custom&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            portfolio management tools{" "}
          </span>
          for&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            crypto native funds
          </span>
        </motion.h1>
        <p className="text-lg text-muted-foreground">
          Recursive Studios has helped some of the top VC firms in web3 gather real-time insights to
          improve fund management strategies with custom portfolio management tools.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="https://t.me/hellokirsten" target="_blank">
              Message Us
            </Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="https://cal.com/recursive" target="_blank">
              Schedule a Call
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-auto w-full rounded-xl border border-border shadow-lg"
        >
          <source src="/images/dragonfly-automation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
