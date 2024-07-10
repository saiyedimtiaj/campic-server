export type TProduct = {
  name: string;
  description: string;
  price: number;
  stock: boolean;
  category: string;
  image: string;
  quantity: number;
  rating: number;
};

export type TProductQuery = {
  price?: string;
  searchTrams?: string;
  sortBy?: string;
  category?: string;
};

export type TPayment = {
  _id: string;
  quantity: number;
}[];
