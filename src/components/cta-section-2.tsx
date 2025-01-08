"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CtaSection2() {
  return (
    <section className="container">
      <div className="relative flex flex-1 flex-col items-center gap-6 overflow-hidden rounded-t-[2.5rem] rounded-bl-[5rem] from-accent to-primary px-6 pt-24">
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl"
        >
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            discover{" "}
          </span>
          what you are missing
        </motion.h2>
        <p className="max-w-xl text-center text-lg text-primary-foreground/80">
          Say goodbye to spreadsheets in 2025. Schedule a call to discover how we can empower your
          firm with the business intellegence you&apos;re missing out on.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="#">Message Us</Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="https://cal.com/recursive" target="_blank">
              Schedule a Call
            </Link>
          </Button>
        </div>
        <Image
          alt="SaaS Dashboard"
          src="/images/Recursive-banner.png"
          width={900}
          height={698}
          priority
          className="-mt-14 mt-0 lg:-mb-40"
        />
      </div>
    </section>
  );
}
