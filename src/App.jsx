import { useEffect, useState } from "react";
import "./App.css";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

import { getStudents, addStudent } from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();

      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (student) => {
    try {
      await addStudent(student);

      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Student Manager</h1>

      <StudentForm onStudentAdded={handleAddStudent} />

      <StudentList students={students} />
    </div>
  );
}

export default App;
