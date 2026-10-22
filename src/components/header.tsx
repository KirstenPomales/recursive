"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Logo } from "@/components/logo";
import { MobileNavItem } from "@/components/mobile-nav-item";
import { MobileNavbar } from "@/components/mobile-navbar";
import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="container mt-5 flex items-center justify-between gap-10 py-4 md:mt-4 border-b-2 border-black bg-background pb-6"
    >
      <Logo className="max-w-48 sm:max-w-xs" />
      <div className="flex items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 lg:flex">
          <NavItem href="/" label="Home" />
          <NavItem href="/leadership" label="About" />
          <div className="dropdown-container relative">
            <button
              className="flex items-center gap-1 font-bold text-black hover:text-primary transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Specialties
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="miter"
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full mt-2 w-48 border-2 border-black bg-background shadow-neo"
              >
                <div className="py-1">
                  <Link
                    href="/ai-agent-developer"
                    className="block px-4 py-2 text-sm font-bold text-black hover:bg-primary hover:text-white transition-colors"
                  >
                    AI Agents
                  </Link>
                  <Link
                    href="/tooling"
                    className="block px-4 py-2 text-sm font-bold text-black hover:bg-primary hover:text-white transition-colors"
                  >
                    Venture Tools
                  </Link>
                  <Link
                    href="/embedded-engineering"
                    className="block px-4 py-2 text-sm font-bold text-black hover:bg-primary hover:text-white transition-colors"
                  >
                    Embedded Engineering
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
          <NavItem href="/projects" label="Projects" />

          <NavItem href="/blog" label="Blog" />
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
        <div className="container border-t-2 border-black bg-background py-4 text-foreground shadow-none">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem href="/leadership" label="About" />

            <MobileNavItem href="/ai-agent-developer" label="AI Agents" />
            <MobileNavItem href="/tooling" label="Venture Tools" />
            <MobileNavItem href="/projects" label="Recent Projects" />
            <MobileNavItem href="/blog" label="Blog" />
            <MobileNavItem href="/leadership#joinus" label="Join our Guild" />

            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="https://cal.com/recursive" className="cursor-pointer">
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </motion.header>
  );
}
