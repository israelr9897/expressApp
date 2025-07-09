import express from "express";
import { createUser, deleteUserByID, getAllUsers, getUserByID, updateUserByID } from "../ctrl/usersCtrl.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserByID);
router.put("/:id", updateUserByID);
router.delete("/:id", deleteUserByID);

export default router;
