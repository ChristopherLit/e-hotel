import React, { useState } from 'react';

const CityDropdown = () => {
  const [selectedCity, setSelectedCity] = useState(""); 


  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

 
  const ontarioCities = [
    "Barrie",
    "Brampton",
    "Burlington",
    "Cambridge",
    "Guelph",
    "Hamilton",
    "Kingston",
    "Kitchener",
    "London",
    "Markham",
    "Mississauga",
    "Oakville",
    "Ottawa",
    "Richmond Hill",
    "Sudbury",
    "Thunder Bay",
    "Toronto",
    "Vaughan",
    "Waterloo",
    "Windsor"
  ];

  return (
    <div>
      <label htmlFor="city">Area Selector</label>
    
      <select id="city" name="city" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city...</option>
        {ontarioCities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
  
    </div>
  );
};

export default CityDropdown;