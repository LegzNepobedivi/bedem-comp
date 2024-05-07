import LeftArrowSvg from "@/components/svgComp/LeftArrowSvg";
import PhoneSvg from "@/components/svgComp/PhoneSvg";
import AgentSvg from "@/components/svgComp/AgentSvg";

import Image from "next/image";

import { poppins } from "@/app/layout";
import { SwipeCarousel } from "@/components/foreign/SwipeCarousel";

import Predlozi from "@/components/bedem/Predlozi";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";

import { getAllStan, getStanById } from "../../_actions/klijentAkcije/stanovi";
import {
  getAgentByStanId,
  getAllAgents,
} from "../../_actions/klijentAkcije/agenti";

export default async function PrikazNekretnine({ params }) {
  let idStana = params.slug;
  let stanDetails;
  let allAgents;

  allAgents = await getAgentByStanId(1);
  stanDetails = await getStanById(idStana);
  console.log(allAgents);
  console.log(stanDetails);

  // {
  //   ("use server");
  //   let stanDetails = await getStanById(idStana);
  //   const agentDetails = await getAgentByStanId(1);

  //   console.log(agentDetails);
  // }
  const priceFormatted =
    stanDetails[0].price
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
            {stanDetails[0].title}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-8 gap-0 mx-auto font-medium">
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Cena
              </div>
              <div className="text-black">{priceFormatted}</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Površina
              </div>
              <div className="text-black">{stanDetails[0].size} m2</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Struktura
              </div>
              <div className="text-black">
                {stanDetails[0].numberOfRooms} soban
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
              Agent: Marko +381 69 123 4567
            </div>
            <div className="flex ivanZelena border-2 border-green-950 w-fit">
              <PhoneSvg />
              <button className="bg-green-950 uppercase text-white text-sm py-1 px-2">
                Pozovi
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto container md:w-3/4 lg:w-2/3  text-end">
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-400"></hr>
        <Dialog>
          <DialogTrigger className="text-black">
            <ArrowsPointingOutIcon className="w-4 h-4 mt-7 absolute" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
              <DialogDescription>
                <Image src="/images/slika1.jpg" height={300} width={700} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <SwipeCarousel />
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
              <div className="text-black">123456</div>
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
                Sadržaj
              </div>
              <div className="text-black">Veš-mašina</div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae s
                voluptatum, quas, quos quod, quibusdam autem doloremque
                voluptates tempora quia quidem aperiam. Quisquam, quidem.
                Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-3">
        <div className="ivanZelena">
          <p className="text-center text-4xl mb-3">Možda vam se svidi</p>
          <div className="container mx-auto">
            <Predlozi />
          </div>
        </div>
      </div>
    </div>
  );
}
