"use server";

import supabase from "@/lib/supabase";

export async function createSlika(n_sorting_id, n_stan_id, n_token, n_url) {
  let { data, error } = await supabase.rpc("slika_create", {
    n_sorting_id,
    n_stan_id,
    n_token,
    n_url,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function deleteSlika(input_id) {
  let { data, error } = await supabase.rpc("slika_delete", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function updateSlika(
  input_id,
  n_sorting_id,
  n_stan_id,
  n_token,
  n_url
) {
  let { data, error } = await supabase.rpc("slika_update", {
    input_id,
    n_sorting_id,
    n_stan_id,
    n_token,
    n_url,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function getAllSlikeByStanId(input_id) {
  let { data, error } = await supabase.rpc("slike_get_by_stan_id", {
    input_id,
  });
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
