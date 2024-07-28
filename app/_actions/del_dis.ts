import supabase from "@/lib/supabase";

export async function delete_agent(n_id: number) {
  const { data, error } = await supabase.rpc("delete_agent", {
    n_id,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function delete_project(n_id: number) {
  const { data, error } = await supabase.rpc("delete_project", {
    n_id,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function disconnect_agent(
  n_agent_id: number,
  n_apartment_id: number
) {
  const { data, error } = await supabase.rpc("disconnect_agent", {
    n_agent_id,
    n_apartment_id,
  });
  if (error) console.error(error);
  else console.log(data);
}
