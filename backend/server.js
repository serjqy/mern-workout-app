import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import workoutRoutes from "./routes/workouts.js";
import userRoutes from "./routes/user.js";

dotenv.config(); // Load .env variables

// Express App
const app = express();

// Allow access to req.body (e.g. passed data)
app.use(express.json());

// Simple Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);

app.use("/api/user", userRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests (only after we're connected to DB)
    app.listen(process.env.PORT, () => {
      console.log("DB Connected & Server on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
