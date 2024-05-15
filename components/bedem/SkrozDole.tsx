import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function SkrozDole() {
  return (
    <div
      className={`${poppins.className} text-center text-sm py-2 bgIvanZelena font-extralight ivanSiva`}
    >
      <Link href="/uslovi-koriscenja" className="hover:text-gray-400">
        Uslovi korišćenja
      </Link>
      <Link href="/pravila-privatnosti" className="hover:text-gray-400">
        Pravila o privatnosti
      </Link>
      <p>©2023-2024 Bedem Nekretnine | Sva prava zadržana</p>
    </div>
  );
}
