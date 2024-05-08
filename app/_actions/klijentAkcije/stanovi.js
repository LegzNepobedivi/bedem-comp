"use server";

import supabase from "@/lib/supabase";

//Stanovi
export async function getAllStan() {
  console.log("fetchNekretnine");
  let { data, error } = await supabase.rpc("stan_get_all");
  if (error) return error;
  else {
    return data;
  }
}

export async function getFirstSlikaByStanId(input_id) {
  let { data, error } = await supabase.rpc("slike_get_first_by_stan_id", {
    input_id,
  });

  if (error) return error;
  else {
    return data;
  }
}

export async function getStanById(input_id) {
  let { data, error } = await supabase.rpc("stan_get_by_id", {
    input_id,
  });

  if (error) return error;
  else return data;
}
