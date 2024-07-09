import { SortOrder } from "mongoose";
import { TProduct, TProductQuery } from "./product.interface";
import { Product } from "./product.model";

const createProductService = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductService = async (queryParams: TProductQuery) => {
  const query: any = {};
  const sortQuery: { [key: string]: SortOrder } = {};

  if (queryParams?.price) {
    const priceSplit = queryParams.price.split("-");
    query.price = {
      $gt: parseInt(priceSplit[0]),
      $lt: parseInt(priceSplit[1]),
    };
  }

  if (queryParams?.category) {
    query.category = queryParams.category;
  }

  if (queryParams.sortBy) {
    sortQuery.price = queryParams.sortBy.toLowerCase() === "asc" ? 1 : -1;
  }

  if (queryParams.searchTerm) {
    query.$or = [
      { name: { $regex: queryParams.searchTerm, $options: "i" } },
      { description: { $regex: queryParams.searchTerm, $options: "i" } },
    ];
  }

  const result = await Product.find(query).sort(sortQuery);
  return result;
};

const getSingleProductService = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const deleteProductService = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const updateProductService = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const productService = {
  createProductService,
  getAllProductService,
  getSingleProductService,
  deleteProductService,
  updateProductService,
};
