import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

// Express App
const app = express();

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

// Listen for routes
app.listen(process.env.PORT, () => {
  "Server UP!";
});
