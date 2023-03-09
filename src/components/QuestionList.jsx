import React from "react";
import QuestionGroups from "../data/QuestionGroup.json";
import AddProgressButton from "./Button/AddProgressButton";

function DifficultyLabel({ difficulty }) {
  return (
    <span
      style={{
        fontWeight: 600,
        color: {
          Easy: "rgb(0, 184, 163)",
          Medium: "rgb(255, 192, 30)",
          Hard: "rgb(255, 55, 95)",
        }[difficulty],
      }}
    >
      {difficulty}
    </span>
  );
}

const QuestionList = () => {
  return (
    <div className="padding-vert--lg">
      {Object.entries(QuestionGroups).map(([sectionTitle, questions], index) => (
        <div className="margin-bottom--lg" key={sectionTitle}>
          <h4>Week {index + 1}</h4>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Problem</th>
                <th>Difficulty</th>
                <th>Duration</th>
                <th>Add</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.slug}>
                  <td>{question.id}</td>
                  <td>
                    <a href={question.url} target="_blank" rel="noopener noreferer">
                      {question.title}
                    </a>
                  </td>
                  <td>
                    <DifficultyLabel difficulty={question.difficulty} />
                  </td>
                  <td>{question.duration} mins</td>
                  <td>
                    <AddProgressButton question={question} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
