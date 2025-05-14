import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();


const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || "3306"),
  logging: process.env.NODE_ENV === "development" ? console.log : false,
});

export default sequelize;
