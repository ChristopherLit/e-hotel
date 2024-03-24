import React, { useState } from 'react';

const ChainTypeDropdown = ({onSelect}) => {
  const [type, setType] = useState("");

  const handleChange = (e) => {
    const selectedType = parseInt(e.target.value);
    setType(selectedType);
    onSelect(selectedType);
  };

  return (
    <div>
      <label htmlFor="Chain Type">Company:</label>
      <select id="type" value={type} onChange={handleChange}>
        <option value={0}>Any Company</option>
        <option value={1}>Hotel Chain 1</option>
        <option value={2}>Hotel Chain 2</option>
        <option value={3}>Hotel Chain 3</option>
        <option value={4}>Hotel Chain 4</option>
        <option value={5}>Hotel Chain 5</option>
      </select>
    </div>
  );
};

export default ChainTypeDropdown;