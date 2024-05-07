"use client";

import React from "react";
import ONama from "./ONama";
import SkrozDole from "./SkrozDole";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const M_Footer = () => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <div className={isAdminRoute ? "hidden" : ""}>
      <ONama />
      <footer className={`${poppins.className} bg-white ivanSiva p-4`}>
        <div className="grid grid-cols-2 justify-between items-center">
          {/* Poslovni podaci */}
          <div className="md:text-sm text-xs text-center flex flex-col gap-2 border-r border-gray-400">
            <p className="ivanZelena font-bold text-xl">Poslovni podaci</p>
            <p>Nehruova 51, 11070 Beograd, Srbija</p>
            <Link href="tel:+381 63 445 079">
              +381 63 445 079 - korisnicki servis
            </Link>
            <Link href="tel:+381 63 445 079">
              +381 63 445 079 - tehnicki servis
            </Link>
            <Link
              href="mailto:info@bedemnekretnine.com"
              className="hover:text-gray-400"
            >
              info@bedemnekretnine.com
            </Link>
          </div>

          {/* Mapa sajta */}
          <div className="text-center md:mt-0">
            <p className="ivanZelena font-bold text-xl">Mapa sajta</p>
            <ul className="flex flex-col gap-1 justify-center mt-2">
              <li>
                <Link href="/" className="hover:text-gray-700">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/nekretnine" className="hover:text-gray-700">
                  Stanovi
                </Link>
              </li>
              <li>
                <Link href="/projekti" className="hover:text-gray-700">
                  Projekti
                </Link>
              </li>
              <li>
                <Link href="/nas-tim" className="hover:text-gray-700">
                  Naš tim
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Iconice */}
        <div className="flex items-center text-center ivanZelena justify-center gap-4 mt-3">
          <Link href="#">
            <p className="text-2xl">
              <FaYoutube />
            </p>
          </Link>
          <Link href="#">
            <p className="text-2xl">
              <FaInstagram />
            </p>
          </Link>
          <Link href="#">
            <p className="text-2xl">
              <FaTiktok />
            </p>
          </Link>
        </div>
      </footer>
      <SkrozDole />
    </div>
  );
};

export default M_Footer;
