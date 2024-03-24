import React, { useState } from 'react';

const ChainTypeDropdown = () => {
  const [type, setType] = useState("");

  const handleChange = (e) => {
    setType(parseInt(e.target.value));
  };

  return (
    <div>
      <label htmlFor="Chain Type">Room Capacity:</label>
      <select id="type" value={type} onChange={handleChange}>
        <option value={1}>Any Chain</option>
        <option value={1}>Hotel Chain 1</option>
        <option value={2}>Hotel Chain 2</option>
        <option value={3}>Hotel Chain 3</option>
        <option value={4}>Hotel Chain 4</option>
        <option value={4}>Hotel Chain 5</option>
      </select>
    </div>
  );
};

export default ChainTypeDropdown;