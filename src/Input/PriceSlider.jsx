import React, { useState } from 'react';

const PriceSlider = () => {
  const [price, setPrice] = useState(50);


  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <label htmlFor="price">Price:</label>
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
      <p>Price: ${price}</p>
    </div>
  );
};

export default PriceSlider;