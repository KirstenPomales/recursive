"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero3() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
          <span className="text-sm text-secondary-foreground">CASE STUDY</span>
          <ArrowRight size={16} />
        </div>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="font-heading tracking-tight text-balance font-bold text-3xl md:text-5xl sm:text-left"
        >
          helping
          <span className="bg-clip-text bg-gradient-to-br from-accent to-primary text-secondary">
            Dragonfly Capital{" "}
          </span>
          unlock hidden insights{" "}
        </motion.h2>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left text-left">
          Dragonfly Capital was struggling to track their diverse portfolio through spreadsheets,
          facing issues with complex investment instruments and lack of real-time insights on
          vesting and more.
        </p>
        <div>
          <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left text-left">
            We built Dragonfly Automation: a CRM that allows the portfolio managers to record all
            investment activity and updates, and a reporting dashboard that gives partners and
            portfolio managers access to the real-time data in an easy-to-understand interface.
          </p>
          <ul className="list-inside space-y-2 mt-5">
            <li className="flex items-center">
              <Check size={16} className="mr-2 text-secondary" />
              Tracks 7 categories of investments totaling over $200M in value
            </li>
            <li className="flex items-center">
              <Check size={16} className="mr-2 text-secondary" />
              Robust data security and auditability
            </li>
            <li className="flex items-center">
              <Check size={16} className="mr-2 text-secondary" />
              Real-time on-chain analytics and reporting
            </li>
            <li className="flex items-center">
              <Check size={16} className="mr-2 text-secondary" />
              Automated tracking of token vesting and claim periods
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/dashboard.png"
          alt="SaaS Dashboard"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
