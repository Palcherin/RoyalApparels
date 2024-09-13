const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.json(product);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (products) {
      res.json(products);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

module.exports = router;
