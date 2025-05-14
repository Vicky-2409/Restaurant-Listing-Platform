import { Request, Response } from "express";

export interface IRestaurantController {
  getAllRestaurants(req: Request, res: Response): Promise<void>;
  getRestaurantById(req: Request, res: Response): Promise<void>;
  createRestaurant(req: Request, res: Response): Promise<void>;
  updateRestaurant(req: Request, res: Response): Promise<void>;
  deleteRestaurant(req: Request, res: Response): Promise<void>;
}
