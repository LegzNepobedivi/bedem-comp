"use server";

import supabase from "@/lib/supabase";

export async function createProjekat() {
  let { data, error } = await supabase.rpc("projekat_create", {
    n_description,
    n_name,
    n_sorting_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function deleteProjekat(input_id) {
  let { data, error } = await supabase.rpc("projekat_delete", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function getAllProjekti() {
  let { data, error } = await supabase.rpc("projekat_get_all");
  if (error)
    return {
      throwError: error,
    };
  else {
    return data;
  }
}

export async function getProjekatById(input_id) {
  let { data, error } = await supabase.rpc("projekat_get_by_id", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function updateProjekat(
  input_id,
  n_desription,
  n_name,
  n_sorting_id
) {
  let { data, error } = await supabase.rpc("projekat_update", {
    input_id,
    n_desription,
    n_name,
    n_sorting_id,
  });
  if (error) return error;
  else {
    return data;
  }
}
