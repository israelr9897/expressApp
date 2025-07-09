import express from "express";
import { config } from "./routes/configRaots.js";

const PORT = 3050;
const app = express();

app.use(express.json());
config(app);

app.listen(PORT, () => {
  console.log("express server runing on port:" + PORT);
});

