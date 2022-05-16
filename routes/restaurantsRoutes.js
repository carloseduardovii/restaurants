//bookstore
const express = require("express");

//controllers
//middlewares
//models
//routes
const router = express.Router();
router
  .route("/new")
  .post()
  .route("/")
  .get()
  .route("/:id")
  .get()
  .patch()
  .delete()
  .route("/reviews/:id")
  .post()
  .patch()
  .delete();
//utils

module.exports = { restaurantsRoutes: router };
