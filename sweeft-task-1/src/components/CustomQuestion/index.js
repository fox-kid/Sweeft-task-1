import Answers from "../Answers";
import styles from "./CustomQuestion.module.css";

function CustomQuestion(props) {
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
    <div className={styles.question_box}>
      <p>{props.value.question}</p>
      {answers.length &&
        answers.map((answer) => (
          <Answers key={answer} value={answer} name={props.value.question} />
        ))}
    </div>
  );
}

export default CustomQuestion;
