import app from "./app"; // Import the configured Express app from app.ts
import { config } from "./config"; // Import the configuration (e.g., port)

const { port } = config;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`); // Good for debugging
});
