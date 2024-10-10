import React, { useState } from "react";
import P5Sketch from "../sketches/P5Sketch";
import "./client.scss";
import EmotionCheckboxSection from "../components/EmotionCheckboxSection";
import { EMOTIONS } from "../sketches/constants/presets";

const Client = () => {
  const [options, setOptions] = useState({
    emotions: [EMOTIONS[0]],
  });

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="container">
      <div className="column compositions">
        <P5Sketch key={JSON.stringify(options)} emotions={options.emotions} />
      </div>
      <div className="column form">
        <h2>Jane Smith - {currentDate} </h2>
        <form>
          <EmotionCheckboxSection options={options} setOptions={setOptions} />
        </form>
      </div>
    </div>
  );
};

export default Client;
