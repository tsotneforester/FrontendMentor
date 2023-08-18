import { useState, useRef } from "react";
import { lightTheme, darkTheme, GlobalStyles, ThemeToggler, root, device } from "./theme";
import styled, { ThemeProvider } from "styled-components";
import data from "./assets/data.json";
import Card from "./components/Card";
import Details from "./pages/Details";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

//imrse
//rafce
//imrr

function App() {
  const refContainer = useRef(null);

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState({
    position: "",
    company: "",
    location: "",
    contract: "",
  });
  const [location, setlocation] = useState("new");

  // var filter = {
  //   position: "",
  //   company: "",
  // };

  // var filter1 = {
  //   location: "",
  //   contract: "full time",
  // };

  function handler(e) {
    e.preventDefault();
    // setFilter({
    //   position: refContainer.current[0].value,
    //   company: refContainer.current[0].value,
    //   location: refContainer.current[1].value,
    //   contract: refContainer.current[2].checked ? "full time" : "",
    // });
    console.log(filter);

    let zorg = data.filter((itm) => {
      return itm.position.toLowerCase().indexOf(filter.position) > -1 || itm.company.toLowerCase().indexOf(filter.company) > -1;
    });

    let zorg1 = zorg.filter((itm) => {
      return itm.location.toLowerCase().indexOf(filter.location) > -1 && itm.contract.toLowerCase().indexOf(filter.contract) > -1;
    });

    setFilteredData(zorg1);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeToggler handler={() => setIsDarkTheme(!isDarkTheme)} theme={isDarkTheme} />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <form action="" onSubmit={handler} ref={refContainer}>
                  <input
                    type="text"
                    onMouseLeave={(e) => {
                      setFilter({ ...filter, position: e.target.value, company: e.target.value });
                      console.log("object");
                    }}
                  />
                  <input
                    type="text"
                    onMouseLeave={(e) => {
                      setFilter({ ...filter, location: e.target.value });
                    }}
                  />
                  <input
                    type="checkbox"
                    onMouseLeave={(e) => {
                      setFilter({ ...filter, contract: e.target.checked ? "full time" : "" });
                      console.log("object");
                    }}
                  />
                  <button>Search</button>
                </form>
                <Card data={filteredData} />
              </>
            }
          />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </Router>
      {/* 
      <form action="" onSubmit={handler}>
        <input type="text" />
        <button>Serch</button>
      </form>

      <Card data={filteredData} /> */}
    </ThemeProvider>
  );
}

export default App;
