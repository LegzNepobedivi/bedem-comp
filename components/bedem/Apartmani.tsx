import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

import {
  get_all_objects_by_component_id,
  get_pictures_by_apartment_id,
} from "@/app/_actions/get";
import { typeApartment } from "@/app/_actions/types";

async function Apartmani({ objectId }: { objectId: number }) {
  const stanoviObjekta = await get_all_objects_by_component_id(objectId);

  if (stanoviObjekta.length === 0) {
    return notFound();
  }

  return (
    <>
      {stanoviObjekta && stanoviObjekta?.length > 0 && (
        <Carousel className="">
          <CarouselContent>
            {stanoviObjekta?.map(async (stan: typeApartment) => {
              const slike2 = await get_pictures_by_apartment_id(stan.id);

              return (
                <CarouselItem className="lg:basis-1/2" key={stan?.id}>
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
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </>
  );
}

export default Apartmani;
