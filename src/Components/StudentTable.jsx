import StudentRow from "./StudentRow";

function StudentTable({ students, onUpdateScore }) {
  return (
    <section className="table-section">
      <h2>Students</h2>
      {students.length === 0 ? (
        <p className="empty-msg">No students yet. Add one below!</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Update Score</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <StudentRow
                key={student.id}
                index={index + 1}
                student={student}
                onUpdateScore={onUpdateScore}
              />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default StudentTable;