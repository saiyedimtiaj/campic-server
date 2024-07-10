import Router from "express";
import { validateData } from "../../middlewares/validateRequest";
import {
  productUpdateValidationSchema,
  productValidationSchema,
} from "./product.validation";
import { productController } from "./product.controller";

const router = Router();

router.post(
  "/",
  validateData(productValidationSchema),
  productController.createProduct
);

router.get("/", productController.getAllProduct);

router.get("/:id", productController.getSingleProduct);

router.delete("/:id", productController.deleteProduct);

router.patch(
  "/:id",
  validateData(productUpdateValidationSchema),
  productController.updateProduct
);

router.put("/payment", productController.updatePayment);

export const productRouter = router;
