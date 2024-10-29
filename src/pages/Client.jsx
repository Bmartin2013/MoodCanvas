import React, { useState, useEffect } from "react";
import P5Sketch from "../sketches/P5Sketch";
import "./client.scss";
import EmotionCheckboxSection from "../components/EmotionCheckboxSection";
import { EMOTION_PRESET, EMOTIONS } from "../sketches/constants/presets";
import SideBarLayout from "../components/BasicUiComponents/SideBarLayout/SideBarLayout";
import { ControlPanel } from "../components/ControlPanel";

const Client = () => {
  const [options, setOptions] = useState({
    emotions: [EMOTIONS[0]],
    ...EMOTION_PRESET[EMOTIONS[0]],
    title: EMOTIONS[0]
  });

  const currentDate = new Date().toLocaleDateString();
  const title = `${options.title} - ${currentDate}`
  const [isGifSaved, setIsGifSaved] = useState(false)

  return (
    <SideBarLayout
      sidebar={
        <div>
          <h2>Mood Canvas</h2>
          <ControlPanel options={options} setOptions={setOptions} />
          <button style={{background:"transparent", border: "1px solid white", fontWeight: 'bold', color: 'white', marginTop: '10px', padding:'10px'}} onClick={() => setIsGifSaved(true)}>Download Gif</button>
        </div>
      }
      mainContent={
        <>
          <h2>{title}</h2>
          <EmotionCheckboxSection options={options} setOptions={setOptions} />
          <P5Sketch
            key={JSON.stringify(options)}
            emotions={options.emotions}
            options={options}
            isGifSaved={isGifSaved}
            setIsGifSaved={setIsGifSaved}
            sketchName={title}
          />
        </>
      }
    />
  );
};

export default Client;
