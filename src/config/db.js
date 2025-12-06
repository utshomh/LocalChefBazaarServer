import mongoose from "mongoose";

import { mongoURI } from "./env.js";
import logger from "../utils/logger.js";

const dbLogger = logger.child({ module: "db" });

mongoose
  .connect(mongoURI)
  .then(() => dbLogger.info("connected to database"))
  .catch((e) => dbLogger.error(e.message));

console.log("hello");
