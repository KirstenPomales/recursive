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
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mt-5 flex items-center justify-between gap-10 py-4 md:mt-4"
    >
      <Logo className="max-w-48 sm:max-w-xs" />
      <div className="flex items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 lg:flex">
          <NavItem href="/" label="Home" />
          <NavItem href="/leadership" label="About" />
          <div className="dropdown-container relative">
            <button
              className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link
                    href="/ai-agent-developer"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    AI Agents
                  </Link>
                  <Link
                    href="/tooling"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    Venture Tools
                  </Link>
                  <Link
                    href="/embedded-engineering"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    Embedded Engineering
                  </Link>
                </div>
              </div>
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
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
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
