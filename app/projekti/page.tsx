import { notFound } from "next/navigation";
import Link from "next/link";

import ProjekatLevi from "@/components/bedem/ProjekatLevi";
import ProjekatDesni from "@/components/bedem/ProjekatDesni";
import { TextParallaxContentWhole } from "@/components/foreign/TextParallaxContent";

import { getAllProjekti } from "../_actions/read";
import { typeProjekat } from "../_actions/types";

async function Projekti() {
  const projekti = await getAllProjekti();

  if (projekti.length === 0) {
    notFound();
  }

  return (
    <div className="bg-white">
      <TextParallaxContentWhole
        imgUrl="/images/backPhoto.jpg"
        subheading="Bedem nekretnine"
        heading="Projekti"
        hasButton={false}
      >
        <div></div>
      </TextParallaxContentWhole>
      <div className="flex flex-col gap-2">
        {projekti?.map(async (projekat: typeProjekat, index: number) => {
          return (
            <div key={projekat?.id}>
              <Link href={`/projekti/${projekat?.id}`}>
                {index % 2 == 0 && <ProjekatLevi projekat={projekat} />}
                {index % 2 == 1 && <ProjekatDesni projekat={projekat} />}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projekti;
