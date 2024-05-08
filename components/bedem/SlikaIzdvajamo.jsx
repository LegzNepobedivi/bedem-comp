import React from "react";
import Image from "next/image";

function SlikaIzdvajamo() {
  return (
    <div>
      <div className="relative h-80">
        <Image
          src="/images/slika1.jpg"
          alt="Picture of real estate"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute mx-3 mt-[17rem] md:text-2xl text-base">
          Sokobanja - Sokonova
        </div>
      </div>
    </div>
  );
}

export default SlikaIzdvajamo;
