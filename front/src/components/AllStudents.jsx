import React from "react";
import { useContext } from "react";
import { CreateStudentContext, StudentsContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import "./allStudents.scss";
import { useEffect } from "react";

const AllStudents = () => {
  const navigate = useNavigate();

  const {
    students,
    setCurrentProfile,
    loading,
    setFetchNewStudent,
    fetchNewStudent,
  } = useContext(StudentsContext);
  const { createStudent } = useContext(CreateStudentContext);

  const clickHandler = (studentId) => {
    setCurrentProfile(students.filter((student) => student._id === studentId));
    navigate(`/${studentId}`);
  };
  useEffect(() => {
    if (createStudent || fetchNewStudent !== createStudent) {
      setFetchNewStudent(createStudent);
    }
  }, []);

  return (
    <>
      <section className="table">
        <h1> List of Students</h1>
        {loading ? (
          "Loading, please wait."
        ) : (
          <>
            <div className="table__header">
              <div className="table__item">Nr.</div>
              <div className="table__item">Name</div>
              <div className="table__item">Surname</div>
              <div className="table__item">Age </div>
              <div className="table__item">Address</div>
            </div>
            <div className="table__content">
              {students?.map((student, i) => (
                <div
                  className="table__data"
                  onClick={() => clickHandler(student._id)}
                  key={student._id}
                >
                  <span>{i + 1}</span>
                  <span>{student.name}</span>
                  <span>{student.surname}</span>
                  <span>{student.age}</span>
                  <span>{student.city}</span>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="table__button">
          <button onClick={() => navigate("/student/add")}>Add New</button>
        </div>
      </section>
    </>
  );
};

export default AllStudents;
