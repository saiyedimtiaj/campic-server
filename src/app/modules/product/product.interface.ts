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
  searchTerm?: string;
  sortBy?: string;
  category?: string;
};
