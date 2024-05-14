//"use client";

import React from "react";
//import { CldImage } from "next-cloudinary";
import { DataTable } from "@/components/adminpage/payments/data-table";
import { columns } from "@/components/adminpage/payments/columns";
import { getAllStanovi } from "@/app/_actions/adminAkcije/stanovi";

// const data = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     status: "success",
//     email: "ken99@yahoo.com",
//   },
//   {
//     id: "3u1reuv4",
//     amount: 242,
//     status: "success",
//     email: "Abe45@gmail.com",
//   },
//   {
//     id: "derv1ws0",
//     amount: 837,
//     status: "processing",
//     email: "Monserrat44@gmail.com",
//   },
//   {
//     id: "5kma53ae",
//     amount: 874,
//     status: "success",
//     email: "Silas22@gmail.com",
//   },
//   {
//     id: "bhqecj4p",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
//   {
//     id: "bhqecj4ps",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
//   {
//     id: "bhqecj4ps1",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
//   {
//     id: "bhqecj4ps2",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
//   {
//     id: "bhqecj4ps3",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
//   {
//     id: "bhqecj4ps4",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
//   {
//     id: "bhqecj4ps5",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
//   {
//     id: "bhqecj4ps6",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
// ];

let data2 = await getAllStanovi();

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
