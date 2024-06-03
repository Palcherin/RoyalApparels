const express = require("express");
const orderRoute = express.Router();
const asyncHandler = require("express-async-handler");
const protect = require("../Middleware/Auth");
const Order = require("../models/Order");
const router = express.Router();
orderRoute.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethods,
      shippingPrice,
      taxPrice,
      totalPrice,
      price,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("no order items found !");
    } else {
      const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethods,
        shippingPrice,
        taxPrice,
        totalPrice,
        price,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  })
);

module.exports = router