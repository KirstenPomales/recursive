"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          the&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            product development team{" "}
          </span>
          behind your favorite&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            crypto and ai startups
          </span>
        </motion.h1>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-left text-lg text-muted-foreground"
        >
          Recursive Studios is a collective of the best engineering talent in web 3. We help
          startups and businesses launch powerful protocols and apps that solve the biggest problems
          in crypto and AI.
        </motion.p>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-2 gap-3"
        >
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
        </motion.div>
      </div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative flex-1"
      >
        <Image
          src="/images/Untasdfasdfitled-design.png"
          alt="SaaS Dashboard"
          width={1000}
          height={698}
          priority
          className="shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </motion.div>
    </section>
  );
}
