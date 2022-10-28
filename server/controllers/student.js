import Student from "../models/Student.js";

export const createStudent = async (req, res, next) => {
  const newStudent = new Student(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json(savedStudent);
  } catch (err) {
    next(err);
  }
};

export const getStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};
export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    next(err);
  }
};
