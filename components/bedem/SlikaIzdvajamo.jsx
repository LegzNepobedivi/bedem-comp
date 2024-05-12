import React from "react";
import Image from "next/image";

function SlikaIzdvajamo({ sourceUrl, title }) {
  return (
    <div>
      <div className="relative h-80">
        <Image
          src={sourceUrl}
          alt="Picture of real estate"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={sourceUrl}
        />
        <div className="">
          <div className="absolute px-3 mt-[17rem] md:text-2xl text-base bgIvanZelenaSvetla rounded-3xl opacity-95">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlikaIzdvajamo;
