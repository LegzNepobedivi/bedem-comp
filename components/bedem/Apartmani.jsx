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
import Image from "next/image";

function Apartmani() {
  return (
    <Carousel className="">
      <CarouselContent>
        <CarouselItem className="lg:basis-1/2">
          <Link href="/nekretnine/1">
            <div className="grid grid-cols-2">
              <div className="relative h-56 md:h-80">
                <Image
                  src="/images/apartman.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Slika apartmana u okviru objekta"
                />
              </div>
              <div className="relative h-56 md:h-80">
                <Image
                  src="/images/apartman.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Slika apartmana u okviru objekta"
                />
              </div>
            </div>
          </Link>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/2">
          <Link href="/nekretnine/1">
            <div className="grid grid-cols-2">
              <div className="relative h-56 md:h-80">
                <Image
                  src="/images/apartman.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Slika apartmana u okviru objekta"
                />
              </div>
              <div className="relative h-56 md:h-80">
                <Image
                  src="/images/apartman.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Slika apartmana u okviru objekta"
                />
              </div>
            </div>
          </Link>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Apartmani;
