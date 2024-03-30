import React, { useState } from 'react';

const PriceSlider = ({onSelect}) => {
  const [price, setPrice] = useState(0);


  const handleSliderChange = (event) => {
    setPrice(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="price">Max Price:</label>
      {/* Slider input element */}
      <input
        type="range"
        id="price"
        name="price"
        min="0"
        max="200"
        value={price}
        onChange={handleSliderChange}
      />
      {/* Display the current price */}
      <p>Max Price: ${price}</p>
    </div>
  );
};

export default PriceSlider;