"use server";

import supabase from "@/lib/supabase";

export async function createObjekat(
  n_description,
  n_id,
  n_name,
  n_projekat_id,
  n_sorting_id
) {
  let { data, error } = await supabase.rpc("objekat_create", {
    n_description,
    n_id,
    n_name,
    n_projekat_id,
    n_sorting_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function getAllObjects() {
  let { data, error } = await supabase.rpc("objekat_get_all");
  if (error) return error;
  else {
    return data;
  }
}

export async function getObjectById(input_id) {
  let { data, error } = await supabase.rpc("objekat_get_by_id", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function updateObjekat(
  input_id,
  n_description,
  n_name,
  n_projekat_id,
  n_sorting_id
) {
  let { data, error } = await supabase.rpc("objekat_update", {
    input_id,
    n_description,
    n_name,
    n_projekat_id,
    n_sorting_id,
  });
  if (error) return error;
  else {
    return data;
  }
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
