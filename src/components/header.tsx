"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem } from "@/components/mobile-nav-item";

export function Header() {
  return (
    <motion.header
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mt-5 flex items-center justify-between gap-10 py-4 md:mt-4"
    >
      <Logo className="max-w-48 sm:max-w-xs" />
      <div className="flex items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 lg:flex">
          <NavItem href="/leadership" label="About Us" />
          <NavItem href="/projects" label="Our Work" />
          <NavItem href="/tooling" label="Venture Tools" />
          <NavItem href="/leadership#joinus" label="Join our Guild" />
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild>
            <Link href="https://cal.com/recursive" target="_blank" className="cursor-pointer">
              Schedule a Call
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem href="/leadership" label="About Us" />
            <MobileNavItem href="/projects" label="Our Work" />
            <MobileNavItem href="/tooling" label="Venture Tools" />
            <MobileNavItem href="/leadership#joinus" label="Join our Guild" />

            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </motion.header>
  );
}
