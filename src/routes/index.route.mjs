import { Router } from "express";
import usersRouter from "./usersRoute.mjs";
import itemsRouter from "./itemsRoute.mjs";
import {Preference , MercadoPagoConfig} from 'mercadopago';
import { ordersRouter } from "./orders.route.mjs";
const router = Router();



router.use("/users", usersRouter);
router.use("/items", itemsRouter);
router.use('/orders',ordersRouter )
router.post("/mercadopago", async(req,res)=>{
    try {
        
        const body = {
            items:[
                {title:req.body.title,
                quantity:Number(req.body.quantity),
                unit_price:Number(req.body.price),
                currency_id:'ARS'
                },
    
            ],
            back_urls:{
                success:'https://www.youtube.com/watch?v=TbKMSv2VBZM',
                failure:'https://www.youtube.com/watch?v=Gykudr8IAfc&t=1986s',
                pending:'https://www.youtube.com/watch?v=Gykudr8IAfc&t=1986s'
            },
            
        }
        const client = new MercadoPagoConfig({
            accessToken:"APP_USR-8043057108650995-081718-b20a2ac929f527402e5036bbf4402b98-1941790395"
        })
        const preference = new Preference(client)   ;
        const response =await preference.create({body});
      
        res.status(200).json({id:response.id,url:response.init_point}) 
    } catch (error) {
        res.status(500).send(error.message);
    }
    })


export default router;
