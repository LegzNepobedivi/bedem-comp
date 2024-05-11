"use server";

import supabase from "@/lib/supabase";

//Stanovi
export async function getAllStan() {
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

export async function pretragaGetAllStanovi(
  input_title,
  input_type_stana,
  input_type_transaction
) {
  let { data, error } = await supabase.rpc("pretraga_get_all_stanovi", {
    input_title,
    input_type_stana,
    input_type_transaction,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function stanGetFirstOfNumber(input_number) {
  let { data, error } = await supabase.rpc("stan_get_first_of_number", {
    input_number,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function thumbnailsProjectGetAllStanovi(
  n_input_number,
  n_project_id_input
) {
  let { data, error } = await supabase.rpc("stan_get_thumb_photos_project", {
    n_input_number,
    n_project_id_input,
  });
  if (error) return error;
  else {
    return data;
  }
}
