import React from "react";

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
import { notFound } from "next/navigation";

async function Apartmani({ objectId }) {
  const stanoviObjekta = await getAllStanByObjectId(objectId);

  if (!stanoviObjekta) {
    return notFound();
  }

  return (
    <>
      <Carousel className="">
        <CarouselContent>
          {stanoviObjekta?.map(async (stan) => {
            const slike2 = await getOnesByStanId(stan.id, 2);

            return (
              <div key={stan?.id}>
                <CarouselItem className="lg:basis-1/2">
                  <Link href={`/nekretnine/${stan.id}`}>
                    <div className="grid grid-cols-2">
                      <div className="relative h-56 md:h-80">
                        <Image
                          src={slike2[0]?.url}
                          fill
                          style={{ objectFit: "cover" }}
                          alt="Slika apartmana u okviru objekta"
                          placeholder="blur"
                          blurDataURL={slike2[0]?.url}
                          sizes="100vw"
                        />
                      </div>
                      <div className="relative h-56 md:h-80">
                        <Image
                          src={slike2[1]?.url}
                          fill
                          style={{ objectFit: "cover" }}
                          alt="Slika apartmana u okviru objekta"
                          placeholder="blur"
                          blurDataURL={slike2[1]?.url}
                          sizes="100vw"
                        />
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              </div>
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
