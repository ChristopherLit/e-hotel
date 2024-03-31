import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ChooseRoom() {
  const location = useLocation();
  const { state } = location;
  const filters = state ? state.filters : {};
  const hotel = state ? state.hotel : {};
  const [rooms, setRooms] = useState([]); // NOTE THAT THESE ARE THE ROOMS UNAVAILABLE/ALREADY BOOKED
  const navigate = useNavigate();
  const [parsedStartDate, setParsedStartDate] = useState("any");
  const [parsedEndDate, setParsedEndDate] = useState("any");
  const hotel_id = hotel.hotel_id; // Access hotel_id directly here

  useEffect(() => {
    const formatDate = (date) => {
      if (!date) return "any";
      const [day, month, year] = date
        .split("-")[0]
        .trim()
        .replaceAll("/", "-")
        .split("-");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    const validateParam = (param) => (param && !isNaN(param) ? param : "any");

    const capacity = validateParam(filters.roomCapacity);
    const price = validateParam(filters.priceSlider);
    const startDate = filters.datePicker
      ? formatDate(filters.datePicker.split("-")[0])
      : "any";
    const endDate = filters.datePicker
      ? formatDate(filters.datePicker.split("-")[1])
      : "any";
    setParsedStartDate(startDate);
    setParsedEndDate(endDate);

    // Fetch rooms based on the provided filters
    fetch(
      `http://localhost:3000/api/rooms/${hotel_id}/${price}/${capacity}/${parsedStartDate}/${parsedEndDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch rooms");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRooms(data);
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  }, []);

  const handleBookClick = (room) => {
    console.log("hotel ID: " + hotel_id); // Access hotel_id here
    navigate('/payment', { state: { filters: filters, hotel: hotel, room: room, startDate: parsedStartDate, endDate: parsedEndDate, hotel_id: hotel_id } });
  };

  return (
    <div>
      <h1>Filtered Rooms</h1>
      <div>
        <h2>Applied Filters</h2>
        <p>
          <strong>Hotel ID:</strong>{" "}
          {hotel.hotel_id !== undefined ? hotel.hotel_id : ""}
        </p>
        <p><strong>Price:</strong> {filters.priceSlider !== undefined ? filters.priceSlider : ''}</p>
        <p>
          <strong>Capacity:</strong>{" "}
          {filters.roomCapacity !== undefined ? filters.roomCapacity : ""}
        </p>
        <p>
          <strong>Booking Dates:</strong>{" "}
          {filters.datePicker !== undefined ? filters.datePicker : ""}
        </p>
      </div>
      <div>
        <h2>Rooms</h2>
        {rooms.map((room, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <h3>Room Number: {room.room_number}</h3>
            <p><strong>Price:</strong> {room.price}</p>
            <p>
              <strong>Capacity:</strong> {room.capacity}
            </p>
            <p>
              <strong>Sea View:</strong> {room.sea_view ? "Yes" : "No"}
            </p>
            <p>
              <strong>Mountain View:</strong>{" "}
              {room.mountain_view ? "Yes" : "No"}
            </p>
            <p>
              <strong>Expandable Bed:</strong>{" "}
              {room.expandable_bed ? "Yes" : "No"}
            </p>
            <button onClick={() => {
                handleBookClick(room);
            }}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseRoom;
