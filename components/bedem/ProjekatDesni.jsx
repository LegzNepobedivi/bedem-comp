import Image from "next/image";
import React from "react";

import { poppins } from "@/app/layout";

function ProjekatDesni() {
  return (
    <>
      <div className="md:mx-auto md:container py-3 mx-2">
        <div className="flex flex-row gap-4 shadow-2xl rounded-md overflow-hidden">
          <div className="basis-1/3">
            <div className="flex flex-col gap-4">
              <div className="relative h-36 md:h-52 lg:h-72">
                <Image
                  src="/images/slika1.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Lepa slika koja reprezentuje projekat"
                />
              </div>
              <div className="relative h-36 md:h-52 lg:h-72">
                <Image
                  src="/images/slika1.jpg"
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
                  src="/images/slika1.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Lepa slika koja reprezentuje projekat"
                />
              </div>
              <div className="relative h-36 md:h-52 lg:h-72">
                <Image
                  src="/images/slika1.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Lepa slika koja reprezentuje projekat"
                />
              </div>
            </div>
          </div>
          <div className="basis-1/3 bg-stone-900">
            <div className="p-2 md:p-3 px-3 md:px-5 text-right">
              <h1 className="text-lg font-medium md:text-3xl lg:text-5xl md:mb-3">
                Sokobanja
              </h1>
              <h1 className="md:text-xl lg:text-3xl mb-3 md:mb-6">Sokonova</h1>
              <p
                className={`${poppins.className} text-xs md:text-base font-normal`}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio, repellendus neque! Dicta repellat iure harum
                adipisci accusamus! Sapiente dolore aliquam fugit distinctio{" "}
                {/* Staviti limit za broj karaktera */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjekatDesni;
