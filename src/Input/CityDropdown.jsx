import React, { useState, useEffect } from 'react';

const CityDropdown = ({ onSelect }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/hotelCities')
      .then(response => response.json())
      .then(data => {
        console.log("Received data:", data);
        if (Array.isArray(data)) {
          const cities = data.map(item => {
            if (item.city) {
              return item.city.trim();
            } else {
              return null;
            }
          });
          setCities(cities.filter(city => city !== null));
        } else {
          setError('Invalid data format received');
        }
      })
      .catch(error => {
        setError('Error fetching hotel cities: ' + error.message);
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
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <select id="city" name="city" value={selectedCity} onChange={handleCityChange}>
          <option value="any">Any City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CityDropdown;
