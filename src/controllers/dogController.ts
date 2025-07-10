import { NextFunction, Request, Response } from "express";

import { DogService } from "@/services/dogService";
import type { CreateDogInput } from "@/types/dogs";

const dogService = new DogService();

export class DogController {
  async getAllDogs(req: Request, res: Response): Promise<void> {
    // Mark as async
    try {
      const dogs = await dogService.getAllDogs(); // Await the service call
      res.json(dogs);
    } catch (error) {
      // Pass error to the global error handler
      res.status(500).json({ message: "Failed to fetch dogs." });
      // Or, if you want to use next(error) for the global error handler:
      // next(error);
    }
  }

  async getDogById(req: Request, res: Response): Promise<void> {
    // Mark as async
    try {
      const { id } = req.params;
      const matchingDog = await dogService.getDogById(id); // Await the service call

      if (matchingDog) {
        res.json(matchingDog);
      } else {
        res.status(404).json({ error: "Dog not found" });
      }
    } catch (error) {
      // Pass error to the global error handler
      res.status(500).json({ message: "Failed to fetch dog by ID." });
      // Or, if you want to use next(error) for the global error handler:
      // next(error);
    }
  }

  async createDog(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, breed } = req.body as CreateDogInput; // Type assertion for safety

      // Basic input validation
      if (!name || !breed) {
        res.status(400).json({ error: "Name and breed are required." });
        return; // Stop execution if validation fails
      }

      const newDog = await dogService.createDog({ name, breed });
      res.status(201).json(newDog); // 201 Created status code
    } catch (error) {
      next(error); // Pass error to global error handler
    }
  }
}
