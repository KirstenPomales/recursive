"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

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
          className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-left md:text-5xl"
        >
          helping&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            Dragonfly Capital{" "}
          </span>
          unlock hidden insights{" "}
        </motion.h2>
        <p className="max-w-md text-left text-lg text-muted-foreground">
          Dragonfly Capital was struggling to track their diverse portfolio through spreadsheets,
          facing issues with complex investment instruments and lack of real-time insights on
          vesting and more.
        </p>
        <div>
          <p className="max-w-md text-left text-lg text-muted-foreground">
            We built Dragonfly Automation: a CRM that allows the portfolio managers to record all
            investment activity and updates, and a reporting dashboard that gives partners and
            portfolio managers access to the real-time data in an easy-to-understand interface.
          </p>
          <ul className="mt-5 list-inside space-y-2">
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
