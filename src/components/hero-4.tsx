"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Hero4() {
  return (
    <section id="joinus" className="container pb-28 pt-20">
      <Card className="bg-card p-3 sm:p-16">
        <div className="flex flex-col items-center gap-10 p-8 sm:gap-14 lg:flex-row">
          <div className="flex flex-1 flex-col gap-8 lg:items-start lg:gap-10">
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
              className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
                join{" "}
              </span>
              our{" "}
              <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
                guild
              </span>
            </motion.h1>
            <div className="mb-5 flex max-w-xs flex-wrap">
              <Image
                src="/images/they-all-glow.png"
                alt="Image"
                width={500}
                height={500}
                className="mt-5  h-auto  w-1/2 object-contain"
              />
            </div>
            <div className="text-balance text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              <p className="max-w-md text-lg text-muted-foreground lg:text-left">
                <a className="font-bold">
                  Do you want to solve real-world problems with blockchain tech?
                </a>{" "}
                Recursive is the agency wing of a guild of engineers that learns together, builds
                together, and challenges eachother to build solutions to web3&apos;s biggest
                challenges.
              </p>
              <p className="mt-5 max-w-md text-lg text-muted-foreground lg:text-left">
                We have open-source in our blood: as active OS contributors and leaders, we
                contribute code and as a team.
              </p>
              <p className="mt-5 max-w-md text-lg text-muted-foreground lg:text-left">
                If you&apos;re an independent product designer or engineer seeking good vibes and
                your next challenge, let&apos;s connect. We&apos;re remote native, and freedom
                first.
              </p>
              <p className="mt-5 max-w-md text-lg text-muted-foreground lg:text-left">LFG.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
                <Link href="https://t.me/hellokirsten" target="_blank">
                  Message Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/Recursive-(4)-(1).png"
              alt="SaaS Dashboard"
              width={1000}
              height={698}
              priority
              className="shadow-lg"
            />
            <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
          </div>
        </div>
      </Card>
    </section>
  );
}
