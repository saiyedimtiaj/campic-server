import { z } from "zod";

export const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  stock: z.number(),
  image: z.string(),
});

export const productUpdateValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  price: z.number().optional(),
  stock: z.number().optional(),
  image: z.string().optional(),
});
