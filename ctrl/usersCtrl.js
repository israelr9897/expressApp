import { question } from "readline-sync";


let users = [{ id: 1, name: 'Alice' }];

function getAllUsers(req, res){
    res.json(users)
}

function createUser(req, res){
    users.push({id: users.length +1, name: req.body.name})
    res.send("User added successfully!")
}

function getUserByID(req, res){
    let user = users.find(user => user.id == req.params.id);
    if(user){
        res.send(user)
    } else {
        res.status(404).send({msg: "id not find"})
    }
}

function updateUserByID(req, res){
    let user = users.find(user => user.id == req.params.id);
    user.name = req.body.name;
    res.send("User update successfully!")
}
function deleteUserByID(req, res){
    users.filter(user => user.id != req.params.id)
    res.send("User update successfully!")
}

export {
    getAllUsers,
    createUser,
    getUserByID,
    updateUserByID,
    deleteUserByID
}