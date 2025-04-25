import { productsData } from "../index.js";

export const getProducts = (req, res) => {
  try {
    res.json(productsData);
  } catch (error) {
    console.log("Error sending product", error);
  }
};

export const getProductsByStoreId = (req, res) => {
  try {
    const id = req.params.storeId;

    const filterByStoreId = productsData.filter(
      (product) => product.Store_ID === id
    );

    res.json(filterByStoreId);
  } catch (error) {
    console.log("Error sending product", error);
  }
};

export const getOneProduct = (req, res) => {
  try {
    const id = req.params.id;

    const oneProduct = productsData.find((product) => product.Store_ID === id);

    res.json(oneProduct);
  } catch (error) {
    console.log("Error sending product", error);
  }
};

export const createProducts = (req, res) => {
  try {
    const storeId = req.params.storeId;
    const newProduct = req.body;

    if (!newProduct.Name || !newProduct.Price_amount) {
      return res.status(400).json({ error: "Product requires Name and Price" });
    }

    newProduct.StoreId = storeId;

    productsData.push(newProduct);

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create product" });
  }
};

export const deleteProduct = (req, res) => {
  try {
    let id = req.params.id;

    let filterProducts = productsData.filter((product) => product.ID !== id);

    productsData.length = 0;

    productsData.push(...filterProducts);
    res.json(filterProducts);
  } catch (error) {
    console.log(error, "error deleting product");
  }
};

export const updateProduct = (req, res) => {
  try {
    const id = req.params.id;
    let updatedProductsData = req.body;

    const findProduct = productsData.find((product) => product.ID === id);

    Object.assign(findProduct, updatedProductsData);

    res.json(findProduct);
  } catch (error) {
    console.log(error, "error updating product");
  }
};
