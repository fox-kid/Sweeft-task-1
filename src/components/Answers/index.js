import { useState } from "react";

function Answers(props) {
  const [chosen, setChosen] = useState([]);
  return (
    <div>
      <input
        type="radio"
        id={props.value}
        name={props.name}
        value={props.value}
        onChange={(e) => setChosen(e.target.value)}
        checked={chosen === props.value}
      />
      <label htmlFor={props.value}>{props.value}</label>
    </div>
  );
}

export default Answers;
