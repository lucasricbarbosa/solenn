import { CarouselItem } from "@/components/ui/carousel";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowDownRight } from "lucide-react";

const words = ["Better", "Cute", "Beautiful", "Modern"];

export const HeroCarouselItem = () => (
  <CarouselItem className="px-10 pb-10">
    <div className="flex flex-col justify-center text-white gap-8  h-[680px]">
      <section className="text-6xl">
        <div className="pl-12">
          {"//"}
          <FlipWords className=" text-white" words={words} />
        </div>
        <h1 className="max-w-2xl">Furniture For Every Space</h1>
      </section>
      <section className="max-w-[454px] flex gap-2">
        <ArrowDownRight className="size-6" />
        <span>
          Show you vstore pride, get high-quality swag directly from the vstore
          foundation
        </span>
      </section>
    </div>
  </CarouselItem>
);
