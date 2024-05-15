import Kartica from "@/components/bedem/Kartica";
import Pretraga from "@/components/bedem/Pretraga";
import Paginacija from "@/components/bedem/Paginacija";

import { notFound } from "next/navigation";

import {
  getAllStanovi,
  getFirstSlikaByStanId,
  getAgentByStanId,
} from "../_actions/read";

const sviStanovi = await getAllStanovi();

if (sviStanovi.length === 0) {
  notFound();
}

export default async function NekretninePage({
  searchParams,
}: {
  searchParams: any;
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  const start = (parseInt(page) - 1) * parseInt(per_page);
  const end = start + parseInt(per_page);

  const prikazaniStanovi = sviStanovi?.slice(start, end);

  if (prikazaniStanovi.length === 0) {
    notFound();
  }

  return (
    <>
      <div className="bg-white z-10">
        <div className="container mx-auto">
          <Pretraga />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container mx-auto">
          {prikazaniStanovi?.map(async (stan: any) => {
            const firstSlika = await getFirstSlikaByStanId(stan?.id);
            const agentStana = await getAgentByStanId(stan?.id);

            return (
              <div key={stan?.id + stan?.title}>
                <Kartica
                  sourceUrl={
                    (firstSlika[0] && firstSlika[0]?.url) ||
                    (firstSlika && "/images/slika1.jpg")
                  }
                  title={stan?.title}
                  price={stan?.price}
                  hasVr={false}
                  isNovo={false}
                  numberOfRooms={stan?.numberOfRooms}
                  size={stan?.size}
                  showLink={`/nekretnine/${stan?.id}`}
                  agentName={
                    (agentStana[0] && agentStana[0]?.name) ||
                    (agentStana && "Bedem")
                  }
                  agentNumber={
                    (agentStana[0] && agentStana[0]?.telephone) ||
                    (agentStana && "+381 63 445 079")
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="py-3">
          <Paginacija
            hasNextPage={end < sviStanovi?.length}
            hasPrevPage={start > 0}
          />
        </div>
      </div>
    </>
  );
}
