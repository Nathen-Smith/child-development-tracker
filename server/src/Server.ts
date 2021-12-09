import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser = require('body-parser');

import baseRouter from "./routes";
import mongoKey from "../config";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use("/api", baseRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION || mongoKey)
  .catch((err) => console.log(err));

// TEST ROUTE
app.get("/api/test", (req, res) => {
  res.send({ message: "OK", data: "Hello world!" });
});

export default app;
