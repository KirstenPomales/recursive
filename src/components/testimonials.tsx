"use client";

import { motion } from "framer-motion";

import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export function Testimonials() {
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
        We&apos;ve collaborated with dozens of teams building and financing future-proof technology.
      </motion.p>

      <motion.div variants={itemVariants} className="w-full">
        <Carousel opts={{ align: "start", loop: true }} className="mt-6 w-full px-4 xl:px-0">
          <CarouselPrevious className="-left-6 sm:hidden size-7 xl:-left-12 xl:size-8" />
          <CarouselContent className="pb-4">
            <CarouselTestimonialCard
              name="Piero Gancia"
              username="Atomic Fund"
              image="/images/piero.jpeg"
              logoImage="/images/atomic-logo.png"
              projectContext="RWA protocol and DAPP"
              text="From the first day, their ideas and work were instrumental in developping the ibicash protocol. Their expertise in solidity and the entire web3 stack is impressive, consistently delivering high-quality code and innovative solutions."
            />
            <CarouselTestimonialCard
              name="Anshul Gupta"
              username="Bloom Impex"
              image="/images/Anshul.jpeg"
              logoImage="/images/bloom-logo.png"
              projectContext="Commodities ERP system"
              text="Their mobile first ERP system has brought our business into the 21st century. He closely worked with us to understand our operations to give us a tailored solution that fits perfectly into our existing workflows."
            />
          </CarouselContent>
          <CarouselNext className="-right-6 sm:hidden size-7 xl:-right-12 xl:size-8" />
        </Carousel>
      </motion.div>
    </motion.section>
  );
}
