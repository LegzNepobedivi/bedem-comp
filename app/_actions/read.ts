"use server";

import supabase from "@/lib/supabase";

export async function getAllProjekti() {
  const { data, error } = await supabase.rpc("projekat_get_all");
  if (error) return [];
  else {
    return data;
  }
}

export async function getProjekatById(input_id: number) {
  const { data, error } = await supabase.rpc("projekat_get_by_id", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function getAllStanovi() {
  const { data, error } = await supabase.rpc("stan_get_all");

  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getStanById(input_id: number) {
  const { data, error } = await supabase.rpc("stan_get_by_id", {
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
  input_title: string,
  input_type_stana: string,
  input_type_transaction: string
) {
  const { data, error } = await supabase.rpc("pretraga_get_all_stanovi", {
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

export async function stanGetFirstOfNumber(input_number: number) {
  const { data, error } = await supabase.rpc("stan_get_first_of_number", {
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
  n_input_number: number,
  n_project_id_input: number
) {
  const { data, error } = await supabase.rpc("stan_get_thumb_photos_project", {
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

export async function getAllAgents() {
  const { data, error } = await supabase.rpc("agent_get_all");
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getAgentByStanId(input_id: number) {
  const { data, error } = await supabase.rpc("agent_get_by_stan_id", {
    input_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getAllSlikeByStanId(input_id: number) {
  const { data, error } = await supabase.rpc("slike_get_by_stan_id", {
    input_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getFirstSlikaByStanId(input_id: number) {
  const { data, error } = await supabase.rpc("slike_get_first_by_stan_id", {
    input_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getOnesByStanId(
  input_id: number,
  input_how_much: number
) {
  const { data, error } = await supabase.rpc("slike_get_ones", {
    input_how_much,
    input_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getAllObjects() {
  const { data, error } = await supabase.rpc("objekat_get_all");
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getObjectById(input_id: number) {
  const { data, error } = await supabase.rpc("objekat_get_by_id", {
    input_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getAllObjectsByProjectId(input_id: number) {
  const { data, error } = await supabase.rpc("objekat_get_all_by_project_id", {
    input_id,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}

export async function getAllStanByObjectId(n_object_id_input: number) {
  const { data, error } = await supabase.rpc("stan_get_all_by_object_id", {
    n_object_id_input,
  });
  if (error) {
    console.log(error);
    return [];
  } else {
    return data;
  }
}
