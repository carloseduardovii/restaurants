//bookstore
const express = require("express");

//middlewares
const {
  protectUserOwner,
  protectToken,
} = require("../middlewares/userMiddleware");
//controllers
const {
  createOrder,
  getAllUserOrders,
  orderComplete,
  deleteOrder,
} = require("../controllers/ordersController");

//models
//routes
const router = express.Router();
router.use(protectToken);
router.route("/").post(createOrder);
router.route("/me").get(getAllUserOrders);
router.route("/:id").patch(orderComplete).delete(deleteOrder);

//utils

module.exports = { ordersRouter: router };
