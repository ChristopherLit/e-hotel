import React, { useEffect, useRef } from 'react';
import 'air-datepicker/air-datepicker.css';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';


const DatePicker = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const currentDate = new Date();
    new AirDatepicker(inputRef.current, {
      locale: localeEn,
      range: true,
      minDate: currentDate,
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