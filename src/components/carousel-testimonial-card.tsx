import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface CarouselTestimonialCardProps {
  name: string;
  username: string;
  image: string;
  logoImage?: string;
  text: string;
  projectContext?: string;
  className?: string;
}

export function CarouselTestimonialCard({
  name,
  username,
  image,
  logoImage,
  text,
  projectContext,
  className,
}: CarouselTestimonialCardProps) {
  return (
    <CarouselItem className={cn("md:basis-1/2 lg:basis-1/2", className)}>
      <div className="h-full p-1">
        <Card className="h-full border border-border bg-black shadow-md">
          <CardContent className="flex flex-col items-start gap-2 p-7 pt-4">
            <div className="relative -mt-1 h-24 w-48">
              {logoImage && (
                <Image src={logoImage} alt={`${username} logo`} fill className="object-contain" />
              )}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative size-10">
                <Image src={image} alt="Picture" fill className="rounded-full object-cover" />
              </div>
              <div>
                <p className="font-semibold leading-none text-white">{name}</p>
                <p className="mt-2 leading-none text-primary">{username}</p>
              </div>
            </div>
            {projectContext && (
              <div className="my-4 flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary/60" />
                <p className="italic text-primary/60">{projectContext}</p>
              </div>
            )}
            <p className="text-gray-300">&quot;{text}&quot;</p>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
