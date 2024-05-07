import supabase from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function createProjekat() {
  "use server";

  let { data, error } = await supabase.rpc("projekat_create", {
    n_description,
    n_name,
    n_sorting_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function deleteProjekat(input_id) {
  "use server";

  let { data, error } = await supabase.rpc("projekat_delete", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function getAllProjekti() {
  "use server";

  let { data, error } = await supabase.rpc("projekat_get_all");
  if (error) return error;
  else {
    return data;
  }
}

export async function getProjekatById(input_id) {
  "use server";

  let { data, error } = await supabase.rpc("projekat_get_by_id", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function updateProjekat(
  input_id,
  n_desription,
  n_name,
  n_sorting_id
) {
  "use server";

  let { data, error } = await supabase.rpc("projekat_update", {
    input_id,
    n_desription,
    n_name,
    n_sorting_id,
  });
  if (error) return error;
  else {
    return data;
  }
}
