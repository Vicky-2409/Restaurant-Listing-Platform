import axios from "axios";
import { Restaurant } from "../types/Restaurant";

const API_URL = "https://107.23.10.31/api/restaurants";

export const api = {
  getAllRestaurants: async (): Promise<Restaurant[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getRestaurantById: async (id: number): Promise<Restaurant> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  createRestaurant: async (
    restaurant: Omit<Restaurant, "id">
  ): Promise<Restaurant> => {
    const response = await axios.post(API_URL, restaurant);
    return response.data;
  },

  updateRestaurant: async (
    id: number,
    restaurant: Partial<Restaurant>
  ): Promise<Restaurant> => {
    const response = await axios.put(`${API_URL}/${id}`, restaurant);
    return response.data;
  },

  deleteRestaurant: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
