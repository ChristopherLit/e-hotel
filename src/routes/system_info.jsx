import React, { useState, useEffect } from 'react';

function SystemInfo() {
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/api/revenue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.totalRevenue)
        setTotalRevenue(data.totalRevenue);
      });
  }, []);

  return (
    <div>
      <h1>System Info</h1>
      <p>Total revenue: {totalRevenue}</p>
    </div>
  );
}

export default SystemInfo;

