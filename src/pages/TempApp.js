import React, { useState } from "react";
import "../styles.css";

const TempApp = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 40) return;

    const newTemperature = temperatureValue + 1;

    setTemperatureValue(newTemperature);
    if (newTemperature >= 35 && newTemperature <= 40) {
      setTemperatureColor("hot");
    } else if (newTemperature >= 20 && newTemperature <= 34){
      setTemperatureColor("warm");
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;

    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if (newTemperature <= 19 && newTemperature >= 10) {
      setTemperatureColor("cold");
    } else if (newTemperature <=9){
      setTemperatureColor("freezing");
    }
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="start-button-container">
        <div className="start-button">
          <span>Start</span>
         </div>
      </div> {}
      <div className="button-container">
        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
  
};

export default TempApp;

