import Image from "next/image";
import React from "react";

import { poppins } from "@/app/layout";

import {
  getFirstSlikaByStanId,
  thumbnailsProjectGetAllStanovi,
} from "@/app/_actions/klijentAkcije/stanovi";

async function ProjekatLevi({ projekat }) {
  const stana4 = await thumbnailsProjectGetAllStanovi(4, projekat.id);
  let slike = [];
  for (let i = 0; i < stana4.length; i++) {
    const firstSlika = await getFirstSlikaByStanId(stana4[i].id);
    slike.push(firstSlika[0].url);
  }

  return (
    <>
      <div className="md:mx-auto md:container py-3 mx-2">
        <div className="flex flex-row gap-4 shadow-2xl rounded-md overflow-hidden">
          <div className="basis-1/3 bg-stone-900">
            <div className="p-2 md:p-3 px-3 md:px-5 text-left">
              {/* <h1 className="text-lg font-medium md:text-3xl lg:text-5xl md:mb-3">
              Sokobanja
            </h1> */}
              <h1 className="md:text-xl lg:text-3xl mb-3 md:mb-6">
                {projekat.name}
              </h1>
              <p
                className={`${poppins.className} text-xs md:text-base font-normal`}
              >
                {projekat.description.length > 150
                  ? projekat.description.substring(0, 150) + "..."
                  : projekat.description}{" "}
                {/* Staviti limit za broj karaktera */}
              </p>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex flex-col gap-4">
              <div className="relative h-36 md:h-52 lg:h-72">
                <Image
                  src={(slike.length > 0 && slike[0]) || "/images/slika1.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Lepa slika koja reprezentuje projekat"
                />
              </div>
              <div className="relative h-36 md:h-52 lg:h-72">
                <Image
                  src={(slike.length > 1 && slike[1]) || "/images/slika1.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Lepa slika koja reprezentuje projekat"
                />
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex flex-col gap-4">
              <div className="relative h-36 md:h-52 lg:h-72">
                <Image
                  src={(slike.length > 2 && slike[2]) || "/images/slika1.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Lepa slika koja reprezentuje projekat"
                />
              </div>
              <div className="relative h-36 md:h-52 lg:h-72">
                <Image
                  src={(slike.length > 3 && slike[3]) || "/images/slika1.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Lepa slika koja reprezentuje projekat"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjekatLevi;
