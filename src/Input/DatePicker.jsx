import React, { useEffect, useRef } from 'react';
import 'air-datepicker/air-datepicker.css';
import AirDatepicker from 'air-datepicker';

const DatePicker = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    new AirDatepicker(inputRef.current, {
      range: true,
      multipleDatesSeparator: ' - '
    });
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" id="input" placeholder="Select Date Range" />
    </div>
  );
};

export default DatePicker;
