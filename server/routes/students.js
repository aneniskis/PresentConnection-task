import express from "express";
import {
  getStudent,
  getAllStudents,
  createStudent,
} from "../controllers/student.js";

const router = express.Router();

///create
router.post("/", createStudent);

/// get/
router.get("/:id", getStudent);

///geet all
router.get("/", getAllStudents);

export default router;
