import "./globals.css";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.recursive.so"), // Replace with your actual domain
  title: "Recursive Studio",
  description: "Crypto and AI product studio and developer guild",
  openGraph: {
    title: "Recursive Studio",
    description: "Crypto and AI product studio and developer guild",
    images: [
      {
        url: "/images/og-image.png", // This should be a 1200x630px image
        width: 1200,
        height: 630,
        alt: "Recursive Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recursive Studio",
    description: "Crypto and AI product studio and developer guild",
    images: ["/images/og-image.png"], // Same image as OG
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
