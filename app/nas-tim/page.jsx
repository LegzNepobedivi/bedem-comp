import AgentSvg from "@/components/svgComp/AgentSvg";

const agenti = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default function NasTim() {
  return (
    <div className="bg-white">
      <div className="ivanZelena text-center container mx-auto">
        <div className="text-center text-3xl pt-3 pb-2 ">Naš tim</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {agenti.map((item) => (
            <div
              key={item.id}
              className="m-4 border-2 border-zinc-500 shadow-md rounded-3xl  "
            >
              <div className="my-3 mt-4 flex justify-center">
                <div className=" w-24">
                  <AgentSvg />
                </div>
              </div>

              <div className="text-3xl font-medium">Aleksa Karan</div>
              <div className="text-2xl my-1">Direktor</div>
              <div className="text-lg mx-3 mb-3">
                Lorem ipsum dolor sit amet, con sectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcor
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
