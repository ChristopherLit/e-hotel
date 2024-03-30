import React, { useState, useEffect } from 'react';

const CityDropdown = ({onSelect}) => {
  const [selectedCity, setSelectedCity] = useState(""); 
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/ids')
      .then(response => response.json())
      .then(data => {
        const addresses = data.map(item => {
          let parts = item.office_address.split(",");
          return parts[1];
        });
        setCities(addresses);
      });
  }, []);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onSelect(city);
  };

  return (
    <div>
      <label htmlFor="city">Area Selector</label>
    
      <select id="city" name="city" value={selectedCity} onChange={handleCityChange}>
        <option value="">Any City</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>
  
    </div>
  );
};

export default CityDropdown;