import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation"; // Add this import statement

import Kartica from "@/components/bedem/Kartica";
import Paginacija from "@/components/bedem/Paginacija";

import { typeApartment } from "@/app/_actions/types";

import {
  get_thumbnail_by_apartment_id,
  get_agent_by_apartment_id,
} from "@/app/_actions/get";

import { search_apartments } from "@/app/_actions/search";

import SearchByCopilot from "@/components/bedem/SearchByCopilot";

//export const revalidate = 3600;

export default async function NekretninePage({
  // params,
  searchParams,
}: {
  //params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const transaction_type = Array.isArray(searchParams["transaction_type"])
    ? searchParams["transaction_type"][0]
    : searchParams["transaction_type"] ?? "DEFAULT";
  const property_type = Array.isArray(searchParams["property_type"])
    ? searchParams["property_type"][0]
    : searchParams["property_type"] ?? "DEFAULT";
  const searchByName = Array.isArray(searchParams["searchByName"])
    ? searchParams["searchByName"][0]
    : searchParams["searchByName"] ?? "";

  const allApartments = await search_apartments(
    searchByName,
    property_type,
    transaction_type // Convert transaction_type to string
  );

  if (allApartments.length === 0) {
    notFound();
  }

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  const start = (parseInt(page.toString()) - 1) * parseInt(per_page.toString());
  const end = start + parseInt(per_page.toString());

  const prikazaniStanovi = allApartments?.slice(start, end);

  if (prikazaniStanovi.length === 0) {
    revalidatePath("/nekretnine", "page");
    notFound();
  }

  return (
    <>
      <div className="bg-white z-10">
        <div className="container mx-auto">
          <SearchByCopilot />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container mx-auto">
          {prikazaniStanovi?.map(async (apartment: typeApartment) => {
            const thumbPhoto = await get_thumbnail_by_apartment_id(
              apartment?.id
            );
            const agentOfApartment = await get_agent_by_apartment_id(
              apartment?.id
            );

            return (
              <div key={apartment?.id + apartment?.title}>
                <Kartica
                  sourceUrl={
                    (thumbPhoto[0] && thumbPhoto[0]?.url) ||
                    (thumbPhoto && "/images/slika1.jpg")
                  }
                  title={apartment?.title}
                  price={apartment?.price}
                  hasVr={false}
                  isNovo={false}
                  numberOfRooms={apartment?.number_of_rooms}
                  size={apartment?.size}
                  showLink={`/nekretnine/${apartment?.id}`}
                  agentName={
                    (agentOfApartment[0] && agentOfApartment[0]?.name) ||
                    (agentOfApartment && "Bedem")
                  }
                  agentNumber={
                    (agentOfApartment[0] && agentOfApartment[0]?.telephone) ||
                    (agentOfApartment && "+381 63 445 079")
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="py-3">
          <Paginacija
            hasNextPage={end < allApartments?.length}
            hasPrevPage={start > 0}
          />
        </div>
      </div>
    </>
  );
}
