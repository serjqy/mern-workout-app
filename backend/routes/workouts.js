import express from "express";

const router = express.Router();

// Get All Workouts (localhost:8000/api/workouts)
router.get("/", (req, res) => {
  res.json({ mssg: "GET All Workouts" });
});

// Get Single Workout (localhost:8000/api/workouts/id)
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET Single Workout" });
});

// Create New Workout (localhost:8000/api/workouts)
router.post("/", (req, res) => {
  res.json({ mssg: "POST New Workout" });
});

// Delete a Workout (localhost:8000/api/workouts/id)
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE New Workout" });
});

// Update a Workout (localhost:8000/api/workouts/id)
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE New Workout" });
});

export default router;
