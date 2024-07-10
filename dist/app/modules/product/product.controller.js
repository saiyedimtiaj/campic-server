"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const product_service_1 = require("./product.service");
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productService.createProductService(req.body);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Product create successfully",
        data: result,
    });
}));
const getAllProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield product_service_1.productService.getAllProductService(query);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "All Product retrive successfully",
        data: result,
    });
}));
const getSingleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield product_service_1.productService.getSingleProductService(id);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Product retrive successfully",
        data: result,
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield product_service_1.productService.deleteProductService(id);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Product deleted successfully",
        data: result,
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield product_service_1.productService.updateProductService(id, req.body);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Product update successfully",
        data: result,
    });
}));
const updatePayment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const result = yield product_service_1.productService.updatePaymentService(body);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Product update successfully",
        data: result,
    });
}));
exports.productController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    updatePayment,
};
