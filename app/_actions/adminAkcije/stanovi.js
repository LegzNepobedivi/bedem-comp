"use server";

import supabase from "@/lib/supabase";

export async function connectStanToObject(stan_id_arg, objekat_id_arg) {
  let { data, error } = await supabase.rpc("connect_stan_to_object", {
    objekat_id_arg,
    stan_id_arg,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
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
  if (error) {
    console.log(error);
    return [];
  } else {
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
  if (error) {
    console.log(error);
    return [];
  } else {
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
  if (error) {
    console.log(error);
    return [];
  } else {
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
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function deleteStan(input_id) {
  let { data, error } = await supabase.rpc("stan_delete", {
    input_id,
  });

  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getAllStanovi() {
  let { data, error } = await supabase.rpc("stan_get_all");

  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getStanById(input_id) {
  let { data, error } = await supabase.rpc("stan_get_by_id", {
    input_id,
  });

  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
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
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function stanGetFirstOfNumber(input_number) {
  let { data, error } = await supabase.rpc("stan_get_first_of_number", {
    input_number,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
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
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}
