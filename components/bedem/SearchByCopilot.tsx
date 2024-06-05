"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UrlObject } from "url";
import { Poppins } from "next/font/google";
import { NewInput } from "./InputNew";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

type Route = UrlObject & { url: string };

const SearchByCopilot: React.FC = () => {
  const router = useRouter();

  const [transactionType, setTransactionType] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const searchByName = React.createRef<HTMLInputElement>();

  const navigate = (url: Route) => {
    // @ts-expect-error: Ignoring this line for TypeScript errors
    router.push(url.url);
  };

  const handleTransactionTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransactionType(event.target.value);
  };

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPropertyType(event.target.value);
  };

  const handleSearch = () => {
    navigate({
      url: `/nekretnine?transaction_type=${transactionType}&property_type=${propertyType}&searchByName=${searchByName.current?.value}`,
      pathname: "nekretnine",
    });
  };

  return (
    <div className="bg-white">
      <div className="p-6 flex flex-col gap-2 border-solid border-green-600 ivanZelena focus:border-0">
        <NewInput ref={searchByName} onClick={handleSearch} />
        <div className="py-2 gap-2 flex flex-col md:flex-row flex-wrap">
          <div className="">
            <div className="">
              {/* <label htmlFor="transactionType">Transaction Type:</label> */}
              <select
                id="transactionType"
                className={`${poppins.className} bg-white border border-green-800 font-bold uppercase text-gray-900 text-sm 
                 focus:ring-green-800 focus:border-green-800 block w-full p-2 
                 dark:bg-gray-700 dark:border-gray-600  hover:text-white hover:bg-green-900
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                value={transactionType}
                onChange={handleTransactionTypeChange}
              >
                <option className="hover:bg-yellow-800" value="default">
                  Kupujem/Zakupljujem
                </option>
                <option value="prodajem">Kupujem</option>
                <option value="izdajem">Zakupljujem</option>
              </select>
            </div>
          </div>
          <div className="">
            <select
              id="propertyType"
              value={propertyType}
              className={`${poppins.className} bg-white border border-green-800 font-bold uppercase text-gray-900 text-sm 
                 focus:ring-green-800 focus:border-green-800 block w-full p-2
                 dark:bg-gray-700 dark:border-gray-600  hover:text-white hover:bg-green-900
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              onChange={handlePropertyTypeChange}
            >
              <option value="default">Tip nekretnine</option>
              <option value="stan">Stan</option>
              <option value="kuca">Kuća</option>
              <option value="poslProstor">Poslovni prostor</option>
              <option value="zemljiste">Zemljište</option>
            </select>
          </div>
          <button
            className={`${poppins.className} md:mr-3 border-solid border-1 border-green-800 flex-col hover:bg-green-900 hover:text-white uppercase inline-flex justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-green-800`}
            onClick={handleSearch}
          >
            Traži
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchByCopilot;
