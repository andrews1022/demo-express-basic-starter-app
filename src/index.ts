import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

const dogsData = [
  { id: 1, name: "Buddy", breed: "Golden Retriever" },
  { id: 2, name: "Max", breed: "Beagle" },
  { id: 3, name: "Bella", breed: "Bulldog" },
  { id: 4, name: "Lucy", breed: "Poodle" },
  { id: 5, name: "Charlie", breed: "Labrador" },
];

app.get("/api/dogs", (req: Request, res: Response) => {
  res.json(dogsData);
});

app.get("/api/dogs/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const matchingDog = dogsData.find((dog) => dog.id === Number(id));

  res.json(matchingDog || { error: "Dog not found" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
