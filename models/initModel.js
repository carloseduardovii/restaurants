const { Restaurant } = require("../models/restaurantsModel");
const { Meal } = require("../models/mealsModel");
const { Order } = require("../models/ordersModel");
const { User } = require("./userModel");
const { Review } = require("../models/reviewsModel");

const initModel = () => {
  Restaurant.hasMany(Meal, { foreignKey: "restaurantId" });
  Meal.belongsTo(Restaurant);

  Restaurant.hasMany(Review, { foreignKey: "restaurantId" });
  Review.belongsTo(Restaurant);

  Meal.hasMany(Order, { foreignKey: "mealId" });
  Order.belongsTo(Meal);

  User.hasMany(Order, { foreignKey: "userId" });
  Order.belongsTo(User);

  User.hasMany(Review, { foreignKey: "userId" });
  Review.belongsTo(User);
};

module.exports = { initModel };
