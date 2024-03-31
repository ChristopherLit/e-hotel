import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCustomerSSN, setEmployeeSSN } from '../Input/globalSSN';

function SignIn() {
  const [showInput, setShowInput] = useState(true);
  const [role, setRole] = useState('');
  const [ssn, setSsn] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  const handleButtonClick = (role) => {
    setShowInput(false);
    setRole(role);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    let ssnFinderRoute = role === 'customer' ? 'ssncustomer' : 'ssnemployee';
  
    // Send the SSN to the server to check if it exists in the database
    fetch(`http://localhost:3000/api/check/${ssnFinderRoute}/${ssn}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ssn }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.authorized) {
          // Set the SSN based on the role and redirect to the appropriate page
          if (role === 'customer') {
            setCustomerSSN(ssn);
            navigate('/input');
          } else if (role === 'employee') {
            setEmployeeSSN(ssn);
            navigate('/employee_homepage');
          }
          
        } else {
          setErrorMessage('You are not authorized to log in.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
          <input
            type="text"
            name="ssn"
            placeholder="Enter SSN"
            value={ssn}
            onChange={e => setSsn(e.target.value)} // update the SSN state on input change
          />
          <button type="submit">Submit</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}

export default SignIn;
