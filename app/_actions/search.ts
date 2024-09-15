import supabase from "@/lib/supabase";
import { PropertyType, TransactionType } from "./types";

export async function search_apartments(
  input_title: string,
  input_apartment_type: PropertyType | string,
  input_transaction_type: TransactionType | string
) {
  const { data, error } = await supabase.rpc("search_get_all_apartments", {
    input_apartment_type,
    input_title,
    input_transaction_type,
  });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}
