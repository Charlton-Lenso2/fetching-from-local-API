function StudentList({ students }) {
  return (
    <div>
      <h2>Students</h2>

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;
