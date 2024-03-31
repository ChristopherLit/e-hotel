import React, { useState, useEffect } from "react";

function SystemInfo() {
  const [totalRevenue, setTotalRevenue] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/revenue")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setTotalRevenue(data[0].total_revenue);
        } else {
          setTotalRevenue(0); // Set to 0 if no data is returned
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>System Info</h1>
      <p>Total revenue: {totalRevenue}</p>
    </div>
  );
}

export default SystemInfo;
