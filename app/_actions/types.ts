export enum TypeStan {
  Stan = "stan",
  Kuca = "kuca",
  PoslovniProstor = "poslovni prostor",
  Zemljiste = "zemljiste",
}

export enum TransactionType {
  Prodaja = "prodaja",
  Izdavanje = "izdavanje",
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

export type typeStan = {
  id: number;
  title: string;
  description: string;
  price: number;
  type: TypeStan;
  numberOfRooms: string;
  size: string;
  ytLink: string;
  floor: string;
  transaction_type: TransactionType;
  others: string[];
  prodato: boolean;
  sorting_id: number;
  location: string;
};

export type typeProjekat = {
  id: number;
  name: string;
  description: string;
  sorting_id: number;
};

export type typeObjekat = {
  id: number;
  name: string;
  description: string;
  projekat_id: number;
  sorting_id: number;
};

export type typeSlika = {
  id: number;
  url: string;
  sorting_id: number;
  stan_id: number;
};
