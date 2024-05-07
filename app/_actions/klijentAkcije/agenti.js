import supabase from "@/lib/supabase";

//Agenti
export async function getAllAgents() {
  "use server";

  let { data, error } = await supabase.rpc("agent_get_all");
  if (error) return error;
  else {
    return data;
  }
}

export async function getAgentByStanId(input_id) {
  "use server";
  let { data, error } = await supabase.rpc("agent_get_by_stan_id", {
    input_id,
  });
  if (error) {
    return error;
  } else {
    return data;
  }
}
