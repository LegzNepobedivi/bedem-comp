import LeftArrowSvg from "@/components/svgComp/LeftArrowSvg";
import PhoneSvg from "@/components/svgComp/PhoneSvg";
import AgentSvg from "@/components/svgComp/AgentSvg";
import { SwipeCarousel } from "@/components/foreign/SwipeCarousel";
import Predlozi from "@/components/bedem/Predlozi";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import {
  getAllStanovi,
  getStanById,
  stanGetFirstOfNumber,
  getAgentByStanId,
  getAllSlikeByStanId,
} from "@/app/_actions/read";
import { typeStan } from "@/app/_actions/types";

export const dynamicParams = false;

//generate all the static paths/dynamic routes
export async function generateStaticParams() {
  const stanovi = await getAllStanovi();

  return stanovi.map((stan: typeStan) => ({
    slug: String(stan.id),
  }));
}

export default async function PrikazNekretnine({
  params,
}: {
  params: { slug: string };
}) {
  const idStana = Number(params?.slug);

  if (isNaN(idStana)) {
    notFound();
  }

  if (!(idStana > 0 && idStana < 1000)) {
    notFound();
  }

  const predlozi = await stanGetFirstOfNumber(5);
  const agent = await getAgentByStanId(idStana);
  const slike = await getAllSlikeByStanId(idStana);
  const stanDetails = await getStanById(idStana);

  const priceFormatted =
    stanDetails[0]?.price
      .toLocaleString("en-US", { style: "currency", currency: "USD" })
      .replace("$", "") + " €";

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className={`${poppins.className} bg-white text-slate-600`}>
          <Link href="/nekretnine">
            <button className="flex uppercase border-2 borderIvanZelenaSvetla py-1 px-2 hover:text-black">
              <span>
                <LeftArrowSvg />
              </span>
              Nazad
            </button>
          </Link>
        </div>
        <div className="py-2 px-4">
          <div className="ivanZelena text-2xl font-semibold mb-3">
            {stanDetails[0]?.title}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-8 gap-0 mx-auto font-medium">
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Cena
              </div>
              <div className="text-black">
                {stanDetails[0]?.price != 0 && priceFormatted}
                {stanDetails[0]?.price == 0 && "Cena na upit"}
              </div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Površina
              </div>
              <div className="text-black">{stanDetails[0]?.size} m2</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Struktura
              </div>
              <div className="text-black">
                {stanDetails[0]?.numberOfRooms} soban
              </div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Kupatilo
              </div>
              <div className="text-black">1 celo</div>
            </div>
          </div>
        </div>
        <div className="p-2 flex ">
          <div className=" w-14 ivanZelena">
            <AgentSvg />
          </div>
          <div className="px-2">
            <div className="text-base ivanZelena font-semibold">
              Agent: {(agent[0] && agent[0]?.name) || (!agent[0] && "Bedem")}{" "}
              {(agent[0] && agent[0]?.telephone) ||
                (!agent[0] && "+381 63 445 079")}
            </div>
            <div className="flex ivanZelena border-2 border-green-950 w-fit">
              <PhoneSvg />
              <Link
                href={`tel:${
                  (agent[0] && agent[0]?.telephone) ||
                  (!agent[0] && "+381 63 445 079")
                }`}
                className="bg-green-950 uppercase text-white text-sm py-1 px-2 hover:bg-green-900"
              >
                Pozovi
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto container md:w-3/4 lg:w-2/3  text-end">
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-400"></hr>
        {/* <Dialog>
          <DialogTrigger className="text-black">
            <ArrowsPointingOutIcon className="w-4 h-4 mt-7 absolute" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              
              <PrikazSvihStanova slike={slike} />
              
            </DialogHeader>
          </DialogContent>
        </Dialog> */}
        <SwipeCarousel slike={slike} />
      </div>
      <div>
        <div className="p-2 ivanZelena text-center ">
          <h1 className="text-3xl">Karakteristike</h1>
          <div className="grid grid-cols-3 gap-0 mx-auto font-medium py-3">
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Id nekretnine
              </div>
              <div className="text-black">{idStana}</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Godina izgradnje
              </div>
              <div className="text-black">2023</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Stanje
              </div>
              <div className="text-black">Nekretnina je u odličnom stanju</div>
            </div>
          </div>
        </div>
        {/*Sledeca sekcija*/}
        <div className="bgIvanZelenaSvetla py-3 ">
          <div className="mx-auto container">
            <div className="px-4">
              <p className="text-center text-4xl">Opis</p>
              <div className="border-t border-gray-600 my-4"></div>
              <p className="text-center ivanSiva font-thin">
                {stanDetails[0]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-3">
        <div className="ivanZelena">
          <p className="text-center text-4xl mb-3">Možda vam se svidi</p>
          <div className="container mx-auto">
            <Predlozi stanovi={predlozi} />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-3"></div>
    </div>
  );
}
