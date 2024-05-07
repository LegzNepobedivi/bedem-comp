import Kartica from "@/components/bedem/Kartica";
import Pretraga from "@/components/bedem/Pretraga";
import Link from "next/link";

import {
  getAllStan,
  getFirstSlikaByStanId,
} from "../_actions/klijentAkcije/stanovi";

const sviStanovi = await getAllStan();

export default async function NekretninePage() {
  return (
    <>
      <div className="bg-white z-10">
        <div className="container mx-auto">
          <Pretraga />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container mx-auto">
          {sviStanovi.map(async (stan) => {
            const firstSlika = await getFirstSlikaByStanId(stan.id);
            return (
              <div key={stan.id + stan.title}>
                <Kartica
                  sourceUrl={
                    (firstSlika[0] && firstSlika[0].url) ||
                    (firstSlika && "/images/slika1.jpg")
                  }
                  title={stan.title}
                  price={stan.price}
                  hasVr={false}
                  isNovo={false}
                  numberOfRooms={stan.numberOfRooms}
                  size={stan.size}
                  showLink={`/nekretnine/${stan.id}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
}
