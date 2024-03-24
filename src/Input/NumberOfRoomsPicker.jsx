import React, { useState } from 'react';

const NumberOfRoomsPicker = ({ onSelect }) => {
  const [number, setNumber] = useState(0);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setNumber(value);
    onSelect(value);
  };

  return (
    <div>
      <label htmlFor="number">Number of Rooms:</label>
      <input
        type="range"
        id="number"
        name="number"
        min="0"
        max="300"
        value={number}
        onChange={handleSliderChange}
      />
      <p>Number: {number}</p>
    </div>
  );
};

export default NumberOfRoomsPicker;
