import Image from "next/image";

import AgentSvg from "../svgComp/AgentSvg";
import PhoneSvg from "../svgComp/PhoneSvg";
import Link from "next/link";

function formatCurrency(value: number | null | undefined): string {
  if (typeof value === "number") {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "EUR",
    });
  }
  return "Invalid value"; // Or handle the null/undefined case as needed
}

export default function Kartica({
  sourceUrl = "/images/slika2.jpg",
  title = "Naslov",
  price = 1900000,
  size = "150",
  numberOfRooms = "4 sobe",
  hasVr = false,
  isNovo = false,
  showLink = "/",
  agentName = "Bedem",
  agentNumber = "+381 63 445 079",
}) {
  const priceFormatted = price != 0 ? formatCurrency(price) : "Cena na upit";

  return (
    <div className="md:rounded-lg shadow-lg overflow-hidden">
      <div>
        <div className="flex items-start uppercase text-sm">
          {isNovo && hasVr && (
            <>
              <div className="bgIvanZelena py-1 px-2 rounded-tr-lg">Novo</div>
              <div className="bgIvanZelena py-1 px-2 rounded-t-lg">VR Tura</div>
            </>
          )}
          {isNovo && !hasVr && (
            <div className="bgIvanZelena py-1 px-2 rounded-tr-lg">Novo</div>
          )}
          {!isNovo && hasVr && (
            <div className="bgIvanZelena py-1 px-2 rounded-tr-lg">VR Tura</div>
          )}
          {!isNovo && !hasVr && (
            <div className="bg-white py-1 px-2 rounded-t-lg">&#39;</div>
          )}
        </div>
        <div className="relative grid grid-cols-1">
          <div className="relative h-80">
            <Link href={{ pathname: showLink }}>
              <Image
                src={sourceUrl}
                alt="Picture of real estate"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={sourceUrl}
                sizes="100vw"
              />
            </Link>
          </div>
        </div>
        <div className="pt-2 px-2">
          <div className="text-xl ivanZelena font-medium " aria-hidden="true">
            <Link href={{ pathname: showLink }}>{title}</Link>
          </div>
        </div>
        <div className="pt-1 px-2">
          <div className="text-lg text-black font-bold">
            <Link href={{ pathname: showLink }}>
              {price != 0 && priceFormatted}
              {price == 0 && "Cena na upit"}
            </Link>
          </div>
        </div>
        <div className="pt-1 px-2">
          <div className="text-base text-stone-400">
            {numberOfRooms} sob
            {parseInt(numberOfRooms) >= 2 && parseInt(numberOfRooms) <= 4
              ? "e"
              : "a"}
            -{size}m2
          </div>
        </div>
        <div className="p-2 flex ">
          <div className=" w-14 ivanZelena">
            <AgentSvg />
          </div>
          <div className="px-2">
            <div className="text-base ivanZelena font-semibold">
              Agent: {agentName} {agentNumber}
            </div>
            <div className="flex ivanZelena border-2 border-green-950 w-fit ">
              <PhoneSvg />
              <div className="bg-green-950 uppercase text-white text-sm py-1 px-2 hover:bg-green-900">
                <Link href={`tel:${agentNumber}`}>Pozovi</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 "></hr>
    </div>
  );
}
