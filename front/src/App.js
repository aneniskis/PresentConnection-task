import { Route, Routes } from "react-router-dom";
import AllStudents from "./components/AllStudents";
import OneStudent from "./components/OneStudent";
import { AddStudent } from "./components/AddStudent";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<AllStudents />}></Route>
        <Route path="/:id" element={<OneStudent />}></Route>
        <Route path="/student/add" element={<AddStudent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
