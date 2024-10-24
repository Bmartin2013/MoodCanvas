import React from "react";

export const ControlPanel = ({ options, setOptions }) => {
    const handleChange = (field, value) => {
      setOptions(prev => ({
        ...prev,
        [field]: value
      }));
    };

    return (
      <div>
        <details>
          <summary style={{ cursor: "pointer", fontSize: "1.2em", fontWeight: "bold" }}>
            Parametrizar Opciones
          </summary>
          <div style={{ padding: "10px", marginTop: "10px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
            <label>
              Animación:
              <input
                type="checkbox"
                checked={options.toggleAnimation}
                onChange={e => handleChange('toggleAnimation', e.target.checked)}
              />
            </label>
            <br />
            <label>
              Respiración:
              <input
                type="checkbox"
                checked={options.toggleBreath}
                onChange={e => handleChange('toggleBreath', e.target.checked)}
              />
            </label>
            <br />
            <label>
              Velocidad de Respiración:
              <select
                value={options.bspeed}
                onChange={e => handleChange('bspeed', e.target.value)}
              >
                <option value="SLOW">Lenta</option>
                <option value="MEDIUM">Media</option>
                <option value="FAST">Rápida</option>
              </select>
            </label>
            <br />
            <label>
              Velocidad de Animación:
              <select
                value={options.aSpeed}
                onChange={e => handleChange('aSpeed', e.target.value)}
              >
                <option value="SLOW">Lenta</option>
                <option value="DEFAULT">Normal</option>
                <option value="FAST">Rápida</option>
              </select>
            </label>
            <br />
            <label>
              Color de la Figura Interna:
              <input
                type="color"
                value={options.inrShapeColor}
                onChange={e => handleChange('inrShapeColor', e.target.value)}
              />
            </label>
            <br />
            <label>
              Color de la Figura Externa:
              <input
                type="color"
                value={options.extShapeColor}
                onChange={e => handleChange('extShapeColor', e.target.value)}
              />
            </label>
            <br />
            <label>
              Tamaño de la Figura Interna:
              <input
                type="range"
                min="100"
                max="500"
                value={options.inrShapeSize}
                onChange={e => handleChange('inrShapeSize', parseInt(e.target.value))}
              />
            </label>
          </div>
        </details>
      </div>
    );
  };