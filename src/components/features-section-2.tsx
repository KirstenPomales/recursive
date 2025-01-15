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

export function Features2() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="container flex flex-col items-center gap-6 py-24 sm:gap-7"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">
          spreadsheets are a silent killer
        </span>
        <h2 className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl">
          replace&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary line-through">
            spreadsheets<br></br>
          </span>
          with&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            real-time insights
          </span>
        </h2>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-balance text-center text-lg text-muted-foreground"
      >
        Recursive Labs provides custom tailored portfolio management software for Web3 venture
        firms. Our platforms streamline the way you track investments, manage token vesting
        schedules, and gain real-time insights into your portfolio performance.
      </motion.p>

      <motion.div variants={containerVariants} className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            image: "/images/vc/vc-multichart.png",
            title: "Simplify Complex Investments",
            description: "Track everything from SAFTs to token vesting schedules—automatically.",
          },
          {
            image: "/images/vc/vc-column-detail.png",
            title: "View Real-Time Insights",
            description:
              "Get instant access to key metrics like IRR, staking returns, and equity dilution.",
          },
          {
            image: "/images/vc/vc-list.png",
            title: "Eliminate Spreadsheets",
            description: "Say goodbye to manual errors and inconsistent data formats.",
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
    </motion.section>
  );
}
