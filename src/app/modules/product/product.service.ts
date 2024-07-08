import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductService = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductService = async () => {
  const result = await Product.find();
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
