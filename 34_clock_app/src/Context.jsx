import React, { useState, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();

function Context({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [timeObject, setTimeObject] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState(null);

  async function fetchTime() {
    try {
      // First API request
      const response1 = await axios("https://ipinfo.io/?token=8f8e89d5007bc0");
      const data1 = response1.data;

      // Second API request using data from the first request
      const response2 = await axios(`https://worldtimeapi.org/api/ip/${data1.ip}`);
      const data2 = response2.data;

      let obj = { ...data2, country: data1.country, city: data1.city, lightTheme: setTheme(data2.datetime) };
      // console.log(obj);
      setTimeObject(obj);
      // Do something with the data from the second response
    } catch (error) {
      // Handle any errors that occur during the fetch operations
      console.error("There was a problem with the fetch operation:", error);
      setError(error.message);
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
