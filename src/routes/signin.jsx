import React, { useState, useEffect } from 'react';

function SignIn() {
  const [showInput, setShowInput] = useState(true);
  const [role, setRole] = useState('');

  const handleButtonClick = (role) => {
    setShowInput(false);
    setRole(role);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const ssn = event.target.ssn.value; // Extract SSN from the form

  //   console.log('Submitted SSN:', ssn);
  //   console.log('Role:', role);

  //   let ssnFinderRoute = '';

  //   if (role === "customer") {
  //     ssnFinderRoute = '/ssnCustomer';
  //   } else {
  //     ssnFinderRoute = '/ssnEmployee';
  //   }

  //   try {
  //     const response = await fetch(ssnFinderRoute, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ ssn }), // Include SSN in the request body
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       console.log("Success");
  //     } else {
  //       console.log("Failed");
  //     }
  //   } catch (error) {
  //     console.error('Error:', "askdjlwdaksdjlkasjldkajslkdjklj");
  //   }
  // };
  useEffect(() => {
    let ssnFinderRoute = '';

    if (role === "customer") {
      ssnFinderRoute = '/ssnCustomer';
    } else {
      ssnFinderRoute = '/ssnEmployee';
    }
    
    fetch(`http://localhost:3000/api/${ssnFinderRoute}`)
      .then(response => response.json())
      .then(data => {
        setHotels(data);
      });
  }, []);

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
