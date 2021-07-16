import { useEffect, useState } from "react";
import { getQuiz } from "../../api";
import { useAppContext } from "../../context";
import styles from "./Quiz.module.css";
import CustomQuestion from "../../components/CustomQuestion";
import Modal from "../../components/Modal";
import ROUTES from "../../config/routes";
import { Link } from "react-router-dom";
let count = 0;

function Quiz() {
  const { category, difficulty } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState([]);

  const [showModal, toggleModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    getQuiz({ category, difficulty })
      .then((data) => setQuiz(data.results))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  let correctAnswers = [];
  quiz.map((item) => correctAnswers.push(item.correct_answer));

  function handleSubmit(e) {
    e.preventDefault();
    toggleModal((prev) => !prev);

    const checkedAnswersList = document.querySelectorAll(
      "input[type=radio]:checked"
    );
    const checkedAnswersArray = [...checkedAnswersList];
    for (let i = 0; i < checkedAnswersArray.length; i++) {
      if (checkedAnswersArray[i].value == correctAnswers[i]) {
        count++;
      }
    }
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
          {showModal && (
            <Modal>
              <div className={styles.modal}>
                <div className={styles.modal_box}>
                  <p className={styles.modal_text}>
                    Congratulations on finishing the test! The number of
                    questions you got correct is: {count}.
                  </p>
                  <p className={styles.modal_text}>
                    You can take the quiz again.
                  </p>
                  <Link to={ROUTES.ROUTE_MAIN}>
                    <button className={styles.btn_primary}>Main page</button>
                  </Link>
                </div>
              </div>
            </Modal>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
