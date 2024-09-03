import { DataTypes } from "sequelize";

export default (sequelize)=>{
    return sequelize.define("orders",{
        id:{
            primaryKey:true,
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        totalAmount:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false
        },
        streetAddress:{
            type:DataTypes.STRING,
            allowNull:false
        },
        stateAddress:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cityAddress:{
            type:DataTypes.STRING,
            allowNull:false
        },
        postalAddress:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        tel:{
            type:DataTypes.BIGINT,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
}