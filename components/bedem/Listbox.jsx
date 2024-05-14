"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  // ChevronUpDownIcon
} from "@heroicons/react/20/solid";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function M_Listbox({ classes = "", people }) {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className={`${poppins.className} uppercase` + classes} name={selected}>
      <Listbox value={selected} onChange={setSelected}>
        <div className={`relative ${poppins.className} uppercase`}>
          <Listbox.Button className="relative ivanZelena w-full text-sm hover:text-white hover:bg-green-900 ring-1 ring-inset ring-green-800 cursor-default bg-white py-2 pl-3 pr-8 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:bg-green sm:text-sm">
            <span className={` font-semibold block truncate uppercase`}>
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="h-5 w-5 " aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-60 overflow-auto rounded-md bgIvanZelenaSvetla py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-20">
              {people?.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bgIvanZelena text-white"
                        : "text-white bgIvanZelenaSvetla"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person?.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
