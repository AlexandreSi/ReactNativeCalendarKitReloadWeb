import { CalendarBody, CalendarContainer, CalendarHeader } from '@howljs/calendar-kit';
import React from 'react';

const Calendar = () => {
  return (
    <CalendarContainer onLoad={() => console.log("LOADED")}>
      <CalendarHeader />
      <CalendarBody />
    </CalendarContainer>
  );
};

export default Calendar;
