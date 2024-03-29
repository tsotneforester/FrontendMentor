import React, { useState } from "react";
import { Header, Search, Loader, Card, APIError } from "./components";
import useFetch from "./components/useFetch";

function Index() {
  const [user, setUser] = useState("octacat");
  const [inputValue, setInputValue] = useState("");
  const { data, error, setError, showWarning, setShowWarning, loading } = useFetch(user);

  function inputHandler(e) {
    setInputValue(e.target.value);
    setShowWarning(false);
    error && setError(" ");
  }

  function submitHandler(e) {
    e.preventDefault();
    if (inputValue) {
      setInputValue("");
      setUser(inputValue);
    }
  }
  return (
    <>
      <Header />
      <Search warning={showWarning} input={inputValue} inputHandler={inputHandler} submitHandler={submitHandler} />

      {loading && <Loader loading={loading} />}
      {!loading && !error && <Card data={data} />}
      {error && <APIError error={error} />}
    </>
  );
}

export default Index;
