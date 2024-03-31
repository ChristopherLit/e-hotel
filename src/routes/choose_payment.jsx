import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ChoosePayment() {
  const location = useLocation();
  const { filters, hotel } = location.state;
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreditCardChange = (event) => {
    const inputCreditCardNumber = event.target.value;
    setCreditCardNumber(inputCreditCardNumber);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();

    if (creditCardNumber.length !== 10) {
      setErrorMessage('Please input a valid 10-digit credit card number.');
    } else {
        setErrorMessage('');
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
