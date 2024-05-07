import Image from "next/image";
import Link from "next/link";

import { poppins } from "@/app/layout";

export default function Izdvajamo({}) {
  return (
    <div className="bg-stone-100 p-10 pb-6">
      <div className="text-center text-3xl ivanZelena font-medium mb-3">
        Izdvajamo
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="relative h-80">
          <Image
            src="/images/slika1.jpg"
            alt="Picture of real estate"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute mx-3 mt-[17rem] text-2xl">
            Sokobanja - Sokonova
          </div>
        </div>
        <div className="relative h-80">
          <Image
            src="/images/slika1.jpg"
            alt="Picture of real estate"
            style={{ objectFit: "cover" }}
            fill
          />
          <div className="absolute mx-3 mt-[17rem] text-2xl">
            Novi Banovci - Balkanska trilogija
          </div>
        </div>
      </div>
      <div className={`${poppins.className} text-center mt-5 uppercase`}>
        <Link className="py-1 px-2 bgIvanZelena" href="/nekretnine">
          Prikaži sve
        </Link>
      </div>
    </div>
  );
}
