import Image from "next/image";
import Link from "next/link";

import { poppins } from "@/app/layout";
import SlikaIzdvajamo from "./SlikaIzdvajamo";

export default function Izdvajamo({}) {
  return (
    <div className="bg-stone-100 p-10 pb-6">
      <div className="text-center text-3xl ivanZelena font-medium mb-3">
        Izdvajamo
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-3">
        <Link href="/projekti/1">
          <SlikaIzdvajamo />
        </Link>
        <Link href="/projekti/2">
          <SlikaIzdvajamo />
        </Link>
      </div>
      <div className={`${poppins.className} text-center mt-5 uppercase`}>
        <Link className="py-1 px-2 bgIvanZelena" href="/projekti">
          Prikaži sve
        </Link>
      </div>
    </div>
  );
}
