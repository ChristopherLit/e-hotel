import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ChooseHotel() {
  const location = useLocation();
  const filters = location.state ? location.state.filters : {};
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    let chain_id;
    if (filters.chainType === "")
        chain_id = "any";
    else
        chain_id = filters.chainType;

    let address;
    if (filters.city === "")
        address = "any";
    else
        address = filters.city.trim();

    let rating;
    if (filters.star === "")
        rating = "any";
    else
        rating = filters.star;
    
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
