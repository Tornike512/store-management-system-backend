import { Router } from "express";
import {
  getProducts,
  createProducts,
  deleteProduct,
  updateProduct,
  getOneProduct,
} from "../controllers/productController.js";

const productsRouter = Router();

productsRouter.route("/api/products").get(getProducts).post(createProducts);
productsRouter
  .route("/api/products/:id")
  .delete(deleteProduct)
  .put(updateProduct)
  .get(getOneProduct);

export default productsRouter;
