import { useState } from "react";

function StudentForm({ onStudentAdded }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !course) {
      alert("Please fill in all fields");
      return;
    }

    const newStudent = {
      name,
      course,
    };

    await onStudentAdded(newStudent);

    setName("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(event) => setCourse(event.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
