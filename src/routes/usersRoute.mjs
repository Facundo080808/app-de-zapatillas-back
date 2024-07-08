import express from "express";
import db from "../db.mjs"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


const {SECRET} = process.env;

const{ users , items} = db;
const usersRouter = express.Router();

usersRouter.get("/",async (req, res) => {
    try {
        const response = await users.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
usersRouter.post("/register", async(req , res)=>{
    try {
        const {name, email, password,admin} =req.body;
        const ifUser = await users.findOne({where:{email:email}});
        if (ifUser) {res.status(409).send("email ya registrado");}
        else{
            const hashed = bcrypt.hashSync(password,3)
            const response =await users.create({name,email,password:hashed,admin});
            return res.status(200).json(response); 
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
});


usersRouter.post("/login", async (req,res)=>{
    const {name, email, password} =req.body;
    try {
        const ifUser = await users.findOne({where:{email:email}});
        if (!ifUser) {res.status(409).send("email no registrado");}
        else{
            const validPass = await bcrypt.compare(password,ifUser.password);
            if (validPass) {
                const token = jwt.sign({name:ifUser.name,email:ifUser.email,admin:ifUser.admin},SECRET,{expiresIn:"1h"});
                const { password, ...publicUser } = ifUser.toJSON();
                res.cookie("access_token",token,{httpOnly:true,sameSite:"strict",maxAge: 1000 * 60 *60}).send(publicUser);
            }else{
                res.status(409).send("contrseña invalida")
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})

usersRouter.get("/protected" ,async(req, res)=>{
    const token = req.cookies.access_token;
    console.log(token);
    if (!token)return res.status(409).send("access denegated");
    try {
        const data = jwt.verify(token,SECRET);
        console.log(data);
      return  res.status(200).send(data);
    } catch (error) {
       return res.send(500).send(error.message)
    }
})

usersRouter.post("/logout",async (req, res)=>{
   return res.clearCookie("access_token").send("funciono eskide")
})
export default usersRouter;


