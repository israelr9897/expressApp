import express from "express";
import { createComment, getCommentById } from "../ctrl/commentsCtrl.js";
import isExists from "../Middleware/postsMiddleware.js";


const router = express.Router({ mergeParams: true });
router.use(isExists)

router.get("/", getCommentById);
router.post("/", createComment);

export default router;
