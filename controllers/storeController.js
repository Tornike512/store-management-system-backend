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
    data.push(newData);

    res.json(newData);
  } catch (error) {
    console.log("Error adding a new store", error);
  }
};

export const deleteStore = (req, res) => {
  try {
    const id = req.params.id;

    const storeIndex = data.findIndex((store) => store.ID === id);

    if (storeIndex === -1) {
      return res.status(404).json({ message: `Store with ID ${id} not found` });
    }

    const deletedStore = data.splice(storeIndex, 1)[0];

    res.status(200).json({
      message: "Store deleted",
      deletedStore: deletedStore,
    });
  } catch (error) {
    console.error("Error deleting store:", error);
    res.status(500).json({ message: "Server error while deleting store" });
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
