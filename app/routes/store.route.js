const express = require("express");
const router = express.Router();
const storeController = require("../controllers/store.controller");

router.get("/", storeController.getAllStoresList);
router.get("/details/:store_id", storeController.getAllStoresList);
router.post("/save", storeController.saveStore);
router.put("/update", storeController.updateStore);
router.delete("/delete/:store_id", storeController.deleteStore);

module.exports = router;
