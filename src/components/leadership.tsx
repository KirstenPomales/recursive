"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Leadership() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          over&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-secondary">
            7 years{" "}
          </span>
          experience building&nbsp;
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary underline">
            crypto native products
          </span>
        </motion.h1>
        <p className="text-lg text-muted-foreground lg:text-left">
          Recursive Studios was founded by
          <a
            href="https://www.linkedin.com/in/singhalpranav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            &nbsp;Pranav&nbsp;
          </a>
          and
          <a
            href="https://www.linkedin.com/in/kirstenpomales/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            &nbsp; Kirsten&nbsp;
          </a>
          to solve real-world problems using web3 tech. Now, they lead a team of engineers tackling
          the biggest challenges in crypto.{" "}
        </p>
      </div>

      {/* Leader Profile Section */}
      <div className="mt-16 flex flex-col items-center lg:flex-row lg:items-start lg:gap-12">
        <div className="relative mb-8 size-[300px] shrink-0 lg:mb-0">
          <Image
            src="/images/placeholder.png"
            alt="Kirsten"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-3xl font-bold lg:text-left">Pranav Singhal, Partner</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Kirsten is one of the Partners at Recursive, where she leads operations and product
              design.
            </p>
            <p>
              Kirsten has spent the past few years leading the team behind TalentLayer, a
              venture-backed protocol infrastructure for hiring. Kirsten led the IEEE's Blockchain
              Governance Working Group from 2018 to 2020, where over 200 open-source researchers
              contributed to research around the governance of decentralized protocols. During that
              time, she also consulted major enterprise blockchain projects including banking
              consortiums, blockchain as a service companies, and more. Kirsten has been featured as
              a speaker on blockchain infrastructure design by the European Commission, Fedex
              Institute, Consensys, and many others.
            </p>
            <p>
              Aside from her work in the blockchain space, Kirsten has also previously founded
              multiple web 2 software companies in the marketplace and data aggregation sectors.
              Before getting into tech, Kirsten worked for 5 years in public policy in the US;
              lobbying on issues related to freedom of speech, cronyism, and energy regulation.
            </p>
            <p>
              Kirsten cares about building decentralized tech that challenges current paradigms;
              reducing power held by governments and corporations, and enabling people to find
              freedom through self-ownership.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">
              <svg
                className="mr-2 size-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </Button>
            <Button variant="outline">Contact Kirsten</Button>
          </div>
        </div>
      </div>

      {/* Speaking Engagements Section */}
      <div className="mt-16">
        <h3 className="mb-8 text-2xl font-bold">Speaking Engagements</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* ETH Lisbon Card */}
          <div className="flex flex-col rounded-lg border bg-card">
            <div className="relative h-48">
              <Image
                src="/images/placeholder.png"
                alt="ETH Lisbon"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h4 className="mb-2 font-heading text-xl font-semibold">
                Technical Workshop, ETH Lisbon
              </h4>
              <p className="text-sm text-muted-foreground">2023</p>
            </div>
          </div>

          {/* European Commission Card */}
          <div className="flex flex-col rounded-lg border bg-card">
            <div className="relative h-48">
              <Image
                src="/images/placeholder.png"
                alt="European Commission"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h4 className="mb-2 font-heading text-xl font-semibold">
                Blockchain Governance Workshop, European Commission
              </h4>
              <p className="text-sm text-muted-foreground">2019</p>
            </div>
          </div>

          {/* SpaghettETH Card */}
          <div className="flex flex-col rounded-lg border bg-card">
            <div className="relative h-48">
              <Image
                src="/images/placeholder.png"
                alt="SpaghettETH"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h4 className="mb-2 font-heading text-xl font-semibold">
                The Power of Protocol Networks, SpaghettETH
              </h4>
              <p className="text-sm text-muted-foreground">2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leader Profile Section */}
      <div className="mt-24 flex flex-col items-center lg:flex-row lg:items-start lg:gap-12">
        <div className="relative mb-8 size-[300px] shrink-0 lg:mb-0">
          <Image
            src="/images/placeholder.png"
            alt="Kirsten"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-3xl font-bold lg:text-left">Kirsten Pomales, Partner</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Kirsten is one of the Partners at Recursive, where she leads operations and product
              design.
            </p>
            <p>
              Kirsten has spent the past few years leading the team behind TalentLayer, a
              venture-backed protocol infrastructure for hiring. Kirsten led the IEEE's Blockchain
              Governance Working Group from 2018 to 2020, where over 200 open-source researchers
              contributed to research around the governance of decentralized protocols. During that
              time, she also consulted major enterprise blockchain projects including banking
              consortiums, blockchain as a service companies, and more. Kirsten has been featured as
              a speaker on blockchain infrastructure design by the European Commission, Fedex
              Institute, Consensys, and many others.
            </p>
            <p>
              Aside from her work in the blockchain space, Kirsten has also previously founded
              multiple web 2 software companies in the marketplace and data aggregation sectors.
              Before getting into tech, Kirsten worked for 5 years in public policy in the US;
              lobbying on issues related to freedom of speech, cronyism, and energy regulation.
            </p>
            <p>
              Kirsten cares about building decentralized tech that challenges current paradigms;
              reducing power held by governments and corporations, and enabling people to find
              freedom through self-ownership.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">
              <svg
                className="mr-2 size-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </Button>
            <Button variant="outline">Contact Kirsten</Button>
          </div>
        </div>
      </div>

      {/* Speaking Engagements Section */}
      <div className="mt-16">
        <h3 className="mb-8 text-2xl font-bold">Speaking Engagements</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* ETH Lisbon Card */}
          <div className="flex flex-col rounded-lg border bg-card">
            <div className="relative h-48">
              <Image
                src="/images/placeholder.png"
                alt="ETH Lisbon"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h4 className="mb-2 font-heading text-xl font-semibold">
                Technical Workshop, ETH Lisbon
              </h4>
              <p className="text-sm text-muted-foreground">2023</p>
            </div>
          </div>

          {/* European Commission Card */}
          <div className="flex flex-col rounded-lg border bg-card">
            <div className="relative h-48">
              <Image
                src="/images/placeholder.png"
                alt="European Commission"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h4 className="mb-2 font-heading text-xl font-semibold">
                Blockchain Governance Workshop, European Commission
              </h4>
              <p className="text-sm text-muted-foreground">2019</p>
            </div>
          </div>

          {/* SpaghettETH Card */}
          <div className="flex flex-col rounded-lg border bg-card">
            <div className="relative h-48">
              <Image
                src="/images/placeholder.png"
                alt="SpaghettETH"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h4 className="mb-2 font-heading text-xl font-semibold">
                The Power of Protocol Networks, SpaghettETH
              </h4>
              <p className="text-sm text-muted-foreground">2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
