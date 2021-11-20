import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import baseRouter from "./routes";
import mongoKey from "../config";

const app = express();
app.use(cors());
app.use("/api", baseRouter);

// mongoose
//   .connect(process.env.MONGO_CONNECTION || mongoKey)
//   .catch((err) => console.log(err));

// TEST ROUTE
app.get("/api/test", (req, res) => {
  res.send({ message: "OK", data: "Hello world!" });
});

export default app;
