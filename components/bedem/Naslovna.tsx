import Izdvajamo from "./Izdvajamo";
import Predlozi from "./Predlozi";
import { TextParallaxContentWhole } from "@/components/foreign/TextParallaxContent";

import { get_first_apartments } from "@/app/_actions/get";
import SearchByCopilot from "./SearchByCopilot";

export default async function Naslovna() {
  const predlozi = await get_first_apartments(5);

  return (
    <div className="bg-white">
      <TextParallaxContentWhole
        imgUrl="/images/backPhoto.jpg"
        subheading="Bedem nekretnine"
        heading="Sa nama ste bezbedni."
      >
        <div></div>
      </TextParallaxContentWhole>

      <div className="container mx-auto">
        <div className="ivanZelena text-3xl font-medium pl-6 pt-6">
          Pronađite svoj dom
        </div>
        <SearchByCopilot />
      </div>
      <Izdvajamo />
      <div className="container mx-auto py-3">
        <div className="container mx-auto">
          <Predlozi apartments={predlozi} />
        </div>
      </div>
    </div>
  );
}
