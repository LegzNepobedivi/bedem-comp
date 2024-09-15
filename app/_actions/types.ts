export enum PropertyType {
  Flat = "flat",
  House = "house",
  BussinessSpace = "bussinessSpace",
  Field = "field",
  Apartment = "apartment",
  Default = "DEFAULT",
}

export enum TransactionType {
  Prodaja = "prodaja",
  Izdavanje = "izdavanje",
  Default = "DEFAULT",
}

export enum ComponentType {
  ObjectUnit = "ObjectUnit",
}

export type typeAgent = {
  id: number;
  name: string;
  mail: string;
  description: string;
  position: string;
  telephone: string;
  license: string;
};

export type typeApartment = {
  id: number;
  apartment_type: PropertyType | null;
  transaction_type: TransactionType | null;
  title: string;
  sort_num: number | null;
  description: string | null;
  floor: string | null;
  heating: string | null;
  linkVR: string | null;
  linkYT: string | null;
  location: string | null;
  new_fresh: boolean | null;
  number_of_rooms: string;
  price: number;
  size: string;
  lift: boolean | null;
  balcony: boolean | null;
  sold: boolean;
  language_id: number | null;
  last_user_id: string | null;
  updated_at: string | null;
};

export type typeComponent = {
  id: number;
  title: string | null;
  component_type: ComponentType | null;
  sort_num: number | null;
  subtype_id: number | null;
  language_id: number | null;
  last_user_id: string | null;
  updated_at: string;
};

export type typeExclusive = {
  id: number;
  language_id: number | null;
  last_user_id: string | null;
  title: string | null;
  updated_at: string | null;
};

export type typeLanguage = {
  id: number;
  name: string | null;
  updated_at: string;
};

export type typeObjectUnit = {
  id: number;
  name: string;
  sort_num: number;
  description: string | null;
  component_id: number | null;
  language_id: number | null;
  last_user_id: string | null;
  updated_at: string | null;
};

export type typePicture = {
  id: number;
  url: string;
  sort_num: number;
  last_user_id: string | null;
  updated_at: string | null;
};

export type typeProject = {
  id: number;
  description: string | null;
  name: string;
  sort_num: number;
  language_id: number | null;
  last_user_id: string | null;
  updated_at: string | null;
};
