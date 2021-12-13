import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser = require("body-parser");

import baseRouter from "./routes";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
  origin: process.env.PROD === "true" ? "https://nathen-smith.gitlab.io/" : "*",
};
app.use(cors(corsOptions));
app.use("/api", baseRouter);

// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://aws.amazon.com/developers/getting-started/nodejs/

// Load the AWS SDK
var AWS = require("aws-sdk"),
  region = "us-east-1",
  secretName = "prod/mongoDB/apiKey";

// Create a Secrets Manager client
var client = new AWS.SecretsManager({
  region: region,
});

client.getSecretValue({ SecretId: secretName }, function (err: any, data: any) {
  if (!err && "SecretString" in data)
    mongoose.connect(data.SecretString).catch((err) => console.log(err));
});

// TEST ROUTE
app.get("/api/test", (req, res) => {
  res.send({ message: "OK", data: "Hello world!" });
});

export default app;
