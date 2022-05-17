//models
const { Meal } = require("../models/mealsModel");
//utils
const { catchAsync } = require("../utils/catchAsync");

const getAllMeals = catchAsync(async (req, res, next) => {
  const meals = await Meal.findAll({ where: { status: "active" } });

  res.status(200).json({ meals });
});

const createMeal = catchAsync(async (req, res, next) => {
  const { name, price } = req.body;
  const { restaurantId } = req.params;
  const { sessionUser } = req;

  const newMeal = await Meal.create({
    name,
    price,
    restaurantId,

    userId: sessionUser.id,
  });

  console.log(id);

  res.status(201).json({ newMeal });
});

const getMealById = catchAsync(async (req, res, next) => {
  const { id } = req;

  const meal = await Meal.findOne({ where: { id, status: "active" } });

  res.status(200).json({ meal });
});

const updateMeal = catchAsync(async (req, res, next) => {
  const { name, price } = req.body;
  const { meal } = req;

  await meal.update({ name, price });

  res.status(200).json({ status: "success" });
});

const deleteMeal = catchAsync(async (req, res, next) => {
  const { meal } = req;

  await meal.update({ status: "deactiveted" });

  res.status(200).json({ status: "success" });
});

module.exports = {
  getAllMeals,
  createMeal,
  getMealById,
  updateMeal,
  deleteMeal,
};
