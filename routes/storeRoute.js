import { Router } from "express";
import {
  updateStore,
  getStores,
  deleteStore,
  createStore,
} from "../controllers/storeController.js";

const router = Router();

router.route("/api/stores").get(getStores).post(createStore);
router.route("/api/stores/:id").delete(deleteStore).put(updateStore);

export default router;
