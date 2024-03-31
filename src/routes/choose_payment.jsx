import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ChoosePayment() {
  const location = useLocation();
  const { filters, hotel, rooms } = location.state;
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCreditCardChange = (event) => {
    const inputCreditCardNumber = event.target.value;
    setCreditCardNumber(inputCreditCardNumber);
  };

//   datePicker: "",
//   roomCapacity: "",
//   chainType: "",
//   priceSlider: "",
//   city: "",
//   star: "",
//   start_date, end_date, payment, credit_card, employee_ssn_sin, hotel_id, room_number 

const handlePaymentSubmit = async (event) => {
    event.preventDefault();
  
    let chain_id = filters.chainType === "" ? "any" : filters.chainType;
    let datePicker = filters.datePicker === "" ? "any" : filters.datePicker;
   
  
    // let startDate = "any";
    // let endDate = "any";
  
    // if (datePicker !== "any") {
    //   const [startStr, endStr] = datePicker.split(" - ");
    //   const [startDay, startMonth, startYear] = startStr.split("/");
    //   const [endDay, endMonth, endYear] = endStr.split("/");
    //   startDate = `${startYear}-${startMonth}-${startDay}`;
    //   endDate = `${endYear}-${endMonth}-${endDay}`;
    // }
  
    if (creditCardNumber.length !== 10) {
      setErrorMessage('Please input a valid 10-digit credit card number.');
    } else {
      try {
        // Send a POST request if the credit card number is valid
        const response = await fetch('http://localhost:3000/api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            start_date: startDate,
            end_date: endDate,
            payment: rooms.price,
            credit_card: creditCardNumber,
            employee_ssn_sin: filters.employeeSSN,
            hotel_id: chain_id,
            room_number: filters.roomNumber
          }),
        });
  
        if (response.ok) {
          // Payment successful, navigate to another page
          console.log("Success");
        } else {
          // Payment failed, display error message
          setErrorMessage('Payment failed. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle fetch error
        setErrorMessage('Payment failed due to an unexpected error.');
      }
    }
  };
  
  

  return (
    <div>
      <h1>Choose Payment</h1>
      <div>
        <h2>Applied Filters</h2>
        <p><strong>Hotel ID:</strong> {hotel.hotel_id !== undefined ? hotel.hotel_id : ''}</p>
        <p><strong>Price:</strong> {filters.priceSlider !== undefined ? filters.priceSlider : ''}</p>
        <p><strong>Capacity:</strong> {filters.roomCapacity !== undefined ? filters.roomCapacity : ''}</p>
      </div>
      <form onSubmit={handlePaymentSubmit}>
        <div>
          <label htmlFor="creditCardNumber">Credit Card Number:</label>
          <input
            type="text"
            id="creditCardNumber"
            value={creditCardNumber}
            onChange={handleCreditCardChange}
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default ChoosePayment;