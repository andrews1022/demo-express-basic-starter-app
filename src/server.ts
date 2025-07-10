import app from "./app";
import { config } from "@/config";

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
  console.log(`Environment: ${config.nodeEnv || "development"}`); // Good for debugging
});
