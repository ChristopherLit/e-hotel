let customerSSN = -1; 
let employeeSSN = -1;

function getCustomerSSN() {
  return customerSSN;
}

function setCustomerSSN(ssn) {
  customerSSN = ssn;
}

function getEmployeeSSN() {
  return employeeSSN;
}

function setEmployeeSSN(ssn) {
  employeeSSN = ssn;
}

export {
  getCustomerSSN,
  setCustomerSSN,
  getEmployeeSSN,
  setEmployeeSSN
};
