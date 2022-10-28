import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateStudentContext } from "../context/context";
import "./addStudent.scss";

export const AddStudent = () => {
  const navigate = useNavigate();
  const { setCreateStudent } = useContext(CreateStudentContext);
  const [student, setStudent] = useState({
    name: "",
    surname: "",
    age: "",
    city: "",
    gender: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.email) setCreateStudent(student);
    setStudent({
      name: "",
      surname: "",
      age: "",
      city: "",
      gender: "",
      email: "",
    });

    navigate("/");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <h1>Add new Student</h1>
        <div className="form__row">
          <div>
            <label>First Name</label>
            <input
              id="name"
              type="text"
              minLength={3}
              maxLength={15}
              value={student.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              id="surname"
              type="text"
              minLength={3}
              maxLength={15}
              value={student.surname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form__row">
          <div>
            <label>Email</label>
            <input
              id="email"
              type="email"
              minLength={8}
              maxLength={25}
              value={student.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>City</label>
            <input
              id="city"
              type="text"
              minLength={3}
              maxLength={15}
              value={student.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form__row">
          <div className="form__select">
            <label>Gender</label>
            <select
              id="gender"
              value={student.gender}
              onChange={handleChange}
              required
              className="form__row__select"
            >
              <option value="">-</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="3rd gender">3rd Gender</option>
            </select>
          </div>
          <div className="form__age">
            <label>Age</label>
            <input
              id="age"
              type="Number"
              value={student.age}
              onChange={handleChange}
              min={7}
              max={100}
              required
            />
          </div>
        </div>
        <div className="form__button">
          <button className="form__btn" onClick={() => navigate("/")}>
            Back
          </button>
          <button className="form__btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
