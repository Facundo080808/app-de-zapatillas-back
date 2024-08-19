import { DataTypes } from "sequelize";

export default (sequelize)=>{
    return sequelize.define("items",{
        id:{
            primaryKey:true,
            type:DataTypes.INTEGER,
            autoIncrement:true,
        },
        brand:{
            type:DataTypes.STRING,
            allowNull:false
        },
        model:{
            type:DataTypes.STRING,
            allowNull:false
        },
        img:{
            type:DataTypes.ARRAY(DataTypes.STRING(1000)),
            allowNull:false,
            defaultValue:[]
        },
        size:{
            type:DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull:false,
            defaultValue:[]
        },
        colors:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false,
            defaultValue:[]
        },
        price:{
         type:DataTypes.STRING,
         allowNull:false   
        },
        stock:{
            type:DataTypes.INTEGER,
            defaultValue:1,
        }
    })
}