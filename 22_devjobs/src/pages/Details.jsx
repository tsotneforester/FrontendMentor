import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
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
  --length: 120px;
  position: absolute;
  width: 100%;
  top: var(--length);
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  min-height: calc(100vh - var(--length));
  //border: 2px dotted red;
`;
