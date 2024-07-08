
import dotenv from "dotenv"
//require('dotenv').config();
import { Sequelize} from 'sequelize';
import Users from "./models/users.mjs";
import Items from "./models/items.mjs"
//import fs from 'fs';
//import path from 'path"

dotenv.config();
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/zapatillas`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
Items(sequelize);
Users(sequelize);
const { users ,items} = sequelize.models;

export default {
  ...sequelize.models,
  conn: sequelize,      
};






































