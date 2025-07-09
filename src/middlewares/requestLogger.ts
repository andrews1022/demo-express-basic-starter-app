import { Request, Response, NextFunction } from "express";

// Middleware to log incoming requests
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next(); // Don't forget to call next() to pass control to the next middleware/route handler
};
