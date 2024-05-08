"use server";

import supabase from "@/lib/supabase";

//Objekti
export async function getAllObjekat() {
  let { data, error } = await supabase.rpc("objekat_get_all");
  if (error) return error;
  else return data;
}

export async function getObjekatById(input_id) {
  let { data, error } = await supabase.rpc("objekat_get_by_id", {
    input_id,
  });

  if (error) return error;
  else return data;
}
