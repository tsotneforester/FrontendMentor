import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { root, device } from "./theme";
import ThemeToggler from "./components/ThemeToggler";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ListItem from "./components/ListItem";
import { useSpring, animated } from "@react-spring/web";

//imrse
//rafce
//imrr

let rawData = [
  {
    id: "b4plagLfhXtBl3_050-Jl",
    task: "1. complete javascript course",
    status: "completed",
  },
  {
    id: "unK7dnHjg2ftzjGrUf5gx",
    task: "2. complete javascript course",
    status: "active",
  },
  {
    id: "gRZ7cHKi9ewYJAmX_CLAM",
    task: "3. complete javascript course",
    status: "active",
  },
];

function App() {
  let [data, setData] = useState(rawData);
  let [filteredData, setFilteredData] = useState(data);
  let [filterKey, setFilterKey] = useState("all");

  useEffect(() => {
    if (filterKey == "active") {
      let activeItems = data.filter((item) => item.status == "active");
      setFilteredData(activeItems);
    } else if (filterKey == "completed") {
      let completedItems = data.filter((item) => item.status != "active");
      setFilteredData(completedItems);
    } else {
      setFilteredData(data);
    }
  }, [data]);

  return (
    <>
      <Banner />
      <S.Container>
        <Header />
        <Form data={data} dataSetter={setData} />

        <ListItem data={data} tempData={filteredData} dataSetter={setData} />
        <Filter data={data} dataSetter={setData} clearSetter={setData} filterSetter={setFilteredData} filterKey={filterKey} setFilterKey={setFilterKey} />
      </S.Container>
    </>
  );
}

export default App;

const S = {};

S.Container = styled.main`
  max-width: ${root.maxWidth};
  overflow: hidden;
`;
