import AgentSvg from "@/components/svgComp/AgentSvg";
import { getAllAgents } from "../_actions/klijentAkcije/agenti";

//const agenti = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const agenti = await getAllAgents();

export default function NasTim() {
  return (
    <div className="bg-white">
      <div className="ivanZelena text-center container mx-auto">
        <div className="text-center text-3xl pt-3 pb-2 ">Naš tim</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {agenti.map((item, index) => (
            <div
              key={item.id + index}
              className="m-4 border-2 border-zinc-500 shadow-md rounded-3xl  "
            >
              <div className="my-3 mt-4 flex justify-center">
                <div className=" w-24">
                  <AgentSvg />
                </div>
              </div>

              <div className="text-3xl font-medium">{item.name}</div>
              <div className="text-2xl my-1">{item.position}</div>
              <div className="text-lg mx-3 mb-3">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
