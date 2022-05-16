//bookstore
const express = require("express");

//controllers
//middlewares
//models
//routes
const router = express.Router();
router.route("/").get().route("/:id").get().post().patch().delete();

//utils

module.exports = { mealsRoutes: router };
