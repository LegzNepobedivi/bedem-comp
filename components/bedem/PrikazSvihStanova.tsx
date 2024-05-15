"use client";

import Image from "next/image";
import React, { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

function PrikazSvihStanova({ slike }: { slike: any }) {
  const [indeks, setIndeks] = useState(0);

  function handleNapred() {
    if (indeks === slike?.length - 1) {
      setIndeks(0);
    } else {
      setIndeks(indeks + 1);
    }
  }

  function handleNazad() {
    if (indeks === 0) {
      setIndeks(slike?.length - 1);
    } else {
      setIndeks(indeks - 1);
    }
  }

  return (
    <div className="flex ivanZelena">
      <button onClick={handleNazad} className=" hover:bg-stone-50">
        <ArrowLeftIcon className="w-10" />
      </button>
      <Image
        src={slike[indeks]?.url}
        height={600}
        width={1000}
        priority={true}
        placeholder="blur"
        blurDataURL={slike[indeks]?.url}
        className=" max-w-64 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
        style={{ maxHeight: "700px" }}
        alt="slika stana"
      />
      <button onClick={handleNapred} className=" hover:bg-stone-50">
        <ArrowRightIcon className="w-10" />
      </button>
    </div>
  );
}

export default PrikazSvihStanova;
