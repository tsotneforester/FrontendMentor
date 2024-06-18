import React, { useState, useEffect } from "react";
const AppContext = React.createContext();
import axios from "axios";

function Context({ children }) {
  const [data, setData] = useState([]);
  const [maxAmount, setMaxAmount] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchAPI() {
    try {
      const res = await axios("/data.json", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      let tempData = res.data;

      const highestAmountObject = tempData.reduce((max, obj) => {
        return obj.amount > max.amount ? obj : max;
      }, tempData[0]);

      setData(res.data);
      setMaxAmount(highestAmountObject.amount);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      // setLoading(false);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return <AppContext.Provider value={{ data, setData, maxAmount, setMaxAmount, loading, setLoading }}>{children}</AppContext.Provider>;
}

export { Context, AppContext };
