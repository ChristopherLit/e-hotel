import React, { useState } from 'react';

const NumberOfRoomsPicker = ({onSelect}) => {
  const [number, setNumber] = useState(-1);


  const handleSliderChange = (event) => {
    setNumber(event.target.value);
    onSelect(number);
  };

  return (
    <div>
      <label htmlFor="number">Number of Rooms:</label>
    
      <input
        type="range"
        id="price"
        name="price"
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