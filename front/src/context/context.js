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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const details = await axiosInstance.get("/api/students");
        setStudents(details.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [fetchNewStudent]);

  const value = {
    students,
    setFetchNewStudent,
    setCurrentProfile,
    currentProfile,
    loading,
    error,
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
      const newStudent = await axiosInstance.post(
        "/api/students",
        createStudent
      );
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
