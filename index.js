import express, { json } from "express";

const app = express();
const PORT = 3101;

const timeNow = new Date().toString();
const obj = { "msg": "hi from get endpoint " + timeNow }

app.use(express.json())

app.get("/greet", (req, res) => {
    res.json(obj)
})

app.get("/greet/:name", (req,res) => {
    const {name} = req.params;
    console.log("i got name: " + name);
    res.json({ "msg": "got name: " +  name})
})

const valid = { "result": "ok" };
const otherwise = { "result": "fail" };

app.get("/test", async (req,res) => {
    const response =  (await fetch("http://localhost:3101/greet/israel"));
    const data = await response.json();
    if(data.msg.includes("israel")){
        res.json(valid);
    }else{
        res.json(otherwise);
    }

})

app.post("/action", async (req,res) => {
    if(req.body.action !== "joke" && req.body.action !== "cat fact"){
        res.status(404).json({ "msg": "body is malformed" })
    }
    else if(req.body.action === "joke"){
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        res.json({"joke" : `${data.setup.toUpperCase()} ${data.punchline.toUpperCase()}`});
    }
    else if(req.body.action === "cat fact"){
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME");
        const data = await response.json();
        res.json({"length" : data.length});
    }
})

app.use((req,res) => {
    res.status(404).send("Route not find")
})

app.listen(PORT, ()=> {
    console.log("express server runing on http://localhost:" + PORT);
})
