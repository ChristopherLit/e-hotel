import React, { useState, useEffect } from 'react';

function SystemInfo() {
  const [totalRevenue, setTotalRevenue] = useState(null);

  useEffect(() => {
    async function getTotalRevenue() {
      try {
        const response = await fetch('http://localhost:3000/api/revenue', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        
          body: JSON.stringify({
        
          }),
        });

        if (response.ok) {
          const data = await response.json();
       
          console.log('Total revenue:', data.totalrevenue);
          setTotalRevenue(data.totalRevenue);
        } else {
          // Handle errors if the request was not successful
          console.error('Failed to fetch total revenue:', response.statusText);
        }
      } catch (error) {
        // Handle fetch errors
        console.error('Error fetching total revenue:', error);
      }
    }

    getTotalRevenue();
  }, []);

  return (
    <div>
      <h1>System Info</h1>
      <p>Total revenue: {totalRevenue}</p>
    
    </div>
  );
}

export default SystemInfo;
