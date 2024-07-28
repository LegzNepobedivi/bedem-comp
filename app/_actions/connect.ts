import supabase from "@/lib/supabase";

export async function connect_agent_to_apartment(
  n_agent_id: number,
  n_apartment_id: number
) {
  const { data, error } = await supabase.rpc("connect_agent_to_apartment", {
    n_agent_id,
    n_apartment_id,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function connect_apartment_to_object_unit(
  n_apartment_id: number,
  n_object_id: number
) {
  const { data, error } = await supabase.rpc(
    "connect_apartment_to_object_unit",
    {
      n_apartment_id,
      n_object_id,
    }
  );
  if (error) console.error(error);
  else console.log(data);
}

export async function connect_picture_to_apartment(
  n_apartment_id: number,
  n_picture_id: number
) {
  const { data, error } = await supabase.rpc("connect_picture_to_apartment", {
    n_apartment_id,
    n_picture_id,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function connect_picture_to_component(
  n_component_id: number,
  n_picture_id: number
) {
  const { data, error } = await supabase.rpc("connect_picture_to_component", {
    n_component_id,
    n_picture_id,
  });
  if (error) console.error(error);
  else console.log(data);
}
