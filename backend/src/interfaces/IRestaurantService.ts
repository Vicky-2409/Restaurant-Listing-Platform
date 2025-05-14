import { RestaurantAttributes } from "../models/Restaurant";

export interface IRestaurantService {
  getAllRestaurants(): Promise<RestaurantAttributes[]>;
  getRestaurantById(id: number): Promise<RestaurantAttributes | null>;
  createRestaurant(
    data: Partial<RestaurantAttributes>
  ): Promise<RestaurantAttributes>;
  updateRestaurant(
    id: number,
    data: Partial<RestaurantAttributes>
  ): Promise<RestaurantAttributes | null>;
  deleteRestaurant(id: number): Promise<boolean>;
}
