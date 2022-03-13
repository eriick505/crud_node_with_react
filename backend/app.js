const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const productsRouter = require("./routes/products");
const imageProductsRouter = require("./routes/productImages");
const categoryRouter = require("./routes/category");
const ordersRouter = require("./routes/order");
const usersRouter = require("./routes/users");

app.use(cors());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: false })); // only simple data
app.use(express.json()); // only json data

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).send({});
  }

  next();
});

app.use("/products", productsRouter);
app.use("/products", imageProductsRouter);
app.use("/categories", categoryRouter);
app.use("/orders", ordersRouter);
app.use("/users", usersRouter);

// Access here when not routes are found
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
