import React from "react";
import MiniCard from "@/components/bedem/MiniCard";

import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Predlozi() {
  return (
    <Carousel className="">
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href="/nekretnine/1">
            <MiniCard />
          </Link>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <MiniCard />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <MiniCard />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <MiniCard />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <MiniCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Predlozi;
