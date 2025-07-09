import express from "express";
import commentsRouter from "./commentsRout.js";
import { createPost, getAllPosts } from "../ctrl/postsCtrl.js";

const router = express.Router();
router.use("/:id/comments", commentsRouter);

router.get("/", getAllPosts);
router.post("/", createPost);

export default router;
