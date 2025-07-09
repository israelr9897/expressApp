import express from "express";

const PORT = 3050;
const APP = express();
const users = [
    { username: "Israel", id : "5" }
];
APP.get("/", (req, res) => {
  res.send("Welcome to Home");
});

APP.get("/users/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
  res.json(users.find((user) => user.id === id));
});

APP.listen(PORT, () => {
  console.log("express server runing on port:" + PORT);
});
