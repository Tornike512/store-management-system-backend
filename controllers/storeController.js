import { data } from "../index.js";

export const getStores = (req, res) => {
  try {
    res.json({ stores: data });
  } catch (error) {
    console.log("error sending get request", error);
  }
};

export const createStore = (req, res) => {
  try {
    const newData = req.body;

    res.json(newData);
  } catch (error) {
    console.log("Error adding a new store", error);
  }
};

export const deleteStore = (req, res) => {
  try {
    const id = req.params.id;

    const filterData = data.filter((newData) => newData.ID === id);

    res.json(filterData);
  } catch (error) {
    console.log("Error deleting a store", error);
  }
};

export const updateStore = (req, res) => {
  try {
    const id = req.params.id;
    let updatedStoreData = req.body;

    let findById = data.find((newData) => newData.ID === id);
    Object.assign(findById, updatedStoreData);
    res.json(findById);
  } catch (error) {
    console.log("Error updating store", error);
  }
};
