"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { link } from "fs";

export function TestimonialsEmbedded() {
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

  // Array of logo images - you can replace these with actual logos later
  const logos = [
    "/images/dragonfly-mini.png",
    "/images/atomic-logo.png",
    "/images/ibicash-logo.png",
    "/images/bloom-logo-2.png",
    "/images/ethersjs-logo.png",
    "/images/zerion-logo-blue.png",
    "/images/xrpl-logo.png",
    "/images/elizaos-logo.png",
    "/images/secret.png",
    "/images/more.png",
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="container flex flex-col items-center gap-6 py-24 sm:gap-7"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <motion.span variants={itemVariants} className="text-center font-bold uppercase text-muted">
          Testimonials
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          building for
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            &nbsp;the best
          </span>
        </motion.h2>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="max-w-lg text-balance text-center text-lg text-muted-foreground"
      >
        We&apos;ve collaborated with dozens of teams building future-proof technology.
      </motion.p>

      {/* Logo Section */}
      <motion.div variants={itemVariants} className="w-full">
        <div className="flex flex-wrap items-center justify-center gap-8 py-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="group relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={logo}
                alt="Partner logo"
                className="h-3 w-auto opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-4"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-center gap-3"
        >
          <Button size="lg" variant="outline" asChild className="w-40 cursor-pointer border-border">
            <Link href="https://recursive.so/#testimonials">What Our Clients Say</Link>
          </Button>
          <Button size="lg" asChild className="w-40 cursor-pointer">
            <Link href="https://cal.com/recursive" target="_blank">
              About our Team
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
