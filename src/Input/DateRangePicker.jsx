import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({ onSelect }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleConfirmDates = () => {
    if (startDate && endDate) {
      const startDateFormat = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;
      const endDateFormat = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`;
      const dateRangeString = `${startDateFormat} - ${endDateFormat}`;
      onSelect(dateRangeString);
    }
  };
  

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
      />
      <button onClick={handleConfirmDates}>Confirm Dates</button>
    </div>
  );
};

export default DateRangePicker;
