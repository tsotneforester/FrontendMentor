import React from "react";
import { useContext, useState, useEffect } from "react";

import Wrapper from "./components/Wrapper";
import Greeting from "./components/Greeting";
import Time from "./components/Time";
import Details from "./components/Details";
import Main from "./components/Main";

import { AppContext } from "./Context";

function App() {
  const { showMore, setShowMore } = useContext(AppContext);
  return (
    <Wrapper>
      <Main />
      <Details />
    </Wrapper>
  );
}

export default App;
