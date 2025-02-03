import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AgentPricing() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="mb-16 text-center text-3xl font-bold">Transparent Pricing</h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border p-8">
          <h3 className="mb-4 text-2xl font-bold">API-Only Agent</h3>
          <p className="mb-4 text-3xl font-bold">$3,000</p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center gap-2">
              <Check className="size-5" />
              <span>Data resource agent</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-5" />
              <span>Production AWS setup</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-5" />
              <span>1-week delivery available</span>
            </li>
          </ul>
          <Button className="w-full">Get Started</Button>
        </div>

        <div className="rounded-lg border bg-primary/5 p-8">
          <h3 className="mb-4 text-2xl font-bold">API Integration Add-On</h3>
          <p className="mb-4 text-3xl font-bold">$10,000</p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center gap-2">
              <Check className="size-5" />
              <span>Full API integration</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-5" />
              <span>Database actions</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-5" />
              <span>Custom API development</span>
            </li>
          </ul>
          <Button className="w-full">Contact Us</Button>
        </div>

        <div className="rounded-lg border bg-primary/5 p-8">
          <h3 className="mb-4 text-2xl font-bold">On-Chain Add-On</h3>
          <p className="mb-4 text-3xl font-bold">$10,000</p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center gap-2">
              <Check className="size-5" />
              <span>Full API integration</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-5" />
              <span>Database actions</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-5" />
              <span>Custom API development</span>
            </li>
          </ul>
          <Button className="w-full">Contact Us</Button>
        </div>

        <div className="rounded-lg border p-8">
          <h3 className="mb-4 text-2xl font-bold">Interface Add-ons</h3>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center justify-between">
              <span>Discord Integration</span>
              <span className="font-bold">$300</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Website Bot</span>
              <span className="font-bold">$400</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Telegram Bot</span>
              <span className="font-bold">$300</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Custom Integration</span>
              <span className="font-bold">Contact Us</span>
            </li>
          </ul>
          <Button className="w-full" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
