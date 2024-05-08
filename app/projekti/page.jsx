//import React from "react";
import { poppins } from "@/app/layout";
import Link from "next/link";

import ProjekatLevi from "@/components/bedem/ProjekatLevi";
import ProjekatDesni from "@/components/bedem/ProjekatDesni";
import { TextParallaxContentWhole } from "@/components/foreign/TextParallaxContent";

function Projekti() {
  return (
    <div className="bg-white">
      {/* <div className="bg-[url('/images/slika1.jpg')] text-center">
        <div className="p-10 py-24">
          <div className="text-center text-5xl">Projekti</div>
        </div>
      </div> */}
      <TextParallaxContentWhole
        imgUrl="/images/backPhoto.jpg"
        subheading="Bedem nekretnine"
        heading="Projekti"
        hasButton={false}
      />
      <div className="flex flex-col gap-2">
        <ProjekatLevi />
        <ProjekatDesni />
        <ProjekatLevi />
      </div>
    </div>
  );
}
{
  /*<div
            className={`${poppins.className} grid grid-cols-2 justify-items-center uppercase mt-10`}
          >
            <div className="bg-yellow-500 py-1 px-2 border-[1px] border-yellow-500 hover:bg-inherit">
              <Link href="/nekretnine">Nekretnine</Link>
            </div>
            <div className="py-1 px-2 border-[1px] border-yellow-500 hover:bg-yellow-500">
              <Link href="/nas-tim">O nama</Link>
            </div>
          </div>*/
}

export default Projekti;
