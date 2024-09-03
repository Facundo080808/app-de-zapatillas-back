import express from 'express'
import db from "../db.mjs";



const {orders,users,items} = db;


export const ordersRouter = express.Router();

ordersRouter.get('/',async(req,res)=>{
    try {
        const response = await orders.findAll({
        include: [
        {
            model: users,
            attributes: { exclude: ['password'] } 
        },
        {
            model:items,
         
        }
]
        });
        res.status(200).send(response);
    } catch (error) {
        res.status(500).json({error});
    }
})

ordersRouter.post('/', async (req,res)=>{
    const {totalAmount,quantity,status,streetAddress,stateAddress,cityAddress,postalAddress,tel,description,usersId,itemsId} = req.body;
    try {
        const user = await users.findOne({where:{id:usersId}});
        if (!user) {
            return res.status(409).send('usuario no encontrado');
        }
        
        const response = await orders.create({totalAmount,quantity,status,streetAddress,stateAddress,cityAddress,postalAddress,tel,description,usersId});
        
        if (itemsId&&itemsId.length > 0) {
            const shoes = await items.findAll({
                where:{id:itemsId}
            })
        
            await response.addItems(shoes);
        }
        return res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

ordersRouter.put('/:id', async (req,res)=>{
    const {id} = req.params;
    const order = await orders.findOne({where :{id:id}});
    const {totalAmount,status,streetAddress,stateAddress,cityAddress,postalAddress,tel,description} = req.body;
    try {
        if (!order) {
            return res.status(409).send('no existe la orden')
        }
        const response = await order.update({totalAmount,status,stateAddress,streetAddress,cityAddress,postalAddress,tel,description})
        return res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

ordersRouter.get('/:id',async (req , res)=>{
    const {id} = req.params;
    try {
        const order = await orders.findOne({where :{id},
        include :[
            {
                model: users,
                attributes: { exclude: ['password'] } 
            },
            {
                model:items,
            }
        ]})
        if (!order) {
            return res.status(409).send('no existe la orden')
        }
        return res.status(200).json(order)
    } catch (error) {
        return res.status(500).json(error.message);
    }
})