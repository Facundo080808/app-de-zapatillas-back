import express from "express";
import db from "../db.mjs"
import shoes from "../shoes.mjs"
import { where } from "sequelize";





const{ users , items} = db;
const itemsRouter= express.Router();

export async function subir() {
    
    for (const shoe of shoes) {
        try {
              await items.create({
                brand:shoe.marca,
                model:shoe.modelo,
                img:shoe.extra,
                size:undefined,
                colors:undefined,
                price:shoe.precio
             })
        } catch (error) {
            console.error(error.message);
        }
    }

    
}

itemsRouter.post("/", async (req, res) => {
    const { brand, model, img, size, colors,price } = req.body;
    try {
        const response = await items.create({ brand, model, img, size, colors ,price});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el artículo', message: error.message });
    }
});


itemsRouter.get("/",async(req,res)=>{
    try {
        const response = await items.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
itemsRouter.get("/:id" , async (req,res)=>{
    try {
        const {id} = req.params;
        const response = await items.findOne({where:{id : id}})
        
        
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
itemsRouter.delete("/:id" ,async (req,res)=>{
    const {id} = req.params;
try {
    const response = await items.destroy({
        where:{id : id}
    })
    res.status(200).json(response);
} catch (error) {
    res.status(500).send(error.message)
}
});

itemsRouter.put("/:id", async (req,res)=>{
    const {id} = req.params;
    const itemgeted = await items.findByPk(id);
    const {brand,model,img,size,colors} = req.body;
    try {
        if (!itemgeted) {
            return res.status(404).json({ message: "Item not found" });
        }
        else{
            const response = await itemgeted.update({brand,model,img,size,colors});
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})


export default itemsRouter;