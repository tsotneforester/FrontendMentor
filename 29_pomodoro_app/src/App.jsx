import React from "react";
import Title from "./components/Title";
import TimerSwitch from "./components/TimerSwitch";
import SettingsIcon from "./components/SettingsIcon";
import Modal from "./components/Modal";
import Dail from "./components/Dail";

function App() {
  return (
    <>
      <Title /> {/* ✅ */}
      <TimerSwitch /> {/* ✅ */}
      <Dail />
      <SettingsIcon /> {/* ✅ */}
      <Modal />
    </>
  );
}

export default App;
