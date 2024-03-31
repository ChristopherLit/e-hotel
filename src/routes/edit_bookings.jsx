import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditBookings() {
  const [customerSSN, setCustomerSSN] = useState('');
  const [hotelID, setHotelID] = useState('');
  const [roomID, setRoomID] = useState('');

  const history = useHistory();

  const handleDeleteBooking = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_ssn: customerSSN,
          hotel_id: hotelID,
          room_number: roomID,
        }),
      });

      if (response.ok) {
        alert('Booking successfully deleted!');
        // Redirect to another page after successful deletion
        history.push('/');
      } else {
        alert('Failed to delete booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to delete booking due to an unexpected error.');
    }
  };

  return (
    <div>
      <h1>Edit Bookings</h1>
      <div>
        <label htmlFor="customerSSN">Customer SSN:</label>
        <input
          type="text"
          id="customerSSN"
          value={customerSSN}
          onChange={(e) => setCustomerSSN(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="hotelID">Hotel ID:</label>
        <input
          type="text"
          id="hotelID"
          value={hotelID}
          onChange={(e) => setHotelID(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="roomID">Room ID:</label>
        <input
          type="text"
          id="roomID"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
        />
      </div>
      <button onClick={handleDeleteBooking}>Delete Booking</button>
    </div>
  );
}

export default EditBookings;
