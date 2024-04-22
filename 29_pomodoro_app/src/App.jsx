import React from "react";
import { root } from "./styled";
import styled from "styled-components";
import { useContext, useState } from "react";
import Title from "./components/Title";
import Timers from "./components/Timers";
import Settings from "./components/Settings";
import Modal from "./components/Modal";
import Dail from "./components/Dail";
// import { root } from "./styled";

//imrse
//rafce

//rfc
//imrr

function App() {
  return (
    <>
      <Title />
      <Timers />
      <Dail />
      <Settings />
      <Modal />
      {/* 
      <Times />
      <Timer />
      <Settings /> */}
    </>
  );
}

export default App;
