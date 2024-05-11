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

export async function getAllObjectsByProjectId(input_id) {
  let { data, error } = await supabase.rpc("objekat_get_all_by_project_id", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function getAllStanByObjectId(n_object_id_input) {
  let { data, error } = await supabase.rpc("stan_get_all_by_object_id", {
    n_object_id_input,
  });
  if (error) return error;
  else {
    return data;
  }
}
