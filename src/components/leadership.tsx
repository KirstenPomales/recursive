"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Leadership() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          over&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            7 years{" "}
          </span>
          experience building&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            crypto native products
          </span>
        </motion.h1>
        <p className="text-lg text-muted-foreground">
          Recursive Studios was founded by Pranav and Kirsten to solve real-world problems using
          web3 tech. They&apos;ve each been building in the blockchain space for the past 7 years -
          leading VC-backed startups, building deep protocol infra, and growing open-source
          communities. Together, they lead the team behind Recursive.
        </p>
      </div>

      <div
        className="grid gap-8 pt-12
       md:grid-cols-2 lg:grid-cols-3"
      >
        {/* CEO */}
        <div className="flex flex-col items-center rounded-lg border bg-card p-6">
          <div className="relative mb-4 size-[200px]">
            <Image
              src="/images/placeholder.png"
              alt="Sarah Johnson"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="font-heading text-2xl font-semibold">Sarah Johnson</h2>
          <p className="mb-2 font-medium text-muted-foreground">Chief Executive Officer</p>
          <p className="mb-4 text-center text-sm text-muted-foreground">
            Former VP at Ethereum Foundation with 15+ years in blockchain technology and startup
            leadership.
          </p>
          <div className="mb-4 flex gap-2">
            <Badge>Blockchain</Badge>
            <Badge variant="secondary">Strategy</Badge>
          </div>
          <Button size="sm" variant="outline">
            Connect on LinkedIn
          </Button>
        </div>

        {/* CTO */}
        <div className="flex flex-col items-center rounded-lg border bg-card p-6">
          <div className="relative mb-4 size-[200px]">
            <Image
              src="/images/placeholder.png"
              alt="Alex Chen"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="font-heading text-2xl font-semibold">Alex Chen</h2>
          <p className="mb-2 font-medium text-muted-foreground">Chief Technology Officer</p>
          <p className="mb-4 text-center text-sm text-muted-foreground">
            Web3 architect and former lead developer at Polygon with expertise in scalable
            blockchain solutions.
          </p>
          <div className="mb-4 flex gap-2">
            <Badge>Engineering</Badge>
            <Badge variant="secondary">Web3</Badge>
          </div>
          <Button size="sm" variant="outline">
            Connect on LinkedIn
          </Button>
        </div>

        {/* COO */}
        <div className="flex flex-col items-center rounded-lg border bg-card p-6">
          <div className="relative mb-4 size-[200px]">
            <Image
              src="/images/placeholder.png"
              alt="Michael Roberts"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="font-heading text-2xl font-semibold">Michael Roberts</h2>
          <p className="mb-2 font-medium text-muted-foreground">Chief Operating Officer</p>
          <p className="mb-4 text-center text-sm text-muted-foreground">
            Operations expert with experience scaling DeFi protocols and Web3 platforms globally.
          </p>
          <div className="mb-4 flex gap-2">
            <Badge>Operations</Badge>
            <Badge variant="secondary">DeFi</Badge>
          </div>
          <Button size="sm" variant="outline">
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}
