import supabase from "@/lib/supabase";
import { ApartmentType, TransactionType } from "./types";

export async function search_apartments(
  input_title: string,
  input_apartment_type: ApartmentType,
  input_transaction_type: TransactionType
) {
  const { data, error } = await supabase.rpc("search_get_all_apartments", {
    input_apartment_type,
    input_title,
    input_transaction_type,
  });
  if (error) console.error(error);
  else console.log(data);
}
