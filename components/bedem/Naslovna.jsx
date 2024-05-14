import Pretraga from "./Pretraga";

import Izdvajamo from "./Izdvajamo";
import Predlozi from "./Predlozi";
import { TextParallaxContentWhole } from "../foreign/TextParallaxContent";
import { stanGetFirstOfNumber } from "@/app/_actions/adminAkcije/stanovi";

export default async function Naslovna() {
  const predlozi = await stanGetFirstOfNumber(5);

  return (
    <div className="bg-white">
      <TextParallaxContentWhole
        imgUrl="/images/backPhoto.jpg"
        subheading="Bedem nekretnine"
        heading="Sa nama ste bezbedni."
      />

      <div className="container mx-auto">
        <div className="ivanZelena text-3xl font-medium pl-6 pt-6">
          Pronađite svoj dom
        </div>
        <Pretraga />
      </div>
      <Izdvajamo />
      <div className="container mx-auto py-3">
        <div className="container mx-auto">
          <Predlozi stanovi={predlozi} />
        </div>
      </div>
    </div>
  );
}
