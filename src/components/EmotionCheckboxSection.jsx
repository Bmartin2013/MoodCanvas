import React, { useEffect } from "react";
import { EMOTION_PRESET, EMOTIONS } from "../sketches/constants/presets";

const EmotionCheckboxSection = ({ options, setOptions }) => {
  const handleChange = (e) => {
    const { value, checked } = e.target;

    setOptions((prevOptions) => {
      const newEmotions = checked
        ? [...prevOptions.emotions, value]
        : prevOptions.emotions.filter((emotion) => emotion !== value);
      return { ...prevOptions, emotions: newEmotions };
    });
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
      <legend>Emotions</legend>
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
  );
};

export default EmotionCheckboxSection;