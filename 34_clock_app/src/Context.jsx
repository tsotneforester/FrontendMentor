import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = React.createContext();
import moment from 'moment';

function Context({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [timeObject, setTimeObject] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState(null);

  async function fetchTime() {
    try {
      // First API request
      const response1 = await axios('https://ipinfo.io/?token=8f8e89d5007bc0');
      const { country, city, ip, timezone } = response1.data;

      // Second API request using IP address from the first request
      const response2 = await axios(`https://api.ipapi.is/?q=${ip}`);
      const data2 = response2.data;

      let timeString = data2.location.local_time;
      const dayOfWeek = moment().day();
      const dayOfYear = moment().dayOfYear();
      const weekNumber = moment().week();

      let obj = { country, city, timezone, dayOfWeek, dayOfYear, weekNumber, lightTheme: setTheme(timeString), timeString };
      setTimeObject(obj);
      // Do something with the data from the second response
    } catch (error) {
      // Handle any errors that occur during the fetch operations

      setError(error.message);

      let timeString = new Date().toString();
      const dayOfWeek = moment().day();
      const dayOfYear = moment().dayOfYear();
      const weekNumber = moment().week();

      let obj = { lightTheme: setTheme(timeString), timeString, dayOfWeek, dayOfYear, weekNumber };

      setTimeObject(obj);
    } finally {
      setIsLoading(e => !e);
    }
  }

  function setTheme(dateStr) {
    let hour = new Date(dateStr).getHours();
    return hour >= 5 && hour < 18;
  }

  useEffect(() => {
    fetchTime();
  }, []);

  return <AppContext.Provider value={{ isLoading, error, timeObject, showMore, setShowMore }}>{children}</AppContext.Provider>;
}

export { Context, AppContext };
