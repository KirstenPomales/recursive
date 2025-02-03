import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function FeaturedProjects() {
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
    <section className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Project
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover our latest breakthrough project showcasing our expertise in AI and software
            development.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-5 sm:gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/zerion-highlight.png"
              alt="Featured Project"
              fill
              className="rounded-2xl object-contain"
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight">AI-Powered Innovation</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;ve created innovative solutions that drive real business value through
              cutting-edge technology and thoughtful design.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex gap-x-4">
                <div className="flex size-12 flex-none items-center justify-center rounded-lg bg-blue-600">
                  <svg
                    className="size-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Lightning Fast</h4>
                  <p className="mt-2 text-gray-600">
                    Optimized performance with cutting-edge technology
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex size-12 flex-none items-center justify-center rounded-lg bg-blue-600">
                  <svg
                    className="size-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Secure by Design</h4>
                  <p className="mt-2 text-gray-600">
                    Built with security best practices from the ground up
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <a
                href="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                View Project Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
