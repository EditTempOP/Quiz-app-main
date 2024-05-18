import React, { useContext } from "react";
import { QuizContext } from "../Helper/Context";

const EndScreen = () => {
  const { scoreState, questions, userAnswers, setGameState, setScoreState, setUserAnswers } = useContext(QuizContext);

  const restartQuiz = () => {
    setScoreState(0);
    setUserAnswers([]);
    setGameState("menu");
  };

  return (
    <div className="text-center">
      <h1 className="text-dark">Quiz Finished</h1>
      <h2 className="text-primary">Your Score: {scoreState} / {questions.length}</h2>
      <ul className="list-group">
        {questions.map((question, index) => (
          <li key={index} className="list-group-item">
            <h5>{question.question}</h5>
            <p>Correct Answer: {question.options[question.answer]}</p>
            <p>Your Answer: {question.options[userAnswers[index]]}</p>
          </li>
        ))}
      </ul>
      <button className="btn btn-lg btn-warning my-3" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
