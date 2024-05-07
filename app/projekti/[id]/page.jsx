import Image from "next/image";
import React from "react";
import { object } from "zod";

import { poppins } from "@/app/layout";
import Objekat from "@/components/bedem/Objekat";

function ProjekatJedan() {
  return (
    <>
      <div className="bg-white">
        <div className="bg-stone-900 text-center p-3">
          <h1 className="text-3xl mb-3">Sokonova</h1>
          <p className="px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore
            tempore eligendi, odio ipsam blanditiis. Nemo corrupti dolores
            reiciendis beatae dolorem ea iure alias itaque nobis dicta! Ad,
            totam quas? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nemo fuga officia provident vel soluta, nihil omnis aperiam
            delectus nostrum qui reiciendis dolorem! Vel hic veniam, earum
            maxime magni ullam quia? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Optio quibusdam inventore sint ad nisi, nam
            corporis illum itaque dolores eligendi hic pariatur eveniet soluta!
            Quisquam blanditiis reprehenderit repudiandae qui numquam!
          </p>
        </div>
        <div className="container mx-auto py-3">
          <div className="relative h-56 md:h-80">
            <Image
              src="/images/slika2.jpg"
              fill
              style={{ objectFit: "cover" }}
              alt="Slika projekta/Kompleksa nekretnina"
            />
          </div>
        </div>
        <div>
          <Objekat />
          <Objekat />
        </div>
      </div>
    </>
  );
}

export default ProjekatJedan;
