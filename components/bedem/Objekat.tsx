import React from "react";
import Image from "next/image";

import Apartmani from "./Apartmani";
import { typeObjekat } from "@/app/_actions/types";

function Objekat({ objekat }: { objekat: typeObjekat }) {
  return (
    <>
      <div className="bg-stone-900 container mx-auto py-3">
        <h1 className="text-2xl md:text-3xl mb-2 md:mb-3"> {objekat?.name}</h1>
        <div className="relative h-56 md:h-80">
          <Image
            alt="Slika objekta u okviru kompleksa"
            src={`/images/objekatStrana${objekat?.id}.jpg`}
            fill
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={`/images/objekatStrana${objekat?.id}.jpg`}
            sizes="100vw"
          />
        </div>
        {/* <p className={`${poppins.className} uppercase`}>Prizemlje</p> */}
      </div>
      <div className="container mx-auto py-3">
        <div className="ivanZelena">
          <div className="container mx-auto">
            <Apartmani objectId={objekat?.id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Objekat;
