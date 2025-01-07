"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-center text-muted">who we help</span>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="font-heading tracking-tight text-balance font-bold text-3xl md:text-5xl text-center"
        >
          <span className="bg-clip-text bg-gradient-to-br from-accent to-primary text-secondary">
            specialists{" "}
          </span>
          that
          <span className="text-primary bg-clip-text bg-gradient-to-br from-accent to-primary underline">
            know your niche
          </span>
        </motion.h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        We&apos;ve worked with teams like yours to produce software that makes millions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-0">
          <CardContent className="p-6 flex flex-col gap-4 bg-background">
            <div className="relative h-60">
              <Image
                src="/images/3.png"
                alt="Image"
                fill
                className="object-cover w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mt-7 md:text-3xl">
              Venture Firms
            </h3>
            <p className="text-sm text-muted-foreground">
              We build tools that help crypto VC firms manage their portfolios and understand token
              unlocks in real-time.
            </p>
            <Button className="mr-auto">Learn More</Button>
          </CardContent>
        </Card>
        <Card className="border-0">
          <CardContent className="p-6 flex flex-col gap-4 bg-background border-0">
            <div className="relative h-60">
              <Image
                src="/images/2.png"
                alt="Image"
                fill
                className="object-cover h-auto float-left  mr-4 mb-4 w-full object-contain"
              />
            </div>
            <h3 className="font-semibold leading-none tracking-tight mt-7 text-2xl md:text-3xl">
              Startups and Protocols
            </h3>
            <p className="text-sm text-muted-foreground">
              We design and build full-stack DAPPs and apps, powered by the most modern frameworks
              and AI models.
            </p>
            <Button className="mr-auto">Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
