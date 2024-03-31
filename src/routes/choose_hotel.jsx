import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ChooseHotel() {
  const location = useLocation();
  const filters = location.state ? location.state.filters : {};
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

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

  const handleBookClick = (hotel) => {
 
    console.log(`Book button clicked for hotel: ${hotel.name}`);
    navigate('/rooms', { state: { filters: filters, hotel: hotel } });

  }

  return (
    <div>
      <h1>Filter Results</h1>
      <div>
        <h2>Applied Filters</h2>
        <p><strong>Chain Type:</strong> {filters.chainType !== undefined ? filters.chainType : ''}</p>
        <p><strong>City:</strong> {filters.city !== undefined ? filters.city : ''}</p>
        <p><strong>Date:</strong> {filters.datePicker !== undefined ? filters.datePicker : ''}</p>
        <p><strong>Price Slider:</strong> {filters.priceSlider !== undefined ? filters.priceSlider : ''}</p>
        <p><strong>Room Capacity:</strong> {filters.roomCapacity !== undefined ? filters.roomCapacity : ''}</p>
        <p><strong>Star Rating:</strong> {filters.star !== undefined ? filters.star : ''}</p>
      </div>
      <div>
        <h2>Hotels</h2>
        {hotels.map((hotel, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
            <h3>{hotel.name}</h3>
            <p><strong>Address:</strong> {hotel.address}</p>
            <p><strong>Rating:</strong> {hotel.rating}</p>
            <p><strong>Number of Rooms:</strong> {hotel.number_of_rooms}</p>
            <button onClick={() => handleBookClick(hotel)}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ChooseHotel;