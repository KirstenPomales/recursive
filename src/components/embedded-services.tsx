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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function EmbeddedServices() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container flex flex-col items-center gap-6 py-24 sm:gap-7"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">what we build</span>
        <h2 className="text-balance text-center font-heading text-3xl font-bold tracking-tight md:text-5xl">
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            extend
          </span>{" "}
          your&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            engineering department
          </span>
        </h2>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-balance text-center text-lg text-muted-foreground"
      >
        We help infra teams accomplish more with less by expanding your engineering team with
        flexible project-based work. Build everything your protocol needs to succeed, faster - from
        core infrastructure to developer tools and applications.
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={itemVariants}>
          <Card className="border-0">
            <CardContent className="flex flex-col gap-4 border-0 bg-background p-6 text-center">
              <div className="relative h-40">
                <Image
                  src="/images/core-protocols.png"
                  alt="Protocol Development"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold leading-none tracking-tight">
                Core Protocol Development
              </h3>
              <p className="text-sm text-muted-foreground">
                End-to-end protocol development for L1s, L2s, and DeFi protocols. Smart contracts,
                consensus mechanisms, and core infrastructure.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-0">
            <CardContent className="flex flex-col gap-4 border-0 bg-background p-6 text-center">
              <div className="relative h-40">
                <Image
                  src="/images/Recursive-(4)-(1).png"
                  alt="SDKs & APIs"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold leading-none tracking-tight">SDKs & APIs</h3>
              <p className="text-sm text-muted-foreground">
                Developer-friendly SDKs and APIs that make it easy for builders to integrate with
                your protocol. Documentation, examples, and starter kits included.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-0">
            <CardContent className="flex flex-col gap-4 border-0 bg-background p-6 text-center">
              <div className="relative h-40">
                <Image
                  src="/images/production-apps.png"
                  alt="Example Applications"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold leading-none tracking-tight">
                Demo & Production Apps
              </h3>
              <p className="text-sm text-muted-foreground">
                Production-ready example apps that showcase your protocol&apos;s capabilities. From
                DeFi tools to gaming applications and enterprise solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-0">
            <CardContent className="flex flex-col gap-4 border-0 bg-background p-6 text-center">
              <div className="relative h-40">
                <Image
                  src="/images/tools.png"
                  alt="Ecosystem Apps"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold leading-none tracking-tight">
                Starter Kits & Dev Tools
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-scale ecosystem applications that drive user adoption and engagement. Built
                with modern frameworks and designed for scale.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
