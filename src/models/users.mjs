import { DataTypes } from "sequelize";

export default (sequelize)=>{
    return sequelize.define("users",{
        id:{
            primaryKey:true,
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true 
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        admin:{
            type:DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull:false
        }
    })
}