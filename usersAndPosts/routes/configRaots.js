import express from "express";
import greetRouter from "./greetRout.js"
import userRouter from "./userRout.js"
import postRouter from "./postsRout.js"


export function config(app){
    app.use('/greet', greetRouter);
    app.use('/users', userRouter);
    app.use('/posts', postRouter);
    app.use((req, res) => {
        res.status(404).send({msg: "Rout not find"})
      })
}
