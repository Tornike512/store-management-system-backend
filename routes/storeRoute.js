import { Router } from "express";
import {
  updateStore,
  getStores,
  deleteStore,
  createStore,
} from "../controllers/storeController.js";

const router = Router();

router.route("/api/stores").get(getStores).post(updateStore);
router.route("/api/stores/:id").delete(deleteStore).put(createStore);

export default router;
