"use server";

import supabase from "@/lib/supabase";

export async function updateSlika(
  input_id: number,
  n_sorting_id: number,
  n_stan_id: number,
  n_url: string
) {
  const { data, error } = await supabase.rpc("slika_update", {
    input_id,
    n_sorting_id,
    n_stan_id,
    n_url,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function updateAgent(
  input_id: number,
  n_mail: string,
  n_name: string,
  n_position: string,
  n_telephone: string
) {
  const { data, error } = await supabase.rpc("agent_update", {
    input_id,
    n_mail,
    n_name,
    n_position,
    n_telephone,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function updateStan(
  input_id: number,
  n_description: string,
  n_floor: number,
  n_numberofrooms: number,
  n_others: string[],
  n_price: number,
  n_size: string,
  n_sorting_id: number,
  n_title: string,
  n_transaction_type: string,
  n_type: string,
  n_ytlink: string
) {
  const { data, error } = await supabase.rpc("stan_update", {
    input_id,
    n_description,
    n_floor,
    n_numberofrooms,
    n_others,
    n_price,
    n_size,
    n_sorting_id,
    n_title,
    n_transaction_type,
    n_type,
    n_ytlink,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function updateProjekat(
  input_id: number,
  n_desription: string,
  n_name: string,
  n_sorting_id: number
) {
  const { data, error } = await supabase.rpc("projekat_update", {
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

export async function updateObjekat(
  input_id: number,
  n_description: string,
  n_name: string,
  n_projekat_id: number,
  n_sorting_id: number
) {
  const { data, error } = await supabase.rpc("objekat_update", {
    input_id,
    n_description,
    n_name,
    n_projekat_id,
    n_sorting_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}
