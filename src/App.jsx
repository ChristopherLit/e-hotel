import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Input from './Input/Input';
import ChooseHotel from './routes/choose_hotel';
import SignIn from './routes/signin';
import ChooseRoom from './routes/choose_room';
import ChoosePayment from './routes/choose_payment';
import EmployeeHomepage from './routes/employee_homepage';
import ManageSystem from './routes/manage_system';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/input" element={<Input />} />
          <Route path="/hotels" element={<ChooseHotel />} />
          <Route path="/rooms" element={<ChooseRoom />} />
          <Route path="/payment" element={<ChoosePayment />} />
          <Route path="/employee_homepage" element={<EmployeeHomepage />} />
          <Route path="/manage_system" element={<ManageSystem/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
