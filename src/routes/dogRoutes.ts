import { Router } from "express";
import { DogController } from "../controllers/dogController";

const dogRouter = Router();
const dogController = new DogController();

dogRouter.get("/", dogController.getAllDogs);
dogRouter.get("/:id", dogController.getDogById);

export { dogRouter };
