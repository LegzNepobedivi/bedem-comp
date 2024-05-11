import Image from "next/image";

import { poppins } from "@/app/layout";

export default function MiniCard({ stan, sourceUrl }) {
  return (
    <div className="">
      <div className="rounded-b-3xl bgIvanZelenaSvetla">
        <div className="relative grid grid-cols-1">
          <div className="relative h-52 lg:h-80">
            <Image
              src={sourceUrl}
              alt="Picture of real estate"
              fill
              style={{ objectFit: "cover" }}
              //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="text-white p-2">{stan.title}</div>
        <div
          className={`${poppins.className} text-white mt-4 mx-3 pb-2 text-xl`}
        >
          2.000.000 €
        </div>
      </div>
    </div>
  );
}
