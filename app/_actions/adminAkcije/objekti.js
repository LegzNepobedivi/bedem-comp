import supabase from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function createObjekat(
  n_description,
  n_id,
  n_name,
  n_projekat_id,
  n_sorting_id
) {
  "use server";

  let { data, error } = await supabase.rpc("objekat_create", {
    n_description,
    n_id,
    n_name,
    n_projekat_id,
    n_sorting_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function getAllObjects() {
  "use server";

  let { data, error } = await supabase.rpc("objekat_get_all");
  if (error) return error;
  else {
    return data;
  }
}

export async function getObjectById(input_id) {
  "use server";

  let { data, error } = await supabase.rpc("objekat_get_by_id", {
    input_id,
  });
  if (error) return error;
  else {
    return data;
  }
}

export async function updateObjekat(
  input_id,
  n_description,
  n_name,
  n_projekat_id,
  n_sorting_id
) {
  "use server";

  let { data, error } = await supabase.rpc("objekat_update", {
    input_id,
    n_description,
    n_name,
    n_projekat_id,
    n_sorting_id,
  });
  if (error) return error;
  else {
    return data;
  }
}
