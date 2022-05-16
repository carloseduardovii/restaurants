//bookstore
const express = require("express");

//controllers
//middlewares
//models
//routes
const router = express.Router();
router.route("/").post().route("/me").get().route("/:id").patch().delete();

//utils

module.exports = { ordersRoutes: router };
