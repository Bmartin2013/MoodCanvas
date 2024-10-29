import React, { useEffect } from "react";
import { EMOTION_PRESET, EMOTIONS } from "../sketches/constants/presets";

const EmotionCheckboxSection = ({ options, setOptions }) => {
  const handleChange = (e) => {
    const { value } = e.target;

    setOptions((prevOptions) => ({
      ...prevOptions,
      emotions: [value],
    }));
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
  }, [options.emotions, EMOTION_PRESET, setOptions]);

  return (
    <fieldset>
      <h4>Choose a base emotion</h4>
      {EMOTIONS.map((emotion) => (
        <label key={emotion}>
          <input
            type="radio"
            name="emotions"
            value={emotion}
            onChange={handleChange}
            checked={options.emotions.includes(emotion)}
          />
          {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
        </label>
      ))}
    </fieldset>
  );
};

export default EmotionCheckboxSection;
