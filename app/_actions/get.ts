import supabase from "@/lib/supabase";

// ------------------------------ GET ALL ------------------------------
export async function get_all_agents() {
  const { data, error } = await supabase.rpc("get_all_agents");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_all_apartments() {
  const { data, error } = await supabase.rpc("get_all_apartments");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_all_components() {
  const { data, error } = await supabase.rpc("get_all_components");

  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_all_languages() {
  const { data, error } = await supabase.rpc("get_all_languages");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_all_projects() {
  const { data, error } = await supabase.rpc("get_all_projects");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_all_objects() {
  const { data, error } = await supabase.rpc("get_all_objects");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

// ------------------------------ GET ALL BY ID ------------------------------

export async function get_all_components_by_project_id(n_project_id: number) {
  const { data, error } = await supabase.rpc(
    "get_all_components_by_project_id",
    {
      n_project_id,
    }
  );
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_all_objects_by_component_id(n_component_id: number) {
  const { data, error } = await supabase.rpc(
    "get_all_objects_by_component_id",
    {
      n_component_id,
    }
  );
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_pictures_by_apartment_id(n_apartment_id: number) {
  const { data, error } = await supabase.rpc("get_pictures_by_apartment_id", {
    n_apartment_id,
  });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_pictures_by_component_id(n_component_id: number) {
  const { data, error } = await supabase.rpc("get_pictures_by_component_id", {
    n_component_id,
  });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

// ------------------------------ GET ONE BY ID ------------------------------

export async function get_agent_by_apartment_id(n_apartment_id: number) {
  const { data, error } = await supabase.rpc("get_agent_by_apartment_id", {
    n_apartment_id,
  });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_apartment_by_id(n_apartment_id: number) {
  const { data, error } = await supabase.rpc("get_apartment_by_id", {
    n_apartment_id,
  });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_project_by_id(n_project_id: number) {
  const { data, error } = await supabase.rpc("get_project_by_id", {
    n_project_id,
  });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_object_by_id(n_apartment_id: number) {
  const { data, error } = await supabase.rpc("get_thumbnail_by_apartment_id", {
    n_apartment_id,
  });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function get_thumbnail_by_apartment_id(n_apartment_id: number) {
  const { data, error } = await supabase.rpc("get_thumbnail_by_apartment_id", {
    n_apartment_id,
  });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

// ------------------------------ GET BY N ------------------------------

export async function get_first_apartments(n_input: number) {
  const { data, error } = await supabase.rpc("get_first_apartments", {
    n_input,
  });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}
