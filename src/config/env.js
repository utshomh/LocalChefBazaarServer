import { configDotenv } from "dotenv";

configDotenv({ path: ".env.local" });

export const mongoURI = process.env.MONGO_URI;
export const port = process.env.PORT;
