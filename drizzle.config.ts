import "dotenv/config";
import { defineConfig } from "drizzle-kit";

import { config } from "./src/config";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dbCredentials: {
    url: config.dbUrl!,
  },
});
