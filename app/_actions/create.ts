"use server";

import supabase from "@/lib/supabase";

export async function createAgent(
  n_mail: string,
  n_name: string,
  n_position: string,
  n_telephone: string
) {
  const { data, error } = await supabase.rpc("agent_create", {
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

export async function createSlika(
  n_sorting_id: number,
  n_stan_id: number,
  n_token: string,
  n_url: string
) {
  const { data, error } = await supabase.rpc("slika_create", {
    n_sorting_id,
    n_stan_id,
    n_token,
    n_url,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function connectAgentToStan(
  agent_id_arg: number,
  stan_id_arg: number
) {
  const { data, error } = await supabase.rpc("connect_agent_to_stan", {
    agent_id_arg,
    stan_id_arg,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function createProjekat(
  n_description: string,
  n_name: string,
  n_sorting_id: number
) {
  const { data, error } = await supabase.rpc("projekat_create", {
    n_description,
    n_name,
    n_sorting_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function connectStanToObject(
  stan_id_arg: number,
  objekat_id_arg: number
) {
  const { data, error } = await supabase.rpc("connect_stan_to_object", {
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
  n_description: string,
  n_floor: number,
  n_numberofrooms: number,
  n_others: string,
  n_price: number,
  n_size: number,
  n_sorting_id: number,
  n_title: string,
  n_transaction_type: string,
  n_type: string,
  n_ytlink: string,
  objekat_id_arg: number
) {
  const { data, error } = await supabase.rpc(
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
  agent_id_arg: number,
  n_description: string,
  n_floor: number,
  n_numberofrooms: number,
  n_others: string[],
  n_price: number,
  n_size: number,
  n_sorting_id: number, // Add type annotation here
  n_title: string,
  n_transaction_type: string,
  n_type: string,
  n_ytlink: string,
  objekat_id_arg: number
) {
  const { data, error } = await supabase.rpc(
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

export async function createStan(
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
  const { data, error } = await supabase.rpc("stan_create", {
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

export async function createObjekat(
  n_description: string,
  n_id: number,
  n_name: string,
  n_projekat_id: number,
  n_sorting_id: number
) {
  const { data, error } = await supabase.rpc("objekat_create", {
    n_description,
    n_id,
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
