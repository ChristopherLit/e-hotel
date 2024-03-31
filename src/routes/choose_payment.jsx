import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCustomerSSN, setCustomerSSN, setEmployeeSSN } from '../Input/globalSSN';

function ChoosePayment() {
  const location = useLocation();
  const { state } = location;
  const { room, startDate, endDate, filters, hotel_id } = state;

  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [customerSSNInput, setCustomerSSNInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [totalCost, setTotalCost] = useState(null); // State to hold the total cost
  const navigate = useNavigate();

  useEffect(() => {
    if (startDate && endDate && room && room.price) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDifference = end.getTime() - start.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Calculate the number of days
      const totalCost = daysDifference * room.price; // Calculate the total cost
      setTotalCost(totalCost); // Update the state with the total cost
    }
  }, [startDate, endDate, room]);

  const handleCreditCardChange = (event) => {
    const inputCreditCardNumber = event.target.value;
    setCreditCardNumber(inputCreditCardNumber);
  };

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();

    if (creditCardNumber.length !== 10) {
      setErrorMessage('Please input a valid 10-digit credit card number.');
    } else if (customerSSNInput.trim() === '') {
      setErrorMessage('Please input your customer SSN.');
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
            payment: totalCost,
            credit_card: creditCardNumber,
            customer_ssn_sin: customerSSNInput,
            hotel_id: hotel_id,
            room_number: room.room_number
          }),
        });

        if (response.ok) {
          
          alert("Payment was successful!");
            setEmployeeSSN(-1);
            setCustomerSSN(-1);
            navigate('/');

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
        <p><strong>Hotel ID:</strong> {filters.chainType}</p> 
        <p><strong>Price:</strong> {room.price}</p>
        <p><strong>Capacity:</strong> {filters.roomCapacity}</p>
      </div>
      <div>
        <h2>Total Cost</h2>
        <p>{totalCost !== null ? `$${totalCost}` : 'Calculating...'}</p> 
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
        <div>
          <label htmlFor="customerSSN">Customer SSN:</label>
          <input
            type="text"
            id="customerSSN"
            value={customerSSNInput}
            onChange={(e) => setCustomerSSNInput(e.target.value)}
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default ChoosePayment;
