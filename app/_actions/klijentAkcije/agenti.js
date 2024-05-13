"use server";

import supabase from "@/lib/supabase";

//Agenti
export async function getAllAgents() {
  let { data, error } = await supabase.rpc("agent_get_all");
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getAgentByStanId(input_id) {
  let { data, error } = await supabase.rpc("agent_get_by_stan_id", {
    input_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}
