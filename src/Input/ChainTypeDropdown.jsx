import React, { useState, useEffect } from 'react';

const ChainTypeDropdown = ({onSelect}) => {
  const [type, setType] = useState("");
  const [chainIds, setChainIds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/ids')
      .then(response => response.json())
      .then(data => {
        const ids = data.map(item => item.chain_id);
        setChainIds(ids);
      });
  }, []);

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
        {chainIds.map(id => (
          <option key={id} value={id}>Hotel Chain {id}</option>
        ))}
      </select>
    </div>
  );
};

export default ChainTypeDropdown;