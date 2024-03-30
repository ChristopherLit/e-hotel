import React, { useState } from 'react';

function SignIn() {
  const [showInput, setShowInput] = useState(true);
  const [role, setRole] = useState('');

  const handleButtonClick = (role) => {
    setShowInput(false);
    setRole(role);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('Submitted SSN:', event.target.ssn.value);
    console.log('Role:', role);
  };

  return (
    <div>
      {showInput && (
        <div>
          <button onClick={() => handleButtonClick('customer')}>Customer</button>
          <button onClick={() => handleButtonClick('employee')}>Employee</button>
        </div>
      )}
      {!showInput && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="ssn" placeholder="Enter SSN" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default SignIn;
