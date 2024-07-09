import { z } from "zod";

export const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  stock: z.boolean(),
  image: z.string(),
  rating: z.number(),
  quantity: z.number(),
});

export const productUpdateValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  price: z.number().optional(),
  stock: z.boolean().optional(),
  image: z.string().optional(),
  rating: z.number().optional(),
  quantity: z.number().optional(),
});
