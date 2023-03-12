const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");

 
//step4 middlewares 
app.use(bodyParser.json());

//step2 public saved variables
require("dotenv/config");
const API_URL = process.env.API_URL;
const port = process.env.PORT;

//step2 routes
const productRouter = require("./routes/products");
app.use(`${API_URL}/products`, productRouter);

//step1 server
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


