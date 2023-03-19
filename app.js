const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");

//step4 middlewares
app.use(bodyParser.json());

//step2 public saved variables
require("dotenv/config");

//step2 routes
const productRouter = require("./routes/products");
const userRouter = require("./routes/users");
const orderRouter = require("./routes/orders");
const categoryRouter = require("./routes/category");

const API_URL = process.env.API_URL;

app.use(`${API_URL}/products`, productRouter);
app.use(`${API_URL}/users`, userRouter);
app.use(`${API_URL}/orders`, orderRouter);
app.use(`${API_URL}/category`, categoryRouter);

//step1 server
const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log("System started Successfully!!");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
