"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeroCarouselItem } from "./carousel/hero-carousel";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import AnimatedArrowButton from "../ui/animated-arrow-button";

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="h-[840px] relative max-w-[2400px] mx-auto bg-foreground max-h-[90dvh] pt-20">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <HeroCarouselItem key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="right-20 left-auto top-14 bg-white/25 text-white" />
        <CarouselNext className="right-10 top-14 bg-white/25 text-white" />
      </Carousel>
      <div className="mt-2 flex justify-center space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={cn(
              "h-3 w-3 rounded-full p-0",
              index === current - 1 ? "bg-primary" : "bg-muted"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute bottom-16 mx-auto left-1/2 -translate-x-1/2">
        <AnimatedArrowButton text="Compre agora" />
      </div>
    </main>
  );
}
