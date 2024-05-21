import Image from "next/image";

import { poppins } from "@/app/layout";
import { typeStan } from "@/app/_actions/types";

function formatCurrency(value: number | null | undefined): string {
  if (typeof value === "number") {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "EUR",
    });
  }
  return "Invalid value"; // Or handle the null/undefined case as needed
}

export default function MiniCard({
  stan,
  sourceUrl,
}: {
  stan: typeStan;
  sourceUrl: string;
}) {
  const priceFormatted =
    stan.price != 0 ? formatCurrency(stan.price) : "Cena na upit";

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
              placeholder="blur"
              blurDataURL={sourceUrl}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="text-white p-2">{stan.title}</div>
        <div
          className={`${poppins.className} text-white mt-4 mx-3 pb-2 text-xl`}
        >
          {stan.price != 0 && priceFormatted}
          {stan.price == 0 && "Cena na upit"}
        </div>
      </div>
    </div>
  );
}
