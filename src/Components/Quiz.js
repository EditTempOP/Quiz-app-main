import React, { useContext, useState } from "react";
import { QuizContext } from "../Helper/Context";
import { questions } from "../Helper/QuestionBank";
import "./Quiz.css";

const Quiz = () => {
  const { scoreState, setScoreState, setGameState, userAnswers, setUserAnswers } = useContext(QuizContext);

  const [currQues, setCurrQues] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    setUserAnswers([...userAnswers, optionChosen]);
    if (questions[currQues].answer === optionChosen) {
      setScoreState(scoreState + 1);
    }
    setOptionChosen("");
    setCurrQues(currQues + 1);
  };

  const finishQuiz = () => {
    setUserAnswers([...userAnswers, optionChosen]);
    if (questions[currQues].answer === optionChosen) {
      setScoreState(scoreState + 1);
    }
    setGameState("end");
  };

  return (
    <div>
      <h1 className="text-dark">{questions[currQues].question}</h1>
      <ul className="list-group">
        <li
          className="list-group-item"
          onClick={() => {
            setOptionChosen("A");
          }}
        >
          <span className="mx-3">
            {optionChosen === "A" && <i className="bi bi-check-circle-fill"></i>}
          </span>
          {questions[currQues].options.A}
        </li>
        <li className="list-group-item" onClick={() => setOptionChosen("B")}>
          <span className="mx-3">
            {optionChosen === "B" && <i className="bi bi-check-circle-fill"></i>}
          </span>
          {questions[currQues].options.B}
        </li>
        <li className="list-group-item" onClick={() => setOptionChosen("C")}>
          <span className="mx-3">
            {optionChosen === "C" && <i className="bi bi-check-circle-fill"></i>}
          </span>
          {questions[currQues].options.C}
        </li>
        <li className="list-group-item" onClick={() => setOptionChosen("D")}>
          <span className="mx-3">
            {optionChosen === "D" && <i className="bi bi-check-circle-fill"></i>}
          </span>
          {questions[currQues].options.D}
        </li>
      </ul>
      {currQues === questions.length - 1 ? (
        <button className="btn btn-lg btn-dark my-3" onClick={finishQuiz}>
          Finish <i className="bi bi-hand-thumbs-up-fill"></i>
        </button>
      ) : (
        <button className="btn btn-lg btn-dark my-3" onClick={nextQuestion}>
          Next Question <i className="bi bi-chevron-double-right"></i>
        </button>
      )}
    </div>
  );
};

export default Quiz;
