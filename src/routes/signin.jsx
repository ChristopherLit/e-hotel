import React, { useState } from 'react';

function SignIn() {
  const [showCustomerInput, setShowCustomerInput] = useState(true);
  const [showEmployeeInput, setShowEmployeeInput] = useState(true);

  const handleCustomerButtonClick = () => {
    setShowCustomerInput(false);
  };

  const handleEmployeeButtonClick = () => {
    setShowEmployeeInput(false);
  };

  return (
    <div>
      {showCustomerInput && (
        <button onClick={handleCustomerButtonClick}>Customer</button>
      )}
      {showEmployeeInput && (
        <button onClick={handleEmployeeButtonClick}>Employee</button>
      )}
      <div>
        {(!showCustomerInput || !showEmployeeInput) && (
          <input type="text" placeholder="Enter SSN" />
        )}
      </div>
    </div>
  );
}

export default SignIn;