// import { useState } from "react";

function CustomQuestion(props) {
  //   const [correct, setCorrect] = useState([]);

  //   const handleRadioChange = (e) => {
  //     setCorrect(e.target.value);
  //   };

  const answers = [];
  answers.push(props.value.correct_answer);
  props.value.incorrect_answers.map((incorrect_answer) =>
    answers.push(incorrect_answer)
  );

  // To randomize answers so the correct one doesn't always come first
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(answers);

  return (
    <div>
      <p>{props.value.question}</p>
      {answers.length &&
        answers.map((answer) => (
          <div key={answer}>
            {/* <label htmlFor={answer}> </label>
            <input
              type="radio"
              id={answer}
              name={answer}
              value={answer === props.value.correct_answer}
              onChange={handleRadioChange}
              checked={false}
            > */}
            {answer}
            {/* </input> */}
          </div>
        ))}
    </div>
  );
}

export default CustomQuestion;
