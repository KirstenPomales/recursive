"use client";

import { motion } from "framer-motion";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";

export function Testimonials2() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-muted">Testimonials</span>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl sm:text-5xl md:text-5xl"
        >
          building for&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            the best
          </span>
        </motion.h2>
      </div>
      <p className="max-w-lg text-balance text-center text-lg text-muted-foreground">
        See what our partners say about our work.
      </p>
      <Carousel opts={{ align: "start", loop: true }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselTestimonialCard
            name="Piero Gancia, Atomic Fund"
            username="pgancia"
            image="/images/piero.jpeg"
            text="From the first day, Pranav's ideas and his work were instrumental in developping the ibicash protocol. His expertise in solidity and the entire web3 stack is impressive, consistently delivering high-quality code and innovative solutions. I would recommend their work to anyone and look forward to continue working with him."
          />
          <CarouselTestimonialCard
            name="Max Kline"
            username="Dragonfly Capital"
            image="/images/2.png"
            text="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue. Vestibulum nec orci ornare, imperdiet metus vel."
          />
          <CarouselTestimonialCard
            name="Bob"
            username="thisisbob"
            image="/images/2.png"
            text="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque."
          />
          <CarouselTestimonialCard
            name="Emily"
            username="emilysmith"
            image="/images/2.png"
            text="Suspendisse a velit elit. Curabitur augue libero, vulputate sed dui id, sodales venenatis sem. Suspendisse dapibus neque eu justo volutpat gravida."
          />
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
