"use server";

import supabase from "@/lib/supabase";

export async function deleteProjekat(input_id: number) {
  const { data, error } = await supabase.rpc("projekat_delete", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function deleteAgent(input_id: number) {
  const { data, error } = await supabase.rpc("agent_delete", {
    input_id,
  });

  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function disconnectAgentFromStan(
  d_agent_id: number,
  d_stan_id: number
) {
  const { data, error } = await supabase.rpc("agent_disconnect", {
    d_agent_id,
    d_stan_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function deleteStan(input_id: number) {
  const { data, error } = await supabase.rpc("stan_delete", {
    input_id,
  });

  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function deleteSlika(input_id: number) {
  const { data, error } = await supabase.rpc("slika_delete", {
    input_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}
