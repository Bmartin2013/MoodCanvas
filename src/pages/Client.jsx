import React, { useState, useEffect } from "react";
import P5Sketch from "../sketches/P5Sketch";
import "./client.scss";
import EmotionCheckboxSection from "../components/EmotionCheckboxSection";
import { EMOTIONS } from "../sketches/constants/presets";
import SideBarLayout from "../components/BasicUiComponents/SideBarLayout/SideBarLayout";
import { ControlPanel } from "../components/ControlPanel";

const Client = () => {
  const [options, setOptions] = useState({
    emotions: [EMOTIONS[0]],
  });

  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    console.log(options);
  }, options);

  return (
    <SideBarLayout
      sidebar={<h2>Mood Canvas</h2>}
      mainContent={
        <>
          <h2>Jane Smith - {currentDate} </h2>
          <ControlPanel options={options} setOptions={setOptions} />
          <EmotionCheckboxSection options={options} setOptions={setOptions} />
          <P5Sketch key={JSON.stringify(options)} emotions={options.emotions} />
        </>
      }
    />
  );
};

export default Client;
