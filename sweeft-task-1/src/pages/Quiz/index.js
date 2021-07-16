import { useEffect, useState } from "react";
import { getQuiz } from "../../api";
import { useAppContext } from "../../context";
import styles from "./Quiz.module.css";
import CustomQuestion from "../../components/CustomQuestion";

function Quiz() {
  const { category, difficulty } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState([]);
  let count = 0;

  useEffect(() => {
    setLoading(true);
    getQuiz({ category, difficulty })
      .then((data) => setQuiz(data.results))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  let correctAnswers = [];
  quiz.map((item) => correctAnswers.push(item.correct_answer));
  console.log(correctAnswers);

  function handleSubmit(e) {
    e.preventDefault();
    const checkedAnswersList = document.querySelectorAll(
      "input[type=radio]:checked"
    );
    const checkedAnswersArray = [...checkedAnswersList];
    console.log(checkedAnswersArray);
    for (let i = 0; i < checkedAnswersArray.length; i++) {
      if (checkedAnswersArray[i].value == correctAnswers[i]) {
        count++;
      }
    }
    console.log(count);
  }

  return (
    <div className={styles.container}>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error</h1>}
      {quiz.length && (
        <>
          <p>Select correct answer for each of the questions:</p>
          <form>
            {quiz.map((question) => (
              <CustomQuestion key={question.question} value={question} />
            ))}
            <p>Please answer all the questions before submitting.</p>
            <button
              className={styles.btn_primary}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Quiz;
