"use client";

import { Poppins } from "next/font/google";

import InputSearch from "./InputSearch";
import M_Listbox from "./Listbox";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Pretraga() {
  return (
    <div className="bg-white ">
      <div className="p-6 flex flex-col gap-2 border-solid border-green-600 ivanZelena focus:border-0">
        <form className="">
          <InputSearch />
          <div className="py-3 gap-2 flex flex-col md:flex-row flex-wrap">
            <M_Listbox
              classes={
                "border-solid border-1 border-green-800 md:mr-3 mr-1 flex-col hover:bg-green-900 hover:text-white"
              }
              people={[
                { name: "Kupujem / Zakupljujem" },
                { name: "Kupujem" },
                { name: "Zakupljujem" },
              ]}
            />
            <M_Listbox
              classes={
                "border-solid border-1 border-green-800 md:mr-3 mr-1 flex-col hover:bg-green-900 hover:text-white"
              }
              people={[
                { name: "Tip nekretnine" },
                { name: "Stan" },
                { name: "Kuća" },
                { name: "Poslovni prostor" },
                { name: "Zemljište" },
              ]}
            />
            {/* <DropdownButton
              classes={
                " border-solid border-1 border-green-800 md:mr-3 mr-1 flex-col hover:bg-green-900 hover:text-white"
              }
              items={["Kupujem", "Zakupljujem"]}
              title={"Kupujem / Zakupljujem"}
            />

            <DropdownButton
              classes={
                "border-solid border-1 border-green-800 md:mr-3 mr-1 flex-col hover:bg-green-900 hover:text-white"
              }
              items={["Stan", "Kuća", "Poslovni prostor", "Zemljište"]}
              title={"Tip nekretnine"}
            /> */}
            <button
              className={`${poppins.className} md:mr-3 mr-1 border-solid border-1 border-green-800 flex-col hover:bg-green-900 hover:text-white uppercase inline-flex justify-center gap-x-1.5 rounded-sm px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-green-800`}
            >
              Traži
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
