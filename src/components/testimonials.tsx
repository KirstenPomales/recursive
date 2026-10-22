"use client";

import { motion } from "framer-motion";

import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

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
      id="testimonials"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="container flex flex-col items-center gap-6 py-24 sm:gap-7"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3 items-center">
        <motion.span variants={itemVariants} className="text-center font-bold uppercase text-black border-2 border-black px-2 py-1 bg-secondary shadow-neo">
          Testimonials
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-balance font-heading text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-black mt-4 text-center"
        >
          building for
          <span className="bg-primary text-white px-2 mx-2 -rotate-2 inline-block">
            the best
          </span>
        </motion.h2>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="max-w-lg text-balance text-center text-lg font-bold text-black/70"
      >
        We&apos;ve collaborated with dozens of teams building future-proof technology.
      </motion.p>

      {/* Logo Section */}
      <motion.div variants={itemVariants} className="w-full">
        <div className="flex flex-wrap items-center justify-center gap-8 py-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="group relative border-2 border-transparent hover:border-black p-2 transition-all"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={logo}
                alt="Partner logo"
                className="h-6 w-auto opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-8"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <Carousel opts={{ align: "start", loop: true }} className="mt-6 w-full px-4 xl:px-0">
          <CarouselPrevious className="-left-6 size-10 sm:hidden xl:-left-12 xl:size-12" />
          <CarouselContent className="pb-4">
            <CarouselTestimonialCard
              name="Piero Gancia"
              username="Founder, Atomic Fund"
              image="/images/piero.jpeg"
              logoImage="/images/atomic-logo.png"
              projectContext="RWA protocol and DAPP"
              text="From the first day, their ideas and work were instrumental in developing the Ibicash protocol. Their expertise in solidity and the entire web3 stack is impressive, consistently delivering high-quality code and innovative solutions."
            />
            <CarouselTestimonialCard
              name="April"
              username="Finance Manager, Dragonfly Capital"
              image="/images/april.png"
              logoImage="/images/dragonfly.png"
              projectContext="Portfolio management software"
              text="The team is assisting us in developing an in-house system to monitor portfolios, record valuations and track progresses. Without hesitation, we would recommend this team to our friends with similar needs."
            />

            <CarouselTestimonialCard
              name="Anshul Gupta"
              username="Founder, Bloom Impex"
              image="/images/Anshul.jpeg"
              logoImage="/images/bloom-logo-2.png"
              projectContext="Commodities ERP network"
              text="They closely worked with us to understand our operations to give us a tailored solution that fits perfectly into our existing workflows. Responsive and top-tier team."
            />
          </CarouselContent>
          <CarouselNext className="-right-4 top-1/2 size-10 border-black bg-white hover:bg-muted xl:-right-8 xl:size-12" />
        </Carousel>
      </motion.div>
    </motion.section>
  );
}
