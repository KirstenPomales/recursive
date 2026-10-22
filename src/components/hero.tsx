"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ISSAnimation } from "@/components/iss-animation";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-balance font-heading text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl text-black"
        >
          the&nbsp;
          <span className="bg-secondary px-2 border-2 border-black text-black inline-block rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            product development team
          </span>
          &nbsp;behind your favorite&nbsp;
          <span className="text-primary underline decoration-4 decoration-black underline-offset-4">
            crypto and ai startups
          </span>
        </motion.h1>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-left text-xl font-medium text-black border-l-4 border-black pl-4"
        >
          Recursive Studios is a collective of the best engineering talent in web 3. We help
          startups and businesses launch powerful protocols and apps that solve the biggest problems
          in crypto and AI.
        </motion.p>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 gap-4 w-full sm:w-auto"
        >
          <Button size="lg" variant="outline" asChild className="cursor-pointer w-full text-lg border-2 border-black bg-white hover:bg-muted shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            <Link href="https://t.me/hellokirsten" target="_blank">
              Message Us
            </Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer w-full text-lg border-2 border-black bg-primary text-white shadow-neo hover:bg-primary/90 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            <Link href="https://cal.com/recursive" target="_blank">
              Schedule a Call
            </Link>
          </Button>
        </motion.div>
      </div>
      <motion.div
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        initial={{ scale: 0.9, opacity: 0, rotate: 5 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
        className="relative flex-1 w-full"
      >
        <div className="relative z-10 border-2 border-black bg-white p-2 shadow-neo-xl">
          <ISSAnimation />
        </div>
        <div className="absolute inset-0 -z-10 bg-secondary border-2 border-black translate-x-4 translate-y-4" />
      </motion.div>
    </section>
  );
}
