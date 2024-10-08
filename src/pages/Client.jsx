import React, { useState, useEffect } from "react";
import P5Sketch from "../sketches/P5Sketch";
import { EMOTION_PRESET, EMOTIONS } from "../sketches/constants/presets";
import './Client.scss'

const DrawClient = () => {
  const [options, setOptions] = useState({
    emotions: ["CALM"],
  });

  const currentDate = new Date().toLocaleDateString();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "emotions") {
        setOptions((prevOptions) => {
          const newEmotions = checked
            ? [...prevOptions.emotions, value]
            : prevOptions.emotions.filter((emotion) => emotion !== value);
          return { ...prevOptions, emotions: newEmotions };
        });
      } else {
        setOptions((prevOptions) => ({
          ...prevOptions,
          [name]: checked,
        }));
      }
    } else {
      setOptions((prevOptions) => ({
        ...prevOptions,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    const selectedPresets = options.emotions.map(
      (emotion) => EMOTION_PRESET[emotion]
    );

    if (selectedPresets.length) {
      const mergedOptions = selectedPresets.reduce(
        (acc, preset) => ({
          ...acc,
          ...preset,
        }),
        {}
      );

      setOptions((prevOptions) => ({
        ...prevOptions,
        ...mergedOptions,
      }));
    }
  }, [options.emotions]);

  return (
    <div className="container">
      <div className="column compositions">
        <P5Sketch key={JSON.stringify(options)} emotions={options.emotions} />
      </div>
      <div className="column form">
        <h2>Jane Smith - {currentDate} </h2>
        <form>
          <fieldset>
            <legend>Emociones</legend>
            {EMOTIONS.map((emotion) => (
              <label key={emotion}>
                <input
                  type="checkbox"
                  name="emotions"
                  value={emotion}
                  onChange={handleChange}
                  checked={options.emotions.includes(emotion)}
                />
                {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
              </label>
            ))}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default DrawClient;
