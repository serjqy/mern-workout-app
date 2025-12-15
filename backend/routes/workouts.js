import express from "express";

import {
  createWorkout,
  getWorkout,
  getWorkouts,
} from "../controllers/WorkoutController.js";

const router = express.Router();

// Get All Workouts (localhost:8000/api/workouts)
router.get("/", getWorkouts);

// Get Single Workout (localhost:8000/api/workouts/id)
router.get("/:id", getWorkout);

// Create New Workout (localhost:8000/api/workouts)
router.post("/", createWorkout);

// Delete a Workout (localhost:8000/api/workouts/id)
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE New Workout" });
});

// Update a Workout (localhost:8000/api/workouts/id)
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE New Workout" });
});

export default router;
