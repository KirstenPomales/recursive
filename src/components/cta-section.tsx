"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-6 px-6 relative flex-1 rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-tr-[2.5rem] from-accent to-primary overflow-hidden pt-24">
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="font-heading tracking-tight text-balance font-bold text-3xl md:text-5xl text-center"
        >
          let&apos;s build
          <span className="bg-clip-text bg-gradient-to-br from-accent to-primary text-secondary">
            together
          </span>
        </motion.h2>
        <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
          Schedule a call to discover how we can achieve your team&apos;s big vision, together.{" "}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="#">Message Us</Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="#">Schedule a Call</Link>
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
