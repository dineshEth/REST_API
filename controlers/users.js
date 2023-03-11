import { v4 as uuidv4 } from "uuid";



let users =  [
    {
        "firstName" : "joseph",
        "lastName" : "Trout",
        "age" : 25
    },
    {
        "firstName" : "kritonshe",
        "lastName" : "kropiuon",
        "age" : 13
    }
]

export const userGET = (req, res) => {
    res.send(users);
}

export const userPOST = (req, res) => {
    const user  = req.body;

    users.push({ ...user, id : uuidv4()});

    res.send(`User with id: ${user.firstName} added to database`);
}


export const userById = (req,res) => {
    const {id} = req.param;

    const user =  users.find((user) => user.id == id);

    res.send(user);
}

export const userDELETE = (req,res) => {
    const {id} = req.param;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id: ${id} is deleted from database`);
}


export const userUPDATE = (req,res) => {
    const {id} = req.param;
    const {firstName, lastName, age} = req.body;

    const user =  users.find((user)=> user.id == id);
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with id: ${id} has been updated`);
}

