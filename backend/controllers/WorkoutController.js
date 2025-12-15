import mongoose from "mongoose";
import Workout from "../models/WorkoutModel.js";

// Get All Workouts
export const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// Get Single Workout
export const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Workout Found" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No Workout found" });
  }

  res.status(200).json(workout);
};

// Create New Workout
export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  // Add document to DB
  try {
    const workout = await Workout.create({
      title,
      reps,
      load,
    });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// Delete a Workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Workout Found" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No Workout found" });
  }

  res.status(200).json(workout);
};

// Update a Workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Workout Found" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "No Workout found" });
  }

  res.status(200).json(workout);
};
