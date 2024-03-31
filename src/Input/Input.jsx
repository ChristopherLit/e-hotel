import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "./DateRangePicker";
import RoomCapacityDropdown from "./RoomCapacityDropdown";
import ChainTypeDropdown from "./ChainTypeDropdown";
import PriceSlider from "./PriceSlider";
import CityDropdown from "./CityDropdown";
import StarDropdown from "./StarDropdown";

function Input() {
  const [selectedFilters, setSelectedFilters] = useState({
    datePicker: "",
    roomCapacity: "",
    chainType: "",
    priceSlider: "",
    city: "",
    star: "",
  });

  const [hotelChainCount, setHotelChainCount] = useState(0);
  const [hotelCount, setHotelCount] = useState(0);
  const [roomCounts, setRoomCounts] = useState({
    "New York": 0,
    "Los Angeles": 0,
    "Chicago": 0,
    "Houston": 0,
    "Miami": 0
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/hotelchain/count")
      .then((response) => response.json())
      .then((data) => {
        setHotelChainCount(data[0].total_hotel_chains);
      });

    fetch("http://localhost:3000/api/hotel/count")
      .then((response) => response.json())
      .then((data) => {
        setHotelCount(data[0].total_hotels);
      });

    // Fetch room counts per area
    fetch("http://localhost:3000/api/roomCounts")
      .then((response) => response.json())
      .then((data) => {
        setRoomCounts(data);
      });
  }, []);

  const navigate = useNavigate();

  const handleSelect = (key, value) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const applyFilter = () => {
    if (!selectedFilters.datePicker || selectedFilters.datePicker === "") {
      alert("Please select a date range.");
    } else {
      navigate("/hotels", { state: { filters: selectedFilters } });
    }
  };

  return (
    <div>
      <h1>WELCOME TO E-HOTELS BOOKING SYSTEM</h1>
      <h2>CSI2132 GROUP 47</h2>
      <p>
        Discover our expansive network of hotels, we have <strong>{hotelCount} {" "}
        individual properties</strong> that comes together under the umbrella of{" "}
        <strong>{hotelChainCount} unique hotel chains.</strong> Each chain offers a distinct
        experience, from luxurious retreats to budget-friendly accommodations,
        ensuring that every traveler finds their perfect stay. Whether you're
        seeking a cozy boutique hotel or a renowned international brand, our
        diverse selection guarantees a memorable stay tailored to your
        preferences.
      </p>
      <h3>Number of Rooms per Area:</h3>
      {Object.entries(roomCounts).map(([area, count]) => (
        <p key={area}>{area}: {count}</p>
      ))}
      <DateRangePicker
        onSelect={(value) => handleSelect("datePicker", value)}
      />
      <RoomCapacityDropdown
        onSelect={(value) => handleSelect("roomCapacity", value)}
      />
      <ChainTypeDropdown
        onSelect={(value) => handleSelect("chainType", value)}
      />
      <PriceSlider onSelect={(value) => handleSelect("priceSlider", value)} />
      <CityDropdown onSelect={(value) => handleSelect("city", value)} />
      <StarDropdown onSelect={(value) => handleSelect("star", value)} />
      <button onClick={applyFilter}>Filter</button>
    </div>
  );
}

export default Input;
