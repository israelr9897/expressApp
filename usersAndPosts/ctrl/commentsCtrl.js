import { text } from "express";

let comments = [{ id: 1, text: "nice!" }];

function getCommentById(req, res){
    const comment = comments.find(c => c.id === Number(req.params.id))
    if (comment) {
        res.send(comment);
      } else {
        res.status(404).send({ msg: "id not find" });
      }
}

function createComment(req, res){
    let comment = comments.find(c => c.id === Number(req.params.id))
    const newComment = {id: comment.id, text: `${comment.text}, ${req.body.text}`};
    Object.assign(comment, newComment);
  res.send("Comment added successfully!");
}

export {
    getCommentById,
    createComment
}