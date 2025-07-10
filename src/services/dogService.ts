import { eq } from "drizzle-orm";

import { db } from "@/drizzle/db";
import { dogsTable } from "@/drizzle/schema";
import type { CreateDogInput, Dog } from "@/types/dogs";

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

  async createDog(dogData: CreateDogInput): Promise<Dog> {
    // Drizzle's insert method returns an array of inserted rows when using .returning()
    const [insertedDog] = await db.insert(dogsTable).values(dogData).returning();

    if (!insertedDog) {
      throw new Error("Failed to create dog: No rows returned after insert.");
    }

    return insertedDog; // Return the first (and only) inserted dog
  }
}
