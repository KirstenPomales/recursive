"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CtaSection() {
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

  return (
    <motion.section
      className="container py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="relative flex flex-1 flex-col items-center gap-6 overflow-hidden border-2 border-black bg-secondary shadow-neo-xl p-10">
        <motion.h2
          variants={itemVariants}
          className="text-balance text-center font-heading text-3xl font-black tracking-tight md:text-5xl text-black"
        >
          let&apos;s build
          <span className="bg-primary text-white px-2 mx-2 rotate-2 inline-block shadow-neo">
            &nbsp;together
          </span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-center text-lg font-bold text-black"
        >
          Schedule a call to discover how we can achieve your team&apos;s big vision, together.{" "}
        </motion.p>
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 w-full max-w-md">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-2 border-black bg-white text-black hover:bg-muted shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <Link href="https://t.me/hellokirsten" target="_blank">
              Message Us
            </Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer border-2 border-black bg-primary text-white shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <Link href="https://cal.com/recursive" target="_blank">
              Schedule a Call
            </Link>
          </Button>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-10 w-full flex justify-center">
          <Image
            alt="SaaS Dashboard"
            src="/images/Recursive-banner.png"
            width={900}
            height={698}
            priority
            className="border-2 border-black shadow-neo bg-white"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
