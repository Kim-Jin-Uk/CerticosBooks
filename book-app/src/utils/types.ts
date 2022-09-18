export type defaultObject = {
  [key: string]: string;
};

export type likesHashMap = {
  [key: string]: boolean;
};

export type bookData = {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
};

export type bookRequest = {
  query: string;
  sort: string | null;
  page: number;
  size: number;
  target: string | null;
};
