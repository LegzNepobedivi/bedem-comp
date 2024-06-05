import MiniCard from "@/components/bedem/MiniCard";
import { getFirstSlikaByStanId } from "@/app/_actions/read";

import React from "react";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { typeStan } from "@/app/_actions/types";

async function Predlozi({ stanovi }: { stanovi: Array<typeStan> }) {
  return (
    <Carousel className="">
      <CarouselContent>
        {stanovi.map(async (stan) => {
          const firstSlika = await getFirstSlikaByStanId(stan.id);

          return (
            <CarouselItem
              key={stan.id + stan.title}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Link href={`/nekretnine/${stan.id}`}>
                <MiniCard
                  stan={stan}
                  sourceUrl={
                    (firstSlika[0] && firstSlika[0]?.url) ||
                    (firstSlika && "/images/slika1.jpg")
                  }
                />
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Predlozi;
