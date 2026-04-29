import { useState } from "react";

function StudentRow({ index, student, onUpdateScore }) {
    const [inputScore, setInputScore] = useState(student.score);

    const isPassing = student.score >= 40;

    const handleUpdate = () => {
        if (inputScore === "" || isNaN(inputScore)) return;
        onUpdateScore(student.id, inputScore);
    };

    return (
        <tr>
            <td>{index}</td>
            <td>{student.name}</td>
            <td><strong>{student.score}</strong></td>
            <td>
                <span className={`badge ${isPassing ? "pass" : "fail"}`}>
                    {isPassing ? "Pass" : "Fail"}
                </span>
            </td>
            <td className="update-cell">
                <input
                    type="number"
                    value={inputScore}
                    min="0"
                    max="100"
                    onChange={(e) => setInputScore(e.target.value)}
                />
                <button className="btn-save" onClick={() => onUpdateScore(student.id, inputScore)}>
                    Save
                </button>
            </td>
        </tr>
    );
}

export default StudentRow;