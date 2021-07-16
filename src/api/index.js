import axios from "axios";

const QUIZ_URL = "https://opentdb.com/api.php?amount=10";

let token = axios
  .get("https://opentdb.com/api_token.php?command=request")
  .then((response) => response.data)
  .then((data) => (token = data.token));

async function getQuiz(props) {
  const response = await axios.get(
    `${QUIZ_URL}&category=${props.category}&difficulty=${props.difficulty}&token=${token}`
  );

  return response.data;
}

export { getQuiz };
