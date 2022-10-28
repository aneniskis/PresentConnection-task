import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../baseUrl";

const INITIAL_STATE = {
  students: [],
  setFetchNewStudent: () => {},
  setCurrentProfile: () => {},
};

export const StudentsContext = createContext(INITIAL_STATE);

export const StudentsContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [fetchNewStudent, setFetchNewStudent] = useState(undefined);
  const [currentProfile, setCurrentProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const details = await axiosInstance.get("/students");
      setStudents(details.data);

      return details;
    };

    fetchData();
  }, [fetchNewStudent]);

  const value = {
    students,
    setFetchNewStudent,
    setCurrentProfile,
    currentProfile,
  };

  return (
    <StudentsContext.Provider value={value}>
      {children}
    </StudentsContext.Provider>
  );
};

const INITIAL_STUDENT = {
  createStudent: null,
  setCreateStudent: () => null,
};
export const CreateStudentContext = createContext(INITIAL_STUDENT);
export const CreateStudentContextProvider = ({ children }) => {
  const [createStudent, setCreateStudent] = useState(null);

  useEffect(() => {
    if (!createStudent) return;
    const add = async () => {
      const newStudent = await axiosInstance.post("/students", createStudent);
      return newStudent;
    };
    add();
  }, [createStudent]);

  const value = {
    createStudent,
    setCreateStudent,
  };
  return (
    <CreateStudentContext.Provider value={value}>
      {children}
    </CreateStudentContext.Provider>
  );
};
