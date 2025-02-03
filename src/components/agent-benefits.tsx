"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function AgentBenefits() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="container flex flex-col items-center gap-6 py-24 sm:gap-7"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">ai agent developer</span>
        <h2 className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl">
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            supercharged ai agents&nbsp;
          </span>
          starting at&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary">
            $10K
          </span>
        </h2>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-balance text-center text-lg text-muted-foreground"
      >
        Our team of former VC backed founders and engineers is here to help you spec, develop, and
        test your AI agent - from idea to launch.
      </motion.p>

      <motion.div variants={containerVariants} className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            image: "/images/q-and-a-agents.png",
            title: "Q&A Agents",
            description:
              "Agents that have a knowledge base on your product or community, and can answer customer questions directly",
          },
          {
            image: "/images/ai-as-ui.png",
            title: "AI as UI",
            description:
              "Agents that can help your users perform actions that they'd normally use an app for, in natural language",
          },
          {
            image: "/images/crypto-agents.png",
            title: "On-Chain Agents",
            description:
              "Agents that can read on-chain information and perform trades, NFT minting, and more on user's behalf",
          },
        ].map((card, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="border-0">
              <CardContent className="flex flex-col gap-4 bg-background p-6">
                <div className="relative flex-1">
                  <Image
                    alt="Recursive Studio VC Portfolio Management Tool"
                    src={card.image}
                    width={900}
                    height={698}
                    priority
                    className="mt-0"
                  />
                  <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
                </div>
                <h3 className="mt-7 text-2xl font-semibold leading-none tracking-tight md:text-3xl">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-center text-base font-semibold italic text-muted-foreground md:text-xl"
      >
        powered by{" "}
        <a href="https://www.elizaos.ai/" className="text-primary" target="_blank">
          ElizaOS
        </a>
        , the leading on-chain ai agent framework
      </motion.p>
    </motion.section>
  );
}
