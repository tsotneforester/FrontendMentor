import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink, useParams } from "react-router-dom";
import data from "../assets/data.json";
import styled, { css } from "styled-components";
import { device, root } from "../theme";
import Footer from "../components/details/Footer";
import Info from "../components/details/Info";
import Header from "../components/details/Header";

function Details() {
  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Content>
      <Header id={id} />
      <Info id={id} />
      <Footer id={id} />
    </S.Content>
  );
}

export default Details;

const S = {};

S.Content = styled.div`
  position: absolute;
  width: 100%;
  top: 120px;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  //border: 2px dotted red;
`;
