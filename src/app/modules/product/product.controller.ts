import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { productService } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await productService.createProductService(req.body);

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Product create successfully",
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await productService.getAllProductService();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "All Product retrive successfully",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productService.getSingleProductService(id);

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Product retrive successfully",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productService.deleteProductService(id);

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productService.updateProductService(id, req.body);

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Product update successfully",
    data: result,
  });
});

export const productController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
