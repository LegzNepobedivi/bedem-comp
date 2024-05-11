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

import { getAllStanByObjectId } from "@/app/_actions/klijentAkcije/objekti";
import { getOnesByStanId } from "@/app/_actions/adminAkcije/slika";

async function Apartmani({ objectId }) {
  const stanoviObjekta = await getAllStanByObjectId(objectId);

  return (
    <>
      <Carousel className="">
        <CarouselContent>
          {stanoviObjekta.map(async (stan) => {
            const slike2 = await getOnesByStanId(stan.id, 2);

            return (
              <CarouselItem className="lg:basis-1/2">
                <Link href={`/nekretnine/${stan.id}`}>
                  <div className="grid grid-cols-2">
                    <div className="relative h-56 md:h-80">
                      <Image
                        src={slike2[0].url}
                        fill
                        style={{ objectFit: "cover" }}
                        alt="Slika apartmana u okviru objekta"
                      />
                    </div>
                    <div className="relative h-56 md:h-80">
                      <Image
                        src={slike2[1].url}
                        fill
                        style={{ objectFit: "cover" }}
                        alt="Slika apartmana u okviru objekta"
                      />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
          {/* <CarouselItem className="lg:basis-1/2">
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
              </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default Apartmani;
