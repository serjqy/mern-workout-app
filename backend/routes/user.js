import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const router = express.Router();

// Login  Route
router.post("/login", loginUser);

// Register Route
router.post("/register", registerUser);

export default router;
