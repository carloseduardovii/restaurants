//bookstore
const express = require("express");

//controllers
const {
  getAllMeals,
  createMeal,
  getMealById,
  updateMeal,
  deleteMeal,
} = require("../controllers/mealsController");

//middlewares
//models
//routes
const router = express.Router();
router.route("/").get(getAllMeals);
router
  .route("/:id")
  .get(getMealById)
  .post(createMeal)
  .patch(updateMeal)
  .delete(deleteMeal);

//utils

module.exports = { mealsRouter: router };
