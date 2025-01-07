"use client";

import { motion } from "framer-motion";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";

export function Testimonials() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-center text-muted">Testimonials</span>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="font-heading sm:text-5xl tracking-tight text-balance font-bold md:text-5xl text-3xl sm:text-4xl"
        >
          building for
          <span className="bg-clip-text bg-gradient-to-br from-accent to-primary text-secondary">
            the best
          </span>
        </motion.h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        We&apos;ve collaborated with dozens of teams building and financing future-proof technology.
      </p>
      <Carousel opts={{ align: "start", loop: true }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselTestimonialCard
            name="Piero Gancia, Atomic Fund"
            username="pgancia"
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/piero_0054b252-3f66-452d-80eb-05dc73bd01c4.jpeg"
            text="I met Pranav around 3 years ago after finding his work on the infura website. From the first day, his ideas and his work were instrumental in developping the ibicash protocol. His expertise in solidity and the entire web3 stack is impressive, consistently delivering high-quality code and innovative solutions. He excels in communicating and resolving complex issues quickly. Pranav is also always available. We work in opposite timezomes and he has pulled countless all-nighters to help the team and the cause. I would recommend his work to anyone and look forward to continue working with him."
          />
          <CarouselTestimonialCard
            name="Max Kline"
            username="Dragonfly Capital"
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-2.avif"
            text="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue. Vestibulum nec orci ornare, imperdiet metus vel."
          />
          <CarouselTestimonialCard
            name="Bob"
            username="thisisbob"
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-3.avif"
            text="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque."
          />
          <CarouselTestimonialCard
            name="Emily"
            username="emilysmith"
            image="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-4.avif"
            text="Suspendisse a velit elit. Curabitur augue libero, vulputate sed dui id, sodales venenatis sem. Suspendisse dapibus neque eu justo volutpat gravida."
          />
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
