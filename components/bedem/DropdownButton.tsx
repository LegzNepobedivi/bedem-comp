"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MenuButton } from "@headlessui/react";
import { MenuItem } from "@headlessui/react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownButton({
  title,
  items,
  classes,
}: {
  title: string;
  items: string[];
  classes: string;
}) {
  const selectedItem = title ? title : "";
  let key = 0;

  return (
    <Menu as="div" className={`relative inline-block text-left` + classes}>
      <div className={`${poppins.className} font-normal`}>
        <MenuButton>
          {({ open }) => (
            <div
              className={classNames(
                `${open ? "bgIvanZelena text-white" : ""}`,
                "uppercase inline-flex w-full justify-center gap-x-1.5 rounded-sm px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-green-800"
              )}
            >
              <span>{selectedItem}</span>
              <ChevronDownIcon className="-mr-1 h-5 w-5 " aria-hidden="true" />
            </div>
          )}
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bgIvanZelenaSvetla shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className={`py-1 ${poppins.className}`}>
            {items.map((item) => (
              <MenuItem key={(key += 1)}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bgIvanZelena" : "bgIvanZelenaSvetla",
                      "block px-4 py-2 text-sm text-white"
                    )}
                  >
                    {item}
                  </a>
                )}
              </MenuItem>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
