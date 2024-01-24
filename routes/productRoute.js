const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productCtrl");

const {isAdmin, authMiddleware} = require('../middlewares/authMiddleware');

const router = require.Router();

router.post("/", isAdmin, authMiddleware, createProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);
router.put("/:id", isAdmin, authMiddleware, updateProduct);
router.delete("/:id", isAdmin, authMiddleware, deleteProduct);

module.exports = router;
