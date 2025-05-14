import { IRepository } from "../interfaces/IRepository";
import Restaurant, { RestaurantAttributes } from "../models/Restaurant";

export class RestaurantRepository implements IRepository<RestaurantAttributes> {
  async findAll(): Promise<RestaurantAttributes[]> {
    return await Restaurant.findAll();
  }

  async findById(id: number): Promise<RestaurantAttributes | null> {
    return await Restaurant.findByPk(id);
  }

  async create(
    data: Partial<RestaurantAttributes>
  ): Promise<RestaurantAttributes> {
    if (!data.name || !data.address || !data.contact) {
      throw new Error("Missing required fields");
    }
    return await Restaurant.create(data as RestaurantAttributes);
  }

  async update(
    id: number,
    data: Partial<RestaurantAttributes>
  ): Promise<RestaurantAttributes | null> {
    const restaurant = await Restaurant.findByPk(id);
    if (!restaurant) return null;
    return await restaurant.update(data);
  }

  async delete(id: number): Promise<boolean> {
    const deleted = await Restaurant.destroy({
      where: { id },
    });
    return deleted > 0;
  }
}
