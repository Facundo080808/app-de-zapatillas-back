import express from "express";
import db from "../db.mjs"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


const {SECRET} = process.env;

const{ users } = db;
const usersRouter = express.Router();
export async function createAdmin() {
    try {
        return await users.create({
        name:'julieta',
        email:'juli@admin.com',
        password:bcrypt.hashSync('12345678',3),
        admin:true
        
    })} catch (error) {
        console.error(error.message);
    }
}
usersRouter.get("/",async (req, res) => {
    try {
        const response = await users.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
usersRouter.post('/preferencia', (req,res)=>{
    res.status(200).send("hola" + req.body.title)
})
usersRouter.post("/register", async(req , res)=>{
    try {
        const {name, email, password,admin} =req.body;
        const ifUser = await users.findOne({where:{email:email}});
        if (ifUser) {return res.status(409).send("email ya registrado");}
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
        if (!ifUser) {return res.status(409).send("email no registrado");}
        else{
            const validPass = await bcrypt.compare(password,ifUser.password);
            if (validPass) {
                const token = jwt.sign({id :ifUser.id ,name:ifUser.name,email:ifUser.email,admin:ifUser.admin},SECRET,{expiresIn:"1h"});
                const { password, ...publicUser } = ifUser.toJSON();    
                return res.cookie("access_token",token,{httpOnly:true,sameSite:"strict",maxAge: 1000 * 60 *60}).send(publicUser);
            }else{
               return res.status(409).send("contrseña invalida")
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
       return res.status(500).send(error.message)
    }
})

usersRouter.post("/logout",async (req, res)=>{
   return res.clearCookie("access_token").send("Sesion cerrada")
})
export default usersRouter;


