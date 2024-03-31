// Input.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateRangePicker from "./DateRangePicker"
import RoomCapacityDropdown from "./RoomCapacityDropdown"
import ChainTypeDropdown from "./ChainTypeDropdown"
import PriceSlider from "./PriceSlider"
import CityDropdown from "./CityDropdown"
import StarDropdown from "./StarDropdown"
// import NumberOfRoomsPicker from "./NumberOfRoomsPicker"

function Input() {
  const [selectedFilters, setSelectedFilters] = useState({
    datePicker: "",
    roomCapacity: "",
    chainType: "",
    priceSlider: "",
    city: "",
    star: "",
    //numberOfRooms: "",
  });

  const navigate = useNavigate();

  const handleSelect = (key, value) => {
    setSelectedFilters(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const applyFilter = () => {

    if (!selectedFilters.datePicker || selectedFilters.datePicker === "") {
      alert("Please select a date range.");
      
    } else {

      navigate('/hotels', { state: { filters: selectedFilters } });
    }
    
  }

  return (
    <div>
      <DateRangePicker onSelect={(value) => handleSelect("datePicker", value)} />
      <RoomCapacityDropdown onSelect={(value) => handleSelect("roomCapacity", value)} />
      <ChainTypeDropdown onSelect={(value) => handleSelect("chainType", value)} />
      <PriceSlider onSelect={(value) => handleSelect("priceSlider", value)} />
      <CityDropdown onSelect={(value) => handleSelect("city", value)} />
      <StarDropdown onSelect={(value) => handleSelect("star", value)} />
      {/* <NumberOfRoomsPicker onSelect={(value) => handleSelect("numberOfRooms", value)} /> */}
      <button onClick={applyFilter}>Filter</button>
    </div>
  )
}

export default Input;
