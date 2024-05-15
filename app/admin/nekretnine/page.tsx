import React from "react";
import { DataTable } from "@/components/adminpage/payments/data-table";
import { columns } from "@/components/adminpage/payments/columns";
import { getAllStanovi } from "@/app/_actions/read";

const data2 = await getAllStanovi();

function NekretnineAdmin() {
  return (
    <>
      <div className="mb-3">Uredjivanje nekretnina</div>
      {/* <CldImage src="YelpCamp/msbqgzubbeyrjfncbzds" width={460} height={600} /> */}
      <div>
        <DataTable data={data2} columns={columns} />
      </div>
      <></>
    </>
  );
}

export default NekretnineAdmin;
