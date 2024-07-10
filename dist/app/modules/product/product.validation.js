"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateValidationSchema = exports.productValidationSchema = void 0;
const zod_1 = require("zod");
exports.productValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    category: zod_1.z.string(),
    price: zod_1.z.number(),
    stock: zod_1.z.boolean(),
    image: zod_1.z.string(),
    rating: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
exports.productUpdateValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    price: zod_1.z.number().optional(),
    stock: zod_1.z.boolean().optional(),
    image: zod_1.z.string().optional(),
    rating: zod_1.z.number().optional(),
    quantity: zod_1.z.number().optional(),
});
