import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = React.createContext();

function Context({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [timeObject, setTimeObject] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState(null);

  async function fetchTime() {
    try {
      // First API request
      const response1 = await axios('https://ipinfo.io/?token=8f8e89d5007bc0');
      const { country, city, ip } = response1.data;

      // Second API request using data from the first request
      const response2 = await axios(`https://worldtimeapi.org/api/ip/${ip}`);
      const data2 = response2.data || Date.now();

      let obj = { ...data2, country, city, lightTheme: setTheme(data2.datetime) };

      setTimeObject(obj);
      // Do something with the data from the second response
    } catch (error) {
      // Handle any errors that occur during the fetch operations
      console.log('There was a problem with the fetch operation:', error);
      setError(error.message);
      let obj = { lightTheme: setTheme(Date.now()) };

      setTimeObject(obj);
    } finally {
      setIsLoading((e) => !e);
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
