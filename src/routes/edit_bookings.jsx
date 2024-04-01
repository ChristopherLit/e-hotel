import React, { useState } from 'react';

function EditBookings() {
  const [bookingID, setBookingID] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteBooking = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/delete/${bookingID}`, {
        method: 'DELETE',
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
        <label htmlFor="bookingID">Booking ID:</label>
        <input
          type="text"
          id="bookingID"
          value={bookingID}
          onChange={(e) => setBookingID(e.target.value)}
        />
      </div>
      <button onClick={handleDeleteBooking}>Delete Booking</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditBookings;
