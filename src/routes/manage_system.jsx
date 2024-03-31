import React from 'react';
import { useNavigate } from 'react-router-dom';

function ManageSystem() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Manage System</h1>
      <button onClick={() => navigate('/edit_bookings')}>Edit Bookings</button>
    </div>
  );
}

export default ManageSystem;