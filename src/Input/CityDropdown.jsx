import React, { useState } from 'react';

const CityDropdown = ({onSelect}) => {
  const [selectedCity, setSelectedCity] = useState(""); 


  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onSelect(city);
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
        <option value="">Any City</option>
        {ontarioCities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
  
    </div>
  );
};

export default CityDropdown;