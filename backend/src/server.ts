import app from "./app";
import sequelize from "./config/database";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Get the database name from environment variables
    const dbName = process.env.DB_NAME || "restaurant_listing"; // Adjust if needed

    // Get the connection details (without specifying the database)
    const { username, password, host } = sequelize.config;

    // Create a temporary connection (without specifying the database)
    const tempSequelize = new Sequelize({
      dialect: "mysql",
      host: host || "localhost",
      username: username || "root",
      password: password || "",
      port: parseInt(process.env.DB_PORT || "3306"),
    });

    // Create the database if it does not exist
    await tempSequelize.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    console.log(`Database "${dbName}" is ready.`);

    // Close the temporary connection used to create the database
    await tempSequelize.close();

    // Now connect with the database
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    // Sync database models
    await sequelize.sync();
    console.log("Database models synchronized successfully.");

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
    process.exit(1);
  }
}

startServer();
