import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(user) {
  const [showWarning, setShowWarning] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  async function fetchApi() {
    setLoading(true);
    setError(null);
    try {
      let res = await axios(`https://api.github.com/users/${user}`);
      setData(res.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      console.log(e.response.data.message);
      console.log(e.message);
      if (e.response.status == 403) {
        console.log("error 403 - ", e.message);
        setLoading(false);
        setError(e.response.data.message);
      } else if (e.response.status == 404) {
        setLoading(false);
        setError(e.response.data.message);
        setShowWarning(true);
        console.log("error 404 my");
      }
    }
  }

  useEffect(() => {
    fetchApi(user);
  }, [user]);

  return { data, error, setError, showWarning, setShowWarning, loading, setLoading };
}
