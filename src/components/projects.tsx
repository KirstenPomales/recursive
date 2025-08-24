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
            <h2 className="font-heading text-2xl font-semibold">
              Ibi-Cash: SVM RWA Prediction Market Protocol
            </h2>
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
            <h2 className="font-heading text-2xl font-semibold">
              Dragonfly Capital: On-Chain Portfolio Management
            </h2>
            <p className="text-muted-foreground">
              We built Dragonfly&apos;s internal portfolio management system, which tracks
              automatically on-chain events relating to TGEs, lock-ups, and more.
            </p>
            <div className="flex gap-2">
              <Badge>ERP Development</Badge>
              <Badge variant="secondary">On-Chain Alerts</Badge>
              <Badge variant="outline">Venture</Badge>
            </div>
            <div className="mt-10 flex items-center">
              <img src="/images/april.png" alt="Reviewer" className="size-10 rounded-full" />
              <div className="ml-3">
                <p className="font-semibold">April</p>
                <p className="text-muted-foreground">Finance Manager, Dragonfly Capital</p>
                <p className="text-sm italic">
                  &quot;Without hesitation, we would recommend this team to our friends with similar
                  needs.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/dragonfly-1.png"
              alt="dragonfly capital project by recursive studio"
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
            <h2 className="font-heading text-2xl font-semibold">
              Ethers Query: React Library for Ethers JS
            </h2>
            <p className="text-muted-foreground">
              Development of the official React library for Ethers JS. Ethers JS is one of the most
              popular frontend frameworks in Ethereum.
            </p>
            <div className="flex gap-2">
              <Badge>Ethereum</Badge>
              <Badge variant="secondary">Frontend Libraries</Badge>
              <Badge variant="outline">Developer Tools</Badge>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/ethers-js.png"
              alt="ethers js project by recursive studio"
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
            <h2 className="font-heading text-2xl font-semibold">
              Stealth: SVM Collateralized Debt Protocol
            </h2>
            <p className="text-muted-foreground">
              A lending protocol on Solana that allows users to borrow against collateral as part of
              a broader ecosystem of connected protocols.
            </p>
            <div className="flex gap-2">
              <Badge>Solana</Badge>
              <Badge variant="secondary">Defi</Badge>
              <Badge variant="outline">Lending</Badge>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/stealth.png"
              alt="stealth project by recursive studio"
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
            <h2 className="font-heading text-2xl font-semibold">ai16z Eliza: Zerion Plugin</h2>
            <p className="text-muted-foreground">
              A plugin that allows Eliza agents to access real-time wallet and token data across 14
              blockchains.
            </p>
            <div className="flex gap-2">
              <Badge>AI Agents</Badge>
              <Badge variant="secondary">API</Badge>

              <Badge variant="outline">ai16z Eliza</Badge>
            </div>
            <Button asChild>
              <Link
                href="https://x.com/kirstenrpomales/status/1884244451721371833"
                target="_blank"
                className="cursor-pointer"
              >
                View Project
              </Link>
            </Button>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/ai16z-eliza-zerion-plugin.png"
              alt="eliza ai agent ai16z zerion plugin recursive studio"
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
            <h2 className="font-heading text-2xl font-semibold">Brahma: Commodities ERP</h2>
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
                  &apos;Their mobile first ERP network has brought our business into the 21st
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
          className="flex flex-col items-center gap-8 rounded-lg border bg-card p-6 md:flex-row"
          variants={item}
        >
          <div className="flex-1 space-y-4">
            <h2 className="font-heading text-2xl font-semibold">
              Liquidus: Governance Design for Banking Blockchain
            </h2>
            <p className="text-muted-foreground">
              Consulted the Liquidus team and their consortium of banks on a holistic blockchain
              governance design process over the course of 6 months. Liquidus was the official
              blockchain partner for the Eastern Caribbean Central Bank, building KYC and regulatory
              unification systems for the Caribbean region.
            </p>
            <div className="flex gap-2">
              <Badge>Governance</Badge>
              <Badge variant="secondary">Consulting</Badge>
              <Badge variant="outline">Consortium Design</Badge>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/liquidus.png"
              alt="liquidus governance design by recursive studio"
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
            <h2 className="font-heading text-2xl font-semibold">Mr. Fox: AI Crypto Trading</h2>
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
          className="flex flex-col items-center gap-8 rounded-lg border bg-card p-6 md:flex-row-reverse"
          variants={item}
        >
          <div className="flex-1 space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Crown: Delivery App</h2>
            <p className="text-muted-foreground">
              The first online pharmaceutical weed delivery platform in California, partnering with
              dispensaries to delivery weed on-demand.
            </p>
            <div className="flex gap-2">
              <Badge>E-commerce</Badge>
              <Badge variant="secondary">Delivery Platform</Badge>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/crown.png"
              alt="crown weed delivery platform by recursive studio"
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
            <h2 className="font-heading text-2xl font-semibold">Revyou: Telegram Mini App</h2>
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

        <motion.div
          className="flex flex-col items-center gap-8 rounded-lg border bg-card p-6 md:flex-row-reverse"
          variants={item}
        >
          <div className="flex-1 space-y-4">
            <h2 className="font-heading text-2xl font-semibold">
              TalentLayer: EVM Marketplace Protocol
            </h2>
            <p className="text-muted-foreground">
              A decentralized and censorship resistant infrastructure for building service
              marketplaces; ride-share apps, freelance platforms, and more. A comprehensive SDK and
              developer toolkit enabling platforms to easily integrate.
            </p>
            <div className="flex gap-2">
              <Badge>Protocol Network</Badge>
              <Badge variant="secondary">Marketplace</Badge>

              <Badge variant="outline">EVM</Badge>
              <Badge>API</Badge>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/projects/talentlayer.jpg"
              alt="talentlayer protocol kirsten pomales"
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
            <h2 className="font-heading text-2xl font-semibold">
              Freelance Search: ChatGPT Plugin
            </h2>
            <p className="text-muted-foreground">
              An AI agent that reads real-time web data from the world&apos;s top freelance
              marketplaces, and allows users to run detailed search over 1 million jobs. The #1
              ChatGPT app for hiring, Spring 2024
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

        <motion.p className="text-center text-lg italic text-muted-foreground" variants={item}>
          ...and many more
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
