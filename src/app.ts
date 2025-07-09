import express, { Request, Response, NextFunction } from "express"; // Import NextFunction for error handling
import { dogRouter } from "./routes/dogRoutes";

const app = express();

// --- Global Middleware ---
// For parsing JSON request bodies (important for POST/PUT requests)
app.use(express.json());

// --- Request Logging Middleware ---
// This middleware logs the HTTP method and URL of incoming requests
// Example of a custom middleware (optional)
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next(); // Don't forget to call next() to pass control to the next middleware/route handler
});

// --- API Routes ---
// Basic root API route
app.get("/api", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Mount dog-related routes under /api/dogs
// All routes defined in dogRoutes.ts will be prefixed with /api/dogs
app.use("/api/dogs", dogRouter);

// --- Error Handling Middleware ---
// This is a "catch-all" error handler. It should be the last middleware mounted.
// It must have 4 parameters: (err, req, res, next)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Global Error Handler:", err.stack); // Log the full error stack for debugging

  // Set a default status code (e.g., 500 Internal Server Error)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  // Send a user-friendly error response (avoid exposing sensitive error details in production)
  res.json({
    message: err.message,
    // In development, you might send the stack trace for debugging:
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
});

export default app; // Export the configured Express application instance
