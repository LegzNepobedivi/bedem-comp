"use server";

import supabase from "@/lib/supabase";

export async function connectStanToObject(stan_id_arg, objekat_id_arg) {
  let { data, error } = await supabase.rpc("connect_stan_to_object", {
    objekat_id_arg,
    stan_id_arg,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function createStanAndConnectToObject(
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
  objekat_id_arg
) {
  let { data, error } = await supabase.rpc(
    "create_stan_and_connect_to_object",
    {
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
      objekat_id_arg,
    }
  );
  if (error) return error;
  else {
    return data;
  }
}

export async function createStanAndConnectToObjectAndAgent(
  agent_id_arg,
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
  objekat_id_arg
) {
  let { data, error } = await supabase.rpc(
    "create_stan_and_connect_to_object_and_agent",
    {
      agent_id_arg,
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
      objekat_id_arg,
    }
  );
  if (error) return error;
  else {
    return data;
  }
}

export async function createStan() {
  let { data, error } = await supabase.rpc("stan_create", {
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
  if (error) return error;
  else {
    return data;
  }
}

export async function updateStan() {
  let { data, error } = await supabase.rpc("stan_update", {
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
  if (error) return error;
  else {
    return data;
  }
}

export async function deleteStan(input_id) {
  let { data, error } = await supabase.rpc("stan_delete", {
    input_id,
  });

  if (error) return error;
  else {
    return data;
  }
}

export async function getAllStanovi() {
  let { data, error } = await supabase.rpc("stan_get_all");

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
  else {
    return data;
  }
}
