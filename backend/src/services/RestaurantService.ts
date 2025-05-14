import { IRepository } from "../interfaces/IRepository";
import { RestaurantAttributes } from "../models/Restaurant";
import { IRestaurantService } from "../interfaces/IRestaurantService";

export class RestaurantService implements IRestaurantService {
  constructor(private readonly repository: IRepository<RestaurantAttributes>) {}

  async getAllRestaurants(): Promise<RestaurantAttributes[]> {
    return await this.repository.findAll();
  }

  async getRestaurantById(id: number): Promise<RestaurantAttributes | null> {
    return await this.repository.findById(id);
  }

  async createRestaurant(
    data: Partial<RestaurantAttributes>
  ): Promise<RestaurantAttributes> {
    return await this.repository.create(data);
  }

  async updateRestaurant(
    id: number,
    data: Partial<RestaurantAttributes>
  ): Promise<RestaurantAttributes | null> {
    return await this.repository.update(id, data);
  }

  async deleteRestaurant(id: number): Promise<boolean> {
    return await this.repository.delete(id);
  }
}
