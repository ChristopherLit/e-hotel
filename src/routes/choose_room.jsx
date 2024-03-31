import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ChooseRoom() {
  const location = useLocation();
  const filters = location.state ? location.state.filters : {};
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const { hotel_id, price, capacity, startDate, endDate } = filters;

    // Check if all necessary filters are defined
    if (hotel_id !== undefined && price !== undefined && capacity !== undefined && startDate !== undefined && endDate !== undefined) {
      // Fetch rooms based on the provided filters
      fetch(`http://localhost:3000/api/rooms/${hotel_id}/${price}/${capacity}/${startDate}/${endDate}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch rooms');
          }
          return response.json();
        })
        .then(data => {
          setRooms(data);
        })
        .catch(error => {
          console.error('Error fetching rooms:', error);
        });
    }
  }, [filters]);

  const handleBookClick = (room) => {
    console.log(`Book button clicked for room: ${room.name}`);
  };

  return (
    <div>
      <h1>Filtered Rooms</h1>
      <div>
        <h2>Applied Filters</h2>
        <p><strong>Hotel ID:</strong> {filters.hotel_id !== undefined ? filters.hotel_id : ''}</p>
        <p><strong>Price:</strong> {filters.price !== undefined ? filters.price : ''}</p>
        <p><strong>Capacity:</strong> {filters.capacity !== undefined ? filters.capacity : ''}</p>
      </div>
      <div>
        <h2>Rooms</h2>
        {rooms.map((room, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
            <h3>Room Number: {room.room_number}</h3>
            <p><strong>Price:</strong> {room.price}</p>
            <p><strong>Capacity:</strong> {room.capacity}</p>
            <p><strong>Sea View:</strong> {room.sea_view ? 'Yes' : 'No'}</p>
            <p><strong>Mountain View:</strong> {room.mountain_view ? 'Yes' : 'No'}</p>
            <p><strong>Expandable Bed:</strong> {room.expandable_bed ? 'Yes' : 'No'}</p>
            <button onClick={() => handleBookClick(room)}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseRoom;
