import express from "express";
import { msgFormat } from "../ctrl/greetCtrl.js";

const router = express.Router();

router.get("/", msgFormat);

export default router;
