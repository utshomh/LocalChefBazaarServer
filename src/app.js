import cors from "cors";
import express from "express";

import globalErrorHandler from "./middlewares/errors.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/great/:name", (req, res) => {
  const { name } = req.params;
  if (name.length < 3) {
    return res.status(400).json({ message: `Invalid name ${name}` });
  }
  res.json({ message: `Hello, ${name}` });
});

app.all(/.*/, (req, res) => {
  return res
    .status(404)
    .json({ message: `Can't find ${req.originalUrl} on this server.` });
});

app.use(globalErrorHandler);

export default app;
