"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const product_validation_1 = require("./product.validation");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.default)();
router.post("/", (0, validateRequest_1.validateData)(product_validation_1.productValidationSchema), product_controller_1.productController.createProduct);
router.get("/", product_controller_1.productController.getAllProduct);
router.get("/:id", product_controller_1.productController.getSingleProduct);
router.delete("/:id", product_controller_1.productController.deleteProduct);
router.patch("/:id", (0, validateRequest_1.validateData)(product_validation_1.productUpdateValidationSchema), product_controller_1.productController.updateProduct);
router.put("/payment", product_controller_1.productController.updatePayment);
exports.productRouter = router;
