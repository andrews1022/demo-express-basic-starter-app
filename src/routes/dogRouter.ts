import { Router } from "express";

import { DogController } from "../controllers/dogController";

const dogRouter = Router();
const dogController = new DogController();

dogRouter.get("/", dogController.getAllDogs);
dogRouter.post("/", dogController.createDog);
dogRouter.get("/:id", dogController.getDogById);

export { dogRouter };
