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

    // Get the input element by its id
const inputElement = document.getElementById('input');

// Extract the text from the input element
const text = inputElement.value;

// Now you can use the 'text' variable which contains the text from the input element
console.log(text);

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
