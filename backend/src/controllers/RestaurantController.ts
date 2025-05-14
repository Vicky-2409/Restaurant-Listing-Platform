import { Request, Response } from "express";
import { IRestaurantService } from "../interfaces/IRestaurantService";
import { IRestaurantController } from "../interfaces/IRestaurantController";

export class RestaurantController implements IRestaurantController {
  constructor(private readonly service: IRestaurantService) {}

  getAllRestaurants = async (_req: Request, res: Response): Promise<void> => {
    try {
      const restaurants = await this.service.getAllRestaurants();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: "Error fetching restaurants", error });
    }
  };

  getRestaurantById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const restaurant = await this.service.getRestaurantById(id);
      if (!restaurant) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: "Error fetching restaurant", error });
    }
  };

  createRestaurant = async (req: Request, res: Response): Promise<void> => {
    try {
      const restaurant = await this.service.createRestaurant(req.body);
      res.status(201).json(restaurant);
    } catch (error) {
      res.status(500).json({ message: "Error creating restaurant", error });
    }
  };

  updateRestaurant = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const restaurant = await this.service.updateRestaurant(id, req.body);
      if (!restaurant) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: "Error updating restaurant", error });
    }
  };

  deleteRestaurant = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const success = await this.service.deleteRestaurant(id);
      if (!success) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deleting restaurant", error });
    }
  };
}
