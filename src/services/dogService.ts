import { Dog } from "../models/Dog";

const dogsData: Dog[] = [
  { id: "112ca4da", created_at: "2023-01-01T00:00:00Z", breed: "Golden Retriever", name: "Buddy" },
  { id: "19c8cbc4", created_at: "2023-01-02T00:00:00Z", breed: "Beagle", name: "Max" },
  { id: "21e4ec91", created_at: "2023-01-03T00:00:00Z", breed: "Bulldog", name: "Bella" },
  { id: "5b762bda", created_at: "2023-01-04T00:00:00Z", breed: "Poodle", name: "Lucy" },
  { id: "7b18e100", created_at: "2023-01-05T00:00:00Z", breed: "Labrador", name: "Charlie" },
];

export class DogService {
  getAllDogs(): Dog[] {
    return dogsData;
  }

  getDogById(id: string): Dog | undefined {
    return dogsData.find((dog) => dog.id === id);
  }

  // In a real application, you'd have methods like:
  // createDog(newDog: Dog): Dog
  // updateDog(id: number, updatedDog: Partial<Dog>): Dog
  // deleteDog(id: number): boolean
}
