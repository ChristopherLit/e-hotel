import React, { useState } from 'react';

const RoomCapacityDropdown = () => {
  const [capacity, setCapacity] = useState(1);

  const handleChange = (e) => {
    setCapacity(parseInt(e.target.value));
  };

  return (
    <div>
      <label htmlFor="capacity">Room Capacity:</label>
      <select id="capacity" value={capacity} onChange={handleChange}>
        <option value={1}>Any Capacity</option>
        <option value={1}>1 Person</option>
        <option value={2}>2 People</option>
        <option value={3}>3 People</option>
        <option value={4}>4 People</option>
      </select>
    </div>
  );
};

export default RoomCapacityDropdown;