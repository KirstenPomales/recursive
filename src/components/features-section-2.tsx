"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function Features2() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-center text-muted">
          spreadsheets are a silent killer
        </span>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="font-heading tracking-tight text-balance font-bold text-3xl md:text-5xl text-center"
        >
          replace
          <span className="bg-clip-text bg-gradient-to-br from-accent to-primary text-secondary line-through">
            spreadsheets
          </span>
          with
          <span className="text-primary bg-clip-text bg-gradient-to-br from-accent to-primary underline">
            real-time insights
          </span>
        </motion.h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance text-center">
        Recursive Labs provides custom tailored portfolio management software for Web3 venture
        firms. Our platforms streamline the way you track investments, manage token vesting
        schedules, and gain real-time insights into your portfolio performance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:grid-cols-3">
        <Card className="border-0">
          <CardContent className="p-6 flex flex-col gap-4 bg-background">
            <div className="relative h-60">
              <Image
                src="/images/Screenshot-2025-01-07-at-12-33-11-PM.png"
                alt="Image"
                fill
                className="object-cover w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mt-7 md:text-3xl">
              Simplify Complex Investments
            </h3>
            <p className="text-sm text-muted-foreground">
              Track everything from SAFTs to token vesting schedules—automatically.
            </p>
          </CardContent>
        </Card>
        <Card className="border-0">
          <CardContent className="p-6 flex flex-col gap-4 bg-background">
            <div className="relative h-60">
              <Image
                src="/images/Screenshot-2025-01-07-at-12-33-11-PM.png"
                alt="Image"
                fill
                className="object-cover w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mt-7 md:text-3xl">
              View Real-Time Insights
            </h3>
            <p className="text-sm text-muted-foreground">
              Get instant access to key metrics like IRR, staking returns, and equity dilution.
            </p>
          </CardContent>
        </Card>
        <Card className="border-0">
          <CardContent className="p-6 flex flex-col gap-4 bg-background border-0">
            <div className="relative h-60">
              <Image
                src="/images/Screenshot-2025-01-07-at-12-33-11-PM.png"
                alt="Image"
                fill
                className="object-cover h-auto float-left  mr-4 mb-4 w-full object-contain"
              />
            </div>
            <h3 className="font-semibold leading-none tracking-tight mt-7 text-2xl md:text-3xl">
              Eliminate Spreadsheets
            </h3>
            <p className="text-sm text-muted-foreground">
              Say goodbye to manual errors and inconsistent data formats.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
