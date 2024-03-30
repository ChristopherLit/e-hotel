import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Input from './Input/Input';
import ChooseHotel from './routes/choose_hotel';
import SignIn from './routes/signin';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Input />} />
          <Route path="/hotels" element={<ChooseHotel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
