import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeHomepage() {
    const navigate = useNavigate();
  const handleBookForCustomer = () => {
    navigate('/input');
  };

  const handleEditManageSystem = () => {
    navigate('/manage_system');
  };

  return (
    <div>
      <h1>Employee Homepage</h1>
      <button onClick={handleBookForCustomer}>Book for Customer</button>
      <button onClick={handleEditManageSystem}>Edit/Manage System</button>
    </div>
  );
}

export default EmployeeHomepage;