import dotenv from "dotenv";

dotenv.config();

interface Config {
  dbUrl: string;
  nodeEnv: string;
  port: number;
}

export const config: Config = {
  dbUrl: process.env.DB_URL || "",
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 4000,
};
