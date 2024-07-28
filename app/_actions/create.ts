import supabase from "@/lib/supabase";
import { ApartmentType, TransactionType } from "./types";

export async function create_agent(
  n_description: string,
  n_sort_num: number,
  n_language_id: number,
  n_license: string,
  n_mail: string,
  n_name: string,
  n_position: string,
  n_telephone: string
) {
  const { data, error } = await supabase.rpc("create_agent", {
    n_description,
    n_language_id,
    n_license,
    n_mail,
    n_name,
    n_position,
    n_sort_num,
    n_telephone,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function create_apartment(
  n_agent_id: number,
  n_language_id: number,
  n_title: string,
  n_apartment_type: ApartmentType,
  n_description: string,
  n_price: number,
  n_floor: string,
  n_heating: string,
  n_balcony: boolean,
  n_lift: boolean,
  n_link_vr: string,
  n_link_yt: string,
  n_location: string,
  n_new_fresh: boolean,
  n_number_of_rooms: string,
  n_size: string,
  n_sold: boolean,
  n_sort_num: number,
  n_transaction_type: TransactionType
) {
  const { data, error } = await supabase.rpc("create_apartment", {
    n_agent_id,
    n_apartment_type,
    n_balcony,
    n_description,
    n_floor,
    n_heating,
    n_language_id,
    n_lift,
    n_link_vr,
    n_link_yt,
    n_location,
    n_new_fresh,
    n_number_of_rooms,
    n_price,
    n_size,
    n_sold,
    n_sort_num,
    n_title,
    n_transaction_type,
  });
  if (error) console.error(error);
  else return data;
}

export async function create_apartment_and_connect_to_agent(
  n_agent_id: number,
  n_language_id: number,
  n_title: string,
  n_apartment_type: ApartmentType,
  n_description: string,
  n_price: number,
  n_floor: string,
  n_heating: string,
  n_balcony: boolean,
  n_lift: boolean,
  n_link_vr: string,
  n_link_yt: string,
  n_location: string,
  n_new_fresh: boolean,
  n_number_of_rooms: string,
  n_size: string,
  n_sold: boolean,
  n_sort_num: number,
  n_transaction_type: TransactionType
) {
  const { data, error } = await supabase.rpc(
    "create_apartment_and_connect_to_agent",
    {
      n_agent_id,
      n_apartment_type,
      n_balcony,
      n_description,
      n_floor,
      n_heating,
      n_language_id,
      n_lift,
      n_link_vr,
      n_link_yt,
      n_location,
      n_new_fresh,
      n_number_of_rooms,
      n_price,
      n_size,
      n_sold,
      n_sort_num,
      n_title,
      n_transaction_type,
    }
  );
  if (error) console.error(error);
  else console.log(data);
}

export async function create_language(n_name: string) {
  const { data, error } = await supabase.rpc("create_language", {
    n_name,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function create_object_unit(
  n_component_id: number,
  n_description: string,
  n_language_id: number,
  n_name: string,
  n_sort_num: number
) {
  const { data, error } = await supabase.rpc("create_object_unit", {
    n_component_id,
    n_description,
    n_language_id,
    n_name,
    n_sort_num,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function create_picture(n_sort_num: number, n_url: string) {
  const { data, error } = await supabase.rpc("create_picture", {
    n_sort_num,
    n_url,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function create_picture_and_connect_to_apartment(
  n_apartment_id: number,
  n_sort_num: number,
  n_url: string
) {
  const { data, error } = await supabase.rpc(
    "create_picture_and_connect_to_apartment",
    {
      n_apartment_id,
      n_sort_num,
      n_url,
    }
  );
  if (error) console.error(error);
  else console.log(data);
}

export async function create_picture_and_connect_to_component(
  n_apartment_id: number,
  n_sort_num: number,
  n_url: string
) {
  const { data, error } = await supabase.rpc(
    "create_picture_and_connect_to_apartment",
    {
      n_apartment_id,
      n_sort_num,
      n_url,
    }
  );
  if (error) console.error(error);
  else console.log(data);
}

export async function create_project(
  n_description: string,
  n_language_id: number,
  n_name: string,
  n_sort_num: number
) {
  const { data, error } = await supabase.rpc("create_project", {
    n_description,
    n_language_id,
    n_name,
    n_sort_num,
  });
  if (error) console.error(error);
  else console.log(data);
}
