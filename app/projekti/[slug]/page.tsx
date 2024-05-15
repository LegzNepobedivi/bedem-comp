import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

import Objekat from "@/components/bedem/Objekat";

import {
  getAllProjekti,
  getProjekatById,
  getAllObjectsByProjectId,
} from "@/app/_actions/read";

export async function generateMetadata() {
  return {
    title: "Projekti",
    description:
      "Pregled svih projekata, Novogradnja, Stanovi, Poslovni prostori, Srbija",
  };
}

//generate all the static paths/dynamic routes
export async function generateStaticParams() {
  const projekti = await getAllProjekti();

  if (projekti.length === 0) {
    notFound();
  }

  return projekti.map((stan: any) => ({
    slug: String(stan.id),
  }));
}

async function ProjekatJedan({ params }: { params: { slug: string } }) {
  const idProjekta = Number(params?.slug);

  const projekat = await getProjekatById(idProjekta);

  if (projekat.length === 0) {
    notFound();
  }

  const objekti = await getAllObjectsByProjectId(idProjekta);

  if (objekti.length === 0) {
    notFound();
  }

  return (
    <>
      <div className="bg-white">
        <div className="bg-stone-900 text-center p-3">
          <h1 className="text-3xl mb-3">{projekat[0]?.name}</h1>
          <p className="px-2">{projekat[0]?.description}</p>
        </div>
        <div className="container mx-auto py-3">
          <div className="relative h-56 md:h-80 lg:h-96">
            <Image
              src={`/images/naslovnaStrana${idProjekta
                .toString()
                .replace(/\./g, "")}.jpg`}
              fill
              style={{ objectFit: "cover" }}
              alt="Slika projekta/Kompleksa nekretnina"
              placeholder="blur"
              blurDataURL={`/images/naslovnaStrana${idProjekta
                .toString()
                .replace(/\./g, "")}.jpg`}
              sizes="100vw"
            />
          </div>
        </div>
        <div>
          {objekti?.map(async (objekat: any) => {
            return (
              <div key={objekat?.id}>
                <Objekat objekat={objekat} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjekatJedan;
