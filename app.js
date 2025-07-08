import express from "express";

const PORT = 3050;
const APP = express();

APP.get("/", (req, res) => {
  res.end("wef");
});

APP.listen(PORT, () => {
  console.log("express server runing on port:" + PORT);
});
