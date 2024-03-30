import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ChooseHotel() {
  const location = useLocation();
  const filters = location.state ? location.state.filters : {};
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    let chain_id = filters.chainType === "" ? "any" : filters.chainType;
    let address = filters.city === "" ? "any" : filters.city.trim();
    let rating = filters.star === "" ? "any" : filters.star;

    fetch(`http://localhost:3000/api/hotel/${chain_id}/${address}/${rating}`)
      .then(response => response.json())
      .then(data => {
        setHotels(data);
      });
  }, [filters]);

  return (
    <div>
      <h1>Filter Results</h1>
      <div>
        <h2>Applied Filters</h2>
        <p><strong>Chain Type:</strong> {filters.chainType}</p>
        <p><strong>City:</strong> {filters.city}</p>
        <p><strong>Star Rating:</strong> {filters.star}</p>
      </div>
      <div>
        <h2>Hotels</h2>
        <ul>
          {hotels.map((hotel, index) => (
            <li key={index}>
           <h3>{hotel.name}</h3>
            <p><strong>Address:</strong> {hotel.address}</p>
            <p><strong>Rating:</strong> {hotel.rating}</p>
            <p><strong>Number of Rooms:</strong> {hotel.number_of_rooms}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ChooseHotel;
