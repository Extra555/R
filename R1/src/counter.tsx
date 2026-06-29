import { useState } from "react";
import ResetButton from "./reset-button";

export default function Counter() {
  const [mean, setMean] = useState(0);

  function plus() {
    setMean(mean + 1);
  }

  function minus() {
    setMean(mean - 1);
  }

  function RESETVALUE() {
    setMean(0);
  }

  return (
    <div>
      <div className="text-lg">
        Hello, lets count! Your value rn is {mean}.
      </div>

      <ul>
        <li>
          <button type="button" onClick={plus}>
            Прибавить
          </button>
        </li>

        <li>
          <button type="button" onClick={minus}>
            Отнять
          </button>
        </li>
      </ul>

      <ResetButton onClick={RESETVALUE} disabled={false} />
    </div>
  );
}