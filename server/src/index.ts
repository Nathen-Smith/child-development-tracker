import app from "./Server";

// start the Express server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
