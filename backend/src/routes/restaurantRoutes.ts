import { Router } from "express";
import { RestaurantController } from "../controllers/RestaurantController";
import { RestaurantService } from "../services/RestaurantService";
import { RestaurantRepository } from "../repositories/RestaurantRepository";

const router = Router();

// Create instances with dependency injection
const repository = new RestaurantRepository();
const service = new RestaurantService(repository);
const controller = new RestaurantController(service);

router.get("/", controller.getAllRestaurants);
router.get("/:id", controller.getRestaurantById);
router.post("/", controller.createRestaurant);
router.put("/:id", controller.updateRestaurant);
router.delete("/:id", controller.deleteRestaurant);

export default router;
