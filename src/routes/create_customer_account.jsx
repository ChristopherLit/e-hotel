import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCustomerAccount() {
  const navigate = useNavigate();

  const [customerSSNInput, setCustomerSSNInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const createAccount = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/create/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_ssn_sin: customerSSNInput,
          first_name: firstName,
          last_name: lastName,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Customer account created successfully.");
        navigate("/");
      } else {
        setErrorMessage(data.message || "Failed to create account");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="customerSSN">Customer SSN:</label>
        <input
          type="text"
          id="customerSSN"
          value={customerSSNInput}
          onChange={(e) => setCustomerSSNInput(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button type="button" onClick={createAccount}>
        Create Account
      </button>
    </div>
  );
}

export default CreateCustomerAccount;
