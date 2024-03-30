import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ChooseHotel() {
  const location = useLocation();
  const filters = location.state ? location.state.filters : {};
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const chain_id = filters.chainType;
    const address = filters.city.trim(); // Remove any leading or trailing spaces
    const rating = filters.star;
    fetch(`http://localhost:3000/api/hotel/${chain_id}/${address}/${rating}`)
      .then(response => response.json())
      .then(data => {
        setHotels(data);
      });
  }, [filters]);

  return (
    <div>
      <h1>Filter Results</h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
        <h2>Hotels</h2>
      <pre>{JSON.stringify(hotels, null, 2)}</pre>
    </div>
  );
}

export default ChooseHotel;
