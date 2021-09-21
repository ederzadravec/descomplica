export interface findAll<Data> {
  page: number;
  total: number;
  pages: number;
  perPage: number;
  data: Data[];
}

export interface pagination {
  page: number;
  perPage: number;
}

export interface where {
  [field: string]: any;
}
