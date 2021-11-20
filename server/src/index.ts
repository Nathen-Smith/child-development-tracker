import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import mongoKey from "../config";

export const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
mongoose
  .connect(process.env.MONGO_CONNECTION || mongoKey)
  .catch((err) => console.log(err));

// define a route handler for the default home page
app.get("/test", (req, res) => {
  res.send({ message: "OK", data: "Hello world!" });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
