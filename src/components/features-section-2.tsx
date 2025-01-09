"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

export function Features2() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">
          spreadsheets are a silent killer
        </span>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl"
        >
          replace&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary line-through">
            spreadsheets<br></br>
          </span>
          with&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            real-time insights
          </span>
        </motion.h2>
      </div>
      <p className="text-balance text-center text-lg text-muted-foreground">
        Recursive Labs provides custom tailored portfolio management software for Web3 venture
        firms. Our platforms streamline the way you track investments, manage token vesting
        schedules, and gain real-time insights into your portfolio performance.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="border-0">
          <CardContent className="flex flex-col gap-4 bg-background p-6">
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
            <h3 className="mt-7 text-2xl font-semibold leading-none tracking-tight md:text-3xl">
              Simplify Complex Investments
            </h3>
            <p className="text-sm text-muted-foreground">
              Track everything from SAFTs to token vesting schedules—automatically.
            </p>
          </CardContent>
        </Card>
        <Card className="border-0">
          <CardContent className="flex flex-col gap-4 bg-background p-6">
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
            <h3 className="mt-7 text-2xl font-semibold leading-none tracking-tight md:text-3xl">
              View Real-Time Insights
            </h3>
            <p className="text-sm text-muted-foreground">
              Get instant access to key metrics like IRR, staking returns, and equity dilution.
            </p>
          </CardContent>
        </Card>
        <Card className="border-0">
          <CardContent className="flex flex-col gap-4 border-0 bg-background p-6">
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
            <h3 className="mt-7 text-2xl font-semibold leading-none tracking-tight md:text-3xl">
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
