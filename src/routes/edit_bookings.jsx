import React, { useState } from 'react';

function EditBookings() {
  const [customerSSN, setCustomerSSN] = useState('');
  const [hotelID, setHotelID] = useState('');
  const [roomID, setRoomID] = useState('');
  const [message, setMessage] = useState('');

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

      const data = await response.json();

      if (response.ok) {
        if (data.deleted) {
          setMessage('Booking successfully deleted!');
        } else {
          setMessage('Booking not found or already deleted.');
        }
      } else {
        setMessage('Failed to delete booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to delete booking due to an unexpected error.');
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
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditBookings;
