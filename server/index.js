import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentsRoute from "./routes/students.js";
import cors from "cors";
import path from "path";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

///middlewares
app.use(cors());

//middlewares
app.use(express.json());

app.use("/api/students", studentsRoute);

// / error handle middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 8000, () => {
  connect();
});
