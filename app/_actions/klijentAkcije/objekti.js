import supabase from "@/lib/supabase";
import { revalidatePath } from "next/cache";

//Objekti
export async function getAllObjekat() {
  "use server";
  let { data, error } = await supabase.rpc("objekat_get_all");
  if (error) return error;
  else return data;
}

export async function getObjekatById(input_id) {
  "use server";
  let { data, error } = await supabase.rpc("objekat_get_by_id", {
    input_id,
  });

  if (error) return error;
  else return data;
}
