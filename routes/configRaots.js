import express from "express";
import greetRouter from "./greetRout.js"
import userRouter from "./userRout.js"

export function config(app){
    app.use('/greet', greetRouter);
    app.use('/users', userRouter);
    app.use((req, res) => {
        res.status(404).send({msg: "Rout not find"})
      })
}
