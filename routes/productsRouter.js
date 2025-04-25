import { Router } from "express";
import {
  getProducts,
  createProducts,
  deleteProduct,
  updateProduct,
  getOneProduct,
  getProductsByStoreId,
} from "../controllers/productController.js";

const productsRouter = Router();

productsRouter.route("/api/products").get(getProducts);
productsRouter
  .route("/api/product/:id")
  .delete(deleteProduct)
  .put(updateProduct)
  .get(getOneProduct);

productsRouter.route("/api/products/:storeId").get(getProductsByStoreId);
productsRouter.route("/api/product/:storeId").post(createProducts);

export default productsRouter;
