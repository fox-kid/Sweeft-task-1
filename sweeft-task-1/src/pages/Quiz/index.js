import { useEffect, useState } from "react";
import { getQuiz } from "../../api";
import { useAppContext } from "../../context";

import CustomQuestion from "../../components/CustomQuestion";

function Quiz() {
  const { category, difficulty } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    setLoading(true);
    getQuiz({ category, difficulty })
      .then((data) => setQuiz(data.results))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error</h1>}
      {quiz.length && (
        <>
          <p>Select correct answer for each of the questions:</p>
          <form>
            {quiz.map((question) => (
              <CustomQuestion key={question.question} value={question} />
            ))}
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Quiz;
