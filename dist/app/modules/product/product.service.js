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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const product_model_1 = require("./product.model");
const createProductService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
const getAllProductService = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const sortQuery = {};
    if (queryParams === null || queryParams === void 0 ? void 0 : queryParams.price) {
        const priceSplit = queryParams.price.split("-");
        query.price = {
            $gt: parseInt(priceSplit[0]),
            $lt: parseInt(priceSplit[1]),
        };
    }
    if (queryParams === null || queryParams === void 0 ? void 0 : queryParams.category) {
        query.category = queryParams.category;
    }
    if (queryParams.sortBy) {
        sortQuery.price = queryParams.sortBy.toLowerCase() === "asc" ? 1 : -1;
    }
    if (queryParams.searchTrams) {
        query.$or = [
            { name: { $regex: queryParams.searchTrams, $options: "i" } },
            { description: { $regex: queryParams.searchTrams, $options: "i" } },
        ];
    }
    const result = yield product_model_1.Product.find(query).sort(sortQuery);
    return result;
});
const getSingleProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
const deleteProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    return result;
});
const updateProductService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const updatePaymentService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = payload.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        const { _id, quantity } = item;
        const isItemExist = yield product_model_1.Product.findById(_id);
        return yield product_model_1.Product.findByIdAndUpdate(_id, {
            quantity: (isItemExist === null || isItemExist === void 0 ? void 0 : isItemExist.quantity) - quantity,
        }, { new: true });
    }));
    return result;
});
exports.productService = {
    createProductService,
    getAllProductService,
    getSingleProductService,
    deleteProductService,
    updateProductService,
    updatePaymentService,
};
