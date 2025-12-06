import app from "./app.js";
import logger from "./utils/logger.js";
import { port } from "./config/env.js";

const serverLogger = logger.child({ module: "server" });

app.listen(port, () => serverLogger.info(`server is running on ${port}`));
