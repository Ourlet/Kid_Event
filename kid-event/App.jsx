import React, { useEffect } from 'react';
import Events from './components/Events';
import Dates from './components/Dates';
import Weather from './components/Weather';
import Navigation from './components/Navigation';
import Newsletter_form from './components/Newsletter_form';
// import Email_sender from './components/Email_sender';
import Email_form from './components/Email_form';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const handleScheduleEmail = async () => {
  try {
    if (typeof window !== 'undefined') {
      console.log("Calling API to schedule email...");
      const response = await fetch("/api/scheduleEmail", {
        method: "POST",
      });

      if (response.ok) {
        console.log("Email scheduled successfully!");
      } else {
        console.error("Failed to schedule email.");
      }
    }
  } catch (error) {
    console.error("Error scheduling email:", error);
  }
};

export default function App() {
  return (
    <main>
      <Navigation/>
      <h1>Kid Events</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Dates />
      </LocalizationProvider> 
      <Weather/>
      <Newsletter_form />
      <Email_form />
      {/*<Favorites/> */}
      {/* <Email_sender/> */}
      <Events />
      {/*<Modal/> */}
      {/*<Search/> */}
    </main>
  );
}