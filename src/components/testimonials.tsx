"use client";

import { motion } from "framer-motion";

import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export function Testimonials() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">Testimonials</span>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          building for
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            &nbsp;the best
          </span>
        </motion.h2>
      </div>
      <p className="max-w-lg text-balance text-center text-lg text-muted-foreground">
        We&apos;ve collaborated with dozens of teams building and financing future-proof technology.
      </p>
      <Carousel opts={{ align: "start", loop: true }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 sm:hidden size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          {/* <CarouselTestimonialCard
            name="Someone Important"
            username="Dragonfly Capital"
            image="/images/testimonial-3.avif"
            logoImage="/images/dragonfly-logo.png"
            projectContext="Portfolio management platform"
            text="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque. blandit ligula quis, sodales neque. blandit ligula quis."
          /> */}
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
          {/* <CarouselTestimonialCard
            name="Someone Important"
            username="Other ERP Client"
            image="/images/testimonial-4.avif"
            logoImage="/images/bloom-logo.png"
            projectContext="Custom ERP Implementation"
            text="Suspendisse a velit elit. Curabitur augue libero, vulputate sed dui id, sodales venenatis sem. Suspendisse dapibus neque eu justo volutpat gravida."
          /> */}
        </CarouselContent>
        <CarouselNext className="-right-6 sm:hidden size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
