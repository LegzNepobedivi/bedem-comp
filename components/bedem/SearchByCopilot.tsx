"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UrlObject } from "url";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

type Route = UrlObject & { url: string };

const SearchByCopilot: React.FC = () => {
  const router = useRouter();

  const [transactionType, setTransactionType] = useState("");
  const [propertyType, setPropertyType] = useState("");

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
      url: `/nekretnine?transaction_type=${transactionType}&property_type=${propertyType}`,
      pathname: "nekretnine",
    });
  };

  return (
    <div className="bg-white">
      <div className="p-6 flex flex-col gap-2 border-solid border-green-600 ivanZelena focus:border-0">
        <div className="py-3 gap-2 flex flex-col md:flex-row flex-wrap">
          <div className="">
            <div className="border-solid border-1 border-green-800 md:mr-3 mr-1 flex-col hover:bg-green-900 hover:text-white">
              {/* <label htmlFor="transactionType">Transaction Type:</label> */}
              <select
                id="transactionType"
                className=""
                value={transactionType}
                onChange={handleTransactionTypeChange}
              >
                <option className="" value="">
                  Kupujem/Zakupljujem
                </option>
                <option value="kupujem">Kupujem</option>
                <option value="zakupljujem">Zakupljujem</option>
              </select>
            </div>
          </div>
          <div className="">
            <select
              id="propertyType"
              value={propertyType}
              onChange={handlePropertyTypeChange}
            >
              <option value="">Tip nekretnine</option>
              <option value="stan">Stan</option>
              <option value="kuca">Kuća</option>
              <option value="poslProstor">Poslovni prostor</option>
              <option value="zemljiste">Zemljište</option>
            </select>
          </div>
          <button
            className={`${poppins.className} md:mr-3 mr-1 border-solid border-1 border-green-800 flex-col hover:bg-green-900 hover:text-white uppercase inline-flex justify-center gap-x-1.5 rounded-sm px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-green-800`}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchByCopilot;
