import React from "react";

export const ControlPanel = ({ options, setOptions }) => {
  const handleChange = (field, value) => {
    setOptions((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const rgbToHex = (rgbArray) =>
    `#${rgbArray.map((val) => val.toString(16).padStart(2, "0")).join("")}`;

  function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
  }

  return (
    <div>
      <details>
        <summary
          style={{ cursor: "pointer", fontSize: "1.2em", fontWeight: "bold" }}
        >
          Customize emotion
        </summary>
        <div
          style={{
            padding: "10px",
            marginTop: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <label>
            Animation:
            <input
              type="checkbox"
              checked={options.toggleAnimation}
              onChange={(e) =>
                handleChange("toggleAnimation", e.target.checked)
              }
            />
          </label>
          <br />
          <label>
            Breath:
            <input
              type="checkbox"
              checked={options.toggleBreath}
              onChange={(e) => handleChange("toggleBreath", e.target.checked)}
            />
          </label>
          <br />
          <label>
            Breath speed:
            <select
              value={options.bSpeed}
              onChange={(e) => handleChange("bSpeed", e.target.value)}
            >
              <option value="SLOW">slow</option>
              <option value="MEDIUM">normal</option>
              <option value="FAST">fast</option>
              <option value="MEDIUM_FAST">almost fast</option>
            </select>
          </label>
          <br />
          <label>
            Animation speed:
            <select
              value={options.aSpeed}
              onChange={(e) => handleChange("aSpeed", e.target.value)}
            >
              <option value="DEFAULT">slow</option>
              <option value="MEDIUM">normal</option>
              <option value="FAST">fast</option>
            </select>
          </label>
          <br />
          <label>
            Inner shape color
            <input
              type="color"
              value={rgbToHex(options.inrShapeColor)}
              onChange={(e) =>
                handleChange("inrShapeColor", hexToRgb(e.target.value))
              }
            />
          </label>
          <br />
          <label>
            External shape color
            <input
              type="color"
              value={rgbToHex(options.extShapeColor)}
              onChange={(e) =>
                handleChange("extShapeColor", hexToRgb(e.target.value))
              }
            />
          </label>
          <br />
          <label>
            Inner shape size
            <input
              type="range"
              min="100"
              max="500"
              value={options.inrShapeSize}
              onChange={(e) =>
                handleChange("inrShapeSize", parseInt(e.target.value))
              }
            />
          </label>
          <br />
          <label>
            External shape size
            <input
              type="range"
              min="100"
              max="500"
              value={options.extShapeColor}
              onChange={(e) =>
                handleChange("extShapeSize", parseInt(e.target.value))
              }
            />
          </label>
        </div>
      </details>
    </div>
  );
};
