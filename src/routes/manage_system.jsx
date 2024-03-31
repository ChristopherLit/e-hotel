import React from 'react';
import { useNavigate } from 'react-router-dom';

function ManageSystem() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Manage System</h1>
      <button onClick={() => navigate('/edit_bookings')}>Edit Bookings</button>
      <button onClick={() => navigate('/create_customer_account')}>Create Customer Account</button>
      <button onClick={() => navigate('/system_info')}>System Info</button>
    </div>
  );
}

export default ManageSystem;