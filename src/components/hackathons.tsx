"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export function Hackathons() {
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
          Our Hackathon Victories 🏆
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-8 rounded-lg border bg-card p-6 md:flex-row"
          variants={item}
        >
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-2xl font-semibold">The Box</h2>
              <Badge>ETH Global Brussels 2024 🇧🇪</Badge>
            </div>
            <p className="text-muted-foreground">
              A decentralized physical infrastructure network for delivering packages in a
              peer-to-peer way. We combined custom-built hardware innovation with blockchain
              technology to create secure, automated delivery solutions. This project was infamous
              because we set some hardware on fire inside of the hackathon venue. Oops.
            </p>
            <div className="flex gap-2">
              <Badge>Hardware</Badge>
              <Badge variant="secondary">IoT</Badge>
              <Badge>DePIN</Badge>
              <Badge variant="outline">Winner 🏆</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link
                  href="https://ethglobal.com/showcase/the-box-4g29v"
                  target="_blank"
                  className="cursor-pointer"
                >
                  View Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/DePinBox/DePinBoxFrontend"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Github className="mr-2 size-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/hackathons/thebox.png"
              alt="The Box - Hardware Hack"
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
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-2xl font-semibold">DeadAss</h2>
              <Badge>ETH Global Bangkok 2024 🇹🇭</Badge>
            </div>
            <p className="text-muted-foreground">
              An AI-powered wearable device that is aware of your surroundings and can take actions
              on your behalf to secure your funds and contact others for help during emergencies.
            </p>
            <div className="flex gap-2">
              <Badge>AI</Badge>
              <Badge variant="secondary">Hardware</Badge>
              <Badge variant="outline">Winner 🏆</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link
                  href="https://x.com/kirstenrpomales/status/1869379206230032705"
                  target="_blank"
                  className="cursor-pointer"
                >
                  View Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/pranav-singhal/dead-ass"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Github className="mr-2 size-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/hackathons/deadass.png"
              alt="DeadAss - AI Wearable"
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
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-2xl font-semibold">zkPow</h2>
              <Badge>ETH Porto 2023 🇵🇹</Badge>
            </div>
            <p className="text-muted-foreground">
              A platform leveraging zero-knowledge proofs to enable selective disclosure of work
              reputation information, maintaining privacy while proving credentials.
            </p>
            <div className="flex gap-2">
              <Badge>ZK Proofs</Badge>
              <Badge variant="secondary">Privacy</Badge>
              <Badge variant="outline">Winner 🏆</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link
                  href="https://taikai.network/ethporto/hackathons/ethportohackathon2023/projects/clfd3v5pp104522101yfjvhrngbv/idea"
                  target="_blank"
                  className="cursor-pointer"
                >
                  View Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/orgs/ZK-PoW/repositories"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Github className="mr-2 size-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/hackathons/zkpow.png"
              alt="zkPow - Privacy Platform"
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
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-2xl font-semibold">Proof of Picture</h2>
              <Badge>ETH Warsaw 2023 🇵🇱</Badge>
            </div>
            <p className="text-muted-foreground">
              A platform leveraging the C2PA image standard to detect AI generated images and combat
              misinformation in news media through advanced image verification.
            </p>
            <div className="flex gap-2">
              <Badge>AI</Badge>
              <Badge variant="secondary">C2PA</Badge>
              <Badge variant="outline">Winner 🏆</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link
                  href="https://devpost.com/software/proof-of-picture"
                  target="_blank"
                  className="cursor-pointer"
                >
                  View Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/Proof-Of-Photo"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Github className="mr-2 size-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/hackathons/proofofpicture.png"
              alt="Proof of Picture - AI Image Detection"
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
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-2xl font-semibold">InfluLenser</h2>
              <Badge>ETH Global Lisbon 2023 🇵🇹</Badge>
            </div>
            <p className="text-muted-foreground">
              A decentralized influencer marketing marketplace built on Lens Protocol, connecting
              brands with content creators in a transparent ecosystem.
            </p>
            <div className="flex gap-2">
              <Badge>Lens Protocol</Badge>
              <Badge variant="secondary">Web3 Social</Badge>
              <Badge variant="outline">Winner 🏆</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link
                  href="https://ethglobal.com/showcase/influlenser-dcvrj"
                  target="_blank"
                  className="cursor-pointer"
                >
                  View Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/InfluLenser/dapp"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Github className="mr-2 size-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/hackathons/influlenser.png"
              alt="InfluLenser - Lens Protocol"
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
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-2xl font-semibold">Zikileaks</h2>
              <Badge>ETH Dam 2023 🇳🇱</Badge>
            </div>
            <p className="text-muted-foreground">
              A decentralized and private alternative to Wikileaks, ensuring secure and anonymous
              information sharing through blockchain technology.
            </p>
            <div className="flex gap-2">
              <Badge>Privacy</Badge>
              <Badge variant="secondary">Decentralized</Badge>
              <Badge variant="outline">Winner 🏆</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link
                  href="https://taikai.network/en/cryptocanal/hackathons/ethdam/projects/clhx7qd5b106521901wp70gul2x4/idea"
                  target="_blank"
                  className="cursor-pointer"
                >
                  View Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/mattiapomelli/zikileaks"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Github className="mr-2 size-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/hackathons/zikileaks.png"
              alt="Zikileaks - Private Information Sharing"
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
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-2xl font-semibold">Bee Together</h2>
              <Badge>ETH Prague 2023 🇨🇿</Badge>
            </div>
            <p className="text-muted-foreground">
              A peer-to-peer platform empowering freelance collectives to collaborate, profit share
              earnings, and launch their own DAOs.
            </p>
            <div className="flex gap-2">
              <Badge>P2P</Badge>
              <Badge variant="secondary">DAO</Badge>
              <Badge variant="outline">Winner 🏆</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link
                  href="https://devfolio.co/projects/beetogether-d99e"
                  target="_blank"
                  className="cursor-pointer"
                >
                  View Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/beetogether-work"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Github className="mr-2 size-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] w-full md:w-[300px]">
            <Image
              src="/images/hackathons/beetogether.png"
              alt="Bee Together - Freelance Platform"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.p className="text-center text-lg italic text-muted-foreground" variants={item}>
          and more...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
