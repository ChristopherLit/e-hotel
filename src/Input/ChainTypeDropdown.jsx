import React, { useState, useEffect } from 'react';

const ChainTypeDropdown = ({onSelect}) => {
  const [type, setType] = useState("");
  const [chainIds, setChainIds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/ids')
      .then(response => response.json())
      .then(data => {
        const ids_names = data.map(item => [item.chain_id, item.name, item.office_address]);
        setChainIds(ids_names);
      });
  }, []);

  const handleChange = (e) => {
    const selectedType = parseInt(e.target.value);
    setType(selectedType);
    onSelect(selectedType);
  };

  return (
    <div>
      <label htmlFor="Chain Type">Hotel Chain:</label>
      <select id="type" value={type} onChange={handleChange}>
        <option value={"any"}>Any Hotel Chain</option>
        {chainIds.map(chain => (
          <option key={chain[0]} value={chain[0]}>{chain[1]}</option>
        ))}
      </select>
    </div>
  );
};

export default ChainTypeDropdown;