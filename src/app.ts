import express, { Request, Response } from "express"; // Import NextFunction for error handling

import { errorHandler } from "./middlewares/errorHandler";
import { requestLogger } from "./middlewares/requestLogger";
import { dogRouter } from "./routes/dogRouter";

const app = express();

// --- Global Middleware ---
// 1. Request Logger (should be placed early to log all requests)
app.use(requestLogger);

// 2. Body Parser (essential for handling JSON in requests)
app.use(express.json());

// Example of a basic route (optional, but good for testing root API)
app.get("/api", (req: Request, res: Response) => {
  res.send("Hello, world from API root!");
});

// --- API Routes ---
// Mount specific route modules
app.use("/api/dogs", dogRouter);

// --- Error Handling Middleware ---
// This must be the LAST middleware mounted, after all routes and other middleware.
app.use(errorHandler);

export default app; // Export the configured Express application instance
