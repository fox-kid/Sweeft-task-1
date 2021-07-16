import { Link } from "react-router-dom";
import ROUTES from "../../config/routes";
import styles from "./Main.module.css";
import { useAppContext } from "../../context";

function Main() {
  const { setCategory, setDifficulty } = useAppContext();

  function handleSubmit() {
    const category = document.getElementById("category");
    const difficulty = document.getElementById("difficulty");
    setCategory(category.value);
    setDifficulty(difficulty.value);
  }

  return (
    <main className={styles.container}>
      <p>
        Welcome to your quiz app. Please choose the options of the quiz below.
      </p>
      <form className={styles.form}>
        <label htmlFor="category">Select Category:</label>
        <select name="category" id="category">
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Board Games</option>
          <option value="16">Entertainment: Video Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
        <label htmlFor="difficulty">Select Difficulty:</label>
        <select name="difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <Link to={ROUTES.ROUTE_QUIZ}>
          <button
            type="button"
            className={styles.btn_primary}
            onClick={handleSubmit}
          >
            Take Quiz
          </button>
        </Link>
      </form>
    </main>
  );
}

export default Main;
