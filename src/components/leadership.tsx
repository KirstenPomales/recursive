"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Leadership() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold">Our Leadership Team</h1>
        <p className="text-lg text-muted-foreground">
          Meet the visionaries and industry experts leading our company towards innovation and
          excellence in the web3 space.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
