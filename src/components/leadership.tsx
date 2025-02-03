"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Leadership() {
  // Add container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Add item variants for individual elements
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <motion.div
        variants={itemVariants}
        className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10"
      >
        <motion.h1
          variants={itemVariants}
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
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground lg:text-left">
          Recursive Studios was founded by
          <a href="/leadership#pranav" className="text-primary">
            &nbsp;Pranav&nbsp;
          </a>
          and
          <a href="/leadership#kirsten" className="text-primary">
            &nbsp; Kirsten&nbsp;
          </a>
          to solve real-world problems using web3 tech. Now, they lead a team of engineers tackling
          the biggest challenges in crypto.{" "}
        </motion.p>
      </motion.div>

      {/* Leader Profile Section */}
      <motion.div
        variants={itemVariants}
        id="pranav"
        className="mt-16 flex flex-col items-center lg:flex-row lg:items-start lg:gap-24"
      >
        <motion.div variants={itemVariants} className="relative mb-8 size-[250px] shrink-0 lg:mb-0">
          <Image
            src="/images/pranav-glow.png"
            alt="Pranav Singhal Recursive"
            fill
            className="rounded-2xl object-cover"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <h2 className="text-left text-2xl font-bold sm:text-3xl">Pranav Singhal, Partner</h2>
          <div className="flex gap-2">
            <Badge>Developer</Badge>
            <Badge variant="secondary">Educator</Badge>
            <Badge variant="outline">Commodities Trader</Badge>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p className="font-bold">
              Pranav is one of the Partners at Recursive, where he leads our engineering team and
              software architecture.
            </p>
            <p className="text-muted-foreground">
              Pranav has spent the past few years helping multiple web3 startups launch products,
              protocol infrastructures, and decentralized applications. His work in the web 3 space
              since 2018 includes building decentralized exchanges, trading bots and agents,
              low-level infrastructure, and more. Pranav currently is an blockchian development
              educator at DBlock Ed, a developer education network.
            </p>
            <p className="text-muted-foreground">
              In addition to his work in web3,{" "}
              <a className="font-bold">
                Pranav is well known for his work building ERP solutions for large-scale businesses
                across India{" "}
              </a>{" "}
              - helping them handle tens of millions worth of commerce.
            </p>
            <p className="text-muted-foreground">
              Earlier in his career, Pranav was a senior engineer leading the Identity and Access
              Management team at Postman, where he contributed to critical security infrastructure.
              Alongside that, Pranav spent three years running a commodities trading firm in India,
              managing millions of dollars in daily trading volume for grains and other raw
              materials.
            </p>
            <p className="text-muted-foreground">
              Beyond tech, while a student Pranav has contributed to award winning astrophysics
              research, having been invited by NASA to exhibit his work. His broad experience and
              interests give him a versatile approach to solving complex problems.
            </p>
            <p className="text-muted-foreground">
              Pranav is passionate about building scalable platforms and leveraging decentralized
              technologies to create solutions that empower businesses and individuals.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" asChild>
              <a href="https://x.com/_pranav_singhal" target="_blank" rel="noopener noreferrer">
                <svg
                  className="mr-2 size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow on X
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/pranav-singhal" target="_blank" rel="noopener noreferrer">
                <svg
                  className="mr-2 size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Github
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/singhalpranav/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="mr-2 size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://t.me/singhal_pranav" target="_blank" rel="noopener noreferrer">
                Contact Pranav
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Speaking Engagements Section */}
      <motion.div variants={itemVariants} className="mt-16">
        <motion.h3 variants={itemVariants} className="mb-8 text-2xl font-bold">
          Featured Content
        </motion.h3>
        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* ETH Lisbon Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="https://github.com/pranav-singhal/create-dapp-kit#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-lg border bg-card"
            >
              <div className="relative h-48">
                <Image
                  src="/images/leadership/starter.png"
                  alt="ETH Lisbon"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="mb-2 font-heading text-xl font-semibold">
                  Web 3 Boiler Plate | Open-Source App Starter Codebase
                </h4>
                <p className="text-sm text-muted-foreground">2025</p>
                <p className="text-sm">
                  While cursor is amazing for development, bootstrapping web3 projects can be
                  tricky. This boilerplate is Pranav&apos;s go-to for building DAPPs fast.
                </p>
              </div>
            </a>
          </motion.div>

          {/* European Commission Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="https://www.dblocked.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-lg border bg-card"
            >
              <div className="relative h-48">
                <Image
                  src="/images/leadership/dblock.png"
                  alt="Pranav Singhal DBlock Ed"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="mb-2 font-heading text-xl font-semibold">
                  DBlock Ed, a Blockchian Developer Bootcamp
                </h4>
                <p className="text-sm text-muted-foreground">2024</p>
                <p className="text-sm">
                  Pranav is a founder and educator at DBlock Ed, where he produces technical
                  education content for engineers breaking into Web 3 and smart contract
                  development.
                </p>
              </div>
            </a>
          </motion.div>

          {/* SpaghettETH Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="https://www.youtube.com/watch?v=sfmMcrbiX0c&ab_channel=DBlockEd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-lg border bg-card"
            >
              <div className="relative h-48">
                <Image
                  src="/images/leadership/waku.png"
                  alt="Pranav Singhal Waku Protocol"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="mb-2 font-heading text-xl font-semibold">
                  Building Web-3 Powered Games Using Waku Protocol
                </h4>
                <p className="text-sm text-muted-foreground">2024</p>
                <p className="text-sm">
                  A live-coding tutorial walking engineers through how to develop games using Waku
                  protocol, a decentralized messaging and data streaming protocol.
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Leader Profile Section */}
      <motion.div
        variants={itemVariants}
        id="kirsten"
        className="mt-24 flex flex-col items-center lg:flex-row lg:items-start lg:gap-10"
      >
        <motion.div variants={itemVariants} className="relative mb-8 size-[300px] shrink-0 lg:mb-0">
          <Image
            src="/images/kirsten-glow.png"
            alt="Kirsten"
            fill
            className="rounded-2xl object-contain"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <h2 className="text-left text-2xl font-bold sm:text-3xl">Kirsten Pomales, Partner</h2>
          <div className="flex gap-2">
            <Badge>Developer</Badge>
            <Badge variant="secondary">VC Backed Founder</Badge>
            <Badge variant="outline">Team Builder</Badge>
          </div>
          <div className="space-y-4">
            <p className="font-bold">
              Kirsten is one of the Partners at Recursive, where she leads operations and product
              design.
            </p>
            <p className="text-muted-foreground">
              Kirsten has spent the past few years leading the team behind TalentLayer, a
              venture-backed protocol infrastructure for marketplaces. While at TalentLayer, Kirsten
              grew a large open-source community, recieved substantial EU grant funding, and scaled
              to over 10K users.{" "}
            </p>
            <p className="text-muted-foreground">
              Before TalentLayer, Kirsten led the IEEE&apos;s Blockchain Governance Working Group
              from 2018 to 2020, where over 200 open-source researchers contributed to research
              around the governance of decentralized protocols. During that time, she also consulted
              major enterprise blockchain projects including banking consortiums, blockchain as a
              service companies, and more. Kirsten has been featured as a speaker on blockchain
              infrastructure design by the European Commission, Fedex Institute, Consensys, and many
              others.
            </p>
            <p className="text-muted-foreground">
              Aside from her work in the blockchain space, Kirsten has also previously founded
              multiple web 2 software companies in the marketplace and data aggregation sectors.
              Before getting into tech, Kirsten worked for 5 years in public policy in the US;
              lobbying on issues related to freedom of speech, cronyism, and energy regulation.
            </p>
            <p className="text-muted-foreground">
              Kirsten cares about building decentralized tech and open-source software that
              challenges current paradigms; reducing power held by governments and corporations, and
              enabling people to find freedom through self-ownership.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" asChild>
              <a href="https://x.com/kirstenrpomales" target="_blank" rel="noopener noreferrer">
                <svg
                  className="mr-2 size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow on X
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/kirstenpomales" target="_blank" rel="noopener noreferrer">
                <svg
                  className="mr-2 size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Github
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/kirstenpomales/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="mr-2 size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                LinkedIn
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a href="https://t.me/hellokirsten" target="_blank" rel="noopener noreferrer">
                Contact Kirsten
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Speaking Engagements Section */}
      <motion.div variants={itemVariants} className="mt-16">
        <motion.h3 variants={itemVariants} className="mb-8 text-2xl font-bold">
          Featured Content
        </motion.h3>
        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* SpaghettETH Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="https://www.youtube.com/live/UtXlnHT7iY0?si=Psz1s0LEth3zmNf-&t=6276"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-lg border bg-card"
            >
              <div className="relative h-48">
                <Image
                  src="/images/leadership/eth-barcelona.png"
                  alt="Kirsten Pomales ETH Barcelona"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="mb-2 font-heading text-xl font-semibold">
                  Blockchain & the Future of Work Panel Discussion at ETH Barcelona
                </h4>
                <p className="text-sm text-muted-foreground">2023</p>
                <p className="text-sm">
                  A panel discussion on how blockchian technology is powering work tech and how
                  innovative hiring patterns are being applied in Web 3.
                </p>
              </div>
            </a>
          </motion.div>

          {/* European Commission Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="https://youtu.be/iOsIE7Ap5s0?si=O9vJl4rnvlY4irA4&t=293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-lg border bg-card"
            >
              <div className="relative h-48">
                <Image
                  src="/images/projects/spaghetteth.png"
                  alt="Blockchian Applications Kirsten Pomales"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="mb-2 font-heading text-xl font-semibold">
                  Introduction to Open Graph Networks and TalentLayer Protocol
                </h4>
                <p className="text-sm text-muted-foreground">2023</p>
                <p className="pt-2 text-sm">
                  A technical workshop at SpaghettETH, reviewing the archetecture of open graph
                  networks like TalentLayer, a protocol for building marketplaces.
                </p>
              </div>
            </a>
          </motion.div>

          {/* Saintgits Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="https://www.youtube.com/live/vc8DwKCiHmw?si=BIudeOtopaHDlTfK&t=65"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-lg border bg-card"
            >
              <div className="relative h-48">
                <Image
                  src="/images/leadership/prague.png"
                  alt="Kirsten Pomales TalentLayer ETH Prague"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="mb-2 font-heading text-xl font-semibold">
                  Build Uncensorable & Privacy Preserving Work Platforms with TalentLayer SDK
                </h4>
                <p className="mb-2 text-sm text-muted-foreground">2023</p>
                <p className="text-sm">
                  A technical workshop on how to build decentralized marketplaces - alternatives to
                  apps like Uber, Italki, Deliveroo, and others - using TalentLayer SDK.
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
