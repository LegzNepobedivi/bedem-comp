import Link from "next/link";
import Pretraga from "./Pretraga";

import { poppins } from "@/app/layout";
import Izdvajamo from "./Izdvajamo";
import Predlozi from "./Predlozi";
import { TextParallaxContentWhole } from "../foreign/TextParallaxContent";

export default function Naslovna() {
  return (
    <div className="bg-white">
      <TextParallaxContentWhole />

      <div className="container mx-auto">
        <div className="ivanZelena text-3xl font-medium pl-6 pt-6">
          Pronađite svoj dom
        </div>
        <Pretraga />
      </div>
      <Izdvajamo />
      <div className="container mx-auto py-3">
        <div className="container mx-auto">
          <Predlozi />
        </div>
      </div>
    </div>
  );
}
