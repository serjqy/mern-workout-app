import User from "../models/userModel.js";

// Login User
export const loginUser = async (req, res) => {
  res.json({ mssg: "Login User" });
};

// Register User

export const registerUser = async (req, res) => {
  res.json({ mssg: "Register User" });
};
