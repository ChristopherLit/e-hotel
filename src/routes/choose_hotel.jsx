import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ChooseHotel() {
  const location = useLocation();
  const filters = location.state ? location.state.filters : {};
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      let chain_id = filters.chainType === "" ? "any" : filters.chainType;
      let address = filters.city === "" ? "any" : filters.city.trim();
      let rating = filters.star === "" ? "any" : filters.star;

      const response = await fetch(`http://localhost:3000/api/hotel/${chain_id}/${address}/${rating}`);
      const data = await response.json();
      setHotels(data);
    };

    fetchHotels();
  }, []);

  useEffect(() => {
    hotels.forEach(hotel => fetchAggregatedCapacity(hotel.hotel_id));
  }, [hotels]);

  const fetchAggregatedCapacity = async (hotelID) => {
    try {
      const response = await fetch('http://localhost:3000/api/aggregatedCapacity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hotel_id: hotelID }),
      });

      const data = await response.json();

      if (response.ok) {
        setHotels(prevHotels => prevHotels.map(hotel => {
          if (hotel.hotel_id === hotelID) {
            return { ...hotel, aggregatedCapacity: data.aggregatedCapacity };
          }
          return hotel;
        }));
      } else {
        console.error('Failed to fetch aggregated capacity for hotel', hotelID, ':', data.error);
      }
    } catch (error) {
      console.error('Error fetching aggregated capacity for hotel', hotelID, ':', error);
    }
  };

  const handleBookClick = (hotel) => {
    try {
      // Navigate to rooms page with filters, hotel data
      navigate('/rooms', { state: { filters: filters, hotel: hotel } });
    } catch (error) {
      console.error('Error handling book click:', error);
    }
  };

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
            <p><strong>Max rooms:</strong> {hotel.number_of_rooms}</p>
            <p><strong>Aggregated Capacity:</strong> {hotel.aggregatedCapacity ? hotel.aggregatedCapacity : 0}</p>
            <button onClick={() => handleBookClick(hotel)}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseHotel
