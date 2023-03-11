import express from "express";
import { v4 as uuidv4 } from 'uuid';
import { userGET } from "../controlers/users";
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

/**
 * import { userGET } from "../controlers/users";
 * import { userPOST } from "../controlers/users";
 * import { userById } from "../controlers/users";
 * import { userDELETE } from "../controlers/users";
 * import { userUPDATE } from "../controlers/users";
 */



const  router =  express.Router();

/**
 * ====> BEST WAYS 
 * router.get("/",userGET);
 * router.post("/",userPOST);
 * router.get("/",userGetById);
 * router.delete("/",userDELETE);
 * router.patch("/",userUPDATE);
 */


let users = [
    // {
    //     "firstname" : "john",
    //     "lastname": "doe",
    //     "age":21
    // },
    // {
    //     "firstname" : "johnny",
    //     "lastname": "doesi",
    //     "age":25
    // }
]

// get data (GET) request  [READ]
router.get('/',(req,res)=>{
    console.log("[TEST]!");
    res.send(users);
});




// post request when you want to create completely new  (POST) resquest [CREATE]
router.post("/",(req,res)=>{
    const user =  req.body;    // body (data object)

    // const userid = uuidv4();
    // const userWithId = { ...user,id: userid() }
    
    users.push({ ...user, id: uuidv4() });
    // console.log(user);

    res.send(`User with the name ${user.firstName} added to the database`);
});





// get a single user with id  to update or anything   [READ]
router.get("/:id", (req,res)=>{
    const { id } =  req.params // stores the id
    const foundUser = users.find((user) => user.id == id);
    // console.log(req.params)
    res.send(foundUser);
});




// delete user or delete request for single user   [DELETE]
router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id : ${id} is deleted from database`);
});



// patch request when you want to update or modify by something single change  [UPDATE]
router.patch('/:id',(req,res)=>{
    const {id} = req.params;  
    const {firstName,lastName,age}=req.body; // get data which is send on request

    const user =  users.find((user) => user.id == id);   // find user to be modified


    // modies
    if(firstName)  user.firstName = firstName; 
    if(lastName)  user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id: ${id} has been updated`);
});

// put requet when you want to completely change something [UPDATE]

export default router;
