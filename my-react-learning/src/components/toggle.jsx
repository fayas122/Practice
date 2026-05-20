import { useState } from "react";
import "./toggle.css";



function ToggleSwitch() {

  const [isOn, setIsOn] = useState(false);

  function toggleHandler() {
    setIsOn((prevState) => !prevState);
  }

  return (
    <div className="toggle">

      <h1>
        {isOn ? "ON" : "OFF"}
      </h1>

      <button onClick={toggleHandler} className="Btn">
        Toggle
      </button>

    </div>
  );
}

export default ToggleSwitch;