//models
const { Order } = require("../models/ordersModel");
const { Meal } = require("../models/mealsModel");

//utils
const { AppError } = require("../utils/appErrors");
const { catchAsync } = require("../utils/catchAsync");

const orderExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const order = await Order.findOne({ where: { id } });

  if (!order) {
    return next(new AppError("Order not found, pleace make your order", 404));
  }

  req.order = order;

  return next();
});

const mealExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const meal = await Meal.findOne({ where: { id } });

  if (!meal) {
    return next(new AppError("Meal not found, pleace make your order", 404));
  }

  req.meal = meal;

  return next();
});

module.exports = { orderExists, mealExists };
