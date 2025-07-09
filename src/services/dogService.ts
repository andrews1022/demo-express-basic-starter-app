import { db } from "../drizzle/db";
import { dogsTable } from "../drizzle/schema";
import { eq } from "drizzle-orm";

import { Dog } from "../models/Dog";

export class DogService {
  async getAllDogs(): Promise<Dog[]> {
    // Select all columns from the 'dogs' table
    const dogs = await db.select().from(dogsTable);

    return dogs;
  }

  async getDogById(id: string): Promise<Dog | undefined> {
    // Select all columns from the 'dogs' table where id equals the given id
    const [matchingDog] = await db.select().from(dogsTable).where(eq(dogsTable.id, id));
    // Drizzle returns an array, so we take the first element if it exists
    return matchingDog;
  }
}
