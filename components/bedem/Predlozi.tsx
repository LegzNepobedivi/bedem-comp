import MiniCard from "@/components/bedem/MiniCard";
import { get_thumbnail_by_apartment_id } from "@/app/_actions/get";

import React from "react";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { typeApartment } from "@/app/_actions/types";

async function Predlozi({ apartments }: { apartments: Array<typeApartment> }) {
  return (
    <Carousel className="">
      <CarouselContent>
        {apartments.map(async (one_apartment) => {
          const firstSlika = await get_thumbnail_by_apartment_id(
            one_apartment.id
          );
          console.log(firstSlika);

          return (
            <CarouselItem
              key={one_apartment.id + one_apartment.title}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Link href={`/nekretnine/${one_apartment.id}`}>
                <MiniCard
                  stan={one_apartment}
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
