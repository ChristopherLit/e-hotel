// StarDropdown.js
import React, { useState } from 'react';

const StarDropdown = ({ onSelect }) => {
  const [selectedStars, setSelectedStars] = useState(""); 

  const handleStarChange = (event) => {
    const stars = event.target.value;
    setSelectedStars(stars);
    onSelect(stars); // Pass the selected value to the parent component
  };

  return (
    <div>
      <label htmlFor="stars">Filter by Stars:</label>
      <select id="stars" name="stars" value={selectedStars} onChange={handleStarChange}>
        <option value="any">All stars</option>
        <option value="1">1 Star and up</option>
        <option value="2">2 Stars and up</option>
        <option value="3">3 Stars and up</option>
        <option value="4">4 Stars and up</option>
        <option value="5">5 Stars and up</option>
      </select>
    </div>
  );
};

export default StarDropdown;
