"use server";

import supabase from "@/lib/supabase";

export async function createAgent(n_mail, n_name, n_position, n_telephone) {
  let { data, error } = await supabase.rpc("agent_create", {
    n_mail,
    n_name,
    n_position,
    n_telephone,
  });

  if (error) return error;
  else {
    return data;
  }
}

export async function getAllAgents() {
  let { data, error } = await supabase.rpc("agent_get_all");
  if (error) return error;
  else {
    return data;
  }
}

export async function getAgentByStanId(input_id) {
  let { data, error } = await supabase.rpc("agent_get_by_stan_id", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function updateAgent(
  input_id,
  n_mail,
  n_name,
  n_position,
  n_telephone
) {
  let { data, error } = await supabase.rpc("agent_update", {
    input_id,
    n_mail,
    n_name,
    n_position,
    n_telephone,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function deleteAgent(input_id) {
  let { data, error } = await supabase.rpc("agent_delete", {
    input_id,
  });

  if (error) return error;
  else {
    return data;
  }
}

export async function disconnectAgentFromStan(d_agent_id, d_stan_id) {
  let { data, error } = await supabase.rpc("agent_disconnect", {
    d_agent_id,
    d_stan_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function connectAgentToStan(agent_id_arg, stan_id_arg) {
  let { data, error } = await supabase.rpc("connect_agent_to_stan", {
    agent_id_arg,
    stan_id_arg,
  });
  if (error) return error;
  else {
    return data;
  }
}
