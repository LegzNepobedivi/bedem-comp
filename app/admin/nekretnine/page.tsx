import React from "react";
import { DataTable } from "@/components/adminpage/payments/data-table";
import { columns } from "@/components/adminpage/payments/columns";
import { getAllStanovi } from "@/app/_actions/read";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function NekretnineAdmin() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.log("Error in AdminLayout");
    console.error(error);
    return redirect("/login");
  }

  if (!user) {
    console.log("User not foundddddddddddddddddddddddd");

    return redirect("/login");
  }

  const data2 = await getAllStanovi();

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
