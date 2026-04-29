import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter a student name.");
      return;
    }
    if (score === "" || isNaN(score) || score < 0 || score > 100) {
      setError("Please enter a valid score between 0 and 100.");
      return;
    }

    onAddStudent(name.trim(), score);
    setName("");
    setScore("");
    setError("");
  };

  return (
    <section className="form-section">
      <h2>Add New Student</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Ananya Verma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Score (0–100)</label>
          <input
            id="score"
            type="number"
            placeholder="e.g. 75"
            value={score}
            min="0"
            max="100"
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-add">
          + Add Student
        </button>
      </form>
    </section>
  );
}

export default AddStudentForm;