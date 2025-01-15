"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 pb-12"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div className="space-y-8" variants={container}>
        <motion.h2 className="font-heading text-2xl font-semibold" variants={item}>
          A few of our past projects...
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-8 rounded-lg border bg-card p-6 md:flex-row"
          variants={item}
        >
          <div className="flex-1 space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Ibi-Cash</h2>
            <p className="text-muted-foreground">
              A reforestation RWA and boding curve protocol built on SVM and EVM. Built for one of
              Brazil&apos;s biggest crypto investment funds, Atomic.
            </p>
            <div className="flex gap-2">
              <Badge>EVM</Badge>
              <Badge variant="secondary">Solana</Badge>
              <Badge variant="outline">Oracles</Badge>
            </div>
            <Button asChild>
              <Link href="https://ibi.cash/" target="_blank" className="cursor-pointer">
                View Project
              </Link>
            </Button>
            <div className="mt-10 flex items-center">
              <img src="/images/piero.jpeg" alt="Reviewer" className="size-10 rounded-full" />
              <div className="ml-3">
                <p className="font-semibold">Piero Ganciae</p>
                <p className="text-muted-foreground">Atomic Fund</p>
                <p className="text-sm italic">
                  &quot;From the first day, their ideas and work were instrumental in developping
                  the ibicash protocol. Their expertise in solidity and the entire web3 stack is
                  impressive, consistently delivering high-quality code and innovative
                  solutions.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/ibicash.png"
              alt="ibicash RWA protocol by Recursive Studio"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-8 rounded-lg border bg-card p-6 md:flex-row-reverse"
          variants={item}
        >
          <div className="flex-1 space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Mr. Fox</h2>
            <p className="text-muted-foreground">
              An intent based chatbot that can execute transactions in a non-custodial way.
            </p>
            <div className="flex gap-2">
              <Badge>AI Agents</Badge>
              <Badge variant="secondary">DAPP</Badge>
              <Badge variant="outline">EVM</Badge>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/mister-fox.jpeg"
              alt="E-commerce Redesign Project"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-8 rounded-lg border bg-card p-6 md:flex-row"
          variants={item}
        >
          <div className="flex-1 space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Brahma</h2>
            <p className="text-muted-foreground">
              A cloud based ERP for one of the largest pulse trading and manufacturing firms in
              India. Millions of dollars of commerce passes through the system daily.
            </p>
            <div className="flex gap-2">
              <Badge>Mobile</Badge>
              <Badge variant="secondary">Development</Badge>
              <Badge variant="outline">UX Design</Badge>
            </div>
            <div className="mt-4 flex items-center">
              <img src="/images/anshul.png" alt="Reviewer" className="size-10 rounded-full" />
              <div className="ml-3">
                <p className="font-semibold">Anshul Gupta</p>
                <p className="text-muted-foreground">Bloom Impex</p>
                <p className="text-sm">
                  &apos;Their mobile first ERP system has brought our business into the 21st
                  century. He closely worked with us to understand our operations to give us a
                  tailored solution that fits perfectly into our existing workflows.&apos;
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/brahma.jpeg"
              alt="commodities ERP by Recursive Studio"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-8 rounded-lg border bg-card p-6 md:flex-row-reverse"
          variants={item}
        >
          <div className="flex-1 space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Freelance Search</h2>
            <p className="text-muted-foreground">
              An AI agent that reads real-time web data from the world’s top freelance marketplaces,
              and allows users to run detailed search over 1 million jobs. An API that opens up
              access to this data to 3rd party apps.
            </p>
            <div className="flex gap-2">
              <Badge>AI Agents</Badge>
              <Badge variant="secondary">API</Badge>

              <Badge variant="outline">Chrome Plugin</Badge>
              <Badge>Web Scraping</Badge>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/freelancesearch.png"
              alt="chatgpt plugin ai agent by recursive studio"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-8 rounded-lg border bg-card p-6 md:flex-row"
          variants={item}
        >
          <div className="flex-1 space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Revyou Telegram Mini App</h2>
            <p className="text-muted-foreground">
              A Telegram Mini App that allows workers to get discovered by hirers and earn points
              for filling out their profile and completing bounties.
            </p>
            <div className="flex gap-2">
              <Badge>Mobile</Badge>
              <Badge variant="secondary">Telegram Mini App</Badge>
              <Badge variant="outline">Telegram Bot</Badge>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/revyou.png"
              alt="telegram mini app by recursive studio"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
