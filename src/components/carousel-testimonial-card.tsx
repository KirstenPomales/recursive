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
        <Card className="h-full border-2 border-black bg-white shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          <CardContent className="flex flex-col items-start gap-2 p-7 pt-4">
            <div className="relative -mt-1 h-24 w-48">
              {logoImage && (
                <Image src={logoImage} alt={`${username} logo`} fill className="object-contain" />
              )}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative size-10 border-2 border-black">
                <Image src={image} alt="Picture" fill className="object-cover" />
              </div>
              <div>
                <p className="font-black leading-none text-black uppercase">{name}</p>
                <p className="mt-2 leading-none text-primary font-bold">{username}</p>
              </div>
            </div>
            {projectContext && (
              <div className="my-4 flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-black" />
                <p className="font-medium text-black/80 bg-secondary px-1">{projectContext}</p>
              </div>
            )}
            <p className="text-black font-medium">&quot;{text}&quot;</p>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
