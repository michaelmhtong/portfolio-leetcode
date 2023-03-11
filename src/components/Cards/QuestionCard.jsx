import React from "react";
import QuestionGroups from "../../data/QuestionGroup.json";

const QuestionCard = ({ questionId }) => {
  let questionData = null;
  // Loop through the values of QuestionGroups and search for the question data object that matches the ID
  for (const questions of Object.values(QuestionGroups)) {
    questionData = questions.find((item) => item.id === Number(questionId));

    if (questionData) {
      break;
    }
  }

  if (!questionData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        <a href={questionData.url}>{questionData.title} Timer</a>
      </h1>
      <p>Duration: {questionData.duration} minutes</p>
      <p>Difficulty: {questionData.difficulty}</p>
      <p>Topic: {questionData.topic}</p>
      <p>Routines: {questionData.routines.join(", ")}</p>
    </div>
  );
};

export default QuestionCard;
