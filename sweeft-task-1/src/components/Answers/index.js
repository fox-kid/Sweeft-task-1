import { useState } from "react";

function Answers(props) {
  const [chosen, setChosen] = useState([]);

  return (
    <div>
      <label htmlFor={props.value}> </label>
      <input
        type="radio"
        id={props.value}
        name={props.name}
        value={props.value}
        onChange={(e) => setChosen(e.target.value)}
        checked={chosen === props.value}
      />
      {props.value}
    </div>
  );
}

export default Answers;
