// Input.js
import React, { useState } from 'react';
import DatePicker from "./DatePicker"
import RoomCapacityDropdown from "./RoomCapacityDropdown"
import ChainTypeDropdown from "./ChainTypeDropdown"
import PriceSlider from "./PriceSlider"
import CityDropdown from "./CityDropdown"
import StarDropdown from "./StarDropdown"
import NumberOfRoomsPicker from "./NumberOfRoomsPicker"

function Input() {
  const [selectedFilters, setSelectedFilters] = useState({
    datePicker: "",
    roomCapacity: "",
    chainType: "",
    priceSlider: "",
    city: "",
    star: "",
    numberOfRooms: ""
  });

  const handleSelect = (key, value) => {
    setSelectedFilters(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const applyFilter = () => {
    const filtersArray = Object.values(selectedFilters);
    console.log("Selected Filters:", filtersArray);
  }

  return (
    <div>
      <DatePicker onSelect={(value) => handleSelect("datePicker", value)} />
      <RoomCapacityDropdown onSelect={(value) => handleSelect("roomCapacity", value)} />
      <ChainTypeDropdown onSelect={(value) => handleSelect("chainType", value)} />
      <PriceSlider onSelect={(value) => handleSelect("priceSlider", value)} />
      <CityDropdown onSelect={(value) => handleSelect("city", value)} />
      <StarDropdown onSelect={(value) => handleSelect("star", value)} />
      <NumberOfRoomsPicker onSelect={(value) => handleSelect("numberOfRooms", value)} />
      <button onClick={applyFilter}>Filter</button>
    </div>
  )
}

export default Input;
