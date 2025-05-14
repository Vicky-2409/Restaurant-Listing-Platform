import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

export interface RestaurantAttributes {
  id?: number;
  name: string;
  address: string;
  contact: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Restaurant
  extends Model<RestaurantAttributes>
  implements RestaurantAttributes
{
  public id!: number;
  public name!: string;
  public address!: string;
  public contact!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "restaurants",
  }
);

export default Restaurant;
