import { Router } from "express";
import {
  getProducts,
  createProducts,
  deleteProduct,
  updateProduct,
  getOneProduct,
} from "../controllers/productController.js";

const productsRouter = Router();

productsRouter.route("/api/products").get(getProducts);
productsRouter
  .route("/api/products/:id")
  .delete(deleteProduct)
  .put(updateProduct)
  .get(getOneProduct)
  .post(createProducts);

export default productsRouter;
