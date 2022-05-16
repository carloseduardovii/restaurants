//bookstore
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

//controllers
const { globalErrorHandler } = require("./controllers/errorController");
//middlewares
//models

//routes
const { userRouter } = require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());

//Limit IP request
const limiter = rateLimit({
  max: 10000,
  window: 1 * 60 * 60 * 1000,
  message: "To many request fom this IP",
});

app.use(limiter);

// Endpoints
// http://localhost:4000
app.use("/api/v1/users", userRouter);

app.use("*", globalErrorHandler);

module.exports = { app };
