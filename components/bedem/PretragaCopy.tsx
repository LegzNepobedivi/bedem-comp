"use client";

import { Poppins } from "next/font/google";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useRef } from "react";

import { UrlObject } from "url";
import InputSearch from "./InputSearch";
import M_Listbox from "./Listbox";

// Type definitions for the navigate function
type Route = UrlObject & { url: string };

function SearchBarFallback() {
  return <>placeholder</>;
}

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Pretraga({ placeholder }: { placeholder: string }) {
  const router = useRouter();

  const navigate = (url: Route) => {
    // @ts-expect-error: Ignoring this line for TypeScript errors
    router.push(url.url);
  };

  function handleSearch(value: string) {
    navigate({
      url: `/nekretnine?transaction_type=${transactionType}&property_type=${propertyType}`,
      pathname: "/nekretnine",
      query: { search: value },
    });
  }

  return (
    <Suspense fallback={<SearchBarFallback />}>
      <div className="bg-white ">
        <div className="p-6 flex flex-col gap-2 border-solid border-green-600 ivanZelena focus:border-0">
          <form className="">
            <InputSearch />
            <div className="py-3 gap-2 flex flex-col md:flex-row flex-wrap">
              <M_Listbox
                classes={
                  "border-solid border-1 border-green-800 md:mr-3 mr-1 flex-col hover:bg-green-900 hover:text-white"
                }
                selectedOptions={[
                  { name: "Kupujem / Zakupljujem" },
                  { name: "Kupujem" },
                  { name: "Zakupljujem" },
                ]}
              />
              <M_Listbox
                classes={
                  "border-solid border-1 border-green-800 md:mr-3 mr-1 flex-col hover:bg-green-900 hover:text-white"
                }
                selectedOptions={[
                  { name: "Tip nekretnine" },
                  { name: "Stan" },
                  { name: "Kuća" },
                  { name: "Poslovni prostor" },
                  { name: "Zemljište" },
                ]}
              />
              <button
                className={`${poppins.className} md:mr-3 mr-1 border-solid border-1 border-green-800 flex-col hover:bg-green-900 hover:text-white uppercase inline-flex justify-center gap-x-1.5 rounded-sm px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-green-800`}
                onClick={() => {
                  handleSearch(e.target.value);
                }}
              >
                Traži
              </button>
            </div>
          </form>
        </div>
      </div>
    </Suspense>
  );
}
