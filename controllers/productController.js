import { productsData } from "../index.js";

export const getProducts = (req, res) => {
  try {
    res.json(productsData);
  } catch (error) {
    console.log("Error sending product", error);
  }
};

export const getOneProduct = (req, res) => {
  try {
    const id = req.params.id;

    const oneProduct = productsData.find((product) => product.ID === id);

    res.json(oneProduct);
  } catch (error) {
    console.log("Error sending product", error);
  }
};

export const createProducts = (req, res) => {
  try {
    const newProduct = req.body;
    productsData.push(newProduct);

    res.json(newProduct);
  } catch (error) {
    console.log("error creating product", error);
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
