import { Request, Response } from "express";
import { DogService } from "../services/dogService";

const dogService = new DogService();

export class DogController {
  getAllDogs(req: Request, res: Response): void {
    const dogs = dogService.getAllDogs();
    res.json(dogs);
  }

  getDogById(req: Request, res: Response): void {
    const { id } = req.params;
    const matchingDog = dogService.getDogById(id);

    if (matchingDog) {
      res.json(matchingDog);
    } else {
      // You might want a more sophisticated error handler here, e.g., from utils/responseHandler.ts
      res.status(404).json({ error: "Dog not found" });
    }
  }

  // In a real application, you'd have methods like:
  // createDog(req: Request, res: Response): void
  // updateDog(req: Request, res: Response): void
  // deleteDog(req: Request, res: Response): void
}
